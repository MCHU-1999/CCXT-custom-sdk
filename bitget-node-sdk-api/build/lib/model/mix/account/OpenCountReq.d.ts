export declare class OpenCountReq {
    /**
     * Currency pair
     */
    _symbol: string;
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * open price
     */
    private _openPrice;
    /**
     * open amount
     */
    private _openAmount;
    /**
     * Default leverage 20
     */
    private _leverage;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get openPrice(): string;
    set openPrice(value: string);
    get openAmount(): string;
    set openAmount(value: string);
    get leverage(): string;
    set leverage(value: string);
}
