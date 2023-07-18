var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { NCC_TOKEN_AUTH_APP_INDEX, NCC_TOKEN_INDEX } from './setup';
export function promptAccessToken(algonaut) {
    return __awaiter(this, void 0, void 0, function* () {
        // Function to simplify endUser calls, response of this is part of the params in dAPI /get-access-token
        console.log('getting access token');
        let params = {
            address: '',
            txId: '',
            signedTx: ''
        };
        if (!algonaut.account) {
            alert('please sign in');
            return params;
        }
        try {
            console.log('CURRENT ALGONAUT ADDRESS: ', algonaut.account.address);
            const tx = yield algonaut.atomicCallApp({
                appIndex: NCC_TOKEN_AUTH_APP_INDEX,
                appArgs: ['get_token'],
                optionalFields: {
                    assets: [NCC_TOKEN_INDEX]
                }
            });
            const txId = tx.transaction.txID().toString();
            console.log('trying to sign');
            const signedTx = yield algonaut.signTransaction([tx]);
            const b64encoded = algonaut.txnBuffToB64(signedTx[0]);
            console.log(b64encoded);
            params.address = algonaut.account.address;
            params.txId = txId;
            params.signedTx = b64encoded;
            return params;
        }
        catch (e) {
            console.error('there was an error: ', e);
            return params;
        }
    });
}
