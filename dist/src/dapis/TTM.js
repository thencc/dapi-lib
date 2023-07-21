import { postRequest } from "../utils";
export class TTM {
    constructor() { }
    /** TTM */
    async send(params) {
        const path = '/ttm/send';
        return await postRequest(path, params);
    }
    async receive(params) {
        const path = '/ttm/receive';
        return await postRequest(path, params);
    }
}
