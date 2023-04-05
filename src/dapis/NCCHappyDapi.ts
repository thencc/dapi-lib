import { NCCdAPIs } from "./NCCdAPIs";

import NCCRodeo from "./NCCRodeo";
import NCCBricks from "./NCCBricks";
import NCCLiNR from "./NCCLiNR";
import NCCToken from "./NCCToken";
import NCCTTM from "./NCCTTM";
import NCCUser from "./NCCUser";
import Algonaut from "@thencc/algonautjs";
import { NCCDapiTypes } from "../types";

/**
 * TODOs:
 * []   implement Peels lib
 */

export default class NCCHappyDapi {
    rodeo: NCCRodeo | null = null;
    bricks: NCCBricks | null = null;
    linr: NCCLiNR | null = null;
    ttm: NCCTTM | null = null;
    user: NCCUser | null = null;

    token: NCCToken | null = null;

    algonaut: Algonaut | null = null;

    docs = NCCdAPIs.call('docs', {});
    dAPI = NCCdAPIs;

    excludes: NCCDapiTypes[] | null = null;

    public constructor(excludes?: NCCDapiTypes[]) {
        if (excludes) {
            this.excludes = excludes;
        }
    }

    public async init(algonaut: Algonaut) {
        // initialize ncc token
        console.log('getting NCC Token instance...');
        const token = await NCCToken.getInstance(algonaut);
        this.algonaut = algonaut;
        this.token = token;
        console.log('initialized NCC\'s happy dapi');
    }

    public static destroyAll() {
        NCCToken.destroy();
        NCCUser.destroy();
        NCCRodeo.destroy();
        NCCTTM.destroy();
        NCCLiNR.destroy();
        NCCBricks.destroy();
        console.log('destroyed all services');
    }

    serviceSpecified(service: NCCDapiTypes) {
        return (!this.excludes) || (this.excludes && !this.excludes.includes(service))
    }

    public startServices(accessToken: string) {
        // if valid config, start all
        if (!this.algonaut) {
            console.error('Invalid algonaut instance');
            return false;
        }
        if (!this.algonaut.account) {
            console.error('No user logged in');
            return false;
        }

        if (this.algonaut.account.address && accessToken.length) {

            // start specified services
            if (this.serviceSpecified(NCCDapiTypes.Rodeo)) this.rodeo = NCCRodeo.getInstance(accessToken);
            if (this.serviceSpecified(NCCDapiTypes.Bricks)) this.bricks = NCCBricks.getInstance(accessToken);
            if (this.serviceSpecified(NCCDapiTypes.LiNR)) this.linr = NCCLiNR.getInstance(accessToken);
            if (this.serviceSpecified(NCCDapiTypes.TTM)) this.ttm = NCCTTM.getInstance(accessToken, this.algonaut);
            this.user = NCCUser.getInstance(accessToken);

            console.log('started services');
            return true;
        }
        return false;
    }
}