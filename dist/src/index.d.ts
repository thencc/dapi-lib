import { Bricks } from './dapis/Bricks';
import { Impression } from './dapis/Impression';
import { LiNR } from './dapis/LiNR';
import { Peels } from './dapis/Peels';
import { TTM } from './dapis/TTM';
import { User } from './dapis/User';
import { AccessTokenParams, ListAccountsParams, ApiDocs } from './model';
import { Rodeo } from './dapis/Rodeo';
export declare class Dapi {
    constructor();
    peels: Peels;
    user: User;
    ttm: TTM;
    bricks: Bricks;
    impression: Impression;
    linr: LiNR;
    rodeo: Rodeo;
    docs: ApiDocs;
    /** TOKEN */
    getAccessToken(params: AccessTokenParams): Promise<any>;
    /** List Accounts */
    listAccounts(params: ListAccountsParams): Promise<any>;
}
