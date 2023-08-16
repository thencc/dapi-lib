import { NCCdAPIs } from "./setup";
/**
 * Util functions
 */
export async function postRequest(endpoint, params) {
    try {
        if (endpoint[0] == '/')
            endpoint = endpoint.slice(1);
        const response = (await NCCdAPIs.call(endpoint, params
        // })) as any as NCCApiResponse;
        ));
        console.log(`This is response of the call: ${response}`);
        return response;
    }
    catch (e) {
        console.error('TODO properly surface this error: ', e);
    }
}
export function sanityCheck(apiEndpoint, data) {
    console.log('sanity check');
    if (!data.accessToken) {
        console.warn('YOU HAVE NO API KEY!  Just sayin');
    }
    if (!apiEndpoint) {
        throw new Error('you must provide an api endpoint!');
    }
}
