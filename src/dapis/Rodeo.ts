import { RodeoOrgAddAdminParams, RodeoOrgAddMemberParams, RodeoOrgCreateParams, RodeoOrgEditParams, RodeoOrgFetchAllParams, RodeoOrgFetchParams, RodeoOrgMintParams, RodeoOrgSuperAdminParams, RodeoOrgTestAdminParams, RodeoOrgTestMemberParams, ValidUrl } from "../model";
import { postRequest } from "../utils";

const ID_PARAM = '{id}';
class Org {

    public async create(params: RodeoOrgCreateParams) {
        const path: ValidUrl = '/rodeo/org/create';
        return await postRequest(path, params);
    }

    public async fetchAll(params: RodeoOrgFetchAllParams) {
        const path: ValidUrl = '/rodeo/org/all';
        return await postRequest(path, params);
    }

    public async edit(params: RodeoOrgEditParams) {
        const basePath: ValidUrl = '/rodeo/org/{id}/edit';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }

    public async get(params: RodeoOrgFetchParams) {
        const basePath: ValidUrl = '/rodeo/org/{id}/get';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }

    public async mint(params: RodeoOrgMintParams) {
        const basePath: ValidUrl = '/rodeo/org/{id}/mint';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }

    public async addAdmin(params: RodeoOrgAddAdminParams) {
        const basePath: ValidUrl = '/rodeo/org/{id}/add-admin';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }

    public async testAdmin(params: RodeoOrgTestAdminParams) {
        const basePath: ValidUrl = '/rodeo/org/{id}/test-admin';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }

    public async addMember(params: RodeoOrgAddMemberParams) {
        const basePath: ValidUrl = '/rodeo/org/{id}/add-member';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }

    public async testMember(params: RodeoOrgTestMemberParams) {
        const basePath: ValidUrl = '/rodeo/org/{id}/test-member';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }

    public async setSuperAdmin(params: RodeoOrgSuperAdminParams) {
        const basePath: ValidUrl = '/rodeo/org/{id}/super-admin';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }
}

export class Rodeo {
    org: Org;

    constructor() {
        this.org = new Org();
    }
}