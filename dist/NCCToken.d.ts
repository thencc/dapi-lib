import Algonaut from "@thencc/algonautjs";
import { DapiResponse } from "./types";
export type TokenResponse = {
    status: string;
    message: string;
    error: string;
    txDetail: {
        status: string;
        message: string;
        txId: string;
    };
};
export type AccessTokenResponse = {
    status: string;
    message: string;
    data: {
        token: string;
        expires: number;
        validFor: number;
    };
    error: string;
    confirmedInRound: {
        status: string;
        message: string;
        txId: string;
    };
    dbUUID: string;
};
declare class NCCToken {
    private static instance;
    private address;
    private algonaut;
    nccTokenBal: number;
    private constructor();
    static destroy(): void;
    static getInstance(algonaut: Algonaut): Promise<NCCToken>;
    getNCCBalance(): Promise<number>;
    isOptedNCC(): Promise<boolean>;
    getAccessToken(): Promise<{
        accessToken: string;
        tokenExpires: number;
        error: string;
    }>;
    refreshNCCBal(): Promise<void>;
    getNCCs(): Promise<TokenResponse>;
    createUserContract(uuid: string): Promise<DapiResponse | null>;
}
export default NCCToken;
