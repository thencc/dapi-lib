import Algonaut from "@thencc/algonautjs";
export declare enum NCCDapiTypes {
    Rodeo = "rodeo",
    TTM = "ttm",
    LiNR = "linr",
    Bricks = "bricks",
    Peels = "peels"
}
export type NCCDapiConfig = {
    algonaut: Algonaut;
    excludes?: NCCDapiTypes[];
};
export type NCCApiResponse = {
    status: 'success' | 'fail';
    result: any;
    error: any;
    message: string;
};
export type CreateProjectInput = {
    url: string;
    title: string;
    description: string;
    org_id: string;
};
export type CreateOrgInput = {
    orgName: string;
    url: string;
    description: string;
    totalMembers: string;
    totalAdmins: string;
    uuid: string;
    creatorAddress: string;
};
export type CreateMilestoneInput = {
    url: string;
    title: string;
    description: string;
    project_id: string;
    data: string;
    approverUUID: string;
};
export type MintOrgInput = {
    uuid: string;
    orgName: string;
};
export type UpdateOrgInput = {
    uuid: string;
    orgName: string;
    data: any;
};
export type CreateOrgResponse = {
    valid: boolean;
    data: {
        appIndex: number;
        contractAddress: string;
        orgId: string;
    };
    route: string;
    message: string;
};
export type OrgGlobalState = {
    orgName: string;
    url: string;
    uuid: string;
    totalMembers: string;
    contractAddress: string;
    creatorAddress: string;
    id: string;
    totalAdmins: string;
    accessToken: string;
    description: string;
    debug: string;
    name: string;
    admin: string;
    data: string;
    total_admins: number;
    member_asset_id: number | null;
    status: number;
    total_members: number;
    admin_asset_id: number | null;
};
export type FetchOrgResponse = {
    valid: boolean;
    route: string;
    message: string;
    requestStatus: string;
    result: OrgGlobalState;
};
export type OrgResponse = {
    uuid: string;
    contractAddress: string;
    url: string;
    accessToken: string;
    totalMembers: string;
    description: string;
    orgName: string;
    id: string;
    creatorAddress: string;
    totalAdmins: string;
    adminAssetID: number;
    memberAssetID: number;
};
export type OrgAllResponse = {
    valid: boolean;
    data: OrgResponse[];
    route: string;
    message: string;
    requestStatus: string;
};
export type FetchAllProjectsResponse = {
    message: string;
    requestStatus: string;
    route: string;
    result: ProjectResponse[];
};
export type ProjectResponse = {
    creatorAccessToken: string;
    description: string;
    contractAddress: string;
    id: number;
    title: string;
    creatorAddress: string;
    url: string;
    orgId: number;
    status: number;
};
export type ProjectGlobalState = {
    data: string;
    description: string;
    admin: string;
    org_id: string;
    status: any | null;
    title: string;
    votes: any | null;
    url: string;
};
export type FetchProjectResponse = {
    message: string;
    requestStatus: string;
    route: string;
    result: ProjectGlobalState;
};
export type UserResponse = {
    data: any;
    message: string;
    status: string;
};
export type RegisterResponse = {
    status: string;
    message: string;
    contractId: number;
    contractAddress: string;
    result: {
        status: string;
        message: string;
        txId: string;
        createdIndex: number;
        meta: any;
    };
    fundAndOptInStatus: any;
    dataTransactionStatus: any;
};
export type DeRegisterResponse = {
    status: string;
    message: string;
    contractId: number;
    contractAddress: string;
    result: {
        status: string;
        message: string;
        txId: string;
    };
};
export type FundOptInResponse = {
    status: string;
    message: string;
    fundAndOptInStatus: {
        status: string;
        message: string;
        txId: string;
    };
};
export type OptInAppResponse = {
    status: string;
    message: string;
    optInStatus: {
        status: string;
        message: string;
        txId: string;
    };
};
export type TTMConfig = {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
};
export type TTMMessage = {
    id: string;
    messageType: string;
    messageTokens: string[];
    messageString: string;
    messageRound: number;
    createdAt: any;
    status: number;
};
export type TokenResponse = {
    status: string;
    message: string;
    error: string;
    txDetail: {
        status: string;
        message: string;
        txId: string;
    };
};
export type AccessTokenResponse = {
    status: string;
    message: string;
    data: {
        token: string;
        expires: number;
        validFor: number;
    };
    error: string;
    confirmedInRound: {
        status: string;
        message: string;
        txId: string;
    };
    dbUUID: string;
};
export type LiNRResponse = {
    status: string;
    message: string;
    error: string;
    data: {
        status: string;
        engine: number;
        content: string;
    };
};
