import { Peels } from './Peels';
import { TTM } from './TTM';
import { User } from './User';
import { CreateMilestoneParams, AccessTokenParams, ListAccountsParams } from './model';
export declare class Dapi {
    constructor();
    peels: Peels;
    user: User;
    ttm: TTM;
    /** TOKEN */
    getAccessToken(params: AccessTokenParams): Promise<any>;
    /** List Accounts */
    listAccounts(params: ListAccountsParams): Promise<any>;
    /** Rodeo */
    createMilestone(params: CreateMilestoneParams): void;
}
