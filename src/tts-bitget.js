const ccxt = require ('ccxt');
const bitgetSDK = require("../bitget-node-sdk-api/build");

/**
 * Override CCXT bitget functions.
 */
class BitgetApi extends ccxt.bitget {
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
     * @param settleCoin set which settleCoin you want to show.
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
     * @param settleCoin set which settleCoin you want to show.
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
     * @param symbol query symbol
     */
    async fetchMarkPrice(symbol) { 
        const bitgetAccount = new bitgetSDK.MixMarketApi(this.apiKey, this.secret, this.password);
        let market = super.market(symbol);
        if (!market['swap']) {
            throw 'fetchMarkPrice() supports swap contracts only';
        }
        let resData = await bitgetAccount.markPrice(market.info.symbol);
        // console.log(resData);
        return {
            symbol: symbol,
            markPrice: resData.data.markPrice,
            timestamp: resData.data.timestamp,
        }
    }
    /**
     * ccxt.fetchPositions() + settleCoin filter
     * @param {String[]} symbols a list with query symbols.
     * @param settleCoin set which settleCoin you want to show.
     * @param showZeroPos show symbols with size = 0 or not. 
     * @param {ccxt.Params} params 
     */
    async fetchPositions(symbols, settleCoin, showZeroPos = false, params = undefined) {
        let positionData = [];
        let resData = await super.fetchPositions(symbols, params);
        positionData = resData;
        // console.log(resData.length);
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
     * @param symbol the specific symbol.
     * @param showZeroPos show symbols with size = 0 or not. 
     * @param {ccxt.Params} params 
     */
    async fetchPosition(symbol, showZeroPos = false, params = undefined) {
        let positionData = [];
        let resData = await super.fetchPosition(symbol, params);
        positionData = resData;
        // console.log(resData);
        if (!showZeroPos){
            positionData = resData.filter(obj => obj.contracts > 0);
        }
        return positionData;
    }
    /**
     * ccxt.setMarginMode() + String filter
     * @param marginMode margin mode, should be either isolated or cross.
     * @param symbol the specific symbol.
     */
    async setMarginMode(marginMode = 'cross', symbol) {
        marginMode = marginMode === 'cross' ? 'crossed' : marginMode === 'isolated' ? 'fixed' : marginMode;
        let resData = await super.setMarginMode(marginMode, symbol);
        // console.log(resData);
        return resData;
    }
    /**
     * ccxt.fetchOpenOrders() + a handmade function that doesn't require symbol.
     * @param {String} symbol the specific symbol, not mandatory.
     * @param {String} settleCoin set which settleCoin you want to show, not mandatory.
     * @param {number} since timestamp to milliseconds.
     * @param {number} limit the number limit of returning results.
     * @param {ccxt.Params} params 
     */
    async fetchOpenOrders(symbol = undefined, settleCoin = 'USDT', since = undefined, limit = 100, params = undefined) {
        try{
            var productType;
            if(symbol === undefined){
                if(settleCoin === undefined){
                    throw 'One parameter must be sent between symbol and settleCoin.'
                }else if(settleCoin === 'USDT'){
                    productType = 'umcbl';
                }else if(settleCoin === 'USDC'){
                    productType = 'cmcbl';
                }
                const bitgetAccount = new bitgetSDK.MixOrderApi(this.apiKey, this.secret, this.password);
                let resData =  await bitgetAccount.allCurrent(productType, settleCoin);
                return super.parseOrders(resData.data, undefined, since, limit);
            }else{
                return await super.fetchOpenOrders(symbol, since, limit, params);
            }
        }catch(errorMsg){
            return errorMsg;
        }
    }
    /**
     * special function for bitget, route: GET /api/mix/v1/plan/currentPlan
     * @param {String} symbol the specific symbol, mandatory.
     * @param {String} isPlan plan type: plan, profit_loss.
     */
    async fetchPlan(symbol = undefined, isPlan = undefined) {
        const bitgetAccount = new bitgetSDK.MixPlanApi(this.apiKey, this.secret, this.password);
        try{
            let market = super.market(symbol);
            if (!market['swap']) {
                throw 'fetchPlan() supports swap contracts only';
            }
            let resData = await bitgetAccount.currentPlan(market.info.symbol, isPlan);
            // console.log(resData);
            return super.parseOrders(resData.data, market);
        }catch(errorMsg){
            return errorMsg;
        }
    }
    /**
     * special function for bitget, route: POST /api/mix/v1/plan/cancelPlan
     * @param {String} orderId PLAN orderId
     * @param {String} symbol the specific symbol, mandatory.
     * @param {String} planType plan type: profit_plan, loss_plan, normal_plan, pos_profit, pos_loss, moving_plan, track_plan.
     */
    async cancelPlan(orderId, symbol = undefined, planType = undefined) {
        const bitgetAccount = new bitgetSDK.MixPlanApi(this.apiKey, this.secret, this.password);
        try{
            let market = super.market(symbol);
            if (!market['swap']) {
                throw 'cancelPlan() supports swap contracts only';
            }
            let resData = await bitgetAccount.cancelPlan({
                orderId,
                symbol: market.info.symbol,
                marginCoin: market.settle,
                planType,
            });
            // console.log(resData);
            return resData;
        }catch(errorMsg){
            return errorMsg;
        }
    }
    /**
     * special function for bitget, route: POST /api/mix/v1/plan/cancelAllPlan
     * @param {String} settleCoin set which settleCoin you want to cancel, mandatory.
     * @param {String} planType plan type: profit_plan, loss_plan, normal_plan, pos_profit, pos_loss, moving_plan, track_plan.
     */
    async cancelAllPlan(settleCoin = 'USDT', planType = undefined) {
        const bitgetAccount = new bitgetSDK.MixPlanApi(this.apiKey, this.secret, this.password);
        var productType;
        try{
            if (settleCoin === 'USDT'){
                productType = 'umcbl';
            } else if (settleCoin === 'USDC'){
                productType = 'cmcbl';
            }
            let resData = await bitgetAccount.cancelAllPlan(productType, planType);
            return resData;
        }catch(errorMsg){
            return errorMsg;
        }
    }
    /**
     * ccxt.fetchClosedOrders() + a handmade function that doesn't require symbol.
     * @param {String} symbol the specific symbol, not mandatory.
     * @param {String} settleCoin set which settleCoin you want to show, not mandatory.
     * @param {number} since timestamp to milliseconds.
     * @param {number} limit the number limit of returning results.
     * @param {ccxt.Params} params 
     */
    async fetchClosedOrders(symbol = undefined, settleCoin = 'USDT', since = undefined, limit = 100, params = undefined) {
        var productType;
        if(symbol === undefined){
            if(settleCoin === undefined){
                throw 'One parameter must be sent between symbol and settleCoin.'
            }else if(settleCoin === 'USDT'){
                productType = 'umcbl';
            }else if(settleCoin === 'USDC'){
                productType = 'cmcbl';
            }
            if(since === undefined){
                since = 1514736000000;
            }
            const bitgetAccount = new bitgetSDK.MixOrderApi(this.apiKey, this.secret, this.password);
            let resData = await bitgetAccount.allHistory(productType, since, Date.now());
            return super.parseOrders(resData.data.orderList, undefined, since, limit);
        }else{
            return await super.fetchClosedOrders(symbol, since, limit, params);
        }
    }
    /**
     * ccxt.cancelAllOrders() + a handmade function that doesn't require symbol.
     * @param {String} symbol the specific symbol, not mandatory.
     * @param {String} settleCoin not mandatory, but either symbol or settleCoin must be sent.
     * @param {ccxt.Params} params 
     */
    async cancelAllOrders(symbol = undefined, settleCoin = 'USDT', params = undefined) {
        if(symbol === undefined){
            const bitgetAccount = new bitgetSDK.MixOrderApi(this.apiKey, this.secret, this.password);
            return await bitgetAccount.cancelAllOrder(settleCoin);
        }else{
            if(params !== undefined){
                params['marginCoin'] = settleCoin;
            }else{
                params = { marginCoin: settleCoin };
            }
            return await super.cancelAllOrders(symbol, params);
        }
    }
    /**
     * get marginMode, positionMode, leverage of a specific symbol.
     * @param {String} symbol the specific symbol, it's mandatory in binance.
     */
    async fetchAccountInfo(symbol = undefined) {
        const bitgetAccount = new bitgetSDK.MixAccountApi(this.apiKey, this.secret, this.password);
        let market = super.market(symbol);
        if (!market['swap']) {
            throw 'fetchAccountInfo() supports swap contracts only';
        }
        let resData = await bitgetAccount.account(market.info.symbol, market.settle);
        let marginMode = resData['data']['marginMode'];
        return {
            symbol: symbol,
            hedged: resData['data']['holdMode']==='double_hold' ? true : false,
            marginMode: marginMode === 'crossed' ? 'cross' : 'isolated',
            leverage: resData['data']['crossMarginLeverage'],
            longLeverage: marginMode === 'crossed' ? null : resData['data']['fixedLongLeverage'],
            shortLeverage: marginMode === 'crossed' ? null : resData['data']['fixedShortLeverage'],
        }
    }


}
exports.BitgetApi = BitgetApi;
