export declare class PlaceOrderBaseParam {
    /**
     * Client ID
     */
    private _clientOid;
    /**
     * Amount of currency placed
     */
    private _size;
    /**
     * 1: Kaiduo 2: Kaikong 3: Pingduo 4: Pingkong
     */
    private _side;
    /**
     * Order Type
     */
    private _orderType;
    /**
     * Entrusted price
     */
    private _price;
    private _timeInForceValue;
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
}
