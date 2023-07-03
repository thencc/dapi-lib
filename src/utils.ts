import { ParamsTuple, ValidUrl, AccessTokenParams, CreateMilestoneParams, PeelsCreateParams, PeelsListParams, PeelsMintParams, PeelsGrantParams, PeelsFundUserParams, PeelsGrantTokensParams, UserRegisterParams, UserDeregisterParams, UserOptIntoAppParams, UserOptIntoTokenParams, PeelsListMineParams, PeelsGetParams } from "./model";

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
        case '/rodeo/milestone/create':
            validatedParams.valid = true;
            validatedParams.params = params as CreateMilestoneParams;
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
        default:
            break;
    }
    console.log(validatedParams);
    return validatedParams;
}