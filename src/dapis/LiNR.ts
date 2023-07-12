import { LinrMediaParams, LinrMusicParams, ValidUrl } from "../model";
import { postRequest } from "../utils";

export class LiNR {
    public async media(params: LinrMediaParams) {
        const path: ValidUrl = '/linr/media';
        return await postRequest(path, params);
    }

    public async music(params: LinrMusicParams) {
        const path: ValidUrl = '/linr/music';
        return await postRequest(path, params);
    }
}