function twoSum2()
{
let differnce = 0 ;
let nums = [2,7,11,15] 
let target = 9

const map1 = new Map()


for (var i = 0; i < nums.length; i++)
{
    
    differnce = target -  nums[i];
    if (map1.has(differnce))
    {
        return  [map1.get(differnce) + 1, i +1];
    }
    map1.set(nums[i],i)
}
}

console.log(twoSum2())