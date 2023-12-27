import { BaseApi } from '../BaseApi';
import { PlaceOrderReq } from '../model/mix/order/PlaceOrderReq';
import { BatchOrdersReq } from '../model/mix/order/BatchOrdersReq';
import { CancelOrderReq } from '../model/mix/order/CancelOrderReq';
import { CancelBatchOrderReq } from '../model/mix/order/CancelBatchOrderReq';

export declare class MixOrderApi extends BaseApi {
    /**
     * place an order
     * @param placeOrderReq
     */
    placeOrder(placeOrderReq: PlaceOrderReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Place orders in batches
     * @param batchOrdersReq
     */
    batchOrders(batchOrdersReq: BatchOrdersReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * cancel the order
     * @param cancelOrderReq
     */
    cancelOrder(cancelOrderReq: CancelOrderReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * cancel all order
     */
    cancelAllOrder(marginCoin: String): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Batch cancellation
     * @param cancelBatchOrderReq
     */
    cancelBatchOrder(cancelBatchOrderReq: CancelBatchOrderReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get Historical Delegation
     * @param symbol
     * @param startTime
     * @param endTime
     * @param pageSize
     * @param lastEndId
     * @param isPre
     */
    history(symbol: string, startTime: string, endTime: string, pageSize: number, lastEndId: string, isPre: boolean): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get ProductType History Orders
     * @param ProductType
     * @param startTime
     * @param endTime
     * @param pageSize
     * @param lastEndId
     * @param isPre
     */
    allHistory(ProductType: string, startTime: string, endTime: string, pageSize: number, lastEndId: string, isPre: boolean): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get the current delegate
     * @param symbol
     */
    current(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get ALL the current delegate
     * @param productType
     * @param marginCoin
     */
    allCurrent(productType: string, marginCoin: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get order details
     * @param symbol
     * @param orderId
     */
    detail(symbol: string, orderId: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Query transaction details
     * @param symbol
     * @param orderId
     */
    fills(symbol: string, orderId: string): Promise<import("axios").AxiosResponse<any>>;
}
