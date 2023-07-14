"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const Bricks_1 = require("./dapis/Bricks");
const Impression_1 = require("./dapis/Impression");
const LiNR_1 = require("./dapis/LiNR");
const Peels_1 = require("./dapis/Peels");
const TTM_1 = require("./dapis/TTM");
const User_1 = require("./dapis/User");
const utils_1 = require("./utils");
const fs = __importStar(require("fs"));
class Dapi {
    constructor() {
        console.log('Initializing Dapi object');
        this.peels = new Peels_1.Peels();
        this.user = new User_1.User();
        this.ttm = new TTM_1.TTM();
        this.bricks = new Bricks_1.Bricks();
        this.impression = new Impression_1.Impression();
        this.linr = new LiNR_1.LiNR();
        const jsonString = fs.readFileSync('output/openapi3.json', 'utf8');
        this.docs = JSON.parse(jsonString);
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
}
exports.Dapi = Dapi;
