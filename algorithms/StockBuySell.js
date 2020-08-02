/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var low = 0;
    var high = 0;
    var profit = 0;
    while(high < prices.length){
        if(prices[high] - prices[low] > profit){
            profit = prices[high] - prices[low];
        }
        if(prices[high+1] < prices[low]){
            low = high + 1;
        }
        high++;
    }
};
