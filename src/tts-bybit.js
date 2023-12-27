const ccxt = require ('ccxt');
const bybitSDK = require("../bybit-api");

/**
 * Override CCXT bybit functions.
 */
class BybitApi extends ccxt.bybit {
    async createOrder(...params) {
        let resData = await super.createOrder(...params);
        // Bybit bug: need to wait a while for fetch order after create order
        await new Promise(r => setTimeout(r, 1000));
        const orderDetail = await super.fetchOrder(resData?.id, params[0]);
        return {
            ...resData,
            ...orderDetail,
        };
    }
    /**
     * This function calls ccxt.fetchBalance()
     * @param {ccxt.Params} params 
     */
    async fetchBalance(params = undefined) {
        let resData = super.fetchBalance(params)
        return resData;
    }
    /**
     * ccxt.loadMarkets() + settleCoin filter
     * @param {String} settleCoin set which settleCoin you want to show.
     */
    async loadMarkets(settleCoin) {
        let marketData = {};
        let resData = await super.loadMarkets();
        let resKeys = Object.keys(resData);
        // console.log(resKeys);
        if (settleCoin != undefined){
            resKeys = resKeys.filter(obj => obj.split(':')[1] == settleCoin);
        }
        resKeys.forEach(element => {
            marketData[element] = resData[element];
        });
        return marketData;
    }
    /**
     * ccxt.fetchTickers() + settleCoin filter
     * @param {String} settleCoin set which settleCoin you want to show.
     * @param {ccxt.Params} params 
     */
    async fetchAllTickers(settleCoin, params = undefined) {
        let tickerData = {};
        let resData = await super.fetchTickers(undefined, params);
        let resKeys = Object.keys(resData);
        // console.log(resKeys);
        if (settleCoin != undefined){
            resKeys = resKeys.filter(obj => obj.split(':')[1] == settleCoin);
        }
        resKeys.forEach(element => {
            tickerData[element] = resData[element];
        });
        return tickerData;
    }
    /**
     * This is a handmade function used to get markPrice of specific symbol.
     * @param {String} symbol query symbol
     */
    async fetchMarkPrice(symbol) { 
        const bybitAccount = new bybitSDK.ContractClient({'key': this.apiKey,'secret': this.secret});
        let market = super.market(symbol);
        if (!market['swap']) {
            throw 'fetchMarkPrice() supports swap contracts only';
        }
        let resData = await bybitAccount.getSymbolTicker('linear', market.info.symbol);
        // console.log(resData);
        return {
            symbol: symbol,
            markPrice: resData.result.list[0].markPrice,
            timestamp: String(resData.time),
        }
    }
    /**
     * ccxt.fetchPositions() + settleCoin filter
     * @param {String} symbols a list with query symbols.
     * @param {String} settleCoin set which settleCoin you want to show.
     * @param {ccxt.Params} params 
     */
    async fetchPositions(symbols, settleCoin, params = undefined) {
        let positionData = [];
        let resData = await super.fetchDerivativesPositions(symbols, params);
        positionData = resData;
        // console.log(resData);
        if (settleCoin != undefined){
            positionData = resData.filter(obj => obj.symbol.split(':')[1] == settleCoin);
        }
        return positionData;
    }
    /**
     * ccxt.fetchPosition() + showZeroPos filter
     * @param {String} symbol specific symbol.
     * @param {boolean} showZeroPos show symbols with size = 0 or not. 
     * @param {ccxt.Params} params 
     */
    async fetchPosition(symbol, showZeroPos = false, params = undefined) {
        let positionData = [];
        let resData = await super.fetchDerivativesPositions([symbol], params);
        positionData = resData;
        // console.log(resData);
        if (!showZeroPos){
            positionData = resData.filter(obj => obj.contracts > 0);
        }
        return positionData;
    }
    /**
     * ccxt.setMarginMode() + avoid error handler.
     * @param {String} marginMode margin mode, should be either isolated or cross.
     * @param leverage Additional Requirement for bybit setMarginMode().
     * @param {String} symbol the specific symbol.
     */
    async setMarginMode(marginMode = 'cross', leverage, symbol) {
        try{
            let resData = await super.setMarginMode(marginMode, symbol, { leverage });
            return resData;
        }catch(errorMsg){
            // console.log(errorMsg);
            let errorJSON = JSON.parse(String(errorMsg).split(' bybit ')[1]);
            // console.log(errorJSON);
            return errorJSON;
        }
    }
    /**
     * ccxt.setLeverage() + avoid error handler.
     * @param {number} leverage 
     * @param {String} symbol the specific symbol.
     */
    async setLeverage(leverage, symbol) {
        try{
            let resData = await super.setLeverage(leverage, symbol);
            return resData;
        }catch(errorMsg){
            // console.log(errorMsg);
            let errorJSON = JSON.parse(String(errorMsg).split(' bybit ')[1]);
            // console.log(errorJSON);
            return errorJSON;
        }
    }
    /**
     * ccxt.setPositionMode() + avoid error handler.
     * @param {boolean} hedged 
     * @param {String} symbol the specific symbol.
     */
    async setPositionMode(hedged = true, symbol) {
        try{
            let resData = await super.setPositionMode(hedged, symbol);
            return resData;
        }catch(errorMsg){
            // console.log(errorMsg);
            let errorJSON = JSON.parse(String(errorMsg).split(' bybit ')[1]);
            // console.log(errorJSON);
            return errorJSON;
        }
    }
    /**
     * ccxt.fetchClosedOrders() + orderStatus filter.
     * @param {String} symbol the specific symbol.
     * @param {number} since timestamp to milliseconds.
     * @param {number} limit the number limit of returning results.
     * @param {ccxt.Params} params 
     */
    async fetchClosedOrders(symbol, since, limit, params = undefined) {
        let resData = await super.fetchClosedOrders(symbol, since, limit, params);
        let orderData = resData.filter(obj => (obj.status !== 'open'));
        return orderData;
    }
    /**
     * get marginMode, positionMode, leverage of a specific symbol.
     * @param {String} symbol the specific symbol, it's mandatory in binance.
     */
    async fetchAccountInfo(symbol = undefined) {
        var data = [];
        var hedged;
        var marginMode;
        var leverage = null, longLeverage = null, shortLeverage = null;
        let market = super.market(symbol);
        if (!market['swap']) {
            throw 'fetchAccountInfo() supports swap contracts only';
        }
        const bybitAccount = new bybitSDK.ContractClient({'key': this.apiKey,'secret': this.secret});
        let resData = await bybitAccount.getPositions({symbol: market.info.symbol, settleCoin: market.settle});
        for(let i=0; i<resData['result']['list'].length ; i++){
            if(resData['result']['list'][i]['symbol'] === symbol.replace(/:USDT|\//g, "")){
                data.push(resData['result']['list'][i]);
            }
        }
        if(data.length === 1){      //means you are in one-way mode.
            if(resData['result']['list'][0]['tradeMode'] === 0){      //means you are using cross margin.
                hedged = false;
                marginMode = 'cross';
                leverage = parseInt(resData['result']['list'][0]['leverage']);
            } else {
                hedged = false;
                marginMode = 'isolated';
                leverage = parseInt(resData['result']['list'][0]['leverage']);
            }
        } else {        //means you are in hedge mode.
            if(resData['result']['list'][0]['tradeMode'] === 0){      //means you are using cross margin.
                hedged = true;
                marginMode = 'cross';
                longLeverage = parseInt(resData['result']['list'][0]['leverage']);
                shortLeverage = parseInt(resData['result']['list'][1]['leverage']);
            } else {
                hedged = true;
                marginMode = 'isolated';
                longLeverage = parseInt(resData['result']['list'][0]['leverage']);
                shortLeverage = parseInt(resData['result']['list'][1]['leverage']);
            }
        }
        return {
            symbol: symbol,
            hedged: hedged,
            marginMode: marginMode,
            leverage: leverage,
            longLeverage: longLeverage,
            shortLeverage: shortLeverage,
        }
    }

}
exports.BybitApi = BybitApi;