// To hit the production machine
const APIRootURI = 'https://nccdapi.web.app';
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
