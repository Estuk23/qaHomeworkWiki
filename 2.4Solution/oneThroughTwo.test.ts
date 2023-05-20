//SETTING VARIABLES REVIEW
var numberOne: number = 10;
var numberTwo: number = 15'
var wordOne: string = "word";
var wordTwo: string = "two";
var booleanOne: boolean = true;
var booleanTwo: boolean = false;

describe("Should add Variables", ( => {
    it("should add the numbers", ( => {
        expect(numberOne + numberTwo).toEqual(25;
        expect(numberTwo - numberOne).toEqual(5);
        )
    }))



}))

//Functions Review if else

function wordPass(word:string): string {
    if (word === 'first') {
        return 'this is the first option'
    
    } else if (word === "second") {
        return 'this is the second option'
    }
}

describe("testing the wordPass function",) () {
    it("should pass the first option",) () => {
        expect(wordPass('first')).toBe('this is the first option');
    }
}