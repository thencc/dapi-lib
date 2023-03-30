import { NCCdAPIs } from "../src/NCCdAPIs";

export type UserResponse = {
    data: any;
    message: string;
    status: string;
}

export type RegisterResponse = {
    status: string;
    message: string;
    contractId: number;
    contractAddress: string;
    result: {
        status: string;
        message: string;
        txId: string;
        createdIndex: number;
        meta: any;
    };
    fundAndOptInStatus: any;
    dataTransactionStatus: any;
};

export type DeRegisterResponse = {
    status: string;
    message: string;
    contractId: number;
    contractAddress: string;
    result: {
        status: string;
        message: string;
        txId: string;
    }
}

export type FundOptInResponse = {
    status: string;
    message: string;
    fundAndOptInStatus: {
        status: string;
        message: string;
        txId: string;
    }
}

export type OptInAppResponse = {
    status: string;
    message: string;
    optInStatus: {
        status: string;
        message: string;
        txId: string;
    }
}

class NCCUser {
    private static instance: NCCUser | null;

    private accessToken: string = '';

    private constructor() { }

    public static getInstance(accessToken: string) {
        if (accessToken.length == 0) return null;
        if (!NCCUser.instance) {
            NCCUser.instance = new NCCUser();
        }
        NCCUser.instance.accessToken = accessToken;
        return NCCUser.instance;
    }

    public static destroy() {
        if (NCCUser.instance) {
            NCCUser.instance = null;
        }
    }

    public async registerUser(uuid: string, creatorAddr: string): Promise<any> {
        if (this.accessToken && uuid.length && creatorAddr.length) {
            console.log('registering user...');

            const response = await NCCdAPIs.call('register-account', {
                accessToken: this.accessToken,
                uuid: uuid,
                creatorAddress: creatorAddr
            }) as RegisterResponse;

            console.log(response);
            return response
        } else {
            alert('you need a token and some data!');
            return null;
        }
    }

    public async deregisterUser(uuid: string) {
        if (this.accessToken && uuid.length) {
            console.log('de-registering user');
            const response = await NCCdAPIs.call('deregister-account', {
                accessToken: this.accessToken,
                uuid: uuid
            }) as DeRegisterResponse;
            console.log(response);
            return response;
        } else {
            alert('you need a token and some data!');
            return null;
        }
    }

    public async fundAccount(uuid: string, amount: number, asaId: number) {
        if (this.accessToken && uuid.length && amount) {
            console.log('funding...');

            const response = await NCCdAPIs.call('fund-account', {
                accessToken: this.accessToken,
                uuid: uuid,
                asaId: asaId,
                amount: amount
            });

            console.log(response);
            return response as FundOptInResponse;
        } else {
            alert('you need a token and some data!');
            return null;
        }
    }

    public async getAllAccounts(creatorAddr: string) {
        if (this.accessToken && creatorAddr.length > 0) {
            const response = await NCCdAPIs.call('list-accounts', {
                accessToken: this.accessToken,
                creatorAddress: creatorAddr
            });

            console.log('got response!', response);
            return response as UserResponse;
        }
        return null;
    }

    public async accountOptInApp(uuid: string, appId: number, appArgs: string) {
        if (this.accessToken && uuid.length) {
            console.log('opting account into app...');

            const response = await NCCdAPIs.call('opt-account-into-app', {
                accessToken: this.accessToken,
                uuid: uuid,
                appId: appId,
                appArgs: appArgs
            });

            console.log(response);
            return response as OptInAppResponse;
        } else {
            alert('you need a token and some data!');
            return null;
        }
    }

    public async accountOptInToken(uuid: string, asaId: number) {
        if (this.accessToken && uuid.length && asaId) {
            console.log('opt in...');

            const response = await NCCdAPIs.call('opt-account-into-token', {
                accessToken: this.accessToken,
                uuid: uuid,
                asaId: asaId
            });

            console.log(response);
            return response as FundOptInResponse;
        } else {
            alert('you need a token and some data!');
            return null;
        }
    }
}

export default NCCUser;