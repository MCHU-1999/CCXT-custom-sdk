export declare class ModifyPlanPresetReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * If the profit stop price is blank, cancel the profit stop
     */
    private _presetTakeProfitPrice;
    /**
     * If the stop loss price is blank, cancel the stop loss
     */
    private _presetStopLossPrice;
    /**
     * order id
     */
    private _orderId;
    /**
     * plan type
     */
    private _planType;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get presetTakeProfitPrice(): string;
    set presetTakeProfitPrice(value: string);
    get presetStopLossPrice(): string;
    set presetStopLossPrice(value: string);
    get orderId(): string;
    set orderId(value: string);
    get planType(): string;
    set planType(value: string);
}
