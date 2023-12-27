import { BaseApi } from '../BaseApi';
export declare class SpotPublicApi extends BaseApi {
    /**
     * Get server time
     */
    time(): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Basic information of currency
     */
    currencies(): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get all product information
     */
    products(): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get single product information
     * @param symbol
     */
    product(symbol: string): Promise<import("axios").AxiosResponse<any>>;
}
