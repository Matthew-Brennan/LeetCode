
function main()
{
  let s = "rrat";
  let t = "rcatas";
  
      if (s.length != t.length)
        return false;
    
    let countS = new Map();
    let countT = new Map();
    
    for (let i = 0; i < s.length; i++)
        {
            countS.set(s[i], countS.get(s[i])+1 || 1);
            countT.set(t[i], countT.get(t[i])+1 || 1);
        }
    
  for (var [key, val] of countS)
    {
      if(countS.get(key) != countT.get(key))
        {
          return false;
        } 
    }

   return true;
}