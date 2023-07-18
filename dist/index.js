var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Bricks } from './dapis/Bricks';
import { Impression } from './dapis/Impression';
import { LiNR } from './dapis/LiNR';
import { Peels } from './dapis/Peels';
import { TTM } from './dapis/TTM';
import { User } from './dapis/User';
import { postRequest } from './utils';
import * as fs from 'fs';
export class Dapi {
    constructor() {
        console.log('Initializing Dapi object');
        this.peels = new Peels();
        this.user = new User();
        this.ttm = new TTM();
        this.bricks = new Bricks();
        this.impression = new Impression();
        this.linr = new LiNR();
        const jsonString = fs.readFileSync('output/documentation.json', 'utf8');
        this.docs = JSON.parse(jsonString);
    }
    /** TOKEN */
    getAccessToken(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // Verify parameters
            // Access client
            const path = '/get-access-token';
            return yield postRequest(path, params);
        });
    }
    /** List Accounts */
    listAccounts(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/list-accounts';
            return yield postRequest(path, params);
        });
    }
}
