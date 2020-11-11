log = (x) => console.log(x)

foo = (name, subject) => 
{
   return (`${name} loves ${subject[0]} and ${subject[1]}`)+"\n"
   +(`${name} loves to ${subject[2]} and ${subject[3]}`)
}
log(foo("6627", ["research", "data science", "read textbooks", "write articles"]))