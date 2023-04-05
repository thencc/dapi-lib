import { DeRegisterResponse, FundOptInResponse, UserResponse, OptInAppResponse } from "../types";
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
