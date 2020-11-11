j1 = () => new Promise((resolve, reject)=>
{
    setTimeout(() => resolve('j1 output'), 1000)
})

j2 =(j1o) => new Promise((resolve, reject)=>
{
    setTimeout(() => resolve(`${j1o}\nj2 output`), 1000)
})

// promise call
j1().then((result) => 
{
    console.log("first promise")
    return j2(result)
}).then((result)=>
{
    console.log("second promise")
    console.log(result)
}).
catch((err) => 
{
    console.log(err)
});

