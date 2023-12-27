export declare class CancelPlanReq {
    /**
     * Order Id
     */
    private _orderId;
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Plan type
     */
    private _planType;
    /**
     * Deposit currency
     */
    private _marginCoin;
    get orderId(): string;
    set orderId(value: string);
    get symbol(): string;
    set symbol(value: string);
    get planType(): string;
    set planType(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
}
