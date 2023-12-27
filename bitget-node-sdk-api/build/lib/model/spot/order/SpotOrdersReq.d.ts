export declare class SpotOrdersReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Order direction
     */
    private _side;
    /**
     * Order type
     */
    private _orderType;
    /**
     * Order Control Type
     */
    private _force;
    /**
     * Entrusted price, only applicable to price limit order
     */
    private _price;
    /**
     * quantity
     */
    private _quantity;
    /**
     * Client order ID
     */
    private _clientOrderId;
    get symbol(): string;
    set symbol(value: string);
    get side(): string;
    set side(value: string);
    get orderType(): string;
    set orderType(value: string);
    get force(): string;
    set force(value: string);
    get price(): string;
    set price(value: string);
    get quantity(): string;
    set quantity(value: string);
    get clientOrderId(): string;
    set clientOrderId(value: string);
}
