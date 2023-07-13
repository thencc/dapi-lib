import { describe, expect, it } from '@jest/globals';
import testGlobal from './01_setup.test';
import { TTMSendParams, TTMReceiveParams } from '../src/model';
import { algonautTest } from './algonaut';

/** TTM */
describe('TTM should ', () => {
    it('send successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(testGlobal.accessToken.length).toBeGreaterThan(0);
        expect(testGlobal.createdAccountUUID.length).toBeGreaterThan(0);

        const ttmSendParams: TTMSendParams = {
            accessToken: testGlobal.accessToken,
            uuid: testGlobal.createdAccountUUID,
            tokenToTarget: 0,
            message: testGlobal.generateRandomString(12)
        };
        const response = await testGlobal.dapiObj.ttm.send(ttmSendParams);
        // console.log(`this is the response for register ${JSON.stringify(response)}`);
        expect(response.status).toEqual("success");
    }, 10000);

    it('receive successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(testGlobal.accessToken.length).toBeGreaterThan(0);
        expect(testGlobal.createdAccountUUID.length).toBeGreaterThan(0);
        const ttmReceiveParams: TTMReceiveParams = {
            accessToken: testGlobal.accessToken,
            uuid: testGlobal.createdAccountUUID,
            lastRound: 0,
            config: {
                todo: ''
            }
        };
        const response = await testGlobal.dapiObj.ttm.receive(ttmReceiveParams);
        expect(response.status).toEqual("success");
    });
});
