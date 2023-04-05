import Algonaut from "@thencc/algonautjs";
import { NCCApiResponse } from "../types";
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
    createUserSLA(uuid: string): Promise<NCCApiResponse>;
}
export default NCCToken;
