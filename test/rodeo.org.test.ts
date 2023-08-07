import { beforeAll, describe, expect, it } from '@jest/globals';
import { algonautTest } from './algonaut';
import TestGlobals from './setup';
import { RodeoOrgCreateParams } from '../src/model';

/** Rodeo */
describe('Rodeo org should', () => {
    let accountInfo: any;
    let accessToken: string;
    let testGlobal: TestGlobals;

    beforeAll(async () => {
        testGlobal = new TestGlobals();
        await testGlobal.initializeAlgonaut();
        accessToken = await testGlobal.setAccessToken();
        accountInfo = await testGlobal.setAccountInfo(accessToken);
        console.log(`this is accountInfo! ${JSON.stringify(accountInfo)}`);
    }, 20000);

    it(' create an org successfully', async () => {
        const assetIndex = 154996946;
        const optinResult = await testGlobal.dapiObj.user.optIntoToken({
            accessToken,
            uuid: accountInfo.createdAccountUUID,
            asaId: assetIndex
        });

        console.log(`this is asset index result: ${JSON.stringify(optinResult)}`);
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
        console.log(`this is send result!: ${JSON.stringify(createResult)}`);
        expect(createResult.status).toEqual("success");
    }, 30000);

    it.todo('receive successfully');
});