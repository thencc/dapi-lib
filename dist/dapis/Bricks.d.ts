import { BricksCreateParams, BricksFundUserParams, BricksGrantParams, BricksListAllParams, BricksListParams, BricksMintParams } from "../model";
export declare class Bricks {
    create(params: BricksCreateParams): Promise<any>;
    fundUser(params: BricksFundUserParams): Promise<any>;
    grant(params: BricksGrantParams): Promise<any>;
    list(params: BricksListParams): Promise<any>;
    listAll(params: BricksListAllParams): Promise<any>;
    mint(params: BricksMintParams): Promise<any>;
}
