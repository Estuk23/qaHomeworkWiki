//list of things
var superHeroList: Array<string> = [
    "Superman",
    "Spiderman",
    "Thor",
    "Aquaman",
    "Iron Man",
    "Black Panther",
    "Bird Person",
    "Iron Heart",
    "Spider Pig",
];

//for loops: declare a variable; statement to check; increment/decrement the variable
// in this loop we going to set i as 0, 
// loop as long as the index is less than the list/array length and increment i each loop
// this kind of loop will hit every item on the list and then stop

for (let i = 0; i < superHeroList.length; i++) {
    console.log(`Hero #${i + 1}: ${superHeroList[i]}`)
}

//Hero #1 Superman

//forEach loops will repeat the function you give it for every item in the array
// arrayName.forEach(someFunction(eachItem) {do x for each item})

superHeroList.forEach((hero) => {
    console.log(`${hero} is awesome but horror is better.`)
})