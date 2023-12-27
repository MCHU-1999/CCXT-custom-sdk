"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixOrderApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class MixOrderApi extends BaseApi_1.BaseApi {
    /**
     * place an order
     * @param placeOrderReq
     */
    placeOrder(placeOrderReq) {
        const url = config_1.MIX_URL.MIX_ORDER + '/placeOrder';
        const headers = this.signer('POST', url, placeOrderReq);
        return this.axiosInstance.post(url, placeOrderReq, { headers });
    }
    /**
     * Place orders in batches
     * @param batchOrdersReq
     */
    batchOrders(batchOrdersReq) {
        const url = config_1.MIX_URL.MIX_ORDER + '/batch-orders';
        const headers = this.signer('POST', url, batchOrdersReq);
        return this.axiosInstance.post(url, batchOrdersReq, { headers });
    }
    /**
     * cancel the order
     * @param cancelOrderReq
     */
    cancelOrder(cancelOrderReq) {
        const url = config_1.MIX_URL.MIX_ORDER + '/cancel-order';
        const headers = this.signer('POST', url, cancelOrderReq);
        return this.axiosInstance.post(url, cancelOrderReq, { headers });
    }
    /**
     * cancel all order
     */
    cancelAllOrder(marginCoin = 'USDT') {
        var productType;
        const url = config_1.MIX_URL.MIX_ORDER + '/cancel-all-orders';
        if(marginCoin === 'USDT'){
            productType = "umcbl";
        }else if(marginCoin === 'USDC'){
            productType = "cmcbl";
        }
        const headers = this.signer('POST', url, {
            "productType": productType,
            "marginCoin": marginCoin
        });
        return this.axiosInstance.post(url, {
            "productType": productType,
            "marginCoin": marginCoin
        }, {headers});
    }
    /**
     * Batch cancellation
     * @param cancelBatchOrderReq
     */
    cancelBatchOrder(cancelBatchOrderReq) {
        const url = config_1.MIX_URL.MIX_ORDER + '/cancel-batch-orders';
        const headers = this.signer('POST', url, cancelBatchOrderReq);
        return this.axiosInstance.post(url, cancelBatchOrderReq, { headers });
    }
    /**
     * Get Historical Delegation
     * @param symbol
     * @param startTime
     * @param endTime
     * @param pageSize
     * @param lastEndId
     * @param isPre
     */
    history(symbol, startTime, endTime, pageSize, lastEndId, isPre) {
        const url = config_1.MIX_URL.MIX_ORDER + '/history';
        var qsOrBody = {};
        if((lastEndId!==undefined)&&(isPre!==undefined)){
            qsOrBody = { symbol, startTime, endTime, pageSize, lastEndId, isPre };
        }else if(lastEndId!==undefined){
            qsOrBody = { symbol, startTime, endTime, pageSize, lastEndId };
        }else if(isPre!==undefined){
            qsOrBody = { symbol, startTime, endTime, pageSize, isPre };
        }else{
            qsOrBody = { symbol, startTime, endTime, pageSize };
        }
        // const qsOrBody = { symbol, startTime, endTime, pageSize, lastEndId, isPre };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Get ProductType History Orders
     * @param productType
     * @param startTime
     * @param endTime
     * @param pageSize
     * @param lastEndId
     * @param isPre
     */
    allHistory(productType, startTime, endTime, pageSize = 100, lastEndId, isPre) {
        const url = config_1.MIX_URL.MIX_ORDER + '/historyProductType';
        var qsOrBody = {};
        if((lastEndId!==undefined)&&(isPre!==undefined)){
            qsOrBody = { productType, startTime, endTime, pageSize, lastEndId, isPre };
        }else if(lastEndId!==undefined){
            qsOrBody = { productType, startTime, endTime, pageSize, lastEndId };
        }else if(isPre!==undefined){
            qsOrBody = { productType, startTime, endTime, pageSize, isPre };
        }else{
            qsOrBody = { productType, startTime, endTime, pageSize };
        }
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Get the current delegate
     * @param symbol
     */
    current(symbol) {
        const url = config_1.MIX_URL.MIX_ORDER + '/current';
        const qsOrBody = { symbol };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Get ALL current delegate
     * @param productType
     * @param marginCoin
     */
    allCurrent(productType,marginCoin) {
        const url = config_1.MIX_URL.MIX_ORDER + '/marginCoinCurrent';
        const qsOrBody = {productType,marginCoin};
        const headers = this.signer('GET', url, qsOrBody)
        return this.axiosInstance.get(url, {headers, params: qsOrBody})
    }
    /**
     * Get order details
     * @param symbol
     * @param orderId
     */
    detail(symbol, orderId) {
        const url = config_1.MIX_URL.MIX_ORDER + '/detail';
        const qsOrBody = { symbol, orderId };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Query transaction details
     * @param symbol
     * @param orderId
     */
    fills(symbol, orderId) {
        const url = config_1.MIX_URL.MIX_ORDER + '/fills';
        const qsOrBody = { symbol, orderId };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
}
exports.MixOrderApi = MixOrderApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4T3JkZXJBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL21peC9NaXhPcmRlckFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBbUM7QUFFbkMsc0NBQWtDO0FBS2xDLE1BQWEsV0FBWSxTQUFRLGlCQUFPO0lBQ3BDOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxhQUE0QjtRQUNuQyxNQUFNLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDOUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFBO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDakUsQ0FBQztJQUNEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxjQUE4QjtRQUN0QyxNQUFNLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDaEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQ3hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDbEUsQ0FBQztJQUVEOzs7T0FHRztJQUNILFdBQVcsQ0FBQyxjQUE4QjtRQUN0QyxNQUFNLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7UUFDaEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQ3hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMs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