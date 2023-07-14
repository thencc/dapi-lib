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
exports.LiNR = void 0;
const utils_1 = require("../utils");
class LiNR {
    media(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/linr/media';
            return yield (0, utils_1.postRequest)(path, params);
        });
    }
    music(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/linr/music';
            return yield (0, utils_1.postRequest)(path, params);
        });
    }
}
exports.LiNR = LiNR;
