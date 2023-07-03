import {
    ValidUrl,
    CreateMilestoneParams,
    AccessTokenParams,
    PeelsCreateParams,
    PeelsListParams,
    PeelsMintParams,
    PeelsGrantParams,
    PeelsFundUserParams,
    PeelsGrantTokensParams,
    UserRegisterParams,
    UserDeregisterParams,
    UserOptIntoAppParams,
    UserOptIntoTokenParams,
    PeelsListMineParams,
    PeelsGetParams
} from './model';
import { validateParams } from './utils';

const createMilestoneUrl: ValidUrl = '/rodeo/milestone/create';
const params: CreateMilestoneParams = {
    accessToken: '',
    route: '',
    uuid: '',
    creatorAddress: '',
    url: '',
    title: '',
    description: '',
    data: '',
    project_id: '',
    approverUUID: ''
};
params.accessToken = 'asldkjflasdkjf'; // example

export class Dapi {
    constructor() {
        console.log('Initializing Dapi object');
    }

    /** TOKEN */
    public async getAccessToken(params: AccessTokenParams) {
        // Verify parameters

        // Access client
        const path: ValidUrl = '/get-access-token';
        return await postRequest(path, params);
    }

    /** PEELS */
    public async createPeelsContract(params: PeelsCreateParams) {
        const path: ValidUrl = '/peels/create';
        return await postRequest(path, params);
    }

    public async listPeelsContract(params: PeelsListParams) {
        const path: ValidUrl = '/peels/list';
        return await postRequest(path, params);
    }

    public async listAllPeels() {
        const path: ValidUrl = '/peels/list-all';
        return await postRequest(path, {});
    }

    public async listMyPeels(params: PeelsListMineParams) {
        const path: ValidUrl = '/peels/list-mine';
        return await postRequest(path, params);
    }

    public async getPeel(params: PeelsGetParams) {
        const path: ValidUrl = '/peels/get';
        return await postRequest(path, params);
    }

    public async mintPeel(params: PeelsMintParams) {
        const path: ValidUrl = '/peels/mint';
        return await postRequest(path, params);
    }

    public async grantPeel(params: PeelsGrantParams) {
        const path: ValidUrl = '/peels/grant';
        return await postRequest(path, params);
    }

    public async grantPeelTokens(params: PeelsGrantTokensParams) {
        const path: ValidUrl = '/peels/grant-tokens';
        return await postRequest(path, params);
    }

    public async fundPeelUser(params: PeelsFundUserParams) {
        const path: ValidUrl = '/peels/fund-user';
        return await postRequest(path, params);
    }

    /** User */
    public async registerAccount(params: UserRegisterParams) {
        const path: ValidUrl = '/user/register';
        return await postRequest(path, params);
    }

    public async deregisterAccount(params: UserDeregisterParams) {
        const path: ValidUrl = '/user/deregister';
        return await postRequest(path, params);
    }

    public async optIntoApp(params: UserOptIntoAppParams) {
        const path: ValidUrl = '/user/opt-into-app';
        return await postRequest(path, params);
    }

