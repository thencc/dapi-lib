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
        console.log(`this is accountInfo! ${JSON.stringify(accountInfo)}`);
    }, 20000);

    it(' send a message successfully', async () => {
        const assetIndex = 154996946;
        const optinResult = await testGlobal.dapiObj.user.optIntoToken({
            accessToken,
            uuid: accountInfo.createdAccountUUID,
            asaId: assetIndex
        });

        console.log(`this is asset index result: ${JSON.stringify(optinResult)}`);
        let ttmParams: TTMSendParams = {
            accessToken,
            uuid: accountInfo.createdAccountUUID,
            tokenToTarget: assetIndex,
            message: 'message!!!'
        }

        const sendResult = await testGlobal.dapiObj.ttm.send(ttmParams);
        console.log(`this is send result!: ${JSON.stringify(sendResult)}`);
        expect(sendResult.status).toEqual("success");
    }, 30000);

    it.todo('receive successfully');
});
