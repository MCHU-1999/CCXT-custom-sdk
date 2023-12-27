export declare class SpotFillsReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Order Id
     */
    private _orderId;
    /**
     * The orderId is passed in. The data before the orderId desc
     */
    private _after;
    /**
     * Pass in the data after the orderId asc
     */
    private _before;
    /**
     * Number of returned results Default 100, maximum 500
     */
    private _limit;
    get symbol(): string;
    set symbol(value: string);
    get orderId(): string;
    set orderId(value: string);
    get after(): string;
    set after(value: string);
    get before(): string;
    set before(value: string);
    get limit(): string;
    set limit(value: string);
}
