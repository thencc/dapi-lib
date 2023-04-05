import { MintOrgInput, UpdateOrgInput, CreateOrgInput, CreateOrgResponse, OrgAllResponse, FetchOrgResponse, FetchAllProjectsResponse, FetchProjectResponse } from "../types";
export default class NCCRodeo {
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
