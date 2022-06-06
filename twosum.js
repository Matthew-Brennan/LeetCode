// Given a target value return the positions of a 
// given array that adds to the target value
function  twoSum()
{
    let target = 9;
    let nums = [2,7,11,15];

    let differnce = 0 ;
    const map1 = new Map()


    for (var i = 0; i < nums.length; i++)
    {
        //difference is equal to the target - the current value being tested. if the difference exists
        //then those are the values that add to the target.
        differnce = target -  nums[i];
        if (map1.has(differnce))
        {
            return  [map1.get(differnce), i];
        }
        map1.set(nums[i],i)
    }
}

console.log(twoSum());