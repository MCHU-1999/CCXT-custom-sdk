export declare class SpotOrderInfoReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Order Id
     */
    private _orderId;
    /**
     * Client Order Id
     */
    private _clientOrderId;
    get symbol(): string;
    set symbol(value: string);
    get orderId(): string;
    set orderId(value: string);
    get clientOrderId(): string;
    set clientOrderId(value: string);
}
