"use strict";
/**
 * NCCdAPI setup
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NCCdAPIs = exports.NCC_SLA_INDEX = exports.NCC_TOKEN_INDEX = exports.NCC_TOKEN_AUTH_APP_INDEX = void 0;
const utils_1 = require("./utils");
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: `test/.env.${process.env.NODE_ENV}` });
exports.NCC_TOKEN_AUTH_APP_INDEX = process.env.NCC_TOKEN_AUTH_APP_INDEX ? parseInt(process.env.NCC_TOKEN_AUTH_APP_INDEX) : -1;
exports.NCC_TOKEN_INDEX = process.env.NCC_TOKEN_INDEX ? parseInt(process.env.NCC_TOKEN_INDEX) : -1;
exports.NCC_SLA_INDEX = process.env.NCC_SLA_INDEX ? parseInt(process.env.NCC_SLA_INDEX) : -1;
// prod URL for Workers dAPIs
const APIRootURI = process.env.ROOT_URI ? process.env.ROOT_URI : "Undefined ROOT_URI";
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
exports.NCCdAPIs = {
    call: function (apiEndpoint, data, apiVersion, method) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, utils_1.sanityCheck)(apiEndpoint, data);
            const version = apiVersion ? apiVersion : 'v1';
            console.log(`running call to ${version}/${apiEndpoint}`);
            let jsn = {};
            let response = {};
            try {
                // in 2023, i feel like we can just go with Fetch.
                if (method && method.toLowerCase() == 'get') {
                    response = yield fetch(`${APIRootURI}/${version}/${apiEndpoint}`, {
                        // TBD: we can make a map of API calls and their methods and look that up here
                        method: 'GET',
                        cache: 'no-cache',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                }
                else {
                    response = yield fetch(`${APIRootURI}/${version}/${apiEndpoint}`, {
                        // TBD: we can make a map of API calls and their methods and look that up here
                        method: method ? method : 'POST',
                        cache: 'no-cache',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                }
                jsn = yield response.json();
                console.log('NCCdAPIs.ts: got response!', jsn);
                // return jsn as NCCdApiResponse;
                return jsn;
            }
            catch (er) {
                console.log('there was an error ', er);
                return {
                    requestStatus: 'fail',
                    requestError: er,
                    requestErrorMessage: er.message
                    // } as NCCdApiResponse;
                };
            }
        });
    },
    requestToken() { },
    fetch: function (apiEndpoint, data, apiVersion) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, utils_1.sanityCheck)(apiEndpoint, data);
            // TODO think of another way to validate accessToken for get requests
            // const tokenIsValidAndUserCanTransact = await validateToken(data);
            // if (!tokenIsValidAndUserCanTransact) throw new Error('Invalid token or user cannot transact');
            const version = apiVersion ? apiVersion : 'v1';
            console.log(`running fetch to ${version}/${apiEndpoint}`);
            let jsn = {};
            try {
                // in 2022, i feel like we can just go with Fetch.
                const response = yield fetch(`${APIRootURI}/${version}/${apiEndpoint}`, {
                    // TBD: we can make a map of API calls and their methods and look that up here
                    method: 'GET',
                    cache: 'no-cache' // *default, no-cache, reload, force-cache, only-if-cached
                });
                console.log('got response!');
                jsn = yield response.json();
                // return jsn as NCCdApiResponse;
                return jsn;
            }
            catch (er) {
                console.log('there was an error ', er);
                return {
                    requestStatus: 'fail',
                    requestError: er,
                    requestErrorMessage: er.message
                    // } as NCCdApiResponse;
                };
            }
        });
    }
};
