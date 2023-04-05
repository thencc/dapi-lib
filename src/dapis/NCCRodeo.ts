import { MintOrgInput, UpdateOrgInput, CreateOrgInput, CreateOrgResponse, OrgAllResponse, FetchOrgResponse, FetchAllProjectsResponse, FetchProjectResponse } from "../types";
import { NCCdAPIs } from "./NCCdAPIs";

export default class NCCRodeo {
    private static instance: NCCRodeo | null;

    private accessToken: string = '';

    private constructor() { }

    public static destroy() {
        if (NCCRodeo.instance) {
            NCCRodeo.instance = null;
        }
    }

    public static getInstance(accessToken: string) {
        if (accessToken.length == 0) return null;
        if (!NCCRodeo.instance) {
            NCCRodeo.instance = new NCCRodeo();
        }

        NCCRodeo.instance.accessToken = accessToken;
        return NCCRodeo.instance;
    }

    public static getOrgStatus(num: number) {
        switch (num) {
            case 1:
                return 'Active';
            default:
                return 'Undefined state'
        }
    }

    public async mintOrg(input: MintOrgInput) {
        const data = {
            accessToken: this.accessToken,
            route: 'mint',
            uuid: input.uuid
        };

        try {
            const response = await NCCdAPIs.call('rodeo/org/' + input.orgName, data);
            console.log('mint org resposne: ', response);
            return response;
        } catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }

    public async updateOrg(input: UpdateOrgInput) {
        const data = {
            accessToken: this.accessToken,
            uuid: input.uuid,
            route: 'update',
            edits: input.data
        };

        try {
            const response = await NCCdAPIs.call('rodeo/org/' + input.orgName, data);
            console.log('the edit response is: ', response);
        } catch (er) {
            console.log('there was an error ', er);
        }
    }

    public async createOrg(input: CreateOrgInput) {
        const data = {
            accessToken: this.accessToken,
            ...input
        };

        console.log('data is: ', data);

        try {
            const response = await NCCdAPIs.call('rodeo/org/create', data) as CreateOrgResponse;
            console.log('org creation response: ', response);
            return response;
        } catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }

    public async getAllOrgs(uuid: string) {
        if (uuid.length == 0) {
            console.error('Invalid UUID');
            return null;
        }
        const data = {
            accessToken: this.accessToken,
            uuid: uuid
        };
        const response = await NCCdAPIs.call('rodeo/test', data) as OrgAllResponse;
        return response;
    }

    public async getOrgByAppId(uuid: string, appId: number) {
        if (uuid.length == 0 || appId == 0) {
            if (uuid.length == 0) console.error('Invalid UUID');
            if (appId == 0) console.error('Invalid org app ID');
            return null;
        }

        const data = {
            accessToken: this.accessToken,
            uuid: uuid,
            route: 'fetchByAppId'
        };

        const path = 'rodeo/org/' + appId;

        try {
            const response = await NCCdAPIs.call(path, data) as FetchOrgResponse;
            console.log('response of fetch: ', response);
            return response;
        } catch (er) {
            console.error('there was an error: ', er);
            return null;
        }
    }

    public async getOrgByName(uuid: string, name: string) {
        if (uuid.length == 0 || name.length == 0) {
            if (uuid.length == 0) console.error('Invalid UUID');
            if (name.length == 0) console.error('Invalid org name');
            return null;
        }
        const data = {
            accessToken: this.accessToken,
            uuid: uuid,
            route: 'fetch'
        };

        const path = 'rodeo/org/' + name;

        try {
            const response = await NCCdAPIs.call(path, data) as FetchOrgResponse;
            console.log('response: ', response);
            return response;
        } catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }

    public async createProject(uuid: string, creatorAddr: string,
        url: string,
        title: string,
        description: string,
        org_id: string,) {

        const data = {
            accessToken: this.accessToken,
            route: 'create',
            uuid: uuid,
            creatorAddress: creatorAddr, // TODO should this be an object variable?
            url,
            title,
            description,
            org_id
        };

        const path = 'rodeo/project/create';
        try {
            const response = await NCCdAPIs.call(path, data);
            console.log('project creation response: ', response);
            return response;
        } catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }

    public async fetchProjectsByOrgId(uuid: string, org_id: string) {
        const data = {
            accessToken: this.accessToken,
            uuid,
            route: 'fetchByOrgId',
            org_id
        };
        const path = 'rodeo/project/all';
        try {
            const response = await NCCdAPIs.call(path, data);
            console.log('fetch projects by org response: ', response);
            return response as FetchAllProjectsResponse;
        } catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }

    public async fetchProject(uuid: string, project_id: number) {
        const data = {
            accessToken: this.accessToken,
            uuid,
            route: 'fetch'
        };
        const path = 'rodeo/project/' + project_id;
        try {
            const response = await NCCdAPIs.call(path, data);
            console.log('fetch projects by org response: ', response);
            return response as FetchProjectResponse;
        } catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }

    public async fetchAllMilestonesByProject(uuid: string, project_id: string) {
        const data = {
            accessToken: this.accessToken,
            uuid,
            route: 'fetchByProjectId',
            project_id
        }
        const path = 'rodeo/milestone/all';
        try {
            const response = await NCCdAPIs.call(path, data);
            console.log('fetch milestones by project response: ', response);
            return response;
        } catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }

    public async createMilestone(uuid: string, creatorAddr: string,
        url: string,
        title: string,
        description: string,
        project_id: string,
        data: string,
        approverUUID: string) {

        try {
            const requestData = {
                accessToken: this.accessToken,
                uuid,
                creatorAddress: creatorAddr,
                route: 'create',
                title,
                description,
                url,
                data,
                project_id,
                approverUUID
            };

            const path = 'rodeo/milestone/create';
            const response = await NCCdAPIs.call(path, requestData);
            console.log('milestone creation response: ', response);
            return response;
        } catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }

    public async fetchMilestone(uuid: string, milestone_id: number) {
        const data = {
            accessToken: this.accessToken,
            uuid,
            route: 'fetch'
        };
        const path = 'rodeo/milestone/' + milestone_id;
        try {
            const response = await NCCdAPIs.call(path, data);
            console.log('fetch milestone by id: ', response);
            return response;
        } catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }
}