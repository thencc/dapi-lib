import { postRequest } from "../utils";
export class Bricks {
    async create(params) {
        const path = '/bricks/create';
        return await postRequest(path, params);
    }
    async fundUser(params) {
        const path = '/bricks/fund-user';
        return await postRequest(path, params);
    }
    async grant(params) {
        const path = '/bricks/grant';
        return await postRequest(path, params);
    }
    async list(params) {
        const path = '/bricks/list';
        return await postRequest(path, params);
    }
    async listAll(params) {
        const path = '/bricks/list-all';
        return await postRequest(path, params);
    }
    async mint(params) {
        const path = '/bricks/mint';
        return await postRequest(path, params);
    }
}
