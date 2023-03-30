import { NCCdAPIs } from "./NCCdAPIs";
class NCCLiNR {
    constructor() {
        this.accessToken = '';
    }
    static destroy() {
        if (NCCLiNR.instance) {
            NCCLiNR.instance = null;
        }
    }
    static getInstance(accessToken) {
        if (accessToken.length == 0)
            return null;
        if (!NCCLiNR.instance) {
            NCCLiNR.instance = new NCCLiNR();
        }
        NCCLiNR.instance.accessToken = accessToken;
        return NCCLiNR.instance;
    }
    async send(qText, ctx) {
        try {
            const data = {
                accessToken: this.accessToken,
                qText,
                ctx,
                respLength: 140
            };
            const response = await NCCdAPIs.call('linr/music', data);
            console.log('LiNR tests send, response is: ', response);
            return response;
        }
        catch (err) {
            console.error('there was an error: ', err);
            return null;
        }
    }
    async sendMedia(qText, ctx) {
        try {
            const data = {
                accessToken: this.accessToken,
                qText,
                ctx,
                respLength: 140
            };
            const response = await NCCdAPIs.call('linr/media', data);
            console.log('LiNR tests send, response is: ', response);
            return response;
        }
        catch (err) {
            console.error('there was an error: ', err);
            return null;
        }
    }
}
export default NCCLiNR;
//# sourceMappingURL=NCCLiNR.js.map