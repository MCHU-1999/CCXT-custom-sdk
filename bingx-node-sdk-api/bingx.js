const crypto = require('crypto');
// const fetch = require('node-fetch');
const urlencode = require('urlencode');
const sortJson = require('sort-json');
// import fetch from 'node-fetch';

class bingxApi {
    constructor(params){
        this.apiKey = params.apiKey;
        this.apiSecret = params.secret;
        this.baseUrl = 'https://api-swap-rest.bingbon.pro';
    }
    genSignature(method, path, paramsStr) {
        const originString = method + path + paramsStr
        var hmac = crypto.createHmac("sha256", this.apiSecret).update(originString, 'utf-8').digest('base64')
        hmac = urlencode(hmac)
        return hmac;
    }
    
    post(url, data) {
        // console.log(data)
        let options = {
            method: "POST",
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Content-Type': 'application/json;charset=utf-8'
            },
        };
        return fetch(url+'?'+data, options)
    }
    
    get(url) {
        let options = {
            method: "GET"
        };
        return fetch(url, options)
    }
    
    // ------------------------------------------------------------------------------------------------------------
    
    async getBalance() {
        var paramsStr = "";
        var signature = "";
        var url = "";
        var paramsMap = {
            'apiKey': this.apiKey,
            "currency": "USDT",
            'timestamp': Number(Date.now()),
        };
        paramsMap = sortJson(paramsMap);
        for(let i=0; i<Object.keys(paramsMap).length; i++){
            paramsStr = paramsStr + Object.keys(paramsMap)[i] + "=" + Object.values(paramsMap)[i] + "&"
        }
        paramsStr = paramsStr.substring(0, paramsStr.length - 1);
        signature = this.genSignature('POST', '/api/v1/user/getBalance', paramsStr, this.apiSecret);
        paramsStr = paramsStr + "&sign=" + signature;
        url = this.baseUrl + "/api/v1/user/getBalance";
        const res = await this.post(url, paramsStr)
        return res.json();
    }
    
    async getPositions(symbol = undefined) {
        var paramsStr = "";
        var signature = "";
        var url = "";
        var paramsMap = {
            'apiKey': this.apiKey,
            'symbol': symbol,
            'timestamp': Number(Date.now()),
        };
        if (symbol === undefined) {
            paramsMap = {
                'apiKey': this.apiKey,
                'timestamp': Number(Date.now()),
            };
        }
        paramsMap = sortJson(paramsMap);
        for(let i=0; i<Object.keys(paramsMap).length; i++){
            paramsStr = paramsStr + Object.keys(paramsMap)[i] + "=" + Object.values(paramsMap)[i] + "&"
        }
        paramsStr = paramsStr.substring(0, paramsStr.length - 1);
        signature = this.genSignature('POST', '/api/v1/user/getPositions', paramsStr, this.apiSecret);
        paramsStr = paramsStr + "&sign=" + signature
        url = this.baseUrl + "/api/v1/user/getPositions";
        const res = await this.post(url, paramsStr);
        return res.json();
    }
    
    async getContracts(){
        var url = this.baseUrl + "/api/v1/market/getAllContracts";
        let res = await this.get(url);
        return res.json();
    }
    
    async setMarginMode(symbol, marginMode){
        var paramsStr = "";
        var signature = "";
        var url = "";
        var paramsMap = {
            "symbol": symbol,
            "apiKey": this.apiKey,
            "marginMode": marginMode,
            'timestamp': Number(Date.now()),
        }
        paramsMap = sortJson(paramsMap);
        for(let i=0; i<Object.keys(paramsMap).length; i++){
            paramsStr = paramsStr + Object.keys(paramsMap)[i] + "=" + Object.values(paramsMap)[i] + "&"
        }
        paramsStr = paramsStr.substring(0, paramsStr.length - 1);
        signature = this.genSignature('POST', '/api/v1/user/setMarginMode', paramsStr, this.apiSecret);
        paramsStr = paramsStr + "&sign=" + signature;
        url = this.baseUrl+"/api/v1/user/setMarginMode";
        const res = await this.post(url, paramsStr);
        return res.json()
    }
    
    async setLeverage(symbol, side, leverage){
        var paramsStr = "";
        var signature = "";
        var url = "";
        var paramsMap = {
            "symbol": symbol,
            "apiKey": this.apiKey,
            "side": side,
            "leverage": leverage,
            'timestamp': Number(Date.now()),
        }
        paramsMap = sortJson(paramsMap);
        for(let i=0; i<Object.keys(paramsMap).length; i++){
            paramsStr = paramsStr + Object.keys(paramsMap)[i] + "=" + Object.values(paramsMap)[i] + "&"
        }
        paramsStr = paramsStr.substring(0, paramsStr.length - 1);
        signature = this.genSignature('POST', '/api/v1/user/setLeverage', paramsStr, this.apiSecret);
        paramsStr = paramsStr + "&sign=" + signature;
        url = this.baseUrl+"/api/v1/user/setLeverage";
        const res = await this.post(url, paramsStr);
        return res.json()
    }
    
    async placeOrder(symbol, side, price, volume, tradeType, action){
        var paramsStr = "";
        var signature = "";
        var url = "";
        var paramsMap = {
            "symbol": symbol,
            "apiKey": this.apiKey,
            "side": side,
            "entrustPrice": price,
            "entrustVolume": volume,
            "tradeType": tradeType,
            "action": action,
            'timestamp': Number(Date.now()),
        }
        paramsMap = sortJson(paramsMap);
        for(let i=0; i<Object.keys(paramsMap).length; i++){
            paramsStr = paramsStr + Object.keys(paramsMap)[i] + "=" + Object.values(paramsMap)[i] + "&"
        }
        paramsStr = paramsStr.substring(0, paramsStr.length - 1);
        signature = this.genSignature('POST', '/api/v1/user/trade', paramsStr, this.apiSecret);
        paramsStr = paramsStr + "&sign=" + signature;
        url = this.baseUrl+"/api/v1/user/trade";
        const res = await this.post(url, paramsStr)
        return res.json()
    }
    
    async closeOnePosition(symbol, positionId){
        var paramsStr = "";
        var signature = "";
        var url = "";
        var paramsMap = {
            "symbol": symbol,
            "apiKey": this.apiKey,
            "positionId": positionId,
            'timestamp': Number(Date.now()),
        }
        paramsMap = sortJson(paramsMap);
        for(let i=0; i<Object.keys(paramsMap).length; i++){
            paramsStr = paramsStr + Object.keys(paramsMap)[i] + "=" + Object.values(paramsMap)[i] + "&"
        }
        paramsStr = paramsStr.substring(0, paramsStr.length - 1);
        signature = this.genSignature('POST', '/api/v1/user/oneClickClosePosition', paramsStr, this.apiSecret);
        paramsStr = paramsStr + "&sign=" + signature;
        url = this.baseUrl+"/api/v1/user/oneClickClosePosition";
        const res = await this.post(url, paramsStr)
        return res.json()
    }
    
    async closeAllPositions(){
        var paramsStr = "";
        var signature = "";
        var url = "";
        var paramsMap = {
            "apiKey": this.apiKey,
            'timestamp': Number(Date.now()),
        }
        paramsMap = sortJson(paramsMap);
        for(let i=0; i<Object.keys(paramsMap).length; i++){
            paramsStr = paramsStr + Object.keys(paramsMap)[i] + "=" + Object.values(paramsMap)[i] + "&"
        }
        paramsStr = paramsStr.substring(0, paramsStr.length - 1);
        signature = this.genSignature('POST', '/api/v1/user/oneClickCloseAllPositions', paramsStr, this.apiSecret);
        paramsStr = paramsStr + "&sign=" + signature;
        url = this.baseUrl+"/api/v1/user/oneClickCloseAllPositions";
        const res = await this.post(url, paramsStr)
        return res.json()
    }
}

exports.bingxApi = bingxApi