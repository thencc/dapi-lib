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
declare class NCCRodeo {
    private static instance;
    private accessToken;
    private constructor();
    static destroy(): void;
    static getInstance(accessToken: string): NCCRodeo | null;
    static getOrgStatus(num: number): "Active" | "Undefined state";
    mintOrg(input: MintOrgInput): Promise<any>;
    updateOrg(input: UpdateOrgInput): Promise<void>;
    createOrg(input: CreateOrgInput): Promise<CreateOrgResponse | null>;
    getAllOrgs(uuid: string): Promise<OrgAllResponse | null>;
    getOrgByAppId(uuid: string, appId: number): Promise<FetchOrgResponse | null>;
    getOrgByName(uuid: string, name: string): Promise<FetchOrgResponse | null>;
    createProject(uuid: string, creatorAddr: string, url: string, title: string, description: string, org_id: string): Promise<any>;
    fetchProjectsByOrgId(uuid: string, org_id: string): Promise<FetchAllProjectsResponse | null>;
    fetchProject(uuid: string, project_id: number): Promise<FetchProjectResponse | null>;
    fetchAllMilestonesByProject(uuid: string, project_id: string): Promise<any>;
    createMilestone(uuid: string, creatorAddr: string, url: string, title: string, description: string, project_id: string, data: string, approverUUID: string): Promise<any>;
    fetchMilestone(uuid: string, milestone_id: number): Promise<any>;
}
export default NCCRodeo;
