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
    rodeo: NCCRodeo | null;
    bricks: NCCBricks | null;
    linr: NCCLiNR | null;
    ttm: NCCTTM | null;
    user: NCCUser | null;
    token: NCCToken | null;
    algonaut: Algonaut | null;
    docs: Promise<any>;
    dAPI: {
        call: (apiEndpoint: string, data: any, apiVersion?: string | undefined) => Promise<any>;
        requestToken(): void;
        fetch: (apiEndpoint: string, data: any, apiVersion?: string | undefined) => Promise<any>;
    };
    excludes: NCCDapiTypes[] | null;
    constructor(excludes?: NCCDapiTypes[]);
    init(algonaut: Algonaut): Promise<void>;
    static destroyAll(): void;
    serviceSpecified(service: NCCDapiTypes): boolean;
    startServices(accessToken: string): boolean;
}
