"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotPublicApi = void 0;
const BaseApi_1 = require("../BaseApi");
const config_1 = require("../config");
class SpotPublicApi extends BaseApi_1.BaseApi {
    /**
     * Get server time
     */
    time() {
        const url = config_1.SPOT_URL.SPOT_PUBLIC + '/time';
        const headers = this.signer('GET', url, null);
        return this.axiosInstance.get(url, { headers });
    }
    /**
     * Basic information of currency
     */
    currencies() {
        const url = config_1.SPOT_URL.SPOT_PUBLIC + '/currencies';
        const headers = this.signer('GET', url, null);
        return this.axiosInstance.get(url, { headers });
    }
    /**
     * Get all product information
     */
    products() {
        const url = config_1.SPOT_URL.SPOT_PUBLIC + '/products';
        const headers = this.signer('GET', url, null);
        return this.axiosInstance.get(url, { headers });
    }
    /**
     * Get single product information
     * @param symbol
     */
    product(symbol) {
        const url = config_1.SPOT_URL.SPOT_PUBLIC + '/product';
        const qsOrBody = { symbol };
        const headers = this.signer('GET', url, qsOrBody);
        return this.axiosInstance.get(url, { headers, params: qsOrBody });
    }
}
exports.SpotPublicApi = SpotPublicApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BvdFB1YmxpY0FwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc3BvdC9TcG90UHVibGljQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFtQztBQUNuQyxzQ0FBbUM7QUFFbkMsTUFBYSxhQUFjLFNBQVEsaUJBQU87SUFDdEM7O09BRUc7SUFDSCxJQUFJO1FBQ0EsTUFBTSxHQUFHLEdBQUcsaUJBQVEsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBQzNDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM3QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUE7SUFDakQsQ0FBQztJQUNEOztPQUVHO0lBQ0gsVUFBVTtRQUNOLE1BQU0sR0FBRyxHQUFHLGlCQUFRLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztRQUNqRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDN0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFDRDs7T0FFRztJQUNILFFBQVE7UUFDSixNQUFNLEdBQUcsR0FBRyxpQkFBUSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzdDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsT0FBTyxDQUFDLE1BQWE7UUFDakIsTUFBTSxHQUFHLEdBQUcsaUJBQVEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlDLE1BQU0sUUFBUSxHQUFHLEVBQUMsTUFBTSxFQUFDLENBQUM7UUFDMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ2pELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7Q0FDSjtBQW5DRCxzQ0FtQ0MifQ==