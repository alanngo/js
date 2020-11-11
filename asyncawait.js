j1 = () => new Promise((resolve, reject)=>
{
    setTimeout(() => resolve('j1 output'), 1000)
})

j2 =(j1o) => new Promise((resolve, reject)=>
{
    setTimeout(() => resolve(`${j1o}\nj2 output`), 1000)
})

totalOutput = async() =>
{
    let j1o = await j1()
    let j2o = await j2(j1o)
    console.log(j2o)
}

totalOutput()