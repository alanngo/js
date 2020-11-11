var cache = {}
cache[0] = 0
cache[1] = cache[2] = 1
fibCache = (n) =>
{
    if (n in cache) return cache[n]
    
    cache[n] = fibCache(n - 1) + fibCache(n - 2)
    return cache[n]
}

main = () =>
{
    for (i = 0; i< 100; i++)
        console.log(fibCache(i))
}
main()