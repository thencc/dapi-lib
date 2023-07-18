var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { postRequest } from "../utils";
export class Peels {
    constructor() {
        console.log('Initializing Peels object');
    }
    /** PEELS */
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/peels/create';
            return yield postRequest(path, params);
        });
    }
    list(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/peels/list';
            return yield postRequest(path, params);
        });
    }
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/peels/list-all';
            return yield postRequest(path, {});
        });
    }
    listMine(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/peels/list-mine';
            return yield postRequest(path, params);
        });
    }
    get(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/peels/get';
            return yield postRequest(path, params);
        });
    }
    mint(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/peels/mint';
            return yield postRequest(path, params);
        });
    }
    grant(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/peels/grant';
            return yield postRequest(path, params);
        });
    }
    grantTokens(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/peels/grant-tokens';
            return yield postRequest(path, params);
        });
    }
    fundUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/peels/fund-user';
            return yield postRequest(path, params);
        });
    }
}
