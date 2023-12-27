"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixAccountApi = void 0;
const config_1 = require("../config");
const BaseApi_1 = require("../BaseApi");
class MixAccountApi extends BaseApi_1.BaseApi {
    /**
     * Get account  information
     * @param symbol
     * @param marginCoin
     */
    account(symbol, marginCoin) {
        const url = config_1.MIX_URL.MIX_ACCOUNT + '/account';
        const qsOrBody = { symbol, marginCoin };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Get account  information list
     * @param productType
     */
    accounts(productType) {
        const url = config_1.MIX_URL.MIX_ACCOUNT + '/accounts';
        const qsOrBody = { productType };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * set lever
     * @param leverageReq
     */
    setLeverage(leverageReq) {
        const url = config_1.MIX_URL.MIX_ACCOUNT + '/setLeverage';
        const headers = this.signer('POST', url, leverageReq);
        return this.axiosInstance.post(url, leverageReq, { headers });
    }
    /**
     * Adjustment margin
     * @param setMarginReq
     */
    setMargin(setMarginReq) {
        const url = config_1.MIX_URL.MIX_ACCOUNT + '/setMargin';
        const headers = this.signer('POST', url, setMarginReq);
        return this.axiosInstance.post(url, setMarginReq, { headers });
    }
    /**
     * Adjust margin mode
     * @param setMarginModeReq
     */
    setMarginMode(setMarginModeReq) {
        const url = config_1.MIX_URL.MIX_ACCOUNT + '/setMarginMode';
        const headers = this.signer('POST', url, setMarginModeReq);
        return this.axiosInstance.post(url, setMarginModeReq, { headers });
    }
    /**
     * Adjust hold mode
     * @param setPositionModeReq
     */
    setPositionMode(setPositionModeReq) {
        const url = config_1.MIX_URL.MIX_ACCOUNT + '/setPositionMode';
        const headers = this.signer('POST', url, setPositionModeReq);
        return this.axiosInstance.post(url, setPositionModeReq, { headers });
    }
    /**
     * Get the openable quantity
     * @param openCountReq
     */
    openCount(openCountReq) {
        const url = config_1.MIX_URL.MIX_ACCOUNT + '/open-count';
        const headers = this.signer('POST', url, openCountReq);
        return this.axiosInstance.post(url, openCountReq, { headers });
    }
}
exports.MixAccountApi = MixAccountApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4QWNjb3VudEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvbWl4L01peEFjY291bnRBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtDO0FBTWxDLHdDQUFtQztBQUVuQyxNQUFhLGFBQWMsU0FBUSxpQkFBTztJQUV0Qzs7OztPQUlHO0lBQ0gsT0FBTyxDQUFDLE1BQWMsRUFBRSxVQUFrQjtRQUN0QyxNQUFNLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDN0MsTUFBTSxRQUFRLEdBQUcsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUM7UUFDdEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFDRDs7O09BR0c7SUFDSCxRQUFRLENBQUMsV0FBbUI7UUFDeEIsTUFBTSxHQUFHLEdBQUcsZ0JBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzlDLE1BQU0sUUFBUSxHQUFHLEVBQUMsV0FBVyxFQUFDLENBQUM7UUFDL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7SUFDRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsV0FBMkI7UUFDbkMsTUFBTSxHQUFHLEdBQUcsZ0JBQU8sQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO1FBQ2pELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUNyRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFBO0lBQy9ELENBQUM7SUFDRDs7O09BR0c7SUFDSCxTQUFTLENBQUMsWUFBMEI7UUFDaEMsTUFBTSxHQUFHLEdBQUcsZ0JBQU8sQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO1FBQy9DLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQTtRQUN0RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7SUFDRDs7O09BR0c7SUFDSCxhQUFhLENBQUMsZ0JBQWtDO1FBQzVDLE1BQU0sR0FBRyxHQUFHLGdCQUFPLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDO1FBQ25ELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzFELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZSxDQUFDLGtCQUFzQztRQUNsRCxNQUFNLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUNyRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtRQUM1RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUNEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxZQUEwQjtRQUNoQyxNQUFNLEdBQUcsR0FBRyxnQkFBTyxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7UUFDaEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBQ3RELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDaEUsQ0FBQztDQUNKO0FBckVELHNDQXFFQyJ9