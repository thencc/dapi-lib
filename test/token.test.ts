import { beforeAll, describe, expect, it } from '@jest/globals';
import TestGlobals from './setup';

/** Access Token */
describe('NCC token should ', () => {

    let testGlobal: TestGlobals;

    beforeAll(async () => {
        testGlobal = new TestGlobals();
        await testGlobal.initializeAlgonaut();
    });

    it('generate an access token successfully', async () => {
        let accessToken = await testGlobal.setAccessToken();
        expect(accessToken.length).toBeGreaterThan(0);
    })
});

