import { BaseApi } from '../BaseApi';
export declare class MixMarketApi extends BaseApi {
    /**
     * Contract information
     * @param productType
     */
    contracts(productType: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Deep market
     * @param symbol
     * @param limit
     */
    depth(symbol: string, limit: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Deep market
     * @param symbol
     */
    ticker(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Acquisition of single ticker market
     * @param productType
     */
    tickers(productType: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Obtain transaction details
     * @param symbol
     * @param limit
     */
    fills(symbol: string, limit: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Obtain K line data
     * @param symbol
     * @param granularity (Category of k line)
     * @param startTime
     * @param endTime
     */
    candles(symbol: string, granularity: string, startTime: string, endTime: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get currency index
     * @param symbol
     */
    index(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get the next settlement time of the contract
     * @param symbol
     */
    fundingTime(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get historical fund rate
     * @param symbol
     * @param pageSize
     * @param pageNo
     * @param nextPage
     */
    historyFundRate(symbol: string, pageSize: string, pageNo: string, nextPage: boolean): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get the current fund rate
     * @param symbol
     */
    currentFundRate(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Obtain the total position of the platform
     * @param symbol
     */
    openInterest(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get contract tag price
     * @param symbol
     */
    markPrice(symbol: string): Promise<import("axios").AxiosResponse<any>>;
}
