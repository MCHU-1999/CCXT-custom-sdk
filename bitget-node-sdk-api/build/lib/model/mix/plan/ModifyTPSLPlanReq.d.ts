export declare class ModifyTPSLPlanReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * Order id
     */
    private _orderId;
    /**
     * Trigger price
     */
    private _triggerPrice;
    /**
     * Plan type
     */
    private _planType;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get orderId(): string;
    set orderId(value: string);
    get triggerPrice(): string;
    set triggerPrice(value: string);
    get planType(): string;
    set planType(value: string);
}
