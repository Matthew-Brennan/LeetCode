let s = "A man, a plan, a canal: Panama"
s = s.toUpperCase()
s = s.replace(/[^A-Z]/g, "");
if (s === s.split("").reverse().join(""))
{
    console.log("true")
}
else
{
    console.log ("false")
}