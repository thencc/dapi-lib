import { postRequest } from "../utils";
export class Peels {
    constructor() {
        console.log('Initializing Peels object');
    }
    /** PEELS */
    async create(params) {
        const path = '/peels/create';
        return await postRequest(path, params);
    }
    async list(params) {
        const path = '/peels/list';
        return await postRequest(path, params);
    }
    async listAll() {
        const path = '/peels/list-all';
        return await postRequest(path, {});
    }
    async listMine(params) {
        const path = '/peels/list-mine';
        return await postRequest(path, params);
    }
    async get(params) {
        const path = '/peels/get';
        return await postRequest(path, params);
    }
    async mint(params) {
        const path = '/peels/mint';
        return await postRequest(path, params);
    }
    async grant(params) {
        const path = '/peels/grant';
        return await postRequest(path, params);
    }
    async grantTokens(params) {
        const path = '/peels/grant-tokens';
        return await postRequest(path, params);
    }
    async fundUser(params) {
        const path = '/peels/fund-user';
        return await postRequest(path, params);
    }
}
