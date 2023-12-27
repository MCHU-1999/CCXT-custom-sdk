const bybitSDK = require("./bybit-api");
require("dotenv").config();

const bybitKey = "vkwow5GeFnrZGBMoCj";
const bybitSecret = "XQfF0HjzVUFO0pSnPl0Kp0MdQOR0rOhJK4ZM";

const bybitApi = new bybitSDK.AccountAssetClient({'key': bybitKey, 'secret': bybitSecret});

// ==============================================================


async function withdraw(address, coin, amount) {
    try{
        let resData = await bybitApi.submitWithdrawal({
            coin: coin,
            chain: "TRX",
            address: address,
            tag: null,
            amount: String(amount),
            timestamp: Date.now(),
            forceChain: 1,
            accountType: "FUND"
        });
        return resData;
    }catch(errorMsg){
        console.log(errorMsg);
        return false;
    }
};


(async function() {
    console.log('main function start:');
    resData = await withdraw("TSQr4AqKwsx6WRrg6gYGPkojjHn961QEaC", "USDT", 10);
    console.log(resData);
})();


