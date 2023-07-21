import { postRequest } from "../utils";
export class Impression {
    async create(params) {
        const path = '/impression/create';
        return await postRequest(path, params);
    }
    async updateAll(params) {
        const path = '/impression/update-all';
        return await postRequest(path, params);
    }
    async updateOne(params) {
        const path = '/impression/update-one';
        return await postRequest(path, params);
    }
}
