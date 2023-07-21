import { postRequest } from "../utils";
export class LiNR {
    async media(params) {
        const path = '/linr/media';
        return await postRequest(path, params);
    }
    async music(params) {
        const path = '/linr/music';
        return await postRequest(path, params);
    }
}
