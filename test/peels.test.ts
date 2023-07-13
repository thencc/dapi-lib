import { beforeAll, describe, expect, it } from '@jest/globals';
import { PeelsCreateParams, PeelsListParams, PeelsMintParams, PeelsGetParams, PeelsFundUserParams, PeelsGrantParams, PeelsGrantTokensParams, UserOptIntoAppParams, UserOptIntoTokenParams } from '../src/model';
import { algonautTest } from './algonaut';
import TestGlobals from './setup';

/** Peels */
describe('Peels contract should ', () => {
    let testPeelsContract: number;
    let testPeelsToken: number;
    let accountInfo: any;
    let accessToken: string;
    let testGlobal: TestGlobals;

    beforeAll(async () => {
        testGlobal = new TestGlobals();
        await testGlobal.initializeAlgonaut();
        accessToken = await testGlobal.setAccessToken();
        accountInfo = await testGlobal.setAccountInfo(accessToken);
    }, 25000);

    it('be created successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);
        expect(accessToken.length).toBeGreaterThan(0);

        const createPeelsParams: PeelsCreateParams = {
            accessToken: accessToken,
            name: testGlobal.generateRandomString(10),
            meta: testGlobal.generateRandomString(10),
            url: testGlobal.generateRandomString(10),
            creatorAddress: algonautTest.account!.address
        };

        const response = await testGlobal.dapiObj.peels.create(createPeelsParams);
        // console.log('create peels contract is: ', response);

        expect(response.data.status).toEqual("success");
        expect(response.data.txId.length).toBeGreaterThan(0);
        expect(response.data.createdIndex).toBeGreaterThan(0);
        testPeelsContract = response.data.createdIndex;
    }, 20000);


    it('fetch contracts by creator address', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);
        expect(accessToken.length).toBeGreaterThan(0);

        const listPeelsParams: PeelsListParams = {
            accessToken: accessToken,
            creatorAddress: algonautTest.account!.address
        };

        const response = await testGlobal.dapiObj.peels.list(listPeelsParams);
        // console.log('list peels contract is: ', response);
        expect(response.data.length).toBeGreaterThan(0);
        expect(response.data[0]["creator_address"]).toEqual(algonautTest.account?.address);
    }, 10000);

    it('mint a contract successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        // console.log('this is latest peel', latestPeel);
        expect(testPeelsContract).toBeGreaterThan(0);

        const mintPeelParams: PeelsMintParams = {
            accessToken: accessToken,
            appId: testPeelsContract,
            tokenName: testGlobal.generateRandomString(3),
            tokenUrl: testGlobal.generateRandomString(5),
            totalTokens: 3
        };
        const response = await testGlobal.dapiObj.peels.mint(mintPeelParams);
        // console.log('minted latest peel is: ', response);

        expect(response.data.status).toEqual("success");
        expect(response.data.txId.length).toBeGreaterThan(0);
    }, 20000);

    it('get a specific contract', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        const getPeelParams: PeelsGetParams = {
            accessToken: accessToken,
            contractId: testPeelsContract.toString()
        };
        const response = await testGlobal.dapiObj.peels.get(getPeelParams);
        // console.log(`response is ${JSON.stringify(response)}`);
        expect(response.data.address.length).toBeGreaterThan(0);
        testPeelsToken = parseInt(response.data.tokenIndex);
    });

    it('fetch all contracts', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);

        const response = await testGlobal.dapiObj.peels.listAll();
        // console.log('list all peels is: ', response);

        expect(response.data.length).toBeGreaterThan(0);
    });

    // Prepare account for granting

    it('grant a peel amount successfully', async () => {
        // Note: opting into a Peels contract does not require appArgs
        const optIntoAppParams: UserOptIntoAppParams = {
            accessToken: accessToken,
            uuid: accountInfo.createdAccountUUID,
            appId: testPeelsContract,
            appArgs: ""
        };
        await testGlobal.dapiObj.user.optIntoApp(optIntoAppParams);

        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        // console.log('this is latest peel', latestPeel);
        expect(testPeelsContract).toBeGreaterThan(0);
        expect(accountInfo.toAddress.length).toBeGreaterThan(0);

        // toAddress must be opted into appIndex!

        const grantPeelParams: PeelsGrantParams = {
            accessToken: accessToken,
            appId: testPeelsContract,
            grantToAddress: accountInfo.toAddress,
            totalGrant: 10
        };
        expect(grantPeelParams.totalGrant).toBeGreaterThan(0);
        expect(grantPeelParams.grantToAddress.length).toBeGreaterThan(0);
        const response = await testGlobal.dapiObj.peels.grant(grantPeelParams);
        // console.log('granted latest peel is: ', response);
        expect(response.result.status).toEqual('success');
    }, 15000);

    it('grant tokens from a peels contract successfully', async () => {
        const optIntoAssetParams: UserOptIntoTokenParams = {
            accessToken: accessToken,
            uuid: accountInfo.createdAccountUUID,
            asaId: testPeelsToken
        };
        await testGlobal.dapiObj.user.optIntoToken(optIntoAssetParams);

        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        // console.log('this is latest peel', latestPeel);
        expect(testPeelsContract).toBeGreaterThan(0);
        // const toAddress: string = process.env.TO_ADDRESS ? process.env.TO_ADDRESS : '';
        expect(accountInfo.toAddress.length).toBeGreaterThan(0);

        const grantPeelTokenParams: PeelsGrantTokensParams = {
            accessToken: accessToken,
            appId: testPeelsContract,
            totalTokens: 1,
            grantToAddress: accountInfo.toAddress,
            tokenId: testPeelsToken
        };

        // console.log(`grantPeelTokenParams is ${JSON.stringify(grantPeelTokenParams)}`);

        expect(grantPeelTokenParams.tokenId).toBeGreaterThan(0);
        expect(grantPeelTokenParams.grantToAddress.length).toBeGreaterThan(0);
        const response = await testGlobal.dapiObj.peels.grantTokens(grantPeelTokenParams);
        // console.log('granted latest peel tokens is: ', response);
        expect(response.result.status).toEqual('success');
        expect(response.result.txId.length).toBeGreaterThan(0);
    }, 15000);

    it('fund a user successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        // console.log('this is latest peel', latestPeel);
        expect(testPeelsContract).toBeGreaterThan(0);

        const fundPeelParams: PeelsFundUserParams = {
            address: accountInfo.toAddress,
            contractId: testPeelsContract.toString(),
            challenge: testGlobal.generateRandomString(8)
        };

        expect(fundPeelParams.address.length).toBeGreaterThan(0);
        expect(fundPeelParams.contractId.length).toBeGreaterThan(0);
        expect(fundPeelParams.challenge.length).toBeGreaterThan(0);
        const response = await testGlobal.dapiObj.peels.fundUser(fundPeelParams);
        // console.log('funded peel is: ', response);
        expect(response.status).toEqual("success");
        expect(response.result.status).toEqual("success");
        expect(response.result.txId.length).toBeGreaterThan(0);
    }, 10000);
});
