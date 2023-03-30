import { NCCdAPIs } from "./NCCdAPIs";
class NCCRodeo {
    constructor() {
        this.accessToken = '';
    }
    static destroy() {
        if (NCCRodeo.instance) {
            NCCRodeo.instance = null;
        }
    }
    static getInstance(accessToken) {
        if (accessToken.length == 0)
            return null;
        if (!NCCRodeo.instance) {
            NCCRodeo.instance = new NCCRodeo();
        }
        NCCRodeo.instance.accessToken = accessToken;
        return NCCRodeo.instance;
    }
    static getOrgStatus(num) {
        switch (num) {
            case 1:
                return 'Active';
            default:
                return 'Undefined state';
        }
    }
    async mintOrg(input) {
        const data = {
            accessToken: this.accessToken,
            route: 'mint',
            uuid: input.uuid
        };
        try {
            const response = await NCCdAPIs.call('rodeo/org/' + input.orgName, data);
            console.log('mint org resposne: ', response);
            return response;
        }
        catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }
    async updateOrg(input) {
        const data = {
            accessToken: this.accessToken,
            uuid: input.uuid,
            route: 'update',
            edits: input.data
        };
        try {
            const response = await NCCdAPIs.call('rodeo/org/' + input.orgName, data);
            console.log('the edit response is: ', response);
        }
        catch (er) {
            console.log('there was an error ', er);
        }
    }
    async createOrg(input) {
        const data = Object.assign({ accessToken: this.accessToken }, input);
        console.log('data is: ', data);
        try {
            const response = await NCCdAPIs.call('rodeo/org/create', data);
            console.log('org creation response: ', response);
            return response;
        }
        catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }
    async getAllOrgs(uuid) {
        if (uuid.length == 0) {
            console.error('Invalid UUID');
            return null;
        }
        const data = {
            accessToken: this.accessToken,
            uuid: uuid
        };
        const response = await NCCdAPIs.call('rodeo/test', data);
        return response;
    }
    async getOrgByAppId(uuid, appId) {
        if (uuid.length == 0 || appId == 0) {
            if (uuid.length == 0)
                console.error('Invalid UUID');
            if (appId == 0)
                console.error('Invalid org app ID');
            return null;
        }
        const data = {
            accessToken: this.accessToken,
            uuid: uuid,
            route: 'fetchByAppId'
        };
        const path = 'rodeo/org/' + appId;
        try {
            const response = await NCCdAPIs.call(path, data);
            console.log('response of fetch: ', response);
            return response;
        }
        catch (er) {
            console.error('there was an error: ', er);
            return null;
        }
    }
    async getOrgByName(uuid, name) {
        if (uuid.length == 0 || name.length == 0) {
            if (uuid.length == 0)
                console.error('Invalid UUID');
            if (name.length == 0)
                console.error('Invalid org name');
            return null;
        }
        const data = {
            accessToken: this.accessToken,
            uuid: uuid,
            route: 'fetch'
        };
        const path = 'rodeo/org/' + name;
        try {
            const response = await NCCdAPIs.call(path, data);
            console.log('response: ', response);
            return response;
        }
        catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }
    async createProject(uuid, creatorAddr, url, title, description, org_id) {
        const data = {
            accessToken: this.accessToken,
            route: 'create',
            uuid: uuid,
            creatorAddress: creatorAddr,
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
        }
        catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }
    async fetchProjectsByOrgId(uuid, org_id) {
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
            return response;
        }
        catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }
    async fetchProject(uuid, project_id) {
        const data = {
            accessToken: this.accessToken,
            uuid,
            route: 'fetch'
        };
        const path = 'rodeo/project/' + project_id;
        try {
            const response = await NCCdAPIs.call(path, data);
            console.log('fetch projects by org response: ', response);
            return response;
        }
        catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }
    async fetchAllMilestonesByProject(uuid, project_id) {
        const data = {
            accessToken: this.accessToken,
            uuid,
            route: 'fetchByProjectId',
            project_id
        };
        const path = 'rodeo/milestone/all';
        try {
            const response = await NCCdAPIs.call(path, data);
            console.log('fetch milestones by project response: ', response);
            return response;
        }
        catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }
    async createMilestone(uuid, creatorAddr, url, title, description, project_id, data, approverUUID) {
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
        }
        catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }
    async fetchMilestone(uuid, milestone_id) {
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
        }
        catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }
}
export default NCCRodeo;
//# sourceMappingURL=NCCRodeo.js.map