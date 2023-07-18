import { Algonaut, AlgonautConfig } from '@thencc/algonautjs';
import * as dotenv from 'dotenv';
if (process) dotenv.config({ path: `test/.env.${process.env.NODE_ENV}` })

// on test net, we use this temp address
export const purserPhrase = process.env.PURSER_PHRASE ? process.env.PURSER_PHRASE : null;
export const purserAddress = process.env.PURSER_ADDRESS ? process.env.PURSER_ADDRESS : null;
export const NCC_TOKEN_INDEX = process.env.NCC_TOKEN_INDEX ? process.env.NCC_TOKEN_INDEX : null;
export const USDC_TOKEN_INDEX = process.env.USDC_TOKEN_INDEX ? process.env.USDC_TOKEN_INDEX : null;
export const BRICKS_TOKEN_INDEX = process.env.BRICKS_TOKEN_INDEX ? process.env.BRICKS_TOKEN_INDEX : null;
export const RICKS_TOKEN_INDEX = process.env.RICKS_TOKEN_INDEX ? process.env.RICKS_TOKEN_INDEX : null;
export const NCC_ACCOUNT_INDEX = process.env.NCC_ACCOUNT_INDEX ? process.env.NCC_ACCOUNT_INDEX : null;
export const NCC_TOKEN_AUTH_APP_INDEX = process.env.NCC_TOKEN_AUTH_APP_INDEX ? process.env.NCC_TOKEN_AUTH_APP_INDEX : null;
export const BRICKS_BANK_INDEX = process.env.BRICKS_BANK_INDEX ? process.env.BRICKS_BANK_INDEX : null;
export const NCC_SLA_INDEX_TEST_NET = process.env.NCC_SLA_INDEX_TEST_NET ? process.env.NCC_SLA_INDEX_TEST_NET : null;
export const NCC_SLA_INDEX = process.env.NCC_SLA_INDEX ? process.env.NCC_SLA_INDEX : null;
export const TTM_INDEX = process.env.TTM_INDEX ? process.env.TTM_INDEX : null;

const nodeConfig = {
    BASE_SERVER: process.env.BASE_SERVER ? process.env.BASE_SERVER : "",
    INDEX_SERVER: process.env.INDEX_SERVER ? process.env.INDEX_SERVER : "",
    LEDGER: process.env.LEDGER ? process.env.LEDGER : "",
    PORT: process.env.PORT ? process.env.PORT : "",
    API_TOKEN: process.env.API_TOKEN ? process.env.API_TOKEN : { "X-API-KEY": process.env.X_API_KEY }
}

console.log(`this is node config: ${JSON.stringify(nodeConfig)}`);

export const algonautTest = new Algonaut({
    nodeConfig
});
