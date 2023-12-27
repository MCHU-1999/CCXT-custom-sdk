import { BaseApi } from '../BaseApi';
export declare class SpotMarketApi extends BaseApi {
    /**
     * Obtain transaction data
     * @param symbol
     * @param limit
     */
    fills(symbol: string, limit: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get depth data
     * @param symbol
     * @param limit
     * @param type
     */
    depth(symbol: string, limit: string, type: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get a Ticker Information
     * @param symbol
     */
    ticker(symbol: string): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get all Ticker information
     */
    tickers(): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Obtain K line data
     * @param symbol
     * @param period (Time unit and granularity of K line (refer to the following list for values))
     * @param after
     * @param before
     * @param limit
     */
    candles(symbol: string, period: string, after: string, before: string, limit: string): Promise<import("axios").AxiosResponse<any>>;
}
