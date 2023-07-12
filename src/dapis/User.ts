import { UserRegisterParams, ValidUrl, UserDeregisterParams, UserOptIntoAppParams, UserOptIntoTokenParams } from "../model";
import { postRequest } from "../utils";

export class User {
    constructor() {

    }

    /** User */
    public async register(params: UserRegisterParams) {
        const path: ValidUrl = '/user/register';
        return await postRequest(path, params);
    }

    public async deregister(params: UserDeregisterParams) {
        const path: ValidUrl = '/user/deregister';
        return await postRequest(path, params);
    }

    public async optIntoApp(params: UserOptIntoAppParams) {
        const path: ValidUrl = '/user/opt-into-app';
        return await postRequest(path, params);
    }

    public async optIntoToken(params: UserOptIntoTokenParams) {
        const path: ValidUrl = '/user/opt-into-token';
        return await postRequest(path, params);
    }
}