import { NCCdAPIs } from "./setup";
/** Type validation functions */
export function validateParams(endpoint, params) {
    let validatedParams = {
        valid: false,
        params: null
    };
    switch (endpoint) {
        case '/get-access-token':
            validatedParams.valid = true;
            validatedParams.params = params;
            break;
        case '/peels/create':
            validatedParams.valid = true;
            validatedParams.params = params;
            break;
        case '/peels/list':
            validatedParams.valid = true;
            validatedParams.params = params;
            break;
        case '/peels/list-all':
            validatedParams.valid = Object.keys(params).length == 0;
            validatedParams.params = params;
            break;
        case '/peels/list-mine':
            validatedParams.valid = true;
            validatedParams.params = params;
            break;
        case '/peels/get':
            validatedParams.valid = true;
            validatedParams.params = params;
            break;
        case '/peels/mint':
            validatedParams.valid = true; // actually add param validation here
            validatedParams.params = params;
            break;
        case '/peels/grant':
            validatedParams.valid = true;
            validatedParams.params = params;
        case '/peels/fund-user':
            validatedParams.valid = true;
            validatedParams.params = params;
        case '/peels/grant-tokens':
            validatedParams.valid = true;
            validatedParams.params = params;
        case '/user/register':
            validatedParams.valid = true;
            validatedParams.params = params;
        case '/user/deregister':
            validatedParams.valid = true;
            validatedParams.params = params;
        case '/user/opt-into-app':
            validatedParams.valid = true;
            validatedParams.params = params;
        case '/user/opt-into-token':
            validatedParams.valid = true;
            validatedParams.params = params;
        case '/list-accounts':
            validatedParams.valid = true;
            validatedParams.params = params;
        case '/ttm/send':
            validatedParams.valid = true;
            validatedParams.params = params;
        case '/ttm/receive':
            validatedParams.valid = true;
            validatedParams.params = params;
        default:
            break;
    }
    console.log(validatedParams);
    return validatedParams;
}
/**
 * Util functions
 */
export async function postRequest(endpoint, params) {
    try {
        const validParams = validateParams(endpoint, params);
        const errorMessage = `Invalid params ${JSON.stringify(params)} for endpoint ${endpoint}`;
        if (!validParams.valid || validParams.params == null)
            throw new Error(errorMessage);
        console.log(`This is the type of params: ${validParams.params.constructor.name}`);
        if (endpoint[0] == '/')
            endpoint = endpoint.slice(1);
        const response = (await NCCdAPIs.call(endpoint, validParams.params
        // })) as any as NCCApiResponse;
        ));
        console.log(`This is response of the call: ${JSON.stringify(response)}`);
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