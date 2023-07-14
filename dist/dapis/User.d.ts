import { UserRegisterParams, UserDeregisterParams, UserOptIntoAppParams, UserOptIntoTokenParams } from "../model";
export declare class User {
    constructor();
    /** User */
    register(params: UserRegisterParams): Promise<any>;
    deregister(params: UserDeregisterParams): Promise<any>;
    optIntoApp(params: UserOptIntoAppParams): Promise<any>;
    optIntoToken(params: UserOptIntoTokenParams): Promise<any>;
}
