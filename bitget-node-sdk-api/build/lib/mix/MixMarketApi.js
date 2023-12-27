"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixMarketApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class MixMarketApi extends BaseApi_1.BaseApi {
    /**
     * Contract information
     * @param productType
     */
    contracts(productType) {
        const url = config_1.MIX_URL.MIX_MARKET + '/contracts';
        const qsOrBody = { productType };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Deep market
     * @param symbol
     * @param limit
     */
    depth(symbol, limit) {
        const url = config_1.MIX_URL.MIX_MARKET + '/depth';
        const qsOrBody = { symbol, limit };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Deep market
     * @param symbol
     */
    ticker(symbol) {
        const url = config_1.MIX_URL.MIX_MARKET + '/ticker';
        const qsOrBody = { symbol };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Acquisition of single ticker market
     * @param productType
     */
    tickers(productType) {
        const url = config_1.MIX_URL.MIX_MARKET + '/tickers';
        const qsOrBody = { productType };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Obtain transaction details
     * @param symbol
     * @param limit
     */
    fills(symbol, limit) {
        const url = config_1.MIX_URL.MIX_MARKET + '/fills';
        const qsOrBody = { symbol, limit };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Obtain K line data
     * @param symbol
     * @param granularity (Category of k line)
     * @param startTime
     * @param endTime
     */
    candles(symbol, granularity, startTime, endTime) {
        const url = config_1.MIX_URL.MIX_MARKET + '/candles';
        const qsOrBody = { symbol, granularity, startTime, endTime };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Get currency index
     * @param symbol
     */
    index(symbol) {
        const url = config_1.MIX_URL.MIX_MARKET + '/index';
        const qsOrBody = { symbol };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Get the next settlement time of the contract
     * @param symbol
     */
    fundingTime(symbol) {
        const url = config_1.MIX_URL.MIX_MARKET + '/funding-time';
        const qsOrBody = { symbol };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Get historical fund rate
     * @param symbol
     * @param pageSize
     * @param pageNo
     * @param nextPage
     */
    historyFundRate(symbol, pageSize, pageNo, nextPage) {
        const url = config_1.MIX_URL.MIX_MARKET + '/history-fundRate';
        const qsOrBody = { symbol, pageSize, pageNo, nextPage };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Get the current fund rate
     * @param symbol
     */
    currentFundRate(symbol) {
        const url = config_1.MIX_URL.MIX_MARKET + '/current-fundRate';
        const qsOrBody = { symbol };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Obtain the total position of the platform
     * @param symbol
     */
    openInterest(symbol) {
        const url = config_1.MIX_URL.MIX_MARKET + '/open-interest';
        const qsOrBody = { symbol };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Get contract tag price
     * @param symbol
     */
    markPrice(symbol) {
        const url = config_1.MIX_URL.MIX_MARKET + '/mark-price';
        const qsOrBody = { symbol };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
}
exports.MixMarketApi = MixMarketApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4TWFya2V0QXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9taXgvTWl4TWFya2V0QXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFtQztBQUNuQyxzQ0FBa0M7QUFFbEMsTUFBYSxZQUFhLFNBQVEsaUJBQU87SUFDckM7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLFdBQW1CO1FBQ3pCLE1BQU0sR0FBRyxHQUFHLGdCQUFPLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztRQUM5QyxNQUFNLFFBQVEsR0FBRyxFQUFDLFdBQVcsRUFBQyxDQUFDO1FBQy9CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNqRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTtJQUNuRSxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxNQUFjLEVBQUUsS0FBYTtRQUMvQixNQUFNLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDMUMsTUFBTSxRQUFRLEdBQUcsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDakMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFDRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsTUFBYztRQUNqQixNQUFNLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFVBQVUsR0FBRyxTQUFT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