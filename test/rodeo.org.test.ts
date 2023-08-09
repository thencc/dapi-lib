import { beforeAll, describe, expect, it } from '@jest/globals';
import { algonautTest } from './algonaut';
import TestGlobals from './setup';
import { RodeoOrgAddMemberParams, RodeoOrgCreateParams, RodeoOrgFetchParams, RodeoOrgMintParams, TTMReceiveParams, TTMSendParams } from '../src/model';

/** Rodeo */
describe('Rodeo tests ', () => {
    let accountInfo: any;
    let accessToken: string;
    let testGlobal: TestGlobals;
    let orgIndex: string;
    let uuid: string = 'to-be-implemented';
    let memberAsset: number;

    beforeAll(async () => {
        testGlobal = new TestGlobals();
        await testGlobal.initializeAlgonaut();
        accessToken = await testGlobal.setAccessToken();
        accountInfo = await testGlobal.setAccountInfo(accessToken);
        console.log(`this is accountInfo! ${JSON.stringify(accountInfo)}`);
    }, 20000);

    describe('Rodeo org should ', () => {
        it('create an org successfully', async () => {
            expect(algonautTest.account).not.toBeUndefined();
            expect(algonautTest.account?.address.length).toBeGreaterThan(0);
            let orgCreateParams: RodeoOrgCreateParams = {
                orgName: testGlobal.generateRandomString(12),
                url: testGlobal.generateRandomString(10),
                description: testGlobal.generateRandomString(15),
                totalMembers: 3,
                totalAdmins: 3,
                accessToken,
                creatorAddress: algonautTest.account!.address
            };

            const createResult = await testGlobal.dapiObj.rodeo.org.create(orgCreateParams);
            expect(createResult.status).toEqual("success");
            expect(createResult.result.appIndex).toBeGreaterThan(0);
            orgIndex = createResult.result.appIndex.toString();
        }, 30000);

        it('mint an org token successfully', async () => {
            let orgMintParams: RodeoOrgMintParams = {
                id: orgIndex,
                accessToken,
                uuid
            };
            const mintResult = await testGlobal.dapiObj.rodeo.org.mint(orgMintParams);
            expect(mintResult.status).toEqual("success");
        }, 20000);

        it('fetch an org successfully', async () => {
            let fetchParams: RodeoOrgFetchParams = {
                accessToken,
                uuid,
                id: orgIndex
            };
            const fetchResult = await testGlobal.dapiObj.rodeo.org.get(fetchParams);
            expect(fetchResult.memberAssetId).toBeGreaterThan(0);
            memberAsset = fetchResult.memberAssetId;
        }, 10000)
    })

    /** TTMing a Rodeo org */
    describe('Integrating Rodeo and TTM: ', () => {
        it('user opts into member asset ID', async () => {
            const optinResult = await testGlobal.dapiObj.user.optIntoToken({
                accessToken,
                uuid: accountInfo.createdAccountUUID,
                asaId: memberAsset
            });
            expect(optinResult.status).toEqual("success");
        }, 30000);

        it('user receives a member token', async () => {
            const addMemberParams: RodeoOrgAddMemberParams = {
                accessToken,
                uuid,
                memberUUID: accountInfo.createdAccountUUID,
                id: orgIndex
            };
            const addResult = await testGlobal.dapiObj.rodeo.org.addMember(addMemberParams);
            expect(addResult.status).toEqual("success");
        }, 20000);

        it('user sends a TTM to Rodeo organization', async () => {
            const ttmParams: TTMSendParams = {
                accessToken,
                uuid: accountInfo.createdAccountUUID,
                tokens: memberAsset,
                message: testGlobal.generateRandomString(20),
                type: 'H',
                files: '',
                part: 1,
                uri: ''
            };
            const sendResult = await testGlobal.dapiObj.ttm.send(ttmParams);
            expect(sendResult.status).toEqual("success");
        }, 20000);
        it('user receives a TTM from Rodeo organization', async () => {
            const relayResult = await testGlobal.dapiObj.ttm.relay();
            const ttmParams: TTMReceiveParams = {
                accessToken,
                uuid: accountInfo.createdAccountUUID,
                lastRound: 0
            };
            const receiveResult = await testGlobal.dapiObj.ttm.receive(ttmParams);
            console.log(`this is receive result: ${JSON.stringify(receiveResult)}`);
            expect(receiveResult.status).toEqual("success");
            expect(receiveResult.result.length).toBeGreaterThan(0);
        }, 20000);
    })
});