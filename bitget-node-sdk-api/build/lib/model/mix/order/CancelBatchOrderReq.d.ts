export declare class CancelBatchOrderReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * Order Id list
     */
    private _orderIds;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get orderIds(): string[];
    set orderIds(value: string[]);
}
