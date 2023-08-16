import { postRequest } from "../utils";
const ID_PARAM = '{id}';
class Org {
    async create(params) {
        const path = '/rodeo/org/create';
        return await postRequest(path, params);
    }
    async fetchAll(params) {
        const path = '/rodeo/org/all';
        return await postRequest(path, params);
    }
    async edit(params) {
        const basePath = '/rodeo/org/{id}/edit';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }
    async get(params) {
        const basePath = '/rodeo/org/{id}/get';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }
    async mint(params) {
        const basePath = '/rodeo/org/{id}/mint';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }
    async addAdmin(params) {
        const basePath = '/rodeo/org/{id}/add-admin';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }
    async testAdmin(params) {
        const basePath = '/rodeo/org/{id}/test-admin';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }
    async addMember(params) {
        const basePath = '/rodeo/org/{id}/add-member';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }
    async testMember(params) {
        const basePath = '/rodeo/org/{id}/test-member';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }
    async setSuperAdmin(params) {
        const basePath = '/rodeo/org/{id}/super-admin';
        const path = basePath.replace(ID_PARAM, params.id);
        return await postRequest(path, params);
    }
}
export class Rodeo {
    org;
    constructor() {
        this.org = new Org();
    }
}