    public async optIntoToken(params: UserOptIntoTokenParams) {
        const path: ValidUrl = '/user/opt-into-token';
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

/**
 * Util functions
 */

async function postRequest(endpoint: string, params: any) {
    try {
        const validParams = validateParams(endpoint, params);
        const errorMessage = `Invalid params ${JSON.stringify(
            params
        )} for endpoint ${endpoint}`;
        if (!validParams.valid || validParams.params == null)
            throw new Error(errorMessage);
        console.log(
            `This is the type of params: ${validParams.params.constructor.name}`
        );
        if (endpoint[0] == '/') endpoint = endpoint.slice(1);
        const response = (await NCCdAPIs.call(
            endpoint,
            validParams.params
            // })) as any as NCCApiResponse;
        )) as any;
        console.log(`This is response of the call: ${JSON.stringify(response)}`);
        return response;
    } catch (e: any) {
        console.error('TODO properly surface this error: ', e);
    }
}

/**
 * NCCdAPI setup
 */

export const NCC_TOKEN_AUTH_APP_INDEX = 101209779;
export const NCC_TOKEN_INDEX = 101088863;
export const NCC_SLA_INDEX = 110525806;

// prod URL for Workers dAPIs
// const APIRootURI = 'https://dapis.thencc.workers.dev';
// local URL for Workers sAPIs
const APIRootURI = 'http://127.0.0.1:8787';

// To hit the production machine on Firebase
// const APIRootURI = 'https://nccdapi.web.app';
// const APIRootURI = 'https://us-central1-nccdapi.cloudfunctions.net/NCCdAPIsV1';
// or to hit Localhost emulator:
// const APIRootURI = 'http://localhost:5001/nccdapi/us-central1/NCCdAPIsV1';

function sanityCheck(apiEndpoint: string, data: any) {
    console.log('sanity check');
    if (!data.accessToken) {
        console.warn('YOU HAVE NO API KEY!  Just sayin');
    }

    if (!apiEndpoint) {
        throw new Error('you must provide an api endpoint!');
    }
}

// // TODO think of another way to validate accessToken for get requests
// async function validateToken(data: any) {
// 	console.log('HI I AM IN VALIDATE TOKEN');

// 	const accessToken = data.accessToken;

// 	// we probably don't want to make ourselves manage the expired token response
// 	// the validator should probably respond directly to expired tokens and halt
// 	const tokenIsValid = await validator.validate(db, accessToken);
// 	if (!tokenIsValid) {
// 		console.log('NCCdAPI error: Invalid Token, tourist');
// 	//   res.status(401).json({ error: 'invalid token' });
// 		return false;
// 	}

// 	return true;
//   }

export const NCCdAPIs = {
    call: async function (
        apiEndpoint: string,
        data: any,
        apiVersion?: string,
        method?: string
    ) {
        sanityCheck(apiEndpoint, data);
        const version = apiVersion ? apiVersion : 'v1';
        console.log(`running call to ${version}/${apiEndpoint}`);
        let jsn = {} as any;
        let response = {} as Response;
        try {
            // in 2023, i feel like we can just go with Fetch.
            if (method && method.toLowerCase() == 'get') {
                response = await fetch(`${APIRootURI}/${version}/${apiEndpoint}`, {
                    // TBD: we can make a map of API calls and their methods and look that up here
                    method: 'GET',
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            } else {
                response = await fetch(`${APIRootURI}/${version}/${apiEndpoint}`, {
                    // TBD: we can make a map of API calls and their methods and look that up here
                    method: method ? method : 'POST', // *GET, POST, PUT, DELETE, etc.
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            }

            jsn = await response.json();
            console.log('NCCdAPIs.ts: got response!', jsn);
            // return jsn as NCCdApiResponse;
            return jsn;
        } catch (er: any) {
            console.log('there was an error ', er);
            return {
                requestStatus: 'fail',
                requestError: er,
                requestErrorMessage: er.message
                // } as NCCdApiResponse;
            };
        }
    },
    requestToken() { },
    fetch: async function (apiEndpoint: string, data: any, apiVersion?: string) {
        sanityCheck(apiEndpoint, data);

        // TODO think of another way to validate accessToken for get requests
        // const tokenIsValidAndUserCanTransact = await validateToken(data);
        // if (!tokenIsValidAndUserCanTransact) throw new Error('Invalid token or user cannot transact');

        const version = apiVersion ? apiVersion : 'v1';
        console.log(`running fetch to ${version}/${apiEndpoint}`);
        let jsn = {} as any;
        try {
            // in 2022, i feel like we can just go with Fetch.
            const response = await fetch(`${APIRootURI}/${version}/${apiEndpoint}`, {
                // TBD: we can make a map of API calls and their methods and look that up here
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                cache: 'no-cache' // *default, no-cache, reload, force-cache, only-if-cached
            });

            console.log('got response!');
            jsn = await response.json();
            // return jsn as NCCdApiResponse;
            return jsn;
        } catch (er: any) {
            console.log('there was an error ', er);
            return {
                requestStatus: 'fail',
                requestError: er,
                requestErrorMessage: er.message
                // } as NCCdApiResponse;
            };
        }
    }
};
