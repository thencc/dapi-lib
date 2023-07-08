import { describe, expect, it, beforeAll } from '@jest/globals';
import { algonautTest } from './algonaut';
import { promptAccessToken } from '../src/endUser';
import { Dapi } from '../src/index';
import { PeelsCreateParams, PeelsFundUserParams, PeelsGetParams, PeelsGrantParams, PeelsGrantTokensParams, PeelsListMineParams, PeelsListParams, PeelsMintParams, UserDeregisterParams, UserOptIntoAppParams, UserOptIntoTokenParams, UserRegisterParams } from '../src/model';
import * as dotenv from 'dotenv';

dotenv.config({ path: `test/.env.${process.env.NODE_ENV}` });
const creatorMnemonic: string = process.env.CREATOR_MNEMONIC ? process.env.CREATOR_MNEMONIC : "";

/**
 * Prerequesites:
 * - ./sandbox up
 * - export 1 sandbox mnemonic as $CREATOR_MNEMONIC env variable
 */

let accessToken = '';
const DapiObj = new Dapi();
let latestPeel = {} as any;
let createdAccountUUID = '';
let createdAccountContractIndex = 0;
let toAddress = '';

beforeAll(async () => {
    console.log(`this is algonaut: ${JSON.stringify(algonautTest)}`);

    const initWallet = {
        mnemonic: {
            config: {
                mnemonic: creatorMnemonic
            }
        }
    };

    console.log('initWallet is: ', initWallet);

    await algonautTest.connect(initWallet);

    const status = await algonautTest.checkStatus();

    console.log(`status of algonaut is ${status}`);

});

/** Access Token */
describe('NCC token should ', () => {
    it('generate an access token successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        const accessTokenParams = await promptAccessToken(algonautTest);
        expect(accessTokenParams.address).toEqual(algonautTest.account?.address);
        expect(accessTokenParams.signedTx.length).toBeGreaterThan(0);
        expect(accessTokenParams.txId.length).toBeGreaterThan(0);

        const response = await DapiObj.getAccessToken(accessTokenParams);
        console.log('ncc token response is: ', response);
        expect(response.status).toEqual("success");
        accessToken = response.result.token;

        expect(accessToken.length).toBeGreaterThan(0);
    }, 10000)
});

/** User */
describe('NCC user should ', () => {
    it('register a new user', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);

        createdAccountUUID = generateRandomString(8);

        const registerUserParams: UserRegisterParams = {
            accessToken,
            uuid: createdAccountUUID,
            creatorAddress: algonautTest.account!.address
        }

        const response = await DapiObj.registerAccount(registerUserParams);

        expect(response.status).toEqual("success");
        expect(response.result.length).toBeGreaterThan(0);
        expect(response.error).toBeNull();
        expect(response.result[0].createdIndex).toBeGreaterThan(0);

        createdAccountContractIndex = response.result[0].createdIndex;
        const escrowAccount = algonautTest.getAppEscrowAccount(createdAccountContractIndex);
        expect(escrowAccount.length).toBeGreaterThan(0);
        toAddress = escrowAccount;

    }, 20000);
})

/** Peels */
describe('Peels contract should ', () => {
    it('be created successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);

        const createPeelsParams: PeelsCreateParams = {
            accessToken,
            name: generateRandomString(10),
            meta: generateRandomString(10),
            url: generateRandomString(10),
            creatorAddress: algonautTest.account!.address
        };

        const response = await DapiObj.createPeelsContract(createPeelsParams);
        // console.log('create peels contract is: ', response);

        expect(response.data.status).toEqual("success");
        expect(response.data.txId.length).toBeGreaterThan(0);
        expect(response.data.createdIndex).toBeGreaterThan(0);

    }, 20000);
    it('fetch contract by creator address', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);

        const listPeelsParams: PeelsListParams = {
            accessToken,
            creatorAddress: algonautTest.account!.address
        };

        const response = await DapiObj.listPeelsContract(listPeelsParams);
        // console.log('list peels contract is: ', response);

        expect(response.data.length).toBeGreaterThan(0);
        expect(response.data[0]["creator_address"]).toEqual(algonautTest.account?.address);
        latestPeel = response.data[response.data.length - 1];
    }, 10000);
    it('fetch all contracts', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);

        const response = await DapiObj.listAllPeels();
        // console.log('list all peels is: ', response);

        expect(response.data.length).toBeGreaterThan(0);
    });
    it('mint a contract successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        // console.log('this is latest peel', latestPeel);
        expect(Object.keys(latestPeel).length).toBeGreaterThan(0);

        const mintPeelParams: PeelsMintParams = {
            accessToken,
            appId: latestPeel.appIndex,
            tokenName: generateRandomString(3),
            tokenUrl: generateRandomString(5),
            totalTokens: 3
        };
        const response = await DapiObj.mintPeel(mintPeelParams);
        // console.log('minted latest peel is: ', response);

        expect(response.data.status).toEqual("success");
        expect(response.data.txId.length).toBeGreaterThan(0);
    }, 20000);
    it('get a specific contract', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        const getPeelParams: PeelsGetParams = {
            accessToken,
            contractId: latestPeel.appIndex
        };
        const response = await DapiObj.getPeel(getPeelParams);
        console.log(`response is ${JSON.stringify(response)}`);
        expect(response.data.address.length).toBeGreaterThan(0);
        latestPeel = response.data;
    });
});

