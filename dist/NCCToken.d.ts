import Algonaut from "@thencc/algonautjs";
import { NCCApiResponse } from "./types";
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
    getAccessToken(): Promise<NCCApiResponse>;
    refreshNCCBal(): Promise<void>;
    getNCCs(): Promise<NCCApiResponse>;
    createUserSLA(uuid: string): Promise<NCCApiResponse | {
        status: string;
        message: string;
        error: any;
        result: null;
    }>;
}
export default NCCToken;
