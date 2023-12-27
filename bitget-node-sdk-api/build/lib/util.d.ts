/// <reference types="node" />
export interface BitgetApiHeader {
    'ACCESS-SIGN': string;
    'ACCESS-TIMESTAMP': number | string;
    'ACCESS-KEY': string;
    'ACCESS-PASSPHRASE': string;
    'Content-Type': string;
    Cookie: string;
    locale: string;
}
/**
 * 获取签名器
 * @param apiKey
 * @param secretKey
 * @param passphrase
 * @param locale
 */
export default function getSigner(apiKey?: string, secretKey?: string, passphrase?: string, locale?: string): (httpMethod: string, url: string, qsOrBody: NodeJS.Dict<any> | null) => {
    'ACCESS-SIGN': string;
    'ACCESS-TIMESTAMP': number;
    'ACCESS-KEY': string;
    'ACCESS-PASSPHRASE': string;
    'Content-Type': string;
    Cookie: string;
    locale: string;
};
/**
 * 加密算法
 * @param httpMethod
 * @param url
 * @param qsOrBody
 * @param timestamp
 * @param secretKey
 */
export declare function encrypt(httpMethod: string, url: string, qsOrBody: NodeJS.Dict<string | number> | null, timestamp: number, secretKey: string): string;
export declare function toJsonString(obj: object): string | null;
