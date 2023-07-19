/**
 * NCCdAPI setup
 */
import "vite/client";
export declare const NCC_TOKEN_AUTH_APP_INDEX: number;
export declare const NCC_TOKEN_INDEX: number;
export declare const NCC_SLA_INDEX: number;
export declare const NCCdAPIs: {
    call: (apiEndpoint: string, data: any, apiVersion?: string, method?: string) => Promise<any>;
    requestToken(): void;
    fetch: (apiEndpoint: string, data: any, apiVersion?: string) => Promise<any>;
};
