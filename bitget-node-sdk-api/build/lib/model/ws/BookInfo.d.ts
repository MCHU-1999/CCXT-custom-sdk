export declare class BookInfo {
    private _asks;
    private _bids;
    private _checksum;
    private _ts;
    constructor(asks: [][], bids: [][], checksum: string, ts: string);
    get asks(): any[][];
    set asks(value: any[][]);
    get bids(): any[][];
    set bids(value: any[][]);
    get checksum(): string;
    set checksum(value: string);
    get ts(): string;
    set ts(value: string);
    merge(bookInfo: BookInfo): BookInfo;
    private innerMerge;
    checkSum(checkSum: number): boolean;
    getSignedInt(checksum: number): number;
}
