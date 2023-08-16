import { Algonaut } from '@thencc/algonautjs';
import { AccessTokenParams } from './model';
export declare function promptAccessToken(algonaut: Algonaut): Promise<AccessTokenParams>;
/** RODEO */
export declare const rodeo: {
    org: {
        amIAdmin: (algonaut: Algonaut, appId: number) => Promise<any>;
    };
};
