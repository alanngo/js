
var cache = new Map()
fib = (n)=> 
{
    cache[0] = 0
    cache[1] = 1
    cache[2] = 1

    // if key is in the cache
    if (cache[n]) return cache[n]

    // populate cache
    else cache[n] = fib(n -1) + fib(n -2)
    
    return cache[n]
}
main = () =>
{
    for (i =1; i<100; i++)
        console.log(i +": "+fib(i))

}

main()