import {BaseApi} from '../BaseApi';
import {PlaceOrderReq} from '../model/mix/order/PlaceOrderReq';
import {MIX_URL} from '../config';
import {BatchOrdersReq} from '../model/mix/order/BatchOrdersReq';
import {CancelOrderReq} from '../model/mix/order/CancelOrderReq';
import {CancelBatchOrderReq} from '../model/mix/order/CancelBatchOrderReq';
import {HistoryOrderReq} from '../model/mix/order/HistoryOrderReq';

export class MixOrderApi extends BaseApi {
    /**
     * place an order
     * @param placeOrderReq
     */
    placeOrder(placeOrderReq: PlaceOrderReq) {
        const url = MIX_URL.MIX_ORDER + '/placeOrder';
        const headers = this.signer('POST', url, placeOrderReq)
        return this.axiosInstance.post(url, placeOrderReq, {headers})
    }
    /**
     * Place orders in batches
     * @param batchOrdersReq
     */
    batchOrders(batchOrdersReq: BatchOrdersReq) {
        const url = MIX_URL.MIX_ORDER + '/batch-orders';
        const headers = this.signer('POST', url, batchOrdersReq)
        return this.axiosInstance.post(url, batchOrdersReq, {headers})
    }

    /**
     * cancel the order
     * @param cancelOrderReq
     */
    cancelOrder(cancelOrderReq: CancelOrderReq) {
        const url = MIX_URL.MIX_ORDER + '/cancel-order';
        const headers = this.signer('POST', url, cancelOrderReq)
        return this.axiosInstance.post(url, cancelOrderReq, {headers})
    }
    /**
     * cancel all order
     */
    cancelAllOrder() {
        const url = MIX_URL.MIX_ORDER + '/cancel-all-orders';
        const headers = this.signer('POST', url, {
            "productType": "umcbl",
            "marginCoin": "USDT"
        })
        return this.axiosInstance.post(url, {
            "productType": "umcbl",
            "marginCoin": "USDT"
        }, {headers})
    }
    /**
     * Batch cancellation
     * @param cancelBatchOrderReq
     */
    cancelBatchOrder(cancelBatchOrderReq: CancelBatchOrderReq) {
        const url = MIX_URL.MIX_ORDER + '/cancel-batch-orders';
        const headers = this.signer('POST', url, cancelBatchOrderReq)
        return this.axiosInstance.post(url, cancelBatchOrderReq, {headers})
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
    history(symbol: string, startTime: string, endTime: string, pageSize: number, lastEndId: string, isPre: boolean) {
        const url = MIX_URL.MIX_ORDER + '/history';
        // const qsOrBody = {symbol, startTime, endTime, pageSize, lastEndId, isPre};
        var qsOrBody = {};
        if((lastEndId!==undefined)&&(isPre!==undefined)){
            qsOrBody = { symbol, startTime, endTime, pageSize, lastEndId, isPre }
        }else if(lastEndId!==undefined){
            qsOrBody = { symbol, startTime, endTime, pageSize, lastEndId }
        }else if(isPre!==undefined){
            qsOrBody = { symbol, startTime, endTime, pageSize, isPre }
        }else{
            qsOrBody = { symbol, startTime, endTime, pageSize }
        }
        const headers = this.signer('GET', url, qsOrBody)
        return this.axiosInstance.get(url, {headers, params: qsOrBody})
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
    allHistory(productType: string, startTime: string, endTime: string, pageSize: number, lastEndId: string, isPre: boolean) {
        const url = MIX_URL.MIX_ORDER + '/historyProductType';
        // const qsOrBody = {symbol, startTime, endTime, pageSize, lastEndId, isPre};
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
        const headers = this.signer('GET', url, qsOrBody)
        return this.axiosInstance.get(url, {headers, params: qsOrBody})
    }
    /**
     * Get the current delegate
     * @param symbol
     */
    current(symbol: string) {
        const url = MIX_URL.MIX_ORDER + '/current';
        const qsOrBody = {symbol};
        const headers = this.signer('GET', url, qsOrBody)
        return this.axiosInstance.get(url, {headers, params: qsOrBody})
    }
    /**
     * Get ALL current delegate
     * @param productType
     * @param marginCoin
     */
    allCurrent(productType: string,marginCoin: string) {
        const url = MIX_URL.MIX_ORDER + '/marginCoinCurrent';
        const qsOrBody = {productType,marginCoin};
        const headers = this.signer('GET', url, qsOrBody)
        return this.axiosInstance.get(url, {headers, params: qsOrBody})
    }
    /**
     * Get order details
     * @param symbol
     * @param orderId
     */
    detail(symbol: string,orderId:string) {
        const url = MIX_URL.MIX_ORDER + '/detail';
        const qsOrBody = {symbol,orderId};
        const headers = this.signer('GET', url, qsOrBody)
        return this.axiosInstance.get(url, {headers, params: qsOrBody})
    }
    /**
     * Query transaction details
     * @param symbol
     * @param orderId
     */
    fills(symbol: string,orderId:string) {
        const url = MIX_URL.MIX_ORDER + '/fills';
        const qsOrBody = {symbol,orderId};
        const headers = this.signer('GET', url, qsOrBody)
        return this.axiosInstance.get(url, {headers, params: qsOrBody})
    }
}