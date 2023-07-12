import { ImpressionCreateParams, ImpressionUpdateAllParams, ImpressionUpdateOneParams, ValidUrl } from "../model";
import { postRequest } from "../utils";

export class Impression {
    public async create(params: ImpressionCreateParams) {
        const path: ValidUrl = '/impression/create';
        return await postRequest(path, params);
    }

    public async updateAll(params: ImpressionUpdateAllParams) {
        const path: ValidUrl = '/impression/update-all';
        return await postRequest(path, params);
    }

    public async updateOne(params: ImpressionUpdateOneParams) {
        const path: ValidUrl = '/impression/update-one';
        return await postRequest(path, params);
    }
}