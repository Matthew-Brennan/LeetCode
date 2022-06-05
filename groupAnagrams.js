function groupAnagram()
{
let strs = ["eat","tea","tan","ate","nat","bat"];

const hash = {} 
for(const word of strs) {
   const orderedWord = word.split('').sort().join('')
         hash[orderedWord] ? hash[orderedWord].push(word) : hash[orderedWord] = [word]
}
 return Object.values(hash)
}

console.log(groupAnagram())
