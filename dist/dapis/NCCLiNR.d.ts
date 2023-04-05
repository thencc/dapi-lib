import { LiNRResponse } from "../types";
declare class NCCLiNR {
    private static instance;
    private accessToken;
    private constructor();
    static destroy(): void;
    static getInstance(accessToken: string): NCCLiNR | null;
    send(qText: string, ctx: string): Promise<LiNRResponse | null>;
    sendMedia(qText: string, ctx: string): Promise<LiNRResponse | null>;
}
export default NCCLiNR;
