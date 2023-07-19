import { NCC_TOKEN_AUTH_APP_INDEX, NCC_TOKEN_INDEX } from './setup';
export async function promptAccessToken(algonaut) {
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
        const tx = await algonaut.atomicCallApp({
            appIndex: NCC_TOKEN_AUTH_APP_INDEX,
            appArgs: ['get_token'],
            optionalFields: {
                assets: [NCC_TOKEN_INDEX]
            }
        });
        const txId = tx.transaction.txID().toString();
        console.log('trying to sign');
        const signedTx = await algonaut.signTransaction([tx]);
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
}
