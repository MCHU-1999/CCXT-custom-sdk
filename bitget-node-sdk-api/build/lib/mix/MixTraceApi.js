"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixTraceApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class MixTraceApi extends BaseApi_1.BaseApi {
    /**
     * Dealer closing interface
     * @param mixCloseTrackOrderReq
     */
    closeTrackOrder(closeTrackOrderReq) {
        const url = config_1.MIX_URL.MIX_TRACE + '/closeTrackOrder';
        const headers = this.signer('POST', url, closeTrackOrderReq);
        return this.axiosInstance.post(url, closeTrackOrderReq, { headers });
    }
    /**
     * The trader obtains the current order
     * @param symbol
     * @param productType
     * @param pageSize
     * @param pageNo
     */
    currentTrack(symbol, productType, pageSize, pageNo) {
        const url = config_1.MIX_URL.MIX_TRACE + '/currentTrack';
        const qsOrBody = { symbol, productType, pageSize, pageNo };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * The trader obtains the historical order
     * @param startTime
     * @param endTime
     * @param pageSize
     * @param pageNo
     */
    historyTrack(startTime, endTime, pageSize, pageNo) {
        const url = config_1.MIX_URL.MIX_TRACE + '/historyTrack';
        const qsOrBody = { startTime, endTime, pageSize, pageNo };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Summary of traders' profit sharing
     */
    summary() {
        const url = config_1.MIX_URL.MIX_TRACE + '/summary';
        const headers = this.signer('GET', url, null);
        return this.axiosInstance.get(url, { headers });
    }
    /**
     * Historical profit sharing summary of traders (by settlement currency)
     */
    profitSettleTokenIdGroup() {
        const url = config_1.MIX_URL.MIX_TRACE + '/profitSettleTokenIdGroup';
        const headers = this.signer('GET', url, null);
        return this.axiosInstance.get(url, { headers });
    }
    /**
     * Historical profit sharing summary of traders (by settlement currency and date)
     * @param pageSize
     * @param pageNo
     */
    profitDateGroupList(pageSize, pageNo) {
        const url = config_1.MIX_URL.MIX_TRACE + '/profitSettleTokenIdGroup';
        const qsOrBody = { pageSize, pageNo };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Historical profit distribution details of traders
     * @param marginCoin
     * @param date
     * @param pageSize
     * @param pageNo
     */
    profitDateList(marginCoin, date, pageSize, pageNo) {
        const url = config_1.MIX_URL.MIX_TRACE + '/profitDateList';
        const qsOrBody = { marginCoin, date, pageSize, pageNo };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Details of traders to be distributed
     * @param pageSize
     * @param pageNo
     */
    waitProfitDateList(pageSize, pageNo) {
        const url = config_1.MIX_URL.MIX_TRACE + '/waitProfitDateList';
        const qsOrBody = { pageSize, pageNo };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Followers obtain documentary information
     * @param pageSize
     * @param pageNo
     * @param startTime
     * @param endTime
     */
    followerHistoryOrders(pageSize, pageNo, startTime, endTime) {
        const url = config_1.MIX_URL.MIX_TRACE + '/followerHistoryOrders';
        const qsOrBody = { pageSize, pageNo, startTime, endTime };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
}
exports.MixTraceApi = MixTraceApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4VHJhY2VBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL21peC9NaXhUcmFjZUFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBbUM7QUFFbkMsc0NBQWtDO0FBRWxDLE1BQWEsV0FBWSxTQUFRLGlCQUFPO0lBQ3BDOzs7T0FHRztJQUNILGVBQWUsQ0FBQyxrQkFBc0M7UUFDbEQsTUFBTSxHQUFHLEdBQUcsZ0JBQU8sQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFDbkQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLGtCQUFrQixDQUFDLENBQUE7UUFDNUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFDRDs7Ozs7O09BTUc7SUFDSCxZQUFZLENBQUMsTUFBYyxFQUFDLFdBQWtCLEVBQUMsUUFBZSxFQUFDLE1BQWE7UUFDeEUsTUFBTSxHQUFHLEdBQUcsZ0JBQU8sQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBQ2hELE1BQU0sUUFBUSxHQUFHLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLENBQUM7UUFDdEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxZQUFZLENBQUMsU0FBaUIsRUFBQyxPQUFjLEVBQUMsUUFBZSxFQUFDLE1BQWE7UUFDdkUsTUFBTSxHQUFH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