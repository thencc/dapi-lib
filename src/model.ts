import { paths } from './schema';


type ExtractRequestBody<T extends paths, P extends keyof T> =
    T[P] extends { post: { requestBody: { content: { 'application/json': infer R } } } }
    ? R
    : never;

type ExtractRequestHeader<T extends paths, P extends keyof T> =
    T[P] extends { post: { parameters: { header: { accessToken: string, whichNet: string } } } }
    ? Omit<T[P]['post']['parameters']['header'], 'whichNet'> & { whichNet?: string }
    : never;

type ExtractSuccessResponse<T extends paths, P extends keyof T> =
    T[P] extends { post: { responses: { 200: { content: { 'application/json': infer R } } } } }
    ? R
    : never;

/** Token */
export type AccessTokenParams = ExtractRequestBody<paths, '/get-access-token'>;
export type AccessTokenSuccessResponse = ExtractSuccessResponse<paths, '/get-access-token'>;

/** List Accounts */
export type ListAccountsParams = ExtractRequestBody<paths, '/list-accounts'>;
export type ListAccountsSuccessResponse = ExtractSuccessResponse<paths, '/list-accounts'>;

/** TTM */
export type TTMSendParams = ExtractRequestBody<paths, '/ttm/send'>;
export type TTMReceiveParams = ExtractRequestBody<paths, '/ttm/receive'>;

export type TTMSendSuccessResponse = ExtractSuccessResponse<paths, '/ttm/send'>;
export type TTMReceiveSuccessResponse = ExtractSuccessResponse<paths, '/ttm/receive'>;

/** Peels */
export type PeelsCreateParams = ExtractRequestBody<paths, '/peels/create'>;
export type PeelsFundUserParams = ExtractRequestBody<paths, '/peels/fund-user'>;
export type PeelsGrantParams = ExtractRequestBody<paths, '/peels/grant'>;
export type PeelsListParams = ExtractRequestBody<paths, '/peels/list'>;
export type PeelsMintParams = ExtractRequestBody<paths, '/peels/mint'>;
export type PeelsGrantTokensParams = ExtractRequestBody<paths, '/peels/grant-tokens'>;
export type PeelsGetParams = ExtractRequestBody<paths, '/peels/get'>;
export type PeelsListMineParams = ExtractRequestBody<paths, '/peels/list-mine'>;

export type PeelsCreateSuccessResponse = ExtractSuccessResponse<paths, '/peels/create'>;
export type PeelsFundUserSuccessResponse = ExtractSuccessResponse<paths, '/peels/fund-user'>;
export type PeelsGrantSuccessResponse = ExtractSuccessResponse<paths, '/peels/grant'>;
export type PeelsListSuccessResponse = ExtractSuccessResponse<paths, '/peels/list'>;
export type PeelsMintSuccessResponse = ExtractSuccessResponse<paths, '/peels/mint'>;
export type PeelsGrantTokensSuccessResponse = ExtractSuccessResponse<paths, '/peels/grant-tokens'>;
export type PeelsGetSuccessResponse = ExtractSuccessResponse<paths, '/peels/get'>;
export type PeelsListMineSuccessResponse = ExtractSuccessResponse<paths, '/peels/list-mine'>;

/** Users */
export type UserRegisterParams = ExtractRequestBody<paths, '/user/register'> & ExtractRequestHeader<paths, '/user/register'>;
export type UserDeregisterParams = ExtractRequestBody<paths, '/user/deregister'>;
export type UserOptIntoAppParams = ExtractRequestBody<paths, '/user/opt-into-app'>;
export type UserOptIntoTokenParams = ExtractRequestBody<paths, '/user/opt-into-token'>;

/** Bricks */
// To fix

/** Rodeo */
/**
 * - put generated schema in somewhere shared, separate
 * - write a function that simplifies paths
 */
export type RodeoOrgCreateParams = ExtractRequestBody<paths, '/rodeo/org/create'>;
export type RodeoOrgCreateSuccessResponse = ExtractSuccessResponse<paths, '/rodeo/org/create'>;

/** Impressions */
export type ImpressionCreateParams = ExtractRequestBody<paths, '/impression/create'>;
export type ImpressionUpdateOneParams = ExtractRequestBody<paths, '/impression/update-one'>;
export type ImpressionUpdateAllParams = ExtractRequestBody<paths, '/impression/update-all'>;

/** LiNR */
export type LinrMediaParams = ExtractRequestBody<paths, '/linr/media'>;
export type LinrMusicParams = ExtractRequestBody<paths, '/linr/music'>;

export type ValidParams = AccessTokenParams | ListAccountsParams |
    /** Peels */
    PeelsCreateParams | PeelsListParams | PeelsMintParams | PeelsGrantParams | PeelsFundUserParams | PeelsGrantTokensParams | PeelsGetParams | PeelsListMineParams | // do I need to do this
    /** Users */
    UserRegisterParams | UserDeregisterParams | UserOptIntoAppParams | UserOptIntoTokenParams |
    /** TTM */
    TTMSendParams | TTMReceiveParams |
    /** Bricks */
    // BricksCreateParams | BricksFundUserParams | BricksGrantParams | BricksListAllParams | BricksListParams | BricksMintParams |
    /** Rodeo */
    RodeoOrgCreateParams |
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