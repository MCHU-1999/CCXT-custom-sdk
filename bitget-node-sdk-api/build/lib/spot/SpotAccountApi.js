"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotAccountApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class SpotAccountApi extends BaseApi_1.BaseApi {
    /**
     * Obtain account assets
     */
    assets() {
        const url = config_1.SPOT_URL.SPOT_ACCOUNT + '/assets';
        const headers = this.signer('GET', url, null);
        return this.axiosInstance.get(url, { headers });
    }
    /**
     * Get the bill flow
     * @param spotBillQueryReq
     */
    bills(billsReq) {
        const url = config_1.SPOT_URL.SPOT_ACCOUNT + '/bills';
        const headers = this.signer('POST', url, billsReq);
        return this.axiosInstance.post(url, billsReq, { headers });
    }
    /**
     * Obtain transfer records
     * @param coinId
     * @param fromType
     * @param limit
     * @param after
     * @param before
     */
    transferRecords(coinId, fromType, limit, after, before) {
        const url = config_1.SPOT_URL.SPOT_ACCOUNT + '/transferRecords';
        const qsOrBody = { coinId, fromType, limit, after, before };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
}
exports.SpotAccountApi = SpotAccountApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BvdEFjY291bnRBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3Nwb3QvU3BvdEFjY291bnRBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQW1DO0FBQ25DLHNDQUFtQztBQUduQyxNQUFhLGNBQWUsU0FBUSxpQkFBTztJQUN2Qzs7T0FFRztJQUNILE1BQU07UUFDRixNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFDOUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzdDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLFFBQXFCO1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLGlCQUFRLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztRQUM3QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDbEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBQ0Q7Ozs7Ozs7T0FPRztJQUNILGVBQWUsQ0FBQyxNQUFhLEVBQUMsUUFBZSxFQUFDLEtBQVksRUFBQyxLQUFZLEVBQUMsTUFBYTtRQUNqRixNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztRQUN2RCxNQUFNLFFBQVEsR0FBRyxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsQ0FBQztRQUN2RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDakQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUE7SUFDbkUsQ0FBQztDQUNKO0FBakNELHdDQWlDQyJ9