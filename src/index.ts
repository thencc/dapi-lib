import { NCCdAPIs } from "./NCCdAPIs";

import NCCRodeo from "./NCCRodeo";
import NCCBricks from "./NCCBricks";
import NCCLiNR from "./NCCLiNR";
import NCCToken from "./NCCToken";
import NCCTTM from "./NCCTTM";
import NCCUser from "./NCCUser";

export default class NCChappyDapi {
    rodeo = NCCRodeo;
    bricks = NCCBricks;
    linr = NCCLiNR;
    token = NCCToken;
    ttm = NCCTTM;
    user = NCCUser;
    docs = NCCdAPIs.call('docs', {});
    dAPI = NCCdAPIs;
}

