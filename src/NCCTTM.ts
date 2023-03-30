import Algonaut from "@thencc/algonautjs";
import { NCCdAPIs } from "./NCCdAPIs";

export type TTMConfig = {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

export type TTMMessage = {
    id: string;
    messageType: string;
    messageTokens: string[];
    messageString: string;
    messageRound: number;
    createdAt: any;
    status: number;
};

class NCCTTM {
    private static instance: NCCTTM | null;

    private accessToken: string = '';
    private algonaut: Algonaut | null = null;

    private constructor() { }

    public static destroy() {
        if (NCCTTM.instance) {
            NCCTTM.instance = null;
        }
    }

    public static getInstance(accessToken: string, algonaut: Algonaut) {
        if (accessToken.length == 0) return null;
        if (!NCCTTM.instance) {
            NCCTTM.instance = new NCCTTM();
        }
        NCCTTM.instance.algonaut = algonaut;
        NCCTTM.instance.accessToken = accessToken;
        return NCCTTM.instance;
    }

    validConfig(config: TTMConfig) {
        if (config.apiKey.length == 0 || config.appId.length == 0 ||
            config.authDomain.length == 0 ||
            config.messagingSenderId.length == 0 ||
            config.projectId.length == 0 ||
            config.storageBucket.length == 0) {
            return false;
        }
        return true;
    }

    async receive(uuid: string, lastRound: number, config: TTMConfig) {
        try {
            if (uuid.length == 0) {
                throw new Error('Invalid UUID');
            } else if (!this.validConfig(config)) {
                throw new Error('Invalid TTM config');
            }

            const data = {
                accessToken: this.accessToken,
                uuid,
                lastRound,
                config
            }

            const response = await NCCdAPIs.call('ttm/receive', data);
            return response;
        } catch (err) {
            console.error('there was an error: ', err);
            return null;
        }
    }

    async send(uuid: string, message: string, tokenToTarget: number) {
        try {
            if (!tokenToTarget || tokenToTarget == 0) {
                throw new Error('Invalid token target value');
            } else if (!message) {
                throw new Error('Invalid message');
            } else if (uuid.length == 0) {
                throw new Error('Invalid UUID');
            }

            const data = {
                accessToken: this.accessToken,
                uuid,
                tokenToTarget,
                message
            }

            const response = await NCCdAPIs.call('ttm/send', data);
            console.log('TTM tests send: response', response);
            return response;
        } catch (err) {
            console.error('there was an error: ', err);
            return null;
        }
    }

    async optInToToken(tokenToOptInto: number) {
        try {
            if (!this.algonaut) throw new Error('Invalid algonaut');
            if (tokenToOptInto == 0) throw new Error('Invalid token asset ID to opt into');
            let txnResult = await this.algonaut.optInAsset(tokenToOptInto);
            console.log('opt result: ', txnResult);
            return txnResult;
        } catch (err) {
            console.error('there was an error: ', err);
            return null;
        }
    }

    async getTokens(userAddress: string) {
        try {
            if (!this.algonaut) throw new Error('Invalid algonaut');
            if (userAddress.length == 0) throw new Error('Invalid user address');

            console.log('fetching tokens for ' + userAddress);

            const accountInfo = await this.algonaut.getAccountInfo(
                userAddress
            );

            let mySendTokens = [] as any;

            for (let i = 0; i < accountInfo.assets.length; i++) {
                const asset = accountInfo.assets[i];
                if (asset.amount) {
                    const assetId = asset['asset-id'];
                    const assetInfo = await this.algonaut.getAssetInfo(assetId);
                    console.log(assetInfo);
                    mySendTokens.push({
                        id: assetInfo.index,
                        name: assetInfo.params['unit-name'] + ' - ' + assetInfo.params.name
                    });
                }
            }

            return mySendTokens;

        } catch (err) {
            console.error('there was an error: ', err);
            return [];
        }
    }
}

export default NCCTTM;