import { beforeAll, describe, expect, it } from '@jest/globals';
import { TTMSendParams, TTMReceiveParams } from '../src/model';
import { algonautTest } from './algonaut';
import TestGlobals from './setup';

/** TTM */
describe('TTM should ', () => {
    let accountInfo: any;
    let accessToken: string;
    let testGlobal: TestGlobals;

    beforeAll(async () => {
        testGlobal = new TestGlobals();
        await testGlobal.initializeAlgonaut();
        accessToken = await testGlobal.setAccessToken();
        accountInfo = await testGlobal.setAccountInfo(accessToken);
    }, 20000);

    it('send successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        expect(accountInfo.createdAccountUUID.length).toBeGreaterThan(0);

        const ttmSendParams: TTMSendParams = {
            accessToken: accessToken,
            uuid: accountInfo.createdAccountUUID,
            tokenToTarget: testGlobal.testPeelsToken,
            message: testGlobal.generateRandomString(12)
        };
        const response = await testGlobal.dapiObj.ttm.send(ttmSendParams);
        // console.log(`this is the response for register ${JSON.stringify(response)}`);
        expect(response.status).toEqual("success");
    }, 10000);

    it('receive successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        expect(accountInfo.createdAccountUUID.length).toBeGreaterThan(0);
        const ttmReceiveParams: TTMReceiveParams = {
            accessToken: accessToken,
            uuid: accountInfo.createdAccountUUID,
            lastRound: 21350945,
            config: {
                todo: ''
            }
        };
        const response = await testGlobal.dapiObj.ttm.receive(ttmReceiveParams);
        expect(response.status).toEqual("success");
    });
});
