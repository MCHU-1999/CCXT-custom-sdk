export declare class PlacePlanReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * Amount of currency placed
     */
    private _size;
    /**
     * Entrusted price
     */
    private _executePrice;
    /**
     * Trigger Price
     */
    private _triggerPrice;
    /**
     * Entrusting direction
     */
    private _side;
    /**
     * Transaction Type
     */
    private _orderType;
    /**
     * Trigger Type Transaction Price Trigger Flag Price Trigger
     */
    private _triggerType;
    /**
     * Client ID
     */
    private _clientOid;
    /**
     * Default stop profit price
     */
    private _presetTakeProfitPrice;
    /**
     * Preset stop loss price
     */
    private _presetStopLossPrice;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get size(): string;
    set size(value: string);
    get executePrice(): string;
    set executePrice(value: string);
    get triggerPrice(): string;
    set triggerPrice(value: string);
    get side(): string;
    set side(value: string);
    get orderType(): string;
    set orderType(value: string);
    get triggerType(): string;
    set triggerType(value: string);
    get clientOid(): string;
    set clientOid(value: string);
    get presetTakeProfitPrice(): string;
    set presetTakeProfitPrice(value: string);
    get presetStopLossPrice(): string;
    set presetStopLossPrice(value: string);
}
