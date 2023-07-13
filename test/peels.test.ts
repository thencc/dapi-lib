import { beforeAll, describe, expect, it } from '@jest/globals';
import { PeelsCreateParams, PeelsListParams, PeelsMintParams, PeelsGetParams, PeelsFundUserParams, PeelsGrantParams, PeelsGrantTokensParams } from '../src/model';
import { algonautTest } from './algonaut';
import testGlobal from './01_setup.test';
import { beforeEach } from 'node:test';
import { optUserIntoAppTest, optUserIntoAssetTest } from './user.test';

/** Peels */
describe('Peels contract should ', () => {
    beforeAll(async () => {
        it('fetch contract by creator address', async () => {
            expect(algonautTest.account).not.toBeNull();
            expect(algonautTest.account?.address.length).toBeGreaterThan(0);
            expect(testGlobal.accessToken.length).toBeGreaterThan(0);

            const listPeelsParams: PeelsListParams = {
                accessToken: testGlobal.accessToken,
                creatorAddress: algonautTest.account!.address
            };

            const response = await testGlobal.dapiObj.peels.list(listPeelsParams);
            // console.log('list peels contract is: ', response);
            expect(response.data.length).toBeGreaterThan(0);
            expect(response.data[0]["creator_address"]).toEqual(algonautTest.account?.address);

            // Sets global variable latestPeel
            testGlobal.latestPeel = response.data[response.data.length - 1];
        }, 10000);
    });

    beforeEach(async () => {
        if (Object.keys(testGlobal.latestPeel).length > 0) {
            it('get a specific contract', async () => {
                expect(algonautTest.account).not.toBeNull();
                expect(algonautTest.account?.address.length).toBeGreaterThan(0);

                expect(testGlobal.accessToken.length).toBeGreaterThan(0);
                const getPeelParams: PeelsGetParams = {
                    accessToken: testGlobal.accessToken,
                    contractId: testGlobal.latestPeel.appIndex
                };
                const response = await testGlobal.dapiObj.peels.get(getPeelParams);
                // console.log(`response is ${JSON.stringify(response)}`);
                expect(response.data.address.length).toBeGreaterThan(0);
                testGlobal.latestPeel = response.data;
            });

            if (testGlobal.latestPeel.appIndex > 0) {
                optUserIntoAppTest(testGlobal.latestPeel.appIndex, "");
            }

            // Note: tokenIndex within latestPeel is a string type
            if (typeof testGlobal.latestPeel.tokenIndex == "string" &&
                testGlobal.latestPeel.tokenIndex.length > 0) {
                const tokenIndex = parseInt(testGlobal.latestPeel.tokenIndex);
                optUserIntoAssetTest(tokenIndex);
            }
            if (typeof testGlobal.latestPeel.tokenIndex == "number" &&
                testGlobal.latestPeel.tokenIndex > 0) {
                optUserIntoAssetTest(testGlobal.latestPeel.tokenIndex);
            }
        }
    });

    it('be created successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);
        expect(testGlobal.accessToken.length).toBeGreaterThan(0);

        const createPeelsParams: PeelsCreateParams = {
            accessToken: testGlobal.accessToken,
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

    }, 20000);

    it('fetch all contracts', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(testGlobal.accessToken.length).toBeGreaterThan(0);

        const response = await testGlobal.dapiObj.peels.listAll();
        // console.log('list all peels is: ', response);

        expect(response.data.length).toBeGreaterThan(0);
    });
    it('mint a contract successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(testGlobal.accessToken.length).toBeGreaterThan(0);
        // console.log('this is latest peel', latestPeel);
        expect(Object.keys(testGlobal.latestPeel).length).toBeGreaterThan(0);

        const mintPeelParams: PeelsMintParams = {
            accessToken: testGlobal.accessToken,
            appId: testGlobal.latestPeel.appIndex,
            tokenName: testGlobal.generateRandomString(3),
            tokenUrl: testGlobal.generateRandomString(5),
            totalTokens: 3
        };
        const response = await testGlobal.dapiObj.peels.mint(mintPeelParams);
        // console.log('minted latest peel is: ', response);

        expect(response.data.status).toEqual("success");
        expect(response.data.txId.length).toBeGreaterThan(0);
    }, 20000);

    it('grant a peel amount successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(testGlobal.accessToken.length).toBeGreaterThan(0);
        // console.log('this is latest peel', latestPeel);
        expect(Object.keys(testGlobal.latestPeel).length).toBeGreaterThan(0);
        expect(testGlobal.toAddress.length).toBeGreaterThan(0);

        // toAddress must be opted into appIndex!


        const grantPeelParams: PeelsGrantParams = {
            accessToken: testGlobal.accessToken,
            appId: testGlobal.latestPeel.appIndex,
            grantToAddress: testGlobal.toAddress,
            totalGrant: 10
        };
        expect(grantPeelParams.totalGrant).toBeGreaterThan(0);
        expect(grantPeelParams.grantToAddress.length).toBeGreaterThan(0);
        const response = await testGlobal.dapiObj.peels.grant(grantPeelParams);
        // console.log('granted latest peel is: ', response);
        expect(response.result.status).toEqual('success');
    }, 10000);
    it('grant tokens from a peels contract successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(testGlobal.accessToken.length).toBeGreaterThan(0);
        // console.log('this is latest peel', latestPeel);
        expect(Object.keys(testGlobal.latestPeel).length).toBeGreaterThan(0);
        // const toAddress: string = process.env.TO_ADDRESS ? process.env.TO_ADDRESS : '';
        expect(testGlobal.toAddress.length).toBeGreaterThan(0);
        const appIndex = typeof testGlobal.latestPeel.appIndex == 'number' ? testGlobal.latestPeel.appIndex : parseInt(testGlobal.latestPeel.appIndex);
        const tokenIndex = typeof testGlobal.latestPeel.tokenIndex == 'number' ? testGlobal.latestPeel.tokenIndex : parseInt(testGlobal.latestPeel.tokenIndex);

        const grantPeelTokenParams: PeelsGrantTokensParams = {
            accessToken: testGlobal.accessToken,
            appId: appIndex,
            totalTokens: 1,
            grantToAddress: testGlobal.toAddress,
            tokenId: tokenIndex
        };

        // console.log(`grantPeelTokenParams is ${JSON.stringify(grantPeelTokenParams)}`);

        expect(grantPeelTokenParams.tokenId).toBeGreaterThan(0);
        expect(grantPeelTokenParams.grantToAddress.length).toBeGreaterThan(0);
        const response = await testGlobal.dapiObj.peels.grantTokens(grantPeelTokenParams);
        // console.log('granted latest peel tokens is: ', response);
        expect(response.result.status).toEqual('success');
        expect(response.result.txId.length).toBeGreaterThan(0);
    }, 10000);
    it('fund a user successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(testGlobal.accessToken.length).toBeGreaterThan(0);
        // console.log('this is latest peel', latestPeel);
        expect(Object.keys(testGlobal.latestPeel).length).toBeGreaterThan(0);

        const fundPeelParams: PeelsFundUserParams = {
            address: testGlobal.toAddress,
            contractId: testGlobal.latestPeel.appIndex,
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