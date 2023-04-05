export declare const NCCdAPIs: {
    call: (apiEndpoint: string, data: any, apiVersion?: string) => Promise<any>;
    requestToken(): void;
    fetch: (apiEndpoint: string, data: any, apiVersion?: string) => Promise<any>;
};
