import { ParamsTuple } from "./model";
/** Type validation functions */
export declare function validateParams(endpoint: string, params: any): ParamsTuple;
/**
 * Util functions
 */
export declare function postRequest(endpoint: string, params: any): Promise<any>;
export declare function sanityCheck(apiEndpoint: string, data: any): void;
