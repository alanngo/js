import https from "https";

const URL = `https://ramen-flask-app.herokuapp.com/`

// how to make a get request
https.get(`${URL}/showAll`, resp =>
{

    let data = ``
    
    // partial data
    resp.on('data', chunk =>data+=chunk)
    
    // full data
    resp.on('end', () => console.log(data))
    
})
.on("error", err=> console.log(`Error ${err.message}`))

// how to make a post request
https.post(`${URL}/showAll`, resp =>
{

})
.on("error", err=> console.log(`Error ${err.message}`))