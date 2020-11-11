log = (x) => console.log(x)

replaceAll = (string, search, replace) => string.split(search).join(replace)


isPalindrome = (input) => 
{
    let x = replaceAll(input.toLowerCase(), " ", "")
    if (x.length<=1)
        return true

    if (x[0] != x[x.length-1])
        return false

    return isPalindrome(x.substring(1, x.length-1))
}

log(isPalindrome("MAN"))
log(isPalindrome("WOW"))
log(isPalindrome("civic"))
log(isPalindrome("omruti"))
log(isPalindrome("RaCEcAr"))
log(isPalindrome("pOoP"))
log(isPalindrome("a  x a"))


