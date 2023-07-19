import { postRequest } from "../utils";
export class User {
    constructor() {
    }
    /** User */
    async register(params) {
        const path = '/user/register';
        return await postRequest(path, params);
    }
    async deregister(params) {
        const path = '/user/deregister';
        return await postRequest(path, params);
    }
    async optIntoApp(params) {
        const path = '/user/opt-into-app';
        return await postRequest(path, params);
    }
    async optIntoToken(params) {
        const path = '/user/opt-into-token';
        return await postRequest(path, params);
    }
}
