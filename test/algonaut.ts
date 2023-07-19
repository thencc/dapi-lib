import { Algonaut, AlgonautConfig } from '@thencc/algonautjs';
import "vite/client"

// on test net, we use this temp address
export const purserPhrase = import.meta.env.PURSER_PHRASE ? import.meta.env.PURSER_PHRASE : null;
export const purserAddress = import.meta.env.PURSER_ADDRESS ? import.meta.env.PURSER_ADDRESS : null;
export const NCC_TOKEN_INDEX = import.meta.env.NCC_TOKEN_INDEX ? import.meta.env.NCC_TOKEN_INDEX : null;
export const USDC_TOKEN_INDEX = import.meta.env.USDC_TOKEN_INDEX ? import.meta.env.USDC_TOKEN_INDEX : null;
export const BRICKS_TOKEN_INDEX = import.meta.env.BRICKS_TOKEN_INDEX ? import.meta.env.BRICKS_TOKEN_INDEX : null;
export const RICKS_TOKEN_INDEX = import.meta.env.RICKS_TOKEN_INDEX ? import.meta.env.RICKS_TOKEN_INDEX : null;
export const NCC_ACCOUNT_INDEX = import.meta.env.NCC_ACCOUNT_INDEX ? import.meta.env.NCC_ACCOUNT_INDEX : null;
export const NCC_TOKEN_AUTH_APP_INDEX = import.meta.env.NCC_TOKEN_AUTH_APP_INDEX ? import.meta.env.NCC_TOKEN_AUTH_APP_INDEX : null;
export const BRICKS_BANK_INDEX = import.meta.env.BRICKS_BANK_INDEX ? import.meta.env.BRICKS_BANK_INDEX : null;
export const NCC_SLA_INDEX_TEST_NET = import.meta.env.NCC_SLA_INDEX_TEST_NET ? import.meta.env.NCC_SLA_INDEX_TEST_NET : null;
export const NCC_SLA_INDEX = import.meta.env.NCC_SLA_INDEX ? import.meta.env.NCC_SLA_INDEX : null;
export const TTM_INDEX = import.meta.env.TTM_INDEX ? import.meta.env.TTM_INDEX : null;

const nodeConfig = {
    BASE_SERVER: import.meta.env.BASE_SERVER ? import.meta.env.BASE_SERVER : "",
    INDEX_SERVER: import.meta.env.INDEX_SERVER ? import.meta.env.INDEX_SERVER : "",
    LEDGER: import.meta.env.LEDGER ? import.meta.env.LEDGER : "",
    PORT: import.meta.env.PORT ? import.meta.env.PORT : "",
    API_TOKEN: import.meta.env.API_TOKEN ? import.meta.env.API_TOKEN : { "X-API-KEY": import.meta.env.X_API_KEY }
}

console.log(`this is node config: ${JSON.stringify(nodeConfig)}`);

export const algonautTest = new Algonaut({
    nodeConfig
});
