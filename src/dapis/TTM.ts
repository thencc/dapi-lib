import { TTMReceiveParams, TTMSendParams, ValidUrl } from "../model";
import { postRequest } from "../utils";

export class TTM {
    constructor() { }

    /** TTM */
    public async send(params: TTMSendParams) {
        const path: ValidUrl = '/ttm/send';
        return await postRequest(path, params);
    }

    public async receive(params: TTMReceiveParams) {
        const path: ValidUrl = '/ttm/receive';
        return await postRequest(path, params);
    }

    public async relay() {
        const path: ValidUrl = '/ttm/relay';
        return await postRequest(path, {});
    }
}