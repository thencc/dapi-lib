import { describe, expect, it } from '@jest/globals';
import testGlobal from './01_setup.test';

/** Access Token */
describe('NCC token should ', () => {
    it('generate an access token successfully', async () => {
        // Access token is retrieved in setup.test.ts
        expect(testGlobal.accessToken.length).toBeGreaterThan(0);
    })
});

