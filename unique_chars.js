getUnique = (str) => 
{
    var set = new Set()
    var ret = ""///"thequickrownfoxjumpsoverthelazydog"
    for (let c of str)
        set.add(c)
    set.forEach(s =>ret+=s)
    return ret
}

console.log(getUnique("thequickrownfoxjumpsoverthelazydog"))