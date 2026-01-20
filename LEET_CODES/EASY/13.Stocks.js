// BEST TIME TO BUY AND SELL STOCKS
let prices = [7,1,5,3,6,4]
let buy = 0;
let sell = 0;
let profit = 0;

const minVal = function(prices){
    let mini = Infinity
    let max = Infinity

    for(let i =0 ; i< prices.length ; i ++){
        if(prices[i]< mini){
            mini = prices[i]
            buy = mini
        }
    }
    return mini

}


const val = minVal(prices)
console.log(val)