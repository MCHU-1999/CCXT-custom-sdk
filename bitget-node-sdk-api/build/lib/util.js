"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJsonString = exports.encrypt = void 0;
const querystring_1 = require("querystring");
const crypto_1 = require("crypto");
const config_1 = require("./config");
/**
 * 获取签名器
 * @param apiKey
 * @param secretKey
 * @param passphrase
 * @param locale
 */
function getSigner(apiKey = '', secretKey = '', passphrase = '', locale = config_1.LOCAL.EN_US) {
    return (httpMethod, url, qsOrBody) => {
        const timestamp = Date.now();
        const signString = encrypt(httpMethod, url, qsOrBody, timestamp, secretKey);
        return {
            'ACCESS-SIGN': signString,
            'ACCESS-TIMESTAMP': timestamp,
            'ACCESS-KEY': apiKey,
            'ACCESS-PASSPHRASE': passphrase,
            'Content-Type': 'application/json',
            Cookie: 'locale=' + locale,
            locale
        };
    };
}
exports.default = getSigner;
/**
 * 加密算法
 * @param httpMethod
 * @param url
 * @param qsOrBody
 * @param timestamp
 * @param secretKey
 */
function encrypt(httpMethod, url, qsOrBody, timestamp, secretKey) {
    httpMethod = httpMethod.toUpperCase();
    const qsOrBodyStr = qsOrBody ? httpMethod === 'GET' ? '?' + querystring_1.stringify(qsOrBody) : toJsonString(qsOrBody) : '';
    const preHash = String(timestamp) + httpMethod + url + qsOrBodyStr;
    const mac = crypto_1.createHmac('sha256', secretKey);
    const preHashToMacBuffer = mac.update(preHash).digest();
    return preHashToMacBuffer.toString('base64');
}
exports.encrypt = encrypt;
function toJsonString(obj) {
    if (obj == null) {
        return null;
    }
    let json = JSON.stringify(obj);
    Object.keys(obj).filter(key => key[0] === '_').forEach(key => {
        json = json.replace(key, key.substring(1));
    });
    const reg = new RegExp('"_', 'g');
    return json.replace(reg, '"');
}
exports.toJsonString = toJsonString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBcUM7QUFDckMsbUNBQWlDO0FBRWpDLHFDQUErQjtBQVkvQjs7Ozs7O0dBTUc7QUFDSCxTQUF3QixTQUFTLENBQzdCLFNBQWlCLEVBQUUsRUFDbkIsWUFBb0IsRUFBRSxFQUN0QixhQUFxQixFQUFFLEVBQ3ZCLFNBQWlCLGNBQUssQ0FBQyxLQUFLO0lBRzVCLE9BQU8sQ0FBQyxVQUFrQixFQUFFLEdBQVcsRUFBRSxRQUFpQyxFQUFFLEVBQUU7UUFDMUUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsU0FBUyxDQUFDLENBQUE7UUFFMUUsT0FBTztZQUNILGFBQWEsRUFBRSxVQUFVO1lBQ3pCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0IsWUFBWSxFQUFFLE1BQU07WUFDcEIsbUJBQW1CLEVBQUUsVUFBVTtZQUMvQixjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLE1BQU0sRUFBRSxTQUFTLEdBQUcsTUFBTTtZQUMxQixNQUFNO1NBQ1QsQ0FBQTtJQUNMLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFyQkQsNEJBcUJDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILFNBQWdCLE9BQU8sQ0FBQyxVQUFrQixFQUFFLEdBQVcsRUFBRSxRQUE2QyxFQUFFLFNBQWlCLEVBQUMsU0FBZ0I7SUFDdEksVUFBVSxHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNyQyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyx1QkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtJQUU3RyxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUE7SUFFbEUsTUFBTSxHQUFHLEdBQUcsbUJBQVUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDM0MsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ3ZELE9BQU8sa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ2hELENBQUM7QUFURCwwQkFTQztBQUVELFNBQWdCLFlBQVksQ0FBQyxHQUFXO0lBQ3BDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUNiLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN6RCxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQVhELG9DQVdDIn0=