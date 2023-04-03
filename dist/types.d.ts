export type DapiResponse = {
    status: number;
    message: string;
    error: any;
    result: any;
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
