<<<<<<< HEAD
import { describe, expect, it } from '@jest/globals';
import { ListAccountsParams, UserDeregisterParams, UserOptIntoAppParams, UserOptIntoTokenParams, UserRegisterParams } from '../src/model';
import { algonautTest } from './algonaut';
import testGlobal from './01_setup.test';

/** User */
describe('NCC user should ', () => {
    it('register a new user', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);
        expect(testGlobal.accessToken.length).toBeGreaterThan(0);

        let createdAccountUUID = testGlobal.generateRandomString(8);

        const registerUserParams: UserRegisterParams = {
            accessToken: testGlobal.accessToken,
            uuid: createdAccountUUID,
            creatorAddress: algonautTest.account!.address
        }
=======
import { beforeAll, describe, expect, it } from '@jest/globals';
import { ListAccountsParams, UserDeregisterParams, UserOptIntoAppParams, UserOptIntoTokenParams, UserRegisterParams } from '../src/model';
import { algonautTest } from './algonaut';
import TestGlobals from './setup';

/** User */
describe('NCC user should ', () => {
    let createdAccountUUID: string;
    let testArgs: string;
    let accessToken: string;
    let testGlobal: TestGlobals;

    beforeAll(async () => {
        testGlobal = new TestGlobals();
        await testGlobal.initializeAlgonaut();
        accessToken = await testGlobal.setAccessToken();
        createdAccountUUID = testGlobal.generateRandomString(8);
        testArgs = "";
    }, 20000);

    it('register a new user', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);
        expect(accessToken.length).toBeGreaterThan(0);

        const registerUserParams: UserRegisterParams = {
            accessToken: accessToken,
            uuid: createdAccountUUID,
            creatorAddress: algonautTest.account!.address
        };
>>>>>>> d3e86e0 (Refactor tests)

        const response = await testGlobal.dapiObj.user.register(registerUserParams);

        expect(response.status).toEqual("success");
        expect(response.result.length).toBeGreaterThan(0);
        expect(response.error).toBeNull();
        expect(response.result[0].createdIndex).toBeGreaterThan(0);

        let createdAccountContractIndex = response.result[0].createdIndex;
        const escrowAccount = algonautTest.getAppEscrowAccount(createdAccountContractIndex);
        expect(escrowAccount.length).toBeGreaterThan(0);
    }, 20000);

    it('list accounts', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

<<<<<<< HEAD
        expect(testGlobal.accessToken.length).toBeGreaterThan(0);
        const listAccountsParams: ListAccountsParams = {
            accessToken: testGlobal.accessToken,
=======
        expect(accessToken.length).toBeGreaterThan(0);
        const listAccountsParams: ListAccountsParams = {
            accessToken: accessToken,
>>>>>>> d3e86e0 (Refactor tests)
            creatorAddress: algonautTest.account!.address
        }
        const response = await testGlobal.dapiObj.listAccounts(listAccountsParams);
        expect(response.status).toEqual("success");
    });

<<<<<<< HEAD
});

export const optUserIntoAppTest = (appIndex: number, args: string) => {
    // Note: "args" should be a comma-separated string of args
    it('NCC user should opt into an app successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(testGlobal.accessToken.length).toBeGreaterThan(0);
        expect(testGlobal.createdAccountUUID.length).toBeGreaterThan(0);

        // Note: opting into a Peels contract does not require appArgs
        const optIntoAppParams: UserOptIntoAppParams = {
            accessToken: testGlobal.accessToken,
            uuid: testGlobal.createdAccountUUID,
            appId: appIndex,
            appArgs: args
=======
    // Note: "args" should be a comma-separated string of args
    it('opt into an app successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        expect(createdAccountUUID.length).toBeGreaterThan(0);

        // Note: opting into a Peels contract does not require appArgs
        const optIntoAppParams: UserOptIntoAppParams = {
            accessToken: accessToken,
            uuid: createdAccountUUID,
            appId: testGlobal.testPeelsContract,
            appArgs: testArgs
>>>>>>> d3e86e0 (Refactor tests)
        };

        const response = await testGlobal.dapiObj.user.optIntoApp(optIntoAppParams);
        // console.log('this is opt into latest Peel app response: ', response);
        expect(response.status).toEqual("success");
        expect(response.error).toBeNull();
        expect(response.result.status).toEqual("success");
    }, 20000);
<<<<<<< HEAD
}

export const optUserIntoAssetTest = (tokenIndex: number) => {
    it('NCC user should opt into an asset successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(testGlobal.accessToken.length).toBeGreaterThan(0);
        expect(testGlobal.createdAccountUUID.length).toBeGreaterThan(0);

        const optIntoAssetParams: UserOptIntoTokenParams = {
            accessToken: testGlobal.accessToken,
            uuid: testGlobal.createdAccountUUID,
            asaId: tokenIndex
=======

    it('opt into an asset successfully', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        expect(createdAccountUUID.length).toBeGreaterThan(0);

        const optIntoAssetParams: UserOptIntoTokenParams = {
            accessToken: accessToken,
            uuid: createdAccountUUID,
            asaId: testGlobal.testPeelsToken
>>>>>>> d3e86e0 (Refactor tests)
        };
        const response = await testGlobal.dapiObj.user.optIntoToken(optIntoAssetParams);
        expect(response.status).toEqual("success");
        expect(response.error).toBeNull();
        expect(response.result.status).toEqual("success");
    }, 20000);
<<<<<<< HEAD
}

export const deregisterUserTest = async (uuid: string) => {
    it('NCC user should be able to be deregistered', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(testGlobal.accessToken.length).toBeGreaterThan(0);
        expect(testGlobal.createdAccountUUID.length).toBeGreaterThan(0);

        const deregisterParams: UserDeregisterParams = {
            accessToken: testGlobal.accessToken,
            uuid: testGlobal.createdAccountUUID
=======

    it('be able to be deregistered', async () => {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);

        expect(accessToken.length).toBeGreaterThan(0);
        expect(createdAccountUUID.length).toBeGreaterThan(0);

        const deregisterParams: UserDeregisterParams = {
            accessToken: accessToken,
            uuid: createdAccountUUID
>>>>>>> d3e86e0 (Refactor tests)
        };
        const response = await testGlobal.dapiObj.user.deregister(deregisterParams);
        // console.log(`this is the response for register ${JSON.stringify(response)}`);
        expect(response.status).toEqual("success");
    }, 10000);
<<<<<<< HEAD
}
=======

});

>>>>>>> d3e86e0 (Refactor tests)
