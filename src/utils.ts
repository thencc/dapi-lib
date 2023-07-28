import { ParamsTuple, ValidUrl, AccessTokenParams, PeelsCreateParams, PeelsListParams, PeelsMintParams, PeelsGrantParams, PeelsFundUserParams, PeelsGrantTokensParams, UserRegisterParams, UserDeregisterParams, UserOptIntoAppParams, UserOptIntoTokenParams, PeelsListMineParams, PeelsGetParams, ListAccountsParams, TTMSendParams, TTMReceiveParams } from "./model";
import { NCCdAPIs } from "./setup";

/** Type validation functions */
export function validateParams(endpoint: string, params: any): ParamsTuple {
    let validatedParams: ParamsTuple = {
        valid: false,
        params: null
    };

    switch (endpoint as ValidUrl) {
        case '/get-access-token':
            validatedParams.valid = true;
            validatedParams.params = params as AccessTokenParams;
            break;
        case '/peels/create':
            validatedParams.valid = true;
            validatedParams.params = params as PeelsCreateParams;
            break;
        case '/peels/list':
            validatedParams.valid = true;
            validatedParams.params = params as PeelsListParams;
            break;
        case '/peels/list-all':
            validatedParams.valid = Object.keys(params).length == 0;
            validatedParams.params = params;
            break;
        case '/peels/list-mine':
            validatedParams.valid = true;
            validatedParams.params = params as PeelsListMineParams;
            break;
        case '/peels/get':
            validatedParams.valid = true;
            validatedParams.params = params as PeelsGetParams;
            break;
        case '/peels/mint':
            validatedParams.valid = true; // actually add param validation here
            validatedParams.params = params as PeelsMintParams;
            break;
        case '/peels/grant':
            validatedParams.valid = true;
            validatedParams.params = params as PeelsGrantParams;
        case '/peels/fund-user':
            validatedParams.valid = true;
            validatedParams.params = params as PeelsFundUserParams;
        case '/peels/grant-tokens':
            validatedParams.valid = true;
            validatedParams.params = params as PeelsGrantTokensParams;
        case '/user/register':
            validatedParams.valid = true;
            validatedParams.params = params as UserRegisterParams;
        case '/user/deregister':
            validatedParams.valid = true;
            validatedParams.params = params as UserDeregisterParams;
        case '/user/opt-into-app':
            validatedParams.valid = true;
            validatedParams.params = params as UserOptIntoAppParams;
        case '/user/opt-into-token':
            validatedParams.valid = true;
            validatedParams.params = params as UserOptIntoTokenParams;
        case '/list-accounts':
            validatedParams.valid = true;
            validatedParams.params = params as ListAccountsParams;
        case '/ttm/send':
            validatedParams.valid = true;
            validatedParams.params = params as TTMSendParams;
        case '/ttm/receive':
            validatedParams.valid = true;
            validatedParams.params = params as TTMReceiveParams;
        default:
            break;
    }
    console.log(validatedParams);
    return validatedParams;
}

/**
 * Util functions
 */

export async function postRequest(endpoint: string, params: any) {
    try {
        const validParams = validateParams(endpoint, params);
        const errorMessage = `Invalid params ${JSON.stringify(
            params
        )} for endpoint ${endpoint}`;
        if (!validParams.valid || validParams.params == null)
            throw new Error(errorMessage);
        console.log(
            `This is the type of params: ${validParams.params.constructor.name}`
        );
        if (endpoint[0] == '/') endpoint = endpoint.slice(1);
        const response = (await NCCdAPIs.call(
            endpoint,
            validParams.params
            // })) as any as NCCApiResponse;
        )) as any;
        console.log(`This is response of the call: ${response}`);
        return response;
    } catch (e: any) {
        console.error('TODO properly surface this error: ', e);
    }
}

export function sanityCheck(apiEndpoint: string, data: any) {
    console.log('sanity check');
    if (!data.accessToken) {
        console.warn('YOU HAVE NO API KEY!  Just sayin');
    }

    if (!apiEndpoint) {
        throw new Error('you must provide an api endpoint!');
    }
}