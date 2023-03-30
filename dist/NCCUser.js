import { NCCdAPIs } from "../src/NCCdAPIs";
class NCCUser {
    constructor() {
        this.accessToken = '';
    }
    static getInstance(accessToken) {
        if (accessToken.length == 0)
            return null;
        if (!NCCUser.instance) {
            NCCUser.instance = new NCCUser();
        }
        NCCUser.instance.accessToken = accessToken;
        return NCCUser.instance;
    }
    static destroy() {
        if (NCCUser.instance) {
            NCCUser.instance = null;
        }
    }
    async registerUser(uuid, creatorAddr) {
        if (this.accessToken && uuid.length && creatorAddr.length) {
            console.log('registering user...');
            const response = await NCCdAPIs.call('register-account', {
                accessToken: this.accessToken,
                uuid: uuid,
                creatorAddress: creatorAddr
            });
            console.log(response);
            return response;
        }
        else {
            alert('you need a token and some data!');
            return null;
        }
    }
    async deregisterUser(uuid) {
        if (this.accessToken && uuid.length) {
            console.log('de-registering user');
            const response = await NCCdAPIs.call('deregister-account', {
                accessToken: this.accessToken,
                uuid: uuid
            });
            console.log(response);
            return response;
        }
        else {
            alert('you need a token and some data!');
            return null;
        }
    }
    async fundAccount(uuid, amount, asaId) {
        if (this.accessToken && uuid.length && amount) {
            console.log('funding...');
            const response = await NCCdAPIs.call('fund-account', {
                accessToken: this.accessToken,
                uuid: uuid,
                asaId: asaId,
                amount: amount
            });
            console.log(response);
            return response;
        }
        else {
            alert('you need a token and some data!');
            return null;
        }
    }
    async getAllAccounts(creatorAddr) {
        if (this.accessToken && creatorAddr.length > 0) {
            const response = await NCCdAPIs.call('list-accounts', {
                accessToken: this.accessToken,
                creatorAddress: creatorAddr
            });
            console.log('got response!', response);
            return response;
        }
        return null;
    }
    async accountOptInApp(uuid, appId, appArgs) {
        if (this.accessToken && uuid.length) {
            console.log('opting account into app...');
            const response = await NCCdAPIs.call('opt-account-into-app', {
                accessToken: this.accessToken,
                uuid: uuid,
                appId: appId,
                appArgs: appArgs
            });
            console.log(response);
            return response;
        }
        else {
            alert('you need a token and some data!');
            return null;
        }
    }
    async accountOptInToken(uuid, asaId) {
        if (this.accessToken && uuid.length && asaId) {
            console.log('opt in...');
            const response = await NCCdAPIs.call('opt-account-into-token', {
                accessToken: this.accessToken,
                uuid: uuid,
                asaId: asaId
            });
            console.log(response);
            return response;
        }
        else {
            alert('you need a token and some data!');
            return null;
        }
    }
}
export default NCCUser;
//# sourceMappingURL=NCCUser.js.map