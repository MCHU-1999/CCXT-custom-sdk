export declare class CancelOrderReq {
    /**
     * Order Id
     */
    private _orderId;
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Deposit currency
     */
    private _marginCoin;
    get orderId(): string;
    set orderId(value: string);
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
}
