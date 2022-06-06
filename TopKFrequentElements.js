function  topFrequent()
{
    let nums = [5,5,5,5,7,7,9];
    let k = 2;

    const hash = nums.reduce((res, x) => {
        if (!res[x]) {
            res[x] = 0;
        }
        
        res[x]++;        
        return res;
    }, {});
    
    return Object.keys(hash)
        .sort((a, b) => hash[b] - hash[a])
        .filter((x, i) => i < k)
        .map(x => parseInt(x));
}

console.log(topFrequent());