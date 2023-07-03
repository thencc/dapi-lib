import { Algonaut } from '@thencc/algonautjs';

// on test net, we use this temp address
export const purserPhrase =
    'what valley hat retreat dawn bubble science hammer hello churn slim real slush crash frequent state symptom neutral office enlist skirt broom cabbage abstract oppose';
export const purserAddress =
    'BHG4PLCGEYRG3POITR3IXMVFQKJ3XESAV5QR63PMSGOBDACZOLHE235SVE';

export const NCC_TOKEN_INDEX = 101088863;
export const USDC_TOKEN_INDEX = 10458941;
export const BRICKS_TOKEN_INDEX = 106237109;
export const RICKS_TOKEN_INDEX = 106237127;
export const NCC_ACCOUNT_INDEX = 101088323;
export const NCC_TOKEN_AUTH_APP_INDEX = 106807887; //101209779;
export const BRICKS_BANK_INDEX = 106236940;
export const NCC_SLA_INDEX_TEST_NET = 110525806;
export const NCC_SLA_INDEX = 1090801931;
export const TTM_INDEX = 121197299;

/** Prerequisite: run Algorand sandbox k8 locally */
export const algonautSandbox = new Algonaut({
    nodeConfig: {
        BASE_SERVER: 'http://localhost',
        INDEX_SERVER: 'http://localhost:8980',
        LEDGER: 'TestNet',
        PORT: '4001',
        API_TOKEN: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
});
