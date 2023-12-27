"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotMarketApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class SpotMarketApi extends BaseApi_1.BaseApi {
    /**
     * Obtain transaction data
     * @param symbol
     * @param limit
     */
    fills(symbol, limit) {
        const url = config_1.SPOT_URL.SPOT_MARKET + '/fills';
        const qsOrBody = { symbol, limit };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Get depth data
     * @param symbol
     * @param limit
     * @param type
     */
    depth(symbol, limit, type) {
        const url = config_1.SPOT_URL.SPOT_MARKET + '/depth';
        const qsOrBody = { symbol, limit, type };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Get a Ticker Information
     * @param symbol
     */
    ticker(symbol) {
        const url = config_1.SPOT_URL.SPOT_MARKET + '/ticker';
        const qsOrBody = { symbol };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Get all Ticker information
     */
    tickers() {
        const url = config_1.SPOT_URL.SPOT_MARKET + '/tickers';
        const headers = this.signer('GET', url, null);
        return this.axiosInstance.get(url, { headers });
    }
    /**
     * Obtain K line data
     * @param symbol
     * @param period (Time unit and granularity of K line (refer to the following list for values))
     * @param after
     * @param before
     * @param limit
     */
    candles(symbol, period, after, before, limit) {
        const url = config_1.SPOT_URL.SPOT_MARKET + '/candles';
        const qsOrBody = { symbol, period, after, before, limit };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
}
exports.SpotMarketApi = SpotMarketApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BvdE1hcmtldEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc3BvdC9TcG90TWFya2V0QXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFtQztBQUNuQyxzQ0FBbUM7QUFFbkMsTUFBYSxhQUFjLFNBQVEsaUJBQU87SUFDdEM7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxNQUFhLEVBQUMsS0FBWTtRQUM1QixNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDNUMsTUFBTSxRQUFRLEdBQUcsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDakMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxNQUFhLEVBQUMsS0FBWSxFQUFDLElBQVc7UUFDeEMsTUFBTSxHQUFHLEdBQUcsaUJBQVEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzVDLE1BQU0sUUFBUSxHQUFHLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxJQUFJLEVBQUMsQ0FBQztRQUN0QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDakQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUE7SUFDbkUsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxNQUFhO1FBQ2hCLE1BQU0sR0FBRyxHQUFHLGlCQUFRLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QyxNQUFNLFFBQVEsR0FBRyxFQUFDLE1BQU0sRUFBQyxDQUFDO1FBQzFCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNqRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTtJQUNuRSxDQUFDO0lBQ0Q7O09BRUc7SUFDSCxPQUFPO1FBQ0gsTUFBTSxHQUFHLEdBQUcsaUJBQVEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM3QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUNEOzs7Ozs7O09BT0c7SUFDSCxPQUFPLENBQUMsTUFBYSxFQUFDLE1BQWEsRUFBQyxLQUFZLEVBQUMsTUFBYSxFQUFDLEtBQVk7UUFDdkUsTUFBTSxHQUFHLEdBQUcsaUJBQVEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlDLE1BQU0sUUFBUSxHQUFHLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxDQUFDO1FBQ3BELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNqRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0NBQ0o7QUF6REQsc0NBeURDIn0=