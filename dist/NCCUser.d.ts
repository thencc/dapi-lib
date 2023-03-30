export type UserResponse = {
    data: any;
    message: string;
    status: string;
};
export type RegisterResponse = {
    status: string;
    message: string;
    contractId: number;
    contractAddress: string;
    result: {
        status: string;
        message: string;
        txId: string;
        createdIndex: number;
        meta: any;
    };
    fundAndOptInStatus: any;
    dataTransactionStatus: any;
};
export type DeRegisterResponse = {
    status: string;
    message: string;
    contractId: number;
    contractAddress: string;
    result: {
        status: string;
        message: string;
        txId: string;
    };
};
export type FundOptInResponse = {
    status: string;
    message: string;
    fundAndOptInStatus: {
        status: string;
        message: string;
        txId: string;
    };
};
export type OptInAppResponse = {
    status: string;
    message: string;
    optInStatus: {
        status: string;
        message: string;
        txId: string;
    };
};
declare class NCCUser {
    private static instance;
    private accessToken;
    private constructor();
    static getInstance(accessToken: string): NCCUser | null;
    static destroy(): void;
    registerUser(uuid: string, creatorAddr: string): Promise<any>;
    deregisterUser(uuid: string): Promise<DeRegisterResponse | null>;
    fundAccount(uuid: string, amount: number, asaId: number): Promise<FundOptInResponse | null>;
    getAllAccounts(creatorAddr: string): Promise<UserResponse | null>;
    accountOptInApp(uuid: string, appId: number, appArgs: string): Promise<OptInAppResponse | null>;
    accountOptInToken(uuid: string, asaId: number): Promise<FundOptInResponse | null>;
}
export default NCCUser;
