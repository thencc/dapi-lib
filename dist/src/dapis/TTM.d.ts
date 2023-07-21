import { TTMReceiveParams, TTMSendParams } from "../model";
export declare class TTM {
    constructor();
    /** TTM */
    send(params: TTMSendParams): Promise<any>;
    receive(params: TTMReceiveParams): Promise<any>;
}
