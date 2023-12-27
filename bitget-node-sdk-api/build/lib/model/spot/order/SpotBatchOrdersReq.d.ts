import { SpotOrdersReq } from './SpotOrdersReq';
export declare class SpotBatchOrdersReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * order list
     */
    private _orderList;
    get symbol(): string;
    set symbol(value: string);
    get orderList(): SpotOrdersReq[];
    set orderList(value: SpotOrdersReq[]);
}
