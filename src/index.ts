import NCCHappyDapi from './dapis/NCCHappyDapi';
import NCCEndUser from './end-user/NCCEndUser';
import { NCCDapiConfig } from './types';

export * from './types';
export default class dapiLib {
    dapis: NCCHappyDapi | null = null;
    endUser: NCCEndUser | null = null; // TODO

    public constructor(config: NCCDapiConfig) {
        if (!config.algonaut) throw new Error('Invalid algonaut instance');

        // Initialize Happy Dapi
        this.dapis = new NCCHappyDapi(config.excludes);
        this.dapis.init(config.algonaut);
        console.log('Initialized happy dapi with algonaut instance');
    }

}

// class dapiLib {
//     types: {
//         // request
//         // response
//     }
//     dAPIs: {
//         config: {
//             // configure which dAPIs to use in dApp
//             // algonaut config for NCCToken
//         },
//         NCCToken: {
//             // required
//             // configure SLA contract, get access token
//         },
//         NCCUser: {
//             // required?
//             // approve user requests if admin of an org ? or is this end-user?
//         },
//         NCCRodeo: {},
//         NCCTTM: {},
//         NCCLiNR: {},
//         NCCBricks: {},
//         NCCPeels: {}
//     },
// }


/**
 * //     endUser: {

        // UUID --> contract UUID --> end user .optin
        // RodeoOrg.addMember(uuid[]);
        // user sitting in database, NCC transacts in place
//             // rodeo/project vote
//             // rodeo/task accept

//             // flow for new Algo account to NCC user

//             // what other API calls should we enable for end-user?
//             //      especially if revenue stream is from NCC access token-gated dAPIs?
//     }
 */