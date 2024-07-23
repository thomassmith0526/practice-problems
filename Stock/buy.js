function maxProfit( prices) {
    const n = prices.lenght;
    const dp = new Array(n).fill(null).map(() => [0,0]);

    dp[0][0] = - prices[0];
    dp[0][1] = 0;

    for(let i =1; i < n; i++) {
        dp[i][0] = Math.max(dp[i-1][0], -prices[i]);
        d[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i]);
    }
    return Math.max(dp[n-1][0], dp[n-1][1]);
}
const prices = [7,1,5,3,6,4]

const ans = maxProfit(prices)
console.log(ans)