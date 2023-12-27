export declare class PlaceTPSLReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * Plan type
     */
    private _planType;
    /**
     * Trigger price
     */
    private _triggerPrice;
    /**
     * Is this position long or short
     */
    private _holdSide;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get planType(): string;
    set planType(value: string);
    get triggerPrice(): string;
    set triggerPrice(value: string);
    get holdSide(): string;
    set holdSide(value: string);
}
