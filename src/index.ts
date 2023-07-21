import { Bricks } from './dapis/Bricks';
import { Impression } from './dapis/Impression';
import { LiNR } from './dapis/LiNR';
import { Peels } from './dapis/Peels';
import { TTM } from './dapis/TTM';
import { User } from './dapis/User';
import {
    ValidUrl,
    AccessTokenParams,
    ListAccountsParams,
    ApiDocs
} from './model';
import { postRequest } from './utils';
import { documentation } from '../output/documentation';

export class Dapi {
    constructor() {
        console.log('Initializing Dapi object');
        this.peels = new Peels();
        this.user = new User();
        this.ttm = new TTM();
        this.bricks = new Bricks();
        this.impression = new Impression();
        this.linr = new LiNR();
        this.docs = documentation;
    }

    peels: Peels;
    user: User;
    ttm: TTM;
    bricks: Bricks;
    impression: Impression;
    linr: LiNR;
    docs: ApiDocs;

    /** TOKEN */
    public async getAccessToken(params: AccessTokenParams) {
        // Verify parameters

        // Access client
        const path: ValidUrl = '/get-access-token';
        return await postRequest(path, params);
    }

    /** List Accounts */
    public async listAccounts(params: ListAccountsParams) {
        const path: ValidUrl = '/list-accounts';
        return await postRequest(path, params);
    }
}
