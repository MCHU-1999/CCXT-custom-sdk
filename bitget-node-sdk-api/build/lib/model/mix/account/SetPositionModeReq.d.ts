export declare class SetPositionModeReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * Position mode
     * 1 One way position
     * 2 Two way position
     */
    private _holdMode;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get holdMode(): string;
    set holdMode(value: string);
}
