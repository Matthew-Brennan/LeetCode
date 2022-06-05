let s = "dvdf"

let left = 0
let right = 1
let maxLength = Math.min(s.length,1);
substring = s[0]

while (right < s.length)
{
    if (!substring.includes(s[right]))
    {
        substring += s[right]
    }
    else
    {
        
        console.log(substring)
        left = right
        substring = s[left]
    }

 //!substring.includes(s[right]) ? substring += s[right] : left = right && substring = s[right]
    right += 1
    maxLength = Math.max(substring.length, maxLength)
}
console.log(maxLength)


