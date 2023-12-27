import { BaseApi } from '../BaseApi';
import { SpotOrdersReq } from '../model/spot/order/SpotOrdersReq';
import { SpotBatchOrdersReq } from '../model/spot/order/SpotBatchOrdersReq';
import { SpotCancelOrderReq } from '../model/spot/order/SpotCancelOrderReq';
import { SpotCancelBatchOrderReq } from '../model/spot/order/SpotCancelBatchOrderReq';
import { SpotOrderInfoReq } from '../model/spot/order/SpotOrderInfoReq';
import { SpotOpenOrdersReq } from '../model/spot/order/SpotOpenOrdersReq';
import { SpotHistoryReq } from '../model/spot/order/SpotHistoryReq';
import { SpotFillsReq } from '../model/spot/order/SpotFillsReq';
export declare class SpotOrderApi extends BaseApi {
    /**
     * place an order
     * @param ordersReq
     */
    orders(ordersReq: SpotOrdersReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Place orders in batches
     * @param batchOrdersReq
     */
    batchOrders(batchOrdersReq: SpotBatchOrdersReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * cancel the order
     * @param cancelOrderReq
     */
    cancelOrder(cancelOrderReq: SpotCancelOrderReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Batch cancellation
     * @param cancelBatchOrderReq
     */
    cancelBatchOrder(cancelBatchOrderReq: SpotCancelBatchOrderReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get order details
     * @param orderInfoReq
     */
    orderInfo(orderInfoReq: SpotOrderInfoReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Obtain orders that have not been closed or partially closed but not cancelled
     * @param openOrdersReq
     */
    openOrders(openOrdersReq: SpotOpenOrdersReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get historical delegation list
     * @param historyReq
     */
    history(historyReq: SpotHistoryReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Obtain transaction details
     * @param fillsReq
     */
    fills(fillsReq: SpotFillsReq): Promise<import("axios").AxiosResponse<any>>;
}
