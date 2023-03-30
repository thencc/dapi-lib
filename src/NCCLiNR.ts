import { NCCdAPIs } from "./NCCdAPIs";

export type LiNRResponse = {
    status: string;
    message: string;
    error: string;
    data: {
        status: string;
        engine: number;
        content: string;
    }
};

class NCCLiNR {
    private static instance: NCCLiNR | null;

    private accessToken: string = '';

    private constructor() { }

    public static destroy() {
        if (NCCLiNR.instance) {
            NCCLiNR.instance = null;
        }
    }

    public static getInstance(accessToken: string) {
        if (accessToken.length == 0) return null;
        if (!NCCLiNR.instance) {
            NCCLiNR.instance = new NCCLiNR();
        }

        NCCLiNR.instance.accessToken = accessToken;
        return NCCLiNR.instance;
    }

    async send(qText: string, ctx: string) {
        try {
            const data = {
                accessToken: this.accessToken,
                qText,
                ctx,
                respLength: 140
            }
            const response = await NCCdAPIs.call('linr/music', data) as LiNRResponse;

            console.log('LiNR tests send, response is: ', response);
            return response;
        } catch (err) {
            console.error('there was an error: ', err);
            return null;
        }
    }

    async sendMedia(qText: string, ctx: string) {
        try {
            const data = {
                accessToken: this.accessToken,
                qText,
                ctx,
                respLength: 140
            };
            const response = await NCCdAPIs.call('linr/media', data) as LiNRResponse;
            console.log('LiNR tests send, response is: ', response);
            return response;
        } catch (err) {
            console.error('there was an error: ', err);
            return null;
        }
    }

}

export default NCCLiNR;