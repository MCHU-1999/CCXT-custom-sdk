"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixPositionApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class MixPositionApi extends BaseApi_1.BaseApi {
    /**
     * Obtain single contract position information
     * @param symbol
     * @param marginCoin
     */
    singlePosition(symbol, marginCoin) {
        const url = config_1.MIX_URL.MIX_POSITION + '/singlePosition';
        const qsOrBody = { symbol, marginCoin };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
    /**
     * Obtain all contract position information
     * @param productType
     * @param marginCoin
     */
    allPosition(productType, marginCoin) {
        const url = config_1.MIX_URL.MIX_POSITION + '/allPosition';
        const qsOrBody = { productType, marginCoin };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
}
exports.MixPositionApi = MixPositionApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4UG9zaXRpb25BcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL21peC9NaXhQb3NpdGlvbkFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBbUM7QUFDbkMsc0NBQWtDO0FBRWxDLE1BQWEsY0FBZSxTQUFRLGlCQUFPO0lBQ3ZDOzs7O09BSUc7SUFDSCxjQUFjLENBQUMsTUFBYyxFQUFDLFVBQWlCO1FBQzNDLE1BQU0sR0FBRyxHQUFHLGdCQUFPLENBQUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDO1FBQ3JELE1BQU0sUUFBUSxHQUFHLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxDQUFDO1FBQ3JDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNqRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQTtJQUNuRSxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILFdBQVcsQ0FBQyxXQUFtQixFQUFDLFVBQWlCO1FBQzdDLE1BQU0sR0FBRyxHQUFHLGdCQUFPLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztRQUNsRCxNQUFNLFFBQVEsR0FBRyxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsQ0FBQztRQUMxQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDakQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUE7SUFDbkUsQ0FBQztDQUNKO0FBdkJELHdDQXVCQyJ9