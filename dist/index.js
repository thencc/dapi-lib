"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dapi = void 0;
const Peels_1 = require("./Peels");
const TTM_1 = require("./TTM");
const User_1 = require("./User");
const utils_1 = require("./utils");
class Dapi {
    constructor() {
        console.log('Initializing Dapi object');
        this.peels = new Peels_1.Peels();
        this.user = new User_1.User();
        this.ttm = new TTM_1.TTM();
    }
    /** TOKEN */
    getAccessToken(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // Verify parameters
            // Access client
            const path = '/get-access-token';
            return yield (0, utils_1.postRequest)(path, params);
        });
    }
    /** List Accounts */
    listAccounts(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/list-accounts';
            return yield (0, utils_1.postRequest)(path, params);
        });
    }
    /** Rodeo */
    createMilestone(params) {
        const url = '/rodeo/milestone/create';
        // const url = "/evolutions/{id}".replace("{id}", params.id);
        // // or try this
        // const { id } = params;
        // const url = `/evolutions/${id}`;
        // TODO make client
        // must be flexible between firebase and cloudflare, with a priority on cloudflare
        // also write tests
    }
}
exports.Dapi = Dapi;
