export declare class PlaceOrderReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * Client ID
     */
    private _clientOid;
    /**
     * Amount of currency placed
     */
    private _size;
    /**
     * Open more, open more, empty more, empty more
     */
    private _side;
    /**
     * Order Type Market Price Limit
     */
    private _orderType;
    /**
     * Entrusted price
     */
    private _price;
    /**
     * Order validity
     */
    private _timeInForceValue;
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
    get clientOid(): string;
    set clientOid(value: string);
    get size(): string;
    set size(value: string);
    get side(): string;
    set side(value: string);
    get orderType(): string;
    set orderType(value: string);
    get price(): string;
    set price(value: string);
    get timeInForceValue(): string;
    set timeInForceValue(value: string);
    get presetTakeProfitPrice(): string;
    set presetTakeProfitPrice(value: string);
    get presetStopLossPrice(): string;
    set presetStopLossPrice(value: string);
}
