import { BaseApi } from '../BaseApi';
import { SpotBillsReq } from '../model/spot/account/SpotBillsReq';
export declare class SpotAccountApi extends BaseApi {
    /**
     * Obtain account assets
     */
    assets(): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get the bill flow
     * @param spotBillQueryReq
     */
    bills(billsReq: SpotBillsReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Obtain transfer records
     * @param coinId
     * @param fromType
     * @param limit
     * @param after
     * @param before
     */
    transferRecords(coinId: string, fromType: string, limit: string, after: string, before: string): Promise<import("axios").AxiosResponse<any>>;
}
