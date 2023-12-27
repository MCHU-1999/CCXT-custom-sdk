export declare class SubscribeReq {
    private _instType;
    private _channel;
    private _instId;
    constructor(instType: string, channel: string, instId: string);
    get toString(): string;
    get instType(): string;
    set instType(value: string);
    get channel(): string;
    set channel(value: string);
    get instId(): string;
    set instId(value: string);
}
