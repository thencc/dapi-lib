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
Object.defineProperty(exports, "__esModule", { value: true });
exports.algonautTest = exports.TTM_INDEX = exports.NCC_SLA_INDEX = exports.NCC_SLA_INDEX_TEST_NET = exports.BRICKS_BANK_INDEX = exports.NCC_TOKEN_AUTH_APP_INDEX = exports.NCC_ACCOUNT_INDEX = exports.RICKS_TOKEN_INDEX = exports.BRICKS_TOKEN_INDEX = exports.USDC_TOKEN_INDEX = exports.NCC_TOKEN_INDEX = exports.purserAddress = exports.purserPhrase = void 0;
const algonautjs_1 = require("@thencc/algonautjs");
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: `test/.env.${process.env.NODE_ENV}` });
// on test net, we use this temp address
exports.purserPhrase = process.env.PURSER_PHRASE ? process.env.PURSER_PHRASE : null;
exports.purserAddress = process.env.PURSER_ADDRESS ? process.env.PURSER_ADDRESS : null;
exports.NCC_TOKEN_INDEX = process.env.NCC_TOKEN_INDEX ? process.env.NCC_TOKEN_INDEX : null;
exports.USDC_TOKEN_INDEX = process.env.USDC_TOKEN_INDEX ? process.env.USDC_TOKEN_INDEX : null;
exports.BRICKS_TOKEN_INDEX = process.env.BRICKS_TOKEN_INDEX ? process.env.BRICKS_TOKEN_INDEX : null;
exports.RICKS_TOKEN_INDEX = process.env.RICKS_TOKEN_INDEX ? process.env.RICKS_TOKEN_INDEX : null;
exports.NCC_ACCOUNT_INDEX = process.env.NCC_ACCOUNT_INDEX ? process.env.NCC_ACCOUNT_INDEX : null;
exports.NCC_TOKEN_AUTH_APP_INDEX = process.env.NCC_TOKEN_AUTH_APP_INDEX ? process.env.NCC_TOKEN_AUTH_APP_INDEX : null;
exports.BRICKS_BANK_INDEX = process.env.BRICKS_BANK_INDEX ? process.env.BRICKS_BANK_INDEX : null;
exports.NCC_SLA_INDEX_TEST_NET = process.env.NCC_SLA_INDEX_TEST_NET ? process.env.NCC_SLA_INDEX_TEST_NET : null;
exports.NCC_SLA_INDEX = process.env.NCC_SLA_INDEX ? process.env.NCC_SLA_INDEX : null;
exports.TTM_INDEX = process.env.TTM_INDEX ? process.env.TTM_INDEX : null;
exports.algonautTest = new algonautjs_1.Algonaut({
    nodeConfig: {
        BASE_SERVER: process.env.BASE_SERVER ? process.env.BASE_SERVER : "",
        INDEX_SERVER: process.env.INDEX_SERVER ? process.env.INDEX_SERVER : "",
        LEDGER: process.env.LEDGER ? process.env.LEDGER : "",
        PORT: process.env.PORT ? process.env.PORT : "",
        API_TOKEN: process.env.API_TOKEN ? process.env.API_TOKEN : { "X-API-KEY": process.env.X_API_KEY }
    },
});
