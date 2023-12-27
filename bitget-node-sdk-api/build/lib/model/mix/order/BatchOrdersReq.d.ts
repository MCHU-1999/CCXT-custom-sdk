import { PlaceOrderBaseParam } from './PlaceOrderBaseParam';
export declare class BatchOrdersReq {
    /**
     * Currency pair
     */
    private _symbol;
    /**
     * Deposit currency
     */
    private _marginCoin;
    /**
     * Order data list
     */
    private _orderDataList;
    get symbol(): string;
    set symbol(value: string);
    get marginCoin(): string;
    set marginCoin(value: string);
    get orderDataList(): PlaceOrderBaseParam[];
    set orderDataList(value: PlaceOrderBaseParam[]);
}
