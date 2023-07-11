import { paths } from './schema.js';

export type CreateMilestoneParams = paths["/rodeo/milestone/create"]["post"]["requestBody"]["content"]["application/json"];

/** Token */
export type AccessTokenParams = paths["/get-access-token"]["post"]["requestBody"]["content"]["application/json"];
export type AccessTokenSuccessResponse = paths["/get-access-token"]["post"]["responses"]["200"]["content"]["application/json"];

/** Peels */
export type PeelsCreateParams = paths["/peels/create"]["post"]["requestBody"]["content"]["application/json"];
export type PeelsFundUserParams = paths["/peels/fund-user"]["post"]["requestBody"]["content"]["application/json"];
export type PeelsGrantParams = paths["/peels/grant"]["post"]["requestBody"]["content"]["application/json"];
export type PeelsListParams = paths["/peels/list"]["post"]["requestBody"]["content"]["application/json"];
export type PeelsMintParams = paths["/peels/mint"]["post"]["requestBody"]["content"]["application/json"];
export type PeelsGrantTokensParams = paths["/peels/grant-tokens"]["post"]["requestBody"]["content"]["application/json"];
export type PeelsGetParams = paths["/peels/get"]["post"]["requestBody"]["content"]["application/json"];
export type PeelsListMineParams = paths["/peels/list-mine"]["post"]["requestBody"]["content"]["application/json"];

export type PeelsCreateSuccessResponse = paths["/peels/create"]["post"]["responses"]["200"]["content"]["application/json"];
export type PeelsFundUserSuccessResponse = paths["/peels/fund-user"]["post"]["responses"]["200"]["content"]["application/json"];
export type PeelsGrantSuccessResponse = paths["/peels/grant"]["post"]["responses"]["200"]["content"]["application/json"];
export type PeelsListSuccessResponse = paths["/peels/list"]["post"]["responses"]["200"]["content"]["application/json"];
export type PeelsMintSuccessResponse = paths["/peels/mint"]["post"]["responses"]["200"]["content"]["application/json"];
export type PeelsGrantTokensSuccessResponse = paths["/peels/grant-tokens"]["post"]["responses"]["200"]["content"]["application/json"];
export type PeelsGetSuccessResponse = paths["/peels/get"]["post"]["responses"]["200"]["content"]["application/json"];
export type PeelsListMineSuccessResponse = paths["/peels/list-mine"]["post"]["responses"]["200"]["content"]["application/json"];

/** Users */
export type UserRegisterParams = paths["/user/register"]["post"]["requestBody"]["content"]["application/json"];
export type UserDeregisterParams = paths["/user/deregister"]["post"]["requestBody"]["content"]["application/json"];
export type UserOptIntoAppParams = paths["/user/opt-into-app"]["post"]["requestBody"]["content"]["application/json"];
export type UserOptIntoTokenParams = paths["/user/opt-into-token"]["post"]["requestBody"]["content"]["application/json"];

export type ValidParams = CreateMilestoneParams | AccessTokenParams |
    PeelsCreateParams | PeelsListParams | PeelsMintParams | PeelsGrantParams | PeelsFundUserParams | PeelsGrantTokensParams | PeelsGetParams | PeelsListMineParams | // do I need to do this
    UserRegisterParams | UserDeregisterParams | UserOptIntoAppParams | UserOptIntoTokenParams;
export type ValidUrl = keyof paths;

export type ParamsTuple = {
    valid: boolean,
    params: ValidParams | null
}