import { Peels } from './Peels';
import { TTM } from './TTM';
import { User } from './User';
import {
    ValidUrl,
    CreateMilestoneParams,
    AccessTokenParams,
    ListAccountsParams
} from './model';
import { postRequest } from './utils';

export class Dapi {
    constructor() {
        console.log('Initializing Dapi object');
        this.peels = new Peels();
        this.user = new User();
        this.ttm = new TTM();
    }

    peels: Peels;
    user: User;
    ttm: TTM;

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

    /** Rodeo */
    public createMilestone(params: CreateMilestoneParams) {
        const url: ValidUrl = '/rodeo/milestone/create';

        // const url = "/evolutions/{id}".replace("{id}", params.id);
        // // or try this
        // const { id } = params;
        // const url = `/evolutions/${id}`;

        // TODO make client
        // must be flexible between firebase and cloudflare, with a priority on cloudflare
        // also write tests
    }
}
