import { NCCdAPIs } from "./NCCdAPIs";

import NCCRodeo from "./NCCRodeo";
import NCCBricks from "./NCCBricks";
import NCCLiNR from "./NCCLiNR";
import NCCToken from "./NCCToken";
import NCCTTM from "./NCCTTM";
import NCCUser from "./NCCUser";
import Algonaut from "@thencc/algonautjs";

export default class NCChappyDapi {
    rodeo: NCCRodeo | null = null;
    bricks: NCCBricks | null = null;
    linr: NCCLiNR | null = null;
    ttm: NCCTTM | null = null;
    user: NCCUser | null = null;

    token: NCCToken | null = null;

    algonaut: Algonaut | null = null;

    docs = NCCdAPIs.call('docs', {});
    dAPI = NCCdAPIs;

    public constructor() { }

    public async init(algonaut: Algonaut) {
        // initialize ncc token
        console.log('getting NCC Token instance...');
        const token = await NCCToken.getInstance(algonaut);
        console.log('initializing NCC\'s happy dapi...');
        this.algonaut = algonaut;
        this.token = token;
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

    public startServices(accessToken: string) {
        // if valid config, start all
        if (!this.algonaut) return false;
        if (this.algonaut.address && accessToken.length) {
            this.rodeo = NCCRodeo.getInstance(accessToken);
            this.bricks = NCCBricks.getInstance(accessToken);
            this.linr = NCCLiNR.getInstance(accessToken);
            this.ttm = NCCTTM.getInstance(accessToken, this.algonaut);
            this.user = NCCUser.getInstance(accessToken);
            console.log('started services');
            return true;
        }
        return false;
    }
}

