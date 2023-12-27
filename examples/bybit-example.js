const ccxt = require ('ccxt');
const { type } = require('os');
const { BybitApi } = require('../src/tts-bybit');
require("dotenv").config();


// --------------------------------------------------------------------------------------------------------
// API keys & exchange object setup
// --------------------------------------------------------------------------------------------------------
const bybitKey = process.env.BYBIT_API_KEY;
const bybitSecret = process.env.BYBIT_SECRET_KEY;


let bybitAccount = new BybitApi({
    apiKey: bybitKey,
    secret: bybitSecret
});


// --------------------------------------------------------------------------------------------------------
// Functions to be test
// --------------------------------------------------------------------------------------------------------


(async function() {
    try{
        // Checkout what bybit has
        // console.log(bybitAccount.has);

        // load Market
        console.log(await bybitAccount.loadMarkets('USDT'));

        // Fetch Account Info
        // console.log(await bybitAccount.fetchAccountInfo('ETHUSDT'));

        // Check Precision
        // console.log(bybitAccount.market('ETH/USDT:USDT').precision.amount);

        // Fetch Ticker
        // console.log(await bybitAccount.fetchTicker('BTC/USDT:USDT'));
        // console.log(await bybitAccount.fetchTickers(['BTC/USDT:USDT']));
        // console.log(await bybitAccount.fetchAllTickers('USDT'));

        // Fetch Mark Price
        // console.log(await bybitAccount.fetchMarkPrice('BTC/USDT:USDT'));

        // Fetch Position
        // console.log(await bybitAccount.fetchPositions(undefined, 'USDT'));
        // console.log(await bybitAccount.fetchPosition('BTC/USDT:USDT', true));

        // Set Leverage, MarginMode, PositionMode
        // console.log(await bybitAccount.setLeverage(30, 'ETH/USDT:USDT'));
        // console.log(await bybitAccount.setMarginMode('isolated', 20, 'BTC/USDT:USDT'));
        // console.log(await bybitAccount.setPositionMode(true, 'ETH/USDT:USDT'));

        // Create Order
        // console.log(await bybitAccount.createContractV3Order(
        //     'ETH/USDT:USDT',
        //     'limit',
        //     'buy',
        //     0.01,
        //     1500,
        //     {
        //         position_idx: 1,
        //         // stopLossPrice: 900,
        //         // takeProfitPrice: 1465,
        //         clientOrderId: 'CCXT-bybit-015',
        //         // reduceOnly: true,
        //     }
        // ));

        // Edit Order
        // console.log(await bybitAccount.editOrder(
        //     '0ab001e8-546e-4322-bc06-d9947900a1eb',         // orderId
        //     'ETH/USDT:USDT',
        //     'limit',
        //     'buy',
        //     0.01,
        //     1200,
        //     {
        //         position_idx: 1,
        //         // stopLossPrice: 1000,
        //         // takeProfitPrice: 1900,
        //         // clientOrderId: 'NOT useful when in edit mode',
        //         // reduceOnly: true,
        //     }
        // ));

        // Cancel Order
        // console.log(await bybitAccount.cancelOrder('3b0adb80-17a3-43ca-9670-a58e4f3fc524', 'ETH/USDT:USDT'));
        // console.log(await bybitAccount.cancelAllOrders('ETH/USDT:USDT'));
        // console.log(await bybitAccount.cancelAllOrders());
        
        // Fetch Order
        // console.log(await bybitAccount.fetchOpenOrders('ETH/USDT:USDT', 1675180800000, 100 ));
        // console.log(await bybitAccount.fetchOpenOrders(undefined, 1675180800000, 100 ));
        // console.log(await bybitAccount.fetchClosedOrders('ETHUSDT', 1675180800000, 100 ));
        // console.log(await bybitAccount.fetchClosedOrders(undefined, 1675180800000, 100 ));
        // console.log(await bybitAccount.fetchOrder('05c723bb-9e55-4b0d-9cb3-4016961517c', 'ETHUSDT'));
        

    }catch(errorMsg){
        console.log(errorMsg);
    }
})();







