import { PeelsCreateParams, ValidUrl, PeelsListParams, PeelsListMineParams, PeelsGetParams, PeelsMintParams, PeelsGrantParams, PeelsGrantTokensParams, PeelsFundUserParams } from "./model";
import { postRequest } from "./utils";

export class Peels {
    constructor() {
        console.log('Initializing Peels object');
    }

    /** PEELS */
    public async create(params: PeelsCreateParams) {
        const path: ValidUrl = '/peels/create';
        return await postRequest(path, params);
    }

    public async list(params: PeelsListParams) {
        const path: ValidUrl = '/peels/list';
        return await postRequest(path, params);
    }

    public async listAll() {
        const path: ValidUrl = '/peels/list-all';
        return await postRequest(path, {});
    }

    public async listMine(params: PeelsListMineParams) {
        const path: ValidUrl = '/peels/list-mine';
        return await postRequest(path, params);
    }

    public async get(params: PeelsGetParams) {
        const path: ValidUrl = '/peels/get';
        return await postRequest(path, params);
    }

    public async mint(params: PeelsMintParams) {
        const path: ValidUrl = '/peels/mint';
        return await postRequest(path, params);
    }

    public async grant(params: PeelsGrantParams) {
        const path: ValidUrl = '/peels/grant';
        return await postRequest(path, params);
    }

    public async grantTokens(params: PeelsGrantTokensParams) {
        const path: ValidUrl = '/peels/grant-tokens';
        return await postRequest(path, params);
    }

    public async fundUser(params: PeelsFundUserParams) {
        const path: ValidUrl = '/peels/fund-user';
        return await postRequest(path, params);
    }
}