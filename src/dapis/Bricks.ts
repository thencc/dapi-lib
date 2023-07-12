import { BricksCreateParams, BricksFundUserParams, BricksGrantParams, BricksListAllParams, BricksListParams, BricksMintParams, ValidUrl } from "../model";
import { postRequest } from "../utils";

export class Bricks {
    public async create(params: BricksCreateParams) {
        const path: ValidUrl = '/bricks/create';
        return await postRequest(path, params);
    }

    public async fundUser(params: BricksFundUserParams) {
        const path: ValidUrl = '/bricks/fund-user';
        return await postRequest(path, params);
    }

    public async grant(params: BricksGrantParams) {
        const path: ValidUrl = '/bricks/grant';
        return await postRequest(path, params);
    }

    public async list(params: BricksListParams) {
        const path: ValidUrl = '/bricks/list';
        return await postRequest(path, params);
    }

    public async listAll(params: BricksListAllParams) {
        const path: ValidUrl = '/bricks/list-all';
        return await postRequest(path, params);
    }

    public async mint(params: BricksMintParams) {
        const path: ValidUrl = '/bricks/mint';
        return await postRequest(path, params);
    }
}