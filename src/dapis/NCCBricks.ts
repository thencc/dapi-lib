import { NCCdAPIs } from "./NCCdAPIs";

class NCCBricks {
    private static instance: NCCBricks | null;

    private accessToken: string = '';

    private constructor() { }

    public static destroy() {
        if (NCCBricks.instance) {
            NCCBricks.instance = null;
        }
    }

    public static getInstance(accessToken: string) {
        if (accessToken.length == 0) return null;
        if (!NCCBricks.instance) {
            NCCBricks.instance = new NCCBricks();
        }

        NCCBricks.instance.accessToken = accessToken;
        return NCCBricks.instance;
    }

    async sendBricks(uuid: string, toAddress: string, toAppIndex: number) {
        try {
            const data = {
                accessToken: this.accessToken,
                uuid,
                amount: 1000, // one for now
                toAddress,
                toAppIndex,
            };
            const response = await NCCdAPIs.call('bricks/send', data);

            console.log('got response!', response);
        } catch (er) {
            console.log('there was an error ', er);
        }
    }
    async sendRickToMedia(uuid: string, toAddress: string, toAppIndex: number) {
        try {
            const data = {
                accessToken: this.accessToken,
                uuid,
                amount: 1000, // one for now
                toAddress,
                toAppIndex,
            };
            const response = await NCCdAPIs.call('bricks/send-rick', data);

            console.log('got response!', response);
        } catch (er) {
            console.log('there was an error ', er);
        }
    }

    async listBricks(creatorAddress: string) {
        try {
            if (creatorAddress.length == 0) throw new Error('Invalid creator address');
            const data = {
                accessToken: this.accessToken,
                creatorAddress
            };
            const response = await NCCdAPIs.call('bricks/list', data);
            console.log('got response!', response);
            return response;
        } catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }

    async deployMedia(uuid: string, name: string, metadata: string, price: number,
        publicPerformancePrice: number, creatorAddress: string) {
        try {
            if (uuid.length == 0) throw new Error('Invalid uuid');
            if (name.length == 0) throw new Error('Invalid name');
            if (creatorAddress.length == 0) throw new Error('Invalid creator address');
            const data = {
                accessToken: this.accessToken,
                uuid,
                name,
                metadata,
                price,
                publicPerformancePrice,
                creatorAddress,
            };
            const response = await NCCdAPIs.call('bricks/deploy-media', data);
            console.log('got response!', response);
            return response;
        } catch (er) {
            console.log('there was an error ', er);
            return null;
        }
    }
}
export default NCCBricks;