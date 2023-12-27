const ccxt = require ('ccxt');
const { type } = require('os');
require("dotenv").config();
const { bingxApi } = require('../bingx-node-sdk-api/bingx');


// --------------------------------------------------------------------------------------------------------
// API keys & exchange object setup
// --------------------------------------------------------------------------------------------------------
const bingxKey = process.env.BINGX_API_KEY;
const bingxSecret = process.env.BINGX_SECRET_KEY;


let bingxAccount = new bingxApi({
    apiKey: bingxKey,
    secret: bingxSecret,
});


// --------------------------------------------------------------------------------------------------------
// Functions to be test
// --------------------------------------------------------------------------------------------------------
(async function() {
    try{
        resData = await bingxAccount.getPositions();
        console.log(resData.data);

        
    }catch(errorMsg){
        console.log(errorMsg);
    }
})();







