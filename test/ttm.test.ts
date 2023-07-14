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

    it.todo('send successfully');

    it.todo('receive successfully');
});
