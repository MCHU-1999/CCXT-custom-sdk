export declare class SetMarginReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * Position direction (all positions are not transferred)
     */
    private _holdSide;
    /**
     * Amount greater than 0 increases less than 0 decreases
     */
    private _amount;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get holdSide(): string;
    set holdSide(value: string);
    get amount(): string;
    set amount(value: string);
}
