import axios from 'axios'


const URL = `https://ramen-flask-app.herokuapp.com/`
const DATA=
{
    "games": ["fortnite", "league of legends", "totally accurate battle simulator"],
    "computer": "chromebook",
    "name": 6627
}


// post request
axios.post(`${URL}add`, DATA).then(result =>
{
    console.log(result.data)
})
.catch((err) => console.log(err));

// get request
// axios.get(`${URL}showAll`).then((result) => 
// {
//     let tmp = result.data
//     console.log(tmp)
// }).catch((err) => console.log(err));

