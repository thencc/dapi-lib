// import * as admin from 'firebase-admin';
// import { validator } from '../../../firebase/functions/src/_shared/tokenValidator';

// export type NCCdApiResponse = {
// 	txStatus?: TTMMessage[];
// 	requestStatus: 'success' | 'fail';
// 	requestError?: null | string;
// 	requestErrorMessage?: null | string;
// 	data: any;
// 	message: string;
// 	valid: boolean;
// };;

export const NCC_TOKEN_AUTH_APP_INDEX = 101209779;
export const NCC_TOKEN_INDEX = 101088863;
export const NCC_SLA_INDEX = 110525806;
export const USDC_TOKEN_INDEX = 10458941;

//
// To hit the production machine
const APIRootURI = 'https://nccdapi.web.app';
//
// or to hit Localhost emulator:
//

// const APIRootURI = 'http://localhost:5001/nccdapi/us-central1/NCCdAPIsV1';

//
//

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
	call: async function (apiEndpoint: string, data: any, apiVersion?: string) {
		sanityCheck(apiEndpoint, data);
		const version = apiVersion ? apiVersion : 'v1';
		console.log(`running call to ${version}/${apiEndpoint}`);
		let jsn = {} as any;
		try {
			// in 2022, i feel like we can just go with Fetch.
			const response = await fetch(`${APIRootURI}/${version}/${apiEndpoint}`, {
				// TBD: we can make a map of API calls and their methods and look that up here
				method: 'POST', // *GET, POST, PUT, DELETE, etc.
				cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			jsn = await response.json();
			console.log('NCCdAPIs.ts: got response!', jsn);
			return jsn as any; // NCCdApiResponse;
		} catch (er: any) {
			console.log('there was an error ', er);
			return {
				requestStatus: 'fail',
				requestError: er,
				requestErrorMessage: er.message
			} as any; // NCCdApiResponse;
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
			return jsn as any; // NCCdApiResponse;
		} catch (er: any) {
			console.log('there was an error ', er);
			return {
				requestStatus: 'fail',
				requestError: er,
				requestErrorMessage: er.message
			} as any; // NCCdApiResponse;
		}
	}
};

export const NCCdAPI_DOCS = await NCCdAPIs.call('docs', {});
