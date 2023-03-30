import NCCRodeo from "./NCCRodeo";
import NCCBricks from "./NCCBricks";
import NCCLiNR from "./NCCLiNR";
import NCCToken from "./NCCToken";
import NCCTTM from "./NCCTTM";
import NCCUser from "./NCCUser";
export declare class NCChappyDapi {
    rodeo: typeof NCCRodeo;
    bricks: typeof NCCBricks;
    linr: typeof NCCLiNR;
    token: typeof NCCToken;
    ttm: typeof NCCTTM;
    user: typeof NCCUser;
    docs: Promise<any>;
    dAPI: {
        call: (apiEndpoint: string, data: any, apiVersion?: string | undefined) => Promise<any>;
        requestToken(): void;
        fetch: (apiEndpoint: string, data: any, apiVersion?: string | undefined) => Promise<any>;
    };
}
