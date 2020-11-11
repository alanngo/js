greet = (choice) => choice()

main = (x) =>
{
    greet(() =>
    {
        console.log("hello "+ x)
    })
}
main("textbook lover")