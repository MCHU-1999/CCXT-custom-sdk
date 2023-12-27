const ccxt = require ('ccxt');
const { type } = require('os');
require("dotenv").config();


// --------------------------------------------------------------------------------------------------------
// API keys & exchange object setup
// --------------------------------------------------------------------------------------------------------
const okxKey = process.env.OKX_API_KEY;
const okxSecret = process.env.OKX_SECRET_KEY;
const pass = process.env.OKX_PASSPHRASE;


let okxAccount = new ccxt.okx({
    apiKey: okxKey,
    secret: okxSecret,
    password: pass,
});


// --------------------------------------------------------------------------------------------------------
// Functions to be test
// --------------------------------------------------------------------------------------------------------
(async function() {
    try{
        // Checkout what okx has
        // console.log(okxAccount.has);

        // load Market
        await okxAccount.loadMarkets();
        // console.log(await okxAccount.loadMarkets());

        // Check Precision
        // console.log(okxAccount.market('ETH/USDT:USDT').precision.amount);
        // console.log((await okxAccount.fetchBalance()));

        // Fetch Ticker
        // console.log(await okxAccount.fetchTicker('BTC/USDT:USDT'));
        // console.log(await okxAccount.fetchTickers(['BTC/USDT:USDT']));
        // console.log(await okxAccount.fetchAllTickers('USDT'));

        // Fetch Mark Price
        // console.log(await okxAccount.fetchMarkPrice('BTC/USDT:USDT'));

        // Fetch Position
        // console.log(await okxAccount.fetchPositions(undefined));
        // console.log(await okxAccount.fetchPosition('BTC/USDT:USDT', true));

        // Set Leverage, MarginMode, PositionMode
        // console.log(await okxAccount.setLeverage(30, 'ETH/USDT:USDT'));
        // console.log(await okxAccount.setMarginMode("isolated", "ETH/USDT:USDT", { lever: 30 }));
        console.log(await okxAccount.setPositionMode(true, 'ETH/USDT:USDT'));

        // Create Order
        // console.log(await okxAccount.createContractV3Order(
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
        // console.log(await okxAccount.editOrder(
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
        // console.log(await okxAccount.cancelOrder('3b0adb80-17a3-43ca-9670-a58e4f3fc524', 'ETH/USDT:USDT'));
        // console.log(await okxAccount.cancelAllOrders('ETH/USDT:USDT'));
        // console.log(await okxAccount.cancelAllOrders());
        
        // Fetch Order
        // console.log(await okxAccount.fetchOpenOrders('ETH/USDT:USDT', 1675180800000, 100 ));
        // console.log(await okxAccount.fetchOpenOrders(undefined, 1675180800000, 100 ));
        // console.log(await okxAccount.fetchClosedOrders('ETHUSDT', 1675180800000, 100 ));
        // console.log(await okxAccount.fetchClosedOrders(undefined, 1675180800000, 100 ));
        // console.log(await okxAccount.fetchOrder('05c723bb-9e55-4b0d-9cb3-4016961517c', 'ETHUSDT'));
        

    }catch(errorMsg){
        console.log(errorMsg);
    }
})();







