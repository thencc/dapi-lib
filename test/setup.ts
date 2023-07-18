import { expect } from "@jest/globals";
import { Dapi } from "../src";

import * as dotenv from 'dotenv';
import { algonautTest } from "./algonaut";
import { promptAccessToken } from "../src/endUser";
import { UserRegisterParams } from "../src/model";

if (process !== undefined) dotenv.config({ path: `test/.env.${process.env.NODE_ENV}` });
const creatorMnemonic: string = process.env.CREATOR_MNEMONIC ? process.env.CREATOR_MNEMONIC : "";


/**
 * On default, the tests will run with Purestake nodes, but you can also use a locally deployed sandbox
 * Prerequisites if you want to use sandbox:
 * - ./sandbox up
 * - export 1 sandbox mnemonic as $CREATOR_MNEMONIC env variable
 */


/**
 * These values can be accessed by all tests in the suite
 */
export default class TestGlobals {
    // private static instance: TestGlobals;
    dapiObj: Dapi;
    testPeelsContract: number;
    testPeelsToken: number;

    constructor() {
        this.dapiObj = new Dapi();

        this.testPeelsContract = 240258410;
        this.testPeelsToken = 240258537;
    }

    // public static getInstance(): TestGlobals {
    //     if (!TestGlobals.instance) {
    //         TestGlobals.instance = new TestGlobals();
    //     }
    //     return TestGlobals.instance;
    // }

    /** Utils */
    public generateRandomString(length: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }

    public async setAccountInfo(accessToken: string) {
        let testGlobal = {} as any;
        testGlobal.createdAccountUUID = this.generateRandomString(8);

        expect(algonautTest.account?.address.length).toBeGreaterThan(0);
        const registerUserParams: UserRegisterParams = {
            accessToken,
            uuid: testGlobal.createdAccountUUID,
            creatorAddress: algonautTest.account!.address
        };
        const response = await this.dapiObj.user.register(registerUserParams);
        expect(response.status).toEqual("success");
        expect(response.result.length).toBeGreaterThan(0);
        expect(response.error).toBeNull();
        expect(response.result[0].createdIndex).toBeGreaterThan(0);

        testGlobal.createdAccountContractIndex = response.result[0].createdIndex;

        const escrowAccount = algonautTest.getAppEscrowAccount(testGlobal.createdAccountContractIndex);
        expect(escrowAccount.length).toBeGreaterThan(0);

        testGlobal.toAddress = escrowAccount;
        return testGlobal;
    }

    public async setAccessToken() {
        expect(algonautTest.account).not.toBeNull();
        expect(algonautTest.account?.address.length).toBeGreaterThan(0);
        const accessTokenParams = await promptAccessToken(algonautTest);
        expect(accessTokenParams.address).toEqual(algonautTest.account?.address);
        expect(accessTokenParams.signedTx.length).toBeGreaterThan(0);
        expect(accessTokenParams.txId.length).toBeGreaterThan(0);
        const response = await this.dapiObj.getAccessToken(accessTokenParams);
        // console.log('ncc token response is: ', response);
        expect(response.status).toEqual("success");

        let accessToken: string = response.result.token;

        expect(accessToken.length).toBeGreaterThan(0);
        return accessToken;
    }

    public async initializeAlgonaut() {
        const initWallet = {
            mnemonic: {
                config: {
                    mnemonic: creatorMnemonic
                }
            }
        };

        await algonautTest.connect(initWallet);

        const status = await algonautTest.checkStatus();
        console.log(`status of algonaut is ${status}`);
    }
}