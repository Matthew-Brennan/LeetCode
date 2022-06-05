let array = [1,2,3,4]
let arrLen = array.length
let prefix = 1
let postfix = 1
let answer = []

for (var i = 0; i < arrLen; i++)
{
    answer[i] = prefix;
    prefix *= array[i];
}

for (var i = arrLen - 1; i > -1; i--)
{
    answer[i] *= postfix;
    postfix *= array[i];   
}

console.log(answer)
//[24,12,8,6]