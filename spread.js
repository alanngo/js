// sending arbitrary amount of parameters using spread operator
foo = (...allSubjects) => allSubjects.forEach(e => console.log(`6627 loves ${e}`))

foo
(
    "sql", 
    "research", 
    "data science", 
    "literature", 
    "textbooks", 
    "articles"
)


bar = (u1, u2, u3) => console.log(`usernames are: ${u1}, ${u2}, ${u3}`)

// using a spread operator for printing an array
var users = ["alison", "bill", "glenn"]
bar(...users)

// deconstructing an array
var nums = [1,2,3]
var [n1, n2, n3] = nums
console.log(`deconstructed array ${n1}, ${n2}, ${n3}`)

// deconstructing an object
var car = {id: 123, model: 2012}
var {id, model} = car
console.log(`deconstructed object ${id}, ${model}`)

// creating copy object w/ new attributes
var newCar = {...car, make:"honda"}
console.log(newCar)
