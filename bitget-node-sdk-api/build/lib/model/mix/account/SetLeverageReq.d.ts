export declare class SetLeverageReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * Leverage ratio
     */
    private _leverage;
    /**
     * The whole warehouse lever can not transfer this parameter
     * Position direction: long multi position short short position,
     * MixHoldSideEnum
     */
    private _holdSide;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get leverage(): string;
    set leverage(value: string);
    get holdSide(): string;
    set holdSide(value: string);
}
