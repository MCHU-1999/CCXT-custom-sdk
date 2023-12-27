const ccxt = require ('ccxt');
const binanceSDK = require("../binance");

/**
 * Override CCXT binance functions.
 */
class BinanceApi extends ccxt.binanceusdm {
    async createOrder(...params) {
        let resData = await super.createOrder(...params);
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
        let resData = super.fetchBalance(params);
        return resData;
    }
    /**
     * ccxt.loadMarkets() + settleCoin filter
     * @param {String} settleCoin set which settleCoin you want to show.
     * @param {ccxt.Params} params
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
        const binanceAccount = new binanceSDK.USDMClient({'api_key': this.apiKey,'api_secret': this.secret});
        let market = super.market(symbol);
        if (!market['swap']) {
            throw 'fetchMarkPrice() supports swap contracts only';
        }
        let resData = await binanceAccount.getMarkPrice({"symbol": market.info.symbol});
        // console.log(resData);
        return {
            symbol: symbol,
            markPrice: resData.markPrice,
            timestamp: String(resData.time),
        }
    }
    /**
     * ccxt.fetchPositions() + settleCoin filter
     * @param {String} symbols a list with query symbols.
     * @param {String} settleCoin set which settleCoin you want to show.
     * @param {boolean} showZeroPos show symbols with size = 0 or not. 
     * @param {ccxt.Params} params
     */
    async fetchPositions(symbols, settleCoin, showZeroPos = false, params = undefined) {
        let positionData = [];
        let resData = await super.fetchPositions(symbols, params);
        resData.forEach(element => {
            element.side = element.info.positionSide.toLowerCase();
        });
        positionData = resData;
        // console.log(resData);
        if (settleCoin != undefined){
            positionData = resData.filter(obj => obj.symbol.split(':')[1] == settleCoin);
        }
        if (!showZeroPos){
            positionData = positionData.filter(obj => obj.contracts > 0);
        }
        return positionData;
    }
    /**
     * ccxt.fetchPosition() + settleCoin filter
     * @param {String} symbol specific symbol.
     * @param {boolean} showZeroPos show symbols with size = 0 or not. 
     * @param {ccxt.Params} params
     */
    async fetchPosition(symbol, showZeroPos = false, params = undefined) {
        let positionData = [];
        let resData = await super.fetchPositions([symbol], params);
        resData.forEach(element => {    //fuck binance
            element.side = element.info.positionSide.toLowerCase();
        });
        positionData = resData;
        // console.log(resData);
        if (!showZeroPos){
            positionData = resData.filter(obj => obj.contracts > 0);
        }
        return positionData;
    }
    /**
     * ccxt.setMarginMode() + String filter
     * @param {String} marginMode margin mode, should be either isolated or cross.
     * @param {String} symbol the specific symbol.
     */
    async setMarginMode(marginMode = 'cross', symbol) {
        let resData = await super.setMarginMode(marginMode, symbol);
        // console.log(resData);
        return resData;
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
            let errorJSON = JSON.parse(String(errorMsg).split(' binanceusdm ')[1]);
            // console.log(errorJSON);
            return errorJSON;
        }
    }
    /**
     * ccxt.fetchClosedOrders() + an emulated filter that returns both closed and canceled status.
     * @param {String} symbol the specific symbol, it's mandatory in binance.
     * @param {number} since timestamp to milliseconds.
     * @param {number} limit the number limit of returning results.
     * @param {ccxt.Params} params
     */
    async fetchClosedOrders(symbol = undefined, since = undefined, limit = 100, params = undefined) {
        let resData = await super.fetchOrders(symbol, since, limit, params);
        // console.log(resData);
        return resData.filter(obj => ((obj.status === 'closed')||(obj.status === 'canceled')));
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
        const binanceAccount = new binanceSDK.USDMClient({'api_key': this.apiKey,'api_secret': this.secret});
        let resData = await binanceAccount.getAccountInformation();

        for(let i=0; i<resData['positions'].length; i++){
            if(resData['positions'][i]['symbol'] === market.info.symbol){
                data.push(resData['positions'][i]);
            }
        }
        if(data.length === 1){      //means you are in one-way mode.
            if(data[0]['isolated'] === false){      //means you are using cross margin.
                hedged = false;
                marginMode = 'cross';
                leverage = parseInt(data[0]['leverage']);
            } else {
                hedged = false;
                marginMode = 'isolated';
                leverage = parseInt(data[0]['leverage']);
            }
        } else {        //means you are in hedge mode.
            if(data[0]['isolated'] === false){      //means you are using cross margin.
                hedged = true;
                marginMode = 'cross';
                longLeverage = parseInt(data[0]['leverage']);
                shortLeverage = parseInt(data[1]['leverage']);
            } else {
                hedged = false;
                marginMode = 'isolated';
                longLeverage = parseInt(data[0]['leverage']);
                shortLeverage = parseInt(data[1]['leverage']);
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
exports.BinanceApi = BinanceApi;