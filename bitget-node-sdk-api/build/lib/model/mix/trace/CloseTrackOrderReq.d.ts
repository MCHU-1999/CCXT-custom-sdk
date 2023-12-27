export declare class CloseTrackOrderReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * The tracking order number comes from the trackingNo of the current interface with the order
     */
    private _trackingNo;
    get symbol(): string;
    set symbol(value: string);
    get trackingNo(): string;
    set trackingNo(value: string);
}
