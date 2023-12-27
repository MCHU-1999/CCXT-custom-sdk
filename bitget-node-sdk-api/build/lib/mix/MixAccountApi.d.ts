import { SetLeverageReq } from '../model/mix/account/SetLeverageReq';
import { SetMarginReq } from '../model/mix/account/SetMarginReq';
import { SetMarginModeReq } from '../model/mix/account/SetMarginModeReq';
import { SetPositionModeReq } from '../model/mix/account/SetPositionModeReq';
import { OpenCountReq } from '../model/mix/account/OpenCountReq';
import { BaseApi } from '../BaseApi';
export declare class MixAccountApi extends BaseApi {
    /**
     * Get account  information
     * @param symbol
     * @param marginCoin
     */
    account(symbol: string, marginCoin: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get account  information list
     * @param productType
     */
    accounts(productType: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * set lever
     * @param leverageReq
     */
    setLeverage(leverageReq: SetLeverageReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Adjustment margin
     * @param setMarginReq
     */
    setMargin(setMarginReq: SetMarginReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Adjust margin mode
     * @param setMarginModeReq
     */
    setMarginMode(setMarginModeReq: SetMarginModeReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Adjust hold mode
     * @param setPositionModeReq
     */
    setPositionMode(setPositionModeReq: SetPositionModeReq): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get the openable quantity
     * @param openCountReq
     */
    openCount(openCountReq: OpenCountReq): Promise<import("axios").AxiosResponse<any>>;
}
