import { beforeAll, describe, expect, it } from '@jest/globals';
import TestGlobals from './setup';

/** Access Token */
describe('NCC should ', () => {

    let testGlobal: TestGlobals;

    beforeAll(async () => {
        testGlobal = new TestGlobals();
        await testGlobal.initializeAlgonaut();
    });

    it('generate an access token successfully', async () => {
        let accessToken = await testGlobal.setAccessToken();
        expect(accessToken.length).toBeGreaterThan(0);
    });

    it('access docs successfully', async () => {
        expect(testGlobal.dapiObj.docs.data.length).toBeGreaterThan(0);
        expect(Object.keys(testGlobal.dapiObj.docs.project).length).toBeGreaterThan(0);
        expect(Object.keys(testGlobal.dapiObj.docs.swagDoc).length).toBeGreaterThan(0);
    });
});

