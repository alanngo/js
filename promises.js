condition = true;
const myPromise = new Promise((resolve, reject)=>
{
    if (condition) resolve({status:200, message: "successfully resolved"})
    else reject(new Error("rejected"))
})

myPromise.then((success) => 
{ 
    console.log(success);
})
.catch((err) => 
{ 
    console.log(err);
});