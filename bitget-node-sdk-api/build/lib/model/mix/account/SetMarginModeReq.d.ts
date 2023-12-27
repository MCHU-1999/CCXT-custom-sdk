export declare class SetMarginModeReq {
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Margin mode
     */
    private _marginMode;
    get marginCoin(): string;
    set marginCoin(value: string);
    get symbol(): string;
    set symbol(value: string);
    get marginMode(): string;
    set marginMode(value: string);
}
