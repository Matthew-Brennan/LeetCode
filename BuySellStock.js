let prices = [7,1,4,6,1]

let left = 0
let right = 1
let result = 0
let profit = 0

while (right < prices.length)
{
    if (prices[left] < prices[right])
    {
        result = prices[right] - prices[left]
        profit = Math.max(profit,result)
    }
    else
    {
        left = right
    }
    right += 1
}
console.log(profit)


