export declare class SpotCancelBatchOrderReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     *  Order ids
     */
    private _orderIds;
    get symbol(): string;
    set symbol(value: string);
    get orderIds(): string[];
    set orderIds(value: string[]);
}
