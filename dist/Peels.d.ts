import { PeelsCreateParams, PeelsListParams, PeelsListMineParams, PeelsGetParams, PeelsMintParams, PeelsGrantParams, PeelsGrantTokensParams, PeelsFundUserParams } from "./model";
export declare class Peels {
    constructor();
    /** PEELS */
    create(params: PeelsCreateParams): Promise<any>;
    list(params: PeelsListParams): Promise<any>;
    listAll(): Promise<any>;
    listMine(params: PeelsListMineParams): Promise<any>;
    get(params: PeelsGetParams): Promise<any>;
    mint(params: PeelsMintParams): Promise<any>;
    grant(params: PeelsGrantParams): Promise<any>;
    grantTokens(params: PeelsGrantTokensParams): Promise<any>;
    fundUser(params: PeelsFundUserParams): Promise<any>;
}
