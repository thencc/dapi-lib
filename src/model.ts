import { paths } from './schema.js';

/** Token */
export type AccessTokenParams = paths["/get-access-token"]["post"]["requestBody"]["content"]["application/json"];
export type AccessTokenSuccessResponse = paths["/get-access-token"]["post"]["responses"]["200"]["content"]["application/json"];

/** List Accounts */
export type ListAccountsParams = paths["/list-accounts"]["post"]["requestBody"]["content"]["application/json"];
export type ListAccountsSuccessResponse = paths["/list-accounts"]["post"]["responses"]["200"]["content"]["application/json"];

/** TTM */
export type TTMSendParams = paths["/ttm/send"]["post"]["requestBody"]["content"]["application/json"];
export type TTMReceiveParams = paths["/ttm/receive"]["post"]["requestBody"]["content"]["application/json"];

export type TTMSendSuccessResponse = paths["/ttm/send"]["post"]["responses"]["200"]["content"]["application/json"];
export type TTMReceiveSuccessResponse = paths["/ttm/receive"]["post"]["responses"]["200"]["content"]["application/json"];

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

/** Bricks */
// To fix

/** Impressions */
export type ImpressionCreateParams = paths["/impression/create"]["post"]["requestBody"]["content"]["application/json"];
export type ImpressionUpdateOneParams = paths["/impression/update-one"]["post"]["requestBody"]["content"]["application/json"];
export type ImpressionUpdateAllParams = paths["/impression/update-all"]["post"]["requestBody"]["content"]["application/json"];

/** LiNR */
export type LinrMediaParams = paths["/linr/media"]["post"]["requestBody"]["content"]["application/json"];
export type LinrMusicParams = paths["/linr/music"]["post"]["requestBody"]["content"]["application/json"];

export type ValidParams = AccessTokenParams | ListAccountsParams |
    /** Peels */
    PeelsCreateParams | PeelsListParams | PeelsMintParams | PeelsGrantParams | PeelsFundUserParams | PeelsGrantTokensParams | PeelsGetParams | PeelsListMineParams | // do I need to do this
    /** Users */
    UserRegisterParams | UserDeregisterParams | UserOptIntoAppParams | UserOptIntoTokenParams |
    /** TTM */
    TTMSendParams | TTMReceiveParams |
    /** Bricks */
    // BricksCreateParams | BricksFundUserParams | BricksGrantParams | BricksListAllParams | BricksListParams | BricksMintParams |
    /** Impression */
    ImpressionCreateParams | ImpressionUpdateAllParams | ImpressionUpdateOneParams |
    /** LiNR */
    LinrMediaParams | LinrMusicParams;
export type ValidUrl = keyof paths;

export type ParamsTuple = {
    valid: boolean,
    params: ValidParams | null
}

export type ApiDocs = {
    data: any[];
    project: any;
    swagDoc: any;
}