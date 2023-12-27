"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotOrderApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class SpotOrderApi extends BaseApi_1.BaseApi {
    /**
     * place an order
     * @param ordersReq
     */
    orders(ordersReq) {
        const url = config_1.SPOT_URL.SPOT_ORDER + '/orders';
        const headers = this.signer('POST', url, ordersReq);
        return this.axiosInstance.post(url, ordersReq, { headers });
    }
    /**
     * Place orders in batches
     * @param batchOrdersReq
     */
    batchOrders(batchOrdersReq) {
        const url = config_1.SPOT_URL.SPOT_ORDER + '/batch-orders';
        const headers = this.signer('POST', url, batchOrdersReq);
        return this.axiosInstance.post(url, batchOrdersReq, { headers });
    }
    /**
     * cancel the order
     * @param cancelOrderReq
     */
    cancelOrder(cancelOrderReq) {
        const url = config_1.SPOT_URL.SPOT_ORDER + '/cancel-order';
        const headers = this.signer('POST', url, cancelOrderReq);
        return this.axiosInstance.post(url, cancelOrderReq, { headers });
    }
    /**
     * Batch cancellation
     * @param cancelBatchOrderReq
     */
    cancelBatchOrder(cancelBatchOrderReq) {
        const url = config_1.SPOT_URL.SPOT_ORDER + '/cancel-batch-orders';
        const headers = this.signer('POST', url, cancelBatchOrderReq);
        return this.axiosInstance.post(url, cancelBatchOrderReq, { headers });
    }
    /**
     * Get order details
     * @param orderInfoReq
     */
    orderInfo(orderInfoReq) {
        const url = config_1.SPOT_URL.SPOT_ORDER + '/orderInfo';
        const headers = this.signer('POST', url, orderInfoReq);
        return this.axiosInstance.post(url, orderInfoReq, { headers });
    }
    /**
     * Obtain orders that have not been closed or partially closed but not cancelled
     * @param openOrdersReq
     */
    openOrders(openOrdersReq) {
        const url = config_1.SPOT_URL.SPOT_ORDER + '/open-orders';
        const headers = this.signer('POST', url, openOrdersReq);
        return this.axiosInstance.post(url, openOrdersReq, { headers });
    }
    /**
     * Get historical delegation list
     * @param historyReq
     */
    history(historyReq) {
        const url = config_1.SPOT_URL.SPOT_ORDER + '/history';
        const headers = this.signer('POST', url, historyReq);
        return this.axiosInstance.post(url, historyReq, { headers });
    }
    /**
     * Obtain transaction details
     * @param fillsReq
     */
    fills(fillsReq) {
        const url = config_1.SPOT_URL.SPOT_ORDER + '/fills';
        const headers = this.signer('POST', url, fillsReq);
        return this.axiosInstance.post(url, fillsReq, { headers });
    }
}
exports.SpotOrderApi = SpotOrderApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BvdE9yZGVyQXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9zcG90L1Nwb3RPcmRlckFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBbUM7QUFDbkMsc0NBQW1DO0FBVW5DLE1BQWEsWUFBYSxTQUFRLGlCQUFPO0lBQ3JDOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxTQUF1QjtRQUMxQixNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQ25ELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDN0QsQ0FBQztJQUNEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxjQUFpQztRQUN6QyxNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFDbEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQ3hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDbEUsQ0FBQztJQUNEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxjQUFpQztRQUN6QyxNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7UUFDbEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQ3hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDbEUsQ0FBQztJQUNEOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLG1CQUEyQztRQUN4RCxNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQztRQUN6RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsbUJBQW1CLENBQUMsQ0FBQTtRQUM3RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQUNEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxZQUE2QjtRQUNuQyxNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7UUFDL0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBQ3RELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUNEOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxhQUErQjtRQUN0QyxNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7UUFDakQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFBO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUNEOzs7T0FHRztJQUNILE9BQU8sQ0FBQyxVQUF5QjtRQUM3QixNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBQ3BELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxRQUFxQjtRQUN2QixNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDM0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2xELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDNUQsQ0FBQztDQUNKO0FBMUVELG9DQTBFQyJ9