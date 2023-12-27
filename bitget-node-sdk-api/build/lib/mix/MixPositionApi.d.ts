import { BaseApi } from '../BaseApi';
export declare class MixPositionApi extends BaseApi {
    /**
     * Obtain single contract position information
     * @param symbol
     * @param marginCoin
     */
    singlePosition(symbol: string, marginCoin: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Obtain all contract position information
     * @param productType
     * @param marginCoin
     */
    allPosition(productType: string, marginCoin: string): Promise<import("axios").AxiosResponse<any>>;
}
