import Algonaut from "@thencc/algonautjs";
import { TTMConfig } from "../types";
declare class NCCTTM {
    private static instance;
    private accessToken;
    private algonaut;
    private constructor();
    static destroy(): void;
    static getInstance(accessToken: string, algonaut: Algonaut): NCCTTM | null;
    validConfig(config: TTMConfig): boolean;
    receive(uuid: string, lastRound: number, config: TTMConfig): Promise<any>;
    send(uuid: string, message: string, tokenToTarget: number): Promise<any>;
    optInToToken(tokenToOptInto: number): Promise<import("@thencc/algonautjs").AlgonautTransactionStatus | null>;
    getTokens(userAddress: string): Promise<any>;
}
export default NCCTTM;
