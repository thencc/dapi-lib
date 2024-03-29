import { Algonaut } from '@thencc/algonautjs';
import { AccessTokenParams } from './model';
import { NCC_TOKEN_AUTH_APP_INDEX, NCC_TOKEN_INDEX } from './constants';

export async function promptAccessToken(algonaut: Algonaut): Promise<AccessTokenParams> {
    // Function to simplify endUser calls, response of this is part of the params in dAPI /get-access-token
    console.log('getting access token');
    let params: AccessTokenParams = {
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
        console.log(`NCC TOKEN AUTH APP INDEX is ${NCC_TOKEN_AUTH_APP_INDEX}`);
        console.log(`NCC TOKEN INDEX is ${NCC_TOKEN_INDEX}`);

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

    } catch (e: any) {
        console.error('there was an error: ', e);
        return params;
    }
}

/** RODEO */
export const rodeo = {
    org: {
        amIAdmin: async (algonaut: Algonaut, appId: number): Promise<any> => {
            try {
                let isAdmin = await algonaut.callApp({
                    appIndex: appId,
                    appArgs: ['am_i_admin']
                })
                console.log(`is admin: ${JSON.stringify(isAdmin)}`);
                return {
                    amIAdmin: isAdmin
                }
            } catch (er) {
                console.log('there was an error ', er);
                return {
                    amIAdmin: false
                }
            }
        }
    }
}