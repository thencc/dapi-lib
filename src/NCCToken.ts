import Algonaut, { signTransactions, utils } from "@thencc/algonautjs"
import { NCC_TOKEN_INDEX, NCC_TOKEN_AUTH_APP_INDEX, NCC_SLA_INDEX, USDC_TOKEN_INDEX } from "./constants";
import { NCCdAPIs } from "./NCCdAPIs";
import { DapiResponse } from "./types";

export type TokenResponse = {
    status: string;
    message: string;
    error: string;
    txDetail: {
        status: string;
        message: string;
        txId: string;
    }
};

export type AccessTokenResponse = {
    status: string;
    message: string;
    data: {
        token: string;
        expires: number;
        validFor: number;
    },
    error: string;
    confirmedInRound: {
        status: string;
        message: string;
        txId: string;
    },
    dbUUID: string;
};
class NCCToken {
    private static instance: NCCToken | null;

    private address: string = '';
    private algonaut: Algonaut | null = null;
    public nccTokenBal: number = -1; // -1 if not opted into NCC token

    private constructor() { }

    public static destroy() {
        if (NCCToken.instance) {
            NCCToken.instance = null;
        }
    }

    public static async getInstance(algonaut: Algonaut): Promise<NCCToken> {
        if (!NCCToken.instance) {
            NCCToken.instance = new NCCToken();
        }

        NCCToken.instance.algonaut = algonaut;
        NCCToken.instance.address = algonaut.address;
        // if (algonaut.address) {
        //     // check if opted into nccToken
        //     const optedNCC = await algonaut.isOptedIntoAsset({
        //         account: algonaut.address,
        //         assetId: NCC_TOKEN_INDEX
        //     });
        //     if (optedNCC) {
        //         const nccBal = await algonaut.getTokenBalance(
        //             algonaut.address,
        //             NCC_TOKEN_INDEX
        //         );
        //         NCCToken.instance.nccTokenBal = nccBal;
        //     }

        // }
        return NCCToken.instance;
    }

    public async getNCCBalance() {
        if (!this.algonaut) throw new Error('Invalid algonaut');
        return await this.algonaut.getTokenBalance(
            this.algonaut.address,
            NCC_TOKEN_INDEX
        );
    }

    public async isOptedNCC() {
        if (!this.algonaut) throw new Error('Invalid algonaut');
        return await this.algonaut.isOptedIntoAsset({
            account: this.algonaut.address,
            assetId: NCC_TOKEN_INDEX
        });
    }

    public async getAccessToken() {
        let result = {
            accessToken: '',
            tokenExpires: -1,
            error: 'none'
        }

        try {
            if (!this.algonaut) throw new Error('Invalid algonaut');
            const tx = await this.algonaut.atomicCallApp({
                appIndex: NCC_TOKEN_AUTH_APP_INDEX,
                appArgs: ['get_token'],
                optionalFields: {
                    assets: [NCC_TOKEN_INDEX]
                }
            });

            const txId = tx.transaction.txID().toString();
            console.log('trying to sign this tx: ', tx);

            if (!this.algonaut.AnyWalletState.activeWallet) throw new Error('No valid active wallet');

            const txnArr = tx.transaction.toByte();

            if (!this.algonaut.AnyWalletState.enabledWallets?.inkey) throw new Error('No valid inkey wallet');

            const signedTxns = await signTransactions([txnArr]);
            console.log(signedTxns);

            const b64encoded = utils.txnBuffToB64(signedTxns[0]);

            const response = await NCCdAPIs.call('get-access-token', {
                address: this.address,
                txId: txId,
                signedTx: b64encoded
            }) as AccessTokenResponse;

            console.log('got response!');
            console.log(response);

            if (!response) throw new Error('No access token response!');
            result.accessToken = response!.data.token;
            result.tokenExpires = response!.data.expires;

            return {
                status: 200,
                message: "Got access token",
                error: null,
                result
            }
        } catch (error: any) {
            console.log('there was an error ', error);
            return {
                status: 500,
                message: "Error getting access token",
                error,
                result: null
            }
        }
    }

    public async refreshNCCBal() {
        try {
            if (!this.algonaut) throw new Error('Invalid algonaut');
            const nccBal = await this.algonaut.getTokenBalance(
                this.address,
                NCC_TOKEN_INDEX
            );
            this.nccTokenBal = nccBal;
        } catch (err: any) {
            console.error('unable to refresh NCC balance: ', err);
        }
    }

    public async getNCCs() {
        const response = await NCCdAPIs.call('get-nccs', {
            address: this.address
        });
        return response as TokenResponse;
    }

    public async createUserContract(uuid: string) {
        try {
            if (!this.algonaut) throw new Error('Invalid algonaut');
            const isOpted = await this.isOptedNCC();
            if (isOpted) {
                return {
                    status: 200,
                    message: "Address already opted into NCCs",
                    error: null,
                    result: {
                        address: this.algonaut.address,
                        isOpted
                    }
                } as DapiResponse;
            }

            const slaResult = await this.algonaut.sendTransaction([
                await this.algonaut.atomicOptInApp({
                    appIndex: NCC_SLA_INDEX,
                    appArgs: [uuid]
                }),
                await this.algonaut.atomicOptInAsset(NCC_TOKEN_INDEX),
                await this.algonaut.atomicOptInAsset(USDC_TOKEN_INDEX)
            ]);

            console.log(slaResult);
            const response = await this.getNCCs();

            console.log(response);
            return {
                status: 200,
                message: "Created SLA contract for address",
                error: null,
                result: {
                    address: this.algonaut.address,
                    slaResult,
                    nccDropResult: response.txDetail
                }
            } as DapiResponse;
        } catch (err: any) {
            console.error('error in creating user contract: ', err);
            return null;
        }
    }
}

export default NCCToken;