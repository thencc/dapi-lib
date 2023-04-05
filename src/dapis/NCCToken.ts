import Algonaut from "@thencc/algonautjs"
import { NCC_TOKEN_INDEX, NCC_TOKEN_AUTH_APP_INDEX, NCC_SLA_INDEX, USDC_TOKEN_INDEX } from "../constants";
import { NCCApiResponse } from "../types";
import { NCCdAPIs } from "./NCCdAPIs";

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
        return NCCToken.instance;
    }

    // TODO: add the following as APIs

    public async getNCCBalance() {
        if (!this.algonaut) throw new Error('Invalid algonaut');
        if (!this.algonaut.account) throw new Error('No user logged in');
        return await this.algonaut.getTokenBalance(
            this.algonaut.account.address,
            NCC_TOKEN_INDEX
        );
    }

    public async isOptedNCC() {
        if (!this.algonaut) throw new Error('Invalid algonaut');
        if (!this.algonaut.account) throw new Error('No user logged in');
        return await this.algonaut.isOptedIntoAsset({
            account: this.algonaut.account.address,
            assetId: NCC_TOKEN_INDEX
        });
    }

    public async getAccessToken() {

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

            if (!this.algonaut.walletState.activeWallet) throw new Error('No valid active wallet');

            const txnArr = tx.transaction.toByte();

            if (!this.algonaut.walletState.enabledWallets?.inkey) throw new Error('No valid inkey wallet');

            console.log('hello this is me: ', this.algonaut);
            const signedTxns = await this.algonaut.walletState.enabledWallets.inkey.signTransactions([txnArr]);
            console.log(signedTxns);

            const b64encoded = this.algonaut.txnBuffToB64(signedTxns[0]);

            const response = await NCCdAPIs.call('get-access-token', {
                address: this.address,
                txId: txId,
                signedTx: b64encoded
            }) as NCCApiResponse;

            console.log('got response!');
            console.log(response);

            if (!response) throw new Error('No access token response!');
            return response;
        } catch (error: any) {
            console.log('there was an error ', error);
            return {
                status: 'fail',
                message: "Error getting access token",
                error,
                result: null
            } as NCCApiResponse;
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
        return response as NCCApiResponse;
    }

    public async createUserSLA(uuid: string) {
        try {
            if (!this.algonaut) throw new Error('Invalid algonaut');
            if (!this.algonaut.account) throw new Error('No user logged in');
            const isOpted = await this.isOptedNCC();
            if (isOpted) {
                return {
                    status: 'success',
                    message: "Address already opted into NCCs",
                    error: null,
                    result: {
                        address: this.algonaut.account.address,
                        isOpted
                    }
                } as NCCApiResponse;
            }

            const slaResult = await this.algonaut.sendTransaction([
                await this.algonaut.atomicOptInApp({
                    appIndex: NCC_SLA_INDEX,
                    appArgs: [uuid]
                }),
                await this.algonaut.atomicOptInAsset(NCC_TOKEN_INDEX),
                await this.algonaut.atomicOptInAsset(USDC_TOKEN_INDEX)
            ]);
            if (slaResult.error) throw slaResult.error;
            if (slaResult.status == 'fail') throw new Error('Failed to opt-in to NCC SLA app');

            console.log(slaResult);
            const response = await this.getNCCs();
            if (response.error) throw response.error;
            if (response.status == 'fail') throw new Error('Failed to get NCCs for user SLA');

            console.log(response);
            return {
                status: 'success',
                message: "Created SLA contract for address",
                error: null,
                result: {
                    address: this.algonaut.account.address,
                    slaResult,
                    nccDropResult: response.result
                }
            } as NCCApiResponse;
        } catch (error: any) {
            console.error('error in creating SLA contract: ', error);
            return {
                status: 'fail',
                message: 'Error in creating SLA contract',
                error,
                result: null
            } as NCCApiResponse
        }
    }
}

export default NCCToken;