import { BaseApi } from '../BaseApi';
import { CloseTrackOrderReq } from '../model/mix/trace/CloseTrackOrderReq';
export declare class MixTraceApi extends BaseApi {
    /**
     * Dealer closing interface
     * @param mixCloseTrackOrderReq
     */
    closeTrackOrder(closeTrackOrderReq: CloseTrackOrderReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * The trader obtains the current order
     * @param symbol
     * @param productType
     * @param pageSize
     * @param pageNo
     */
    currentTrack(symbol: string, productType: string, pageSize: string, pageNo: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * The trader obtains the historical order
     * @param startTime
     * @param endTime
     * @param pageSize
     * @param pageNo
     */
    historyTrack(startTime: string, endTime: string, pageSize: string, pageNo: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Summary of traders' profit sharing
     */
    summary(): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Historical profit sharing summary of traders (by settlement currency)
     */
    profitSettleTokenIdGroup(): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Historical profit sharing summary of traders (by settlement currency and date)
     * @param pageSize
     * @param pageNo
     */
    profitDateGroupList(pageSize: string, pageNo: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Historical profit distribution details of traders
     * @param marginCoin
     * @param date
     * @param pageSize
     * @param pageNo
     */
    profitDateList(marginCoin: string, date: string, pageSize: string, pageNo: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Details of traders to be distributed
     * @param pageSize
     * @param pageNo
     */
    waitProfitDateList(pageSize: string, pageNo: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Followers obtain documentary information
     * @param pageSize
     * @param pageNo
     * @param startTime
     * @param endTime
     */
    followerHistoryOrders(pageSize: string, pageNo: string, startTime: string, endTime: string): Promise<import("axios").AxiosResponse<any>>;
}
