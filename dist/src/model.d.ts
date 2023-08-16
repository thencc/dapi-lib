import { paths } from './schema';
type ExtractRequestBody<T extends paths, P extends keyof T> = T[P] extends {
    post: {
        requestBody: {
            content: {
                'application/json': infer R;
            };
        };
    };
} ? R : never;
type ExtractRequestHeader<T extends paths, P extends keyof T> = T[P] extends {
    post: {
        parameters: {
            header: {
                accessToken: string;
                whichNet: string;
            };
        };
    };
} ? Omit<T[P]['post']['parameters']['header'], 'whichNet'> & {
    whichNet?: string;
} : never;
type ExtractSuccessResponse<T extends paths, P extends keyof T> = T[P] extends {
    post: {
        responses: {
            200: {
                content: {
                    'application/json': infer R;
                };
            };
        };
    };
} ? R : never;
type ExtractRequestQuery<T extends paths, P extends keyof T> = T[P] extends {
    post: {
        parameters: {
            query: infer Q;
        };
    };
} ? Q : never;
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
/** Rodeo */
/**
 * - put generated schema in somewhere shared, separate
 * - write a function that simplifies paths
 */
export type RodeoOrgCreateParams = ExtractRequestBody<paths, '/rodeo/org/create'>;
export type RodeoOrgCreateSuccessResponse = ExtractSuccessResponse<paths, '/rodeo/org/create'>;
export type RodeoOrgFetchAllParams = ExtractRequestBody<paths, '/rodeo/org/all'>;
export type RodeoOrgFetchAllSuccessResponse = ExtractSuccessResponse<paths, '/rodeo/org/all'>;
export type RodeoOrgAddAdminParams = ExtractRequestBody<paths, '/rodeo/org/{id}/add-admin'> & ExtractRequestQuery<paths, '/rodeo/org/{id}/add-admin'>;
export type RodeoOrgAddAdminSuccessResponse = ExtractSuccessResponse<paths, '/rodeo/org/{id}/add-admin'>;
export type RodeoOrgAddMemberParams = ExtractRequestBody<paths, '/rodeo/org/{id}/add-member'> & ExtractRequestQuery<paths, '/rodeo/org/{id}/add-member'>;
export type RodeoOrgAddMemberSuccessResponse = ExtractSuccessResponse<paths, '/rodeo/org/{id}/add-member'>;
export type RodeoOrgEditParams = ExtractRequestBody<paths, '/rodeo/org/{id}/edit'> & ExtractRequestQuery<paths, '/rodeo/org/{id}/edit'>;
export type RodeoOrgEditSuccessResponse = ExtractSuccessResponse<paths, '/rodeo/org/{id}/edit'>;
export type RodeoOrgFetchParams = ExtractRequestBody<paths, '/rodeo/org/{id}/get'> & ExtractRequestQuery<paths, '/rodeo/org/{id}/get'>;
export type RodeoOrgFetchSuccessResponse = ExtractSuccessResponse<paths, '/rodeo/org/{id}/get'>;
export type RodeoOrgMintParams = ExtractRequestBody<paths, '/rodeo/org/{id}/mint'> & ExtractRequestQuery<paths, '/rodeo/org/{id}/mint'>;
export type RodeoOrgMintSuccessResponse = ExtractSuccessResponse<paths, '/rodeo/org/{id}/mint'>;
export type RodeoOrgSuperAdminParams = ExtractRequestBody<paths, '/rodeo/org/{id}/super-admin'> & ExtractRequestQuery<paths, '/rodeo/org/{id}/super-admin'>;
export type RodeoOrgSuperAdminSuccessResponse = ExtractSuccessResponse<paths, '/rodeo/org/{id}/super-admin'>;
export type RodeoOrgTestAdminParams = ExtractRequestBody<paths, '/rodeo/org/{id}/test-admin'> & ExtractRequestQuery<paths, '/rodeo/org/{id}/test-admin'>;
export type RodeoOrgTestAdminSuccessResponse = ExtractSuccessResponse<paths, '/rodeo/org/{id}/test-admin'>;
export type RodeoOrgTestMemberParams = ExtractRequestBody<paths, '/rodeo/org/{id}/test-member'> & ExtractRequestQuery<paths, '/rodeo/org/{id}/test-member'>;
export type RodeoOrgTestMemberSuccessResponse = ExtractSuccessResponse<paths, '/rodeo/org/{id}/test-member'>;
/** Impressions */
export type ImpressionCreateParams = ExtractRequestBody<paths, '/impression/create'>;
export type ImpressionUpdateOneParams = ExtractRequestBody<paths, '/impression/update-one'>;
export type ImpressionUpdateAllParams = ExtractRequestBody<paths, '/impression/update-all'>;
/** LiNR */
export type LinrMediaParams = ExtractRequestBody<paths, '/linr/media'>;
export type LinrMusicParams = ExtractRequestBody<paths, '/linr/music'>;
export type ValidUrl = keyof paths;
export type ApiDocs = {
    data: any[];
    project: any;
    swagDoc: any;
};
export {};
