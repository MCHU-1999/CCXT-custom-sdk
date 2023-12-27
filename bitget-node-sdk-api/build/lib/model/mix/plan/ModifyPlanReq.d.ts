export declare class ModifyPlanReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * Planned entrusted order No
     */
    private _orderId;
    /**
     * Execution price
     */
    private _executePrice;
    /**
     * Trigger Price
     */
    private _triggerPrice;
    /**
     * Trigger Type
     */
    private _triggerType;
    /**
     * Order Type
     */
    private _orderType;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get orderId(): string;
    set orderId(value: string);
    get executePrice(): string;
    set executePrice(value: string);
    get triggerPrice(): string;
    set triggerPrice(value: string);
    get triggerType(): string;
    set triggerType(value: string);
    get orderType(): string;
    set orderType(value: string);
}