/** User */
describe('NCC user should ', () => {
    it('opt into an app that requires 0 appArgs', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        expect(createdAccountUUID.length).toBeGreaterThan(0);
        expect(Object.keys(latestPeel).length).toBeGreaterThan(0);

        // Note: opting into a Peels contract does not require appArgs
        const optIntoAppParams: UserOptIntoAppParams = {
            accessToken,
            uuid: createdAccountUUID,
            appId: latestPeel.appIndex,
            appArgs: ''
        };

        const response = await DapiObj.optIntoApp(optIntoAppParams);
        // console.log('this is opt into latest Peel app response: ', response);

        expect(response.status).toEqual("success");
        expect(response.error).toBeNull();
        expect(response.result.status).toEqual("success");
    }, 20000);
    it('opt into an asset', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        expect(createdAccountUUID.length).toBeGreaterThan(0);
        expect(Object.keys(latestPeel).length).toBeGreaterThan(0);

        const tokenIndex = parseInt(latestPeel.tokenIndex);
        console.log(`latest peel is ${JSON.stringify(latestPeel)}`);
        console.log(`token index is ${tokenIndex}`);

        const optIntoAssetParams: UserOptIntoTokenParams = {
            accessToken,
            uuid: createdAccountUUID,
            asaId: tokenIndex
        };
        const response = await DapiObj.optIntoToken(optIntoAssetParams);
        expect(response.status).toEqual("success");
        expect(response.error).toBeNull();
        expect(response.result.status).toEqual("success");
    }, 20000);
})

/** Peels */
describe('Peels contract should ', () => {
    it('grant a peel amount successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        // console.log('this is latest peel', latestPeel);
        expect(Object.keys(latestPeel).length).toBeGreaterThan(0);
        expect(toAddress.length).toBeGreaterThan(0);

        // toAddress must be opted into appIndex!


        const grantPeelParams: PeelsGrantParams = {
            accessToken,
            appId: latestPeel.appIndex,
            grantToAddress: toAddress,
            totalGrant: 10
        };
        expect(grantPeelParams.totalGrant).toBeGreaterThan(0);
        expect(grantPeelParams.grantToAddress.length).toBeGreaterThan(0);
        const response = await DapiObj.grantPeel(grantPeelParams);
        // console.log('granted latest peel is: ', response);
    }, 10000);
    it('grant tokens from a peels contract successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        // console.log('this is latest peel', latestPeel);
        expect(Object.keys(latestPeel).length).toBeGreaterThan(0);
        // const toAddress: string = process.env.TO_ADDRESS ? process.env.TO_ADDRESS : '';
        expect(toAddress.length).toBeGreaterThan(0);
        const appIndex = typeof latestPeel.appIndex == 'number' ? latestPeel.appIndex : parseInt(latestPeel.appIndex);
        const tokenIndex = typeof latestPeel.tokenIndex == 'number' ? latestPeel.tokenIndex : parseInt(latestPeel.tokenIndex);

        const grantPeelTokenParams: PeelsGrantTokensParams = {
            accessToken,
            appId: appIndex,
            totalTokens: 1,
            grantToAddress: toAddress,
            tokenId: tokenIndex
        };

        // console.log(`grantPeelTokenParams is ${JSON.stringify(grantPeelTokenParams)}`);

        expect(grantPeelTokenParams.tokenId).toBeGreaterThan(0);
        expect(grantPeelTokenParams.grantToAddress.length).toBeGreaterThan(0);
        const response = await DapiObj.grantPeelTokens(grantPeelTokenParams);
        // console.log('granted latest peel tokens is: ', response);
        expect(response.result.status).toEqual('success');
        expect(response.result.txId.length).toBeGreaterThan(0);
    }, 10000);
    it('fund a user successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        // console.log('this is latest peel', latestPeel);
        expect(Object.keys(latestPeel).length).toBeGreaterThan(0);

        const fundPeelParams: PeelsFundUserParams = {
            address: toAddress,
            contractId: latestPeel.appIndex,
            challenge: generateRandomString(8)
        };

        expect(fundPeelParams.address.length).toBeGreaterThan(0);
        expect(fundPeelParams.contractId.length).toBeGreaterThan(0);
        expect(fundPeelParams.challenge.length).toBeGreaterThan(0);
        const response = await DapiObj.fundPeelUser(fundPeelParams);
        // console.log('funded peel is: ', response);
        expect(response.status).toEqual("success");
        expect(response.result.status).toEqual("success");
        expect(response.result.txId.length).toBeGreaterThan(0);
    }, 10000);
});

/** User */
describe('NCC user should ', () => {
    it('be able to be deregistered', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        expect(createdAccountUUID.length).toBeGreaterThan(0);

        const deregisterParams: UserDeregisterParams = {
            accessToken,
            uuid: createdAccountUUID
        };
        const response = await DapiObj.deregisterAccount(deregisterParams);
        console.log(`this is the response for register ${JSON.stringify(response)}`);
        expect(response.status).toEqual("success");
    }, 10000);
});

/** Utils */
function generateRandomString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}