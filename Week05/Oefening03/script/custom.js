/***************************************************
* @author: Yentl Ringoot
* @created: 15/03/2018
* @modified: 15/03/2018
* @copyright: Artevelde University College Ghent
***************************************************/

let dog = {
    breed : "Golden Retriever",
    name : "Dali",
    color: "White",
    age: 4,
    gender: "Male",
    colorEyes: function(){
        return 'brown'
    }
};

console.log(dog.breed);

// klassedefinitie met constructor
let Dog = function(breed, name, color, age, gender){
    this.breed = breed;
    this.name = name;
    this.color = color;
    this.age = age;
    this.name = name;
    this.colorEyes = function(){
        return 'pink'
    };

    this.birthYear = function() {

        const now = new Date();
        const year = now.getFullYear();

        const currentYear = 2018;
        let birthYear = currentYear - this.age;
        return birthYear;
    }
}

let myFavouriteDog = new Dog('Golden Retriever', 'Dali', 'White', 6, 'Male');


//functie toevoegen aan de klasse
//zonder constructor zelf te wijzigen
Dog.prototype.speak = function(line) {
    let slogan = 'De' + this.breed + 'hond zegt:' + line
    return slogan
;}

//property toevoegen aan het object
myFavouriteDog.bestToyEver = "Een mooie rode bal";

let saySomething = myFavouriteDog.speak("Er klopt iemand op de deur");
console.log(saySomething);

console.log(myFavouriteDog);

document.write(myFavouriteDog.birthYear());
