import { signTransactions, utils } from "@thencc/algonautjs";
import { NCC_TOKEN_INDEX, NCC_TOKEN_AUTH_APP_INDEX, NCC_SLA_INDEX, USDC_TOKEN_INDEX } from "./constants";
import { NCCdAPIs } from "./NCCdAPIs";
class NCCToken {
    constructor() {
        this.address = '';
        this.algonaut = null;
        this.nccTokenBal = -1; // -1 if not opted into NCC token
    }
    static destroy() {
        if (NCCToken.instance) {
            NCCToken.instance = null;
        }
    }
    static async getInstance(address, algonaut) {
        if (!NCCToken.instance) {
            NCCToken.instance = new NCCToken();
        }
        NCCToken.instance.algonaut = algonaut;
        NCCToken.instance.address = address;
        // check if opted into nccToken
        const optedNCC = await algonaut.isOptedIntoAsset({
            account: address,
            assetId: NCC_TOKEN_INDEX
        });
        if (optedNCC) {
            const nccBal = await algonaut.getTokenBalance(address, NCC_TOKEN_INDEX);
            NCCToken.instance.nccTokenBal = nccBal;
        }
        return NCCToken.instance;
    }
    async getAccessToken() {
        var _a;
        let result = {
            accessToken: '',
            tokenExpires: -1,
            error: 'none'
        };
        try {
            if (!this.algonaut)
                throw new Error('Invalid algonaut');
            const tx = await this.algonaut.atomicCallApp({
                appIndex: NCC_TOKEN_AUTH_APP_INDEX,
                appArgs: ['get_token'],
                optionalFields: {
                    assets: [NCC_TOKEN_INDEX]
                }
            });
            const txId = tx.transaction.txID().toString();
            console.log('trying to sign this tx: ', tx);
            if (!this.algonaut.AnyWalletState.activeWallet)
                throw new Error('No valid active wallet');
            const txnArr = tx.transaction.toByte();
            if (!((_a = this.algonaut.AnyWalletState.enabledWallets) === null || _a === void 0 ? void 0 : _a.inkey))
                throw new Error('No valid inkey wallet');
            const signedTxns = await signTransactions([txnArr]);
            console.log(signedTxns);
            const b64encoded = utils.txnBuffToB64(signedTxns[0]);
            const response = await NCCdAPIs.call('get-access-token', {
                address: this.address,
                txId: txId,
                signedTx: b64encoded
            });
            console.log('got response!');
            console.log(response);
            if (!response)
                throw new Error('No access token response!');
            result.accessToken = response.data.token;
            result.tokenExpires = response.data.expires;
        }
        catch (er) {
            console.log('there was an error ', er);
            if (typeof er == 'string') {
                result.error = er;
            }
            else if (typeof er == 'object') {
                result.error = er.message;
            }
        }
        return result;
    }
    async refreshNCCBal() {
        try {
            if (!this.algonaut)
                throw new Error('Invalid algonaut');
            const nccBal = await this.algonaut.getTokenBalance(this.address, NCC_TOKEN_INDEX);
            this.nccTokenBal = nccBal;
        }
        catch (err) {
            console.error('unable to refresh NCC balance: ', err);
        }
    }
    async getNCCs() {
        const response = await NCCdAPIs.call('get-nccs', {
            address: this.address
        });
        return response;
    }
    async createUserContract(uuid) {
        try {
            if (!this.algonaut)
                throw new Error('Invalid algonaut');
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
            return response;
        }
        catch (err) {
            console.error('error in creating user contract: ', err);
            return null;
        }
    }
}
export default NCCToken;
//# sourceMappingURL=NCCToken.js.map