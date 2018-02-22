/********************************************************
 * @author: Yentl Ringoot
 * @created: 22/02/18
 * @modified: 22/02/18
 * @copyright: Artevelde University College Ghent
 ********************************************************/

 //3 variabelen met beestjes
const animal1 = 'elephant';
const animal2 = 'cockroach';
const animal3 = 'zebra';


// variabele van het type array
let animals = [];

//variabalen in een array steken
animals.push(animal1);
animals.push(animal2);
animals.push(animal3);
animals.push('bunny');
animals.push('panther');

//maueel alle string concatteneren (samenvoegen)
let allAnimals = animals [0] + animals [1] + animals [2];

//op scherm zetten
document.write(allAnimals);
document.write('<br>---------------<br>');

//tweede manier
let allAnimals2 = '';

//loopen door de array
//animals.length betekent dat we dieren kunnen bij toevoegen
for(let i = 0; i < animals.length; i++){
    //resultaat loggen van elk element uit de array
    console.log(animals[i]);
    //de strings concatteneren
    allAnimals2 += animals [i];
}

//samengevoegde strings op het scherm schrijven
document.write(allAnimals2);

