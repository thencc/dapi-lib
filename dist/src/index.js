import { Bricks } from './dapis/Bricks';
import { Impression } from './dapis/Impression';
import { LiNR } from './dapis/LiNR';
import { Peels } from './dapis/Peels';
import { TTM } from './dapis/TTM';
import { User } from './dapis/User';
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
    peels;
    user;
    ttm;
    bricks;
    impression;
    linr;
    docs;
    /** TOKEN */
    async getAccessToken(params) {
        // Verify parameters
        // Access client
        const path = '/get-access-token';
        return await postRequest(path, params);
    }
    /** List Accounts */
    async listAccounts(params) {
        const path = '/list-accounts';
        return await postRequest(path, params);
    }
}
