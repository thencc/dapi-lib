/**
 * NCCdAPI setup
 */

import { APIRootURI } from "./constants";
import { sanityCheck } from "./utils";

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
