import { ImpressionCreateParams, ImpressionUpdateAllParams, ImpressionUpdateOneParams } from "../model";
export declare class Impression {
    create(params: ImpressionCreateParams): Promise<any>;
    updateAll(params: ImpressionUpdateAllParams): Promise<any>;
    updateOne(params: ImpressionUpdateOneParams): Promise<any>;
}
