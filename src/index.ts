import { NCCdAPIs } from "./NCCdAPIs";

import NCCRodeo from "./NCCRodeo";
import NCCBricks from "./NCCBricks";
import NCCLiNR from "./NCCLiNR";
import NCCToken from "./NCCToken";
import NCCTTM from "./NCCTTM";
import NCCUser from "./NCCUser";
import Algonaut from "@thencc/algonautjs";

export default class NCChappyDapi {
    rodeo: NCCRodeo | null;
    bricks: NCCBricks | null;
    linr: NCCLiNR | null;
    ttm: NCCTTM | null;
    user: NCCUser | null;

    token: NCCToken | null;

    algonaut: Algonaut;

    docs = NCCdAPIs.call('docs', {});
    dAPI = NCCdAPIs;

    private constructor(algonaut: Algonaut, token: NCCToken | null) {
        this.algonaut = algonaut;
        this.token = token;

        this.rodeo = null;
        this.bricks = null;
        this.linr = null;
        this.ttm = null;
        this.user = null;
    }

    public static async init(algonaut: Algonaut) {
        // initialize ncc token
        const token = await NCCToken.getInstance(algonaut);
        return new NCChappyDapi(algonaut, token);
    }

    startServices(accessToken: string) {
        // if valid config, start all
        if (this.algonaut.address && accessToken.length) {
            this.rodeo = NCCRodeo.getInstance(accessToken);
            this.bricks = NCCBricks.getInstance(accessToken);
            this.linr = NCCLiNR.getInstance(accessToken);
            this.ttm = NCCTTM.getInstance(accessToken, this.algonaut);
            this.user = NCCUser.getInstance(accessToken);
        }
    }
}

