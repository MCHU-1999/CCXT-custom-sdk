export declare class SpotBillsReq {
    /**
     * Currency ID
     */
    private _coinId;
    /**
     * Group Type
     */
    private _groupType;
    /**
     * Business Type
     */
    private _bizType;
    /**
     * Pass in billId to query previous data
     */
    private _after;
    /**
     * Pass in billId to check the subsequent data
     */
    private _before;
    /**
     * Default 100, maximum 500
     */
    private _limit;
    get coinId(): string;
    set coinId(value: string);
    get groupType(): string;
    set groupType(value: string);
    get bizType(): string;
    set bizType(value: string);
    get after(): string;
    set after(value: string);
    get before(): string;
    set before(value: string);
    get limit(): string;
    set limit(value: string);
}
