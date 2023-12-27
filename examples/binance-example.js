const ccxt = require ('ccxt');
const { type } = require('os');
const { BinanceApi } = require('../src/tts-binance');
require("dotenv").config();


// --------------------------------------------------------------------------------------------------------
// API keys & exchange object setup
// --------------------------------------------------------------------------------------------------------
const binanceKey = process.env.BINANCE_API_KEY;
const binanceSecret = process.env.BINANCE_SECRET_KEY;


let binanceAccount = new BinanceApi({
    apiKey: binanceKey,
    secret: binanceSecret
});


// --------------------------------------------------------------------------------------------------------
// Functions to be test
// --------------------------------------------------------------------------------------------------------

(async function() {
    try{
        // Checkout what binance has
        // console.log(binanceAccount.has);

        // Load Market
        console.log(await binanceAccount.loadMarkets('USDT'));

        // Fetch Account Info
        console.log(await binanceAccount.fetchAccountInfo('ETH/USDT:USDT'));
        

        // Check Precision
        // console.log(binanceAccount.market('ETH/USDT:USDT').precision.amount);

        // Fetch Ticker
        // console.log(await binanceAccount.fetchTicker('BTC/USDT:USDT'));
        // console.log(await binanceAccount.fetchTickers(['BTC/USDT:USDT']));
        // console.log(await binanceAccount.fetchAllTickers('USDT'));

        // Fetch Mark Price
        // console.log(await binanceAccount.fetchMarkPrice('BTC/USDT:USDT'));

        // Fetch Position
        // console.log(await binanceAccount.fetchPositions(undefined, 'USDT', true));
        // console.log(await binanceAccount.fetchPosition('BTC/USDT:USDT', true));

        // Set Leverage, MarginMode, PositionMode
        console.log(await binanceAccount.setLeverage(20, 'ETH/USDT:USDT'));
        // console.log(await binanceAccount.setMarginMode('cross', 'ETH/USDT:USDT'));
        console.log(await binanceAccount.setPositionMode(true, 'ETH/USDT:USDT'));

        // Create Order
        console.log(await binanceAccount.createOrder(
            'ETH/USDT:USDT',
            'market',
            'buy',
            0.01,
            1100,
            {
                positionSide: 'long',
                // takeProfitPrice: 1800,
                // stopLossPrice: 1000,
                clientOrderId: 'CCXT-binance-011',
                // reduceOnly: false,
            }
        ));

        // Cancel Order
        // console.log(await binanceAccount.cancelOrder('8389765582225150045', 'ETH/USDT:USDT'));
        // console.log(await binanceAccount.cancelAllOrders('ETH/USDT:USDT'));

        // Fetch Order
        binanceAccount.options["warnOnFetchOpenOrdersWithoutSymbol"] = false        // do this before "FetchOpenOrdersWithoutSymbol"
        // console.log(await binanceAccount.fetchOpenOrders('BTC/USDT:USDT', 1675180800000, 100 ));
        // console.log(await binanceAccount.fetchOpenOrders(undefined, 1675180800000, 100 ));
        // console.log(await binanceAccount.fetchClosedOrders('BTC/USDT:USDT', undefined, 100 ));

    }catch(errorMsg){
        console.log(errorMsg);
    }
})();


