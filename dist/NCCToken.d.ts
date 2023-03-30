import Algonaut from "@thencc/algonautjs";
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
    static getInstance(address: string, algonaut: Algonaut): Promise<NCCToken>;
    getAccessToken(): Promise<{
        accessToken: string;
        tokenExpires: number;
        error: string;
    }>;
    refreshNCCBal(): Promise<void>;
    getNCCs(): Promise<TokenResponse>;
    createUserContract(uuid: string): Promise<TokenResponse | null>;
}
export default NCCToken;
