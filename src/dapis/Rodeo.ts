import { RodeoOrgCreateParams, ValidUrl } from "../model";
import { postRequest } from "../utils";

class Org {
    public async create(params: RodeoOrgCreateParams) {
        const path: ValidUrl = '/rodeo/org/create';
        return await postRequest(path, params);
    }
}

export class Rodeo {
    org: Org;

    constructor() {
        this.org = new Org();
    }
}