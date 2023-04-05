declare class NCCBricks {
    private static instance;
    private accessToken;
    private constructor();
    static destroy(): void;
    static getInstance(accessToken: string): NCCBricks | null;
    sendBricks(uuid: string, toAddress: string, toAppIndex: number): Promise<void>;
    sendRickToMedia(uuid: string, toAddress: string, toAppIndex: number): Promise<void>;
    listBricks(creatorAddress: string): Promise<any>;
    deployMedia(uuid: string, name: string, metadata: string, price: number, publicPerformancePrice: number, creatorAddress: string): Promise<any>;
}
export default NCCBricks;
