/********************************************
 * @author Yentl Ringoot
 * @created 15/02/2018
 * @modified 15/02/2018
 * @copyright Copyright 2017-2018 Artevelde University College Ghent
 * @function Plaats hier een korte beschrijving
 *******************************************/
/*
//Venster komt tevoorschijn met deze tekst
let number = prompt("Geef een getal in");

//Na het invullen van een getal komt deze tekst tevoorschijn met behulpvan document.write
let text = 'Het getal dat u invoerde was: ' + number;

//Met deze functie wordt de tekst getoond
document.write(text);

//Bepaal de lengte van de cijfers
let numberLenghts = number.length;

//Schrijf de tekst wat er op het scherm moet komen
let text2 = `De lengte van het getal is ${numberLenghts}`;

//Toon op het scherm wat er moet komen, met behulp van <br> gaan we naar de volgende lijn
document.write('<br>');
document.write(text2);

//We laten een venster verschijnen waarin we een eerste getal schrijven
let number = prompt("Typ het eerste getal");
//Aan de hand van parseFloat kunnen we ook komma getallen schrijven --> 7.7 ipv 7,7
number = parseFloat(number);

//We laten een venster verschijnen waarin we een tweede getal schrijven
let number2 = prompt("Typ het tweede getal");
//Aan de hand van parseFloat kunnen we ook komma getallen schrijven --> 7.7 ipv 7,7
number2 = parseFloat(number2);

//We gaan de tzee cijfers optellen
let sum = number + number2;

//Aan de hand van tekst gaan we alles uitschrijven
let text = `De som van ${number} en ${number2} is ${sum}`;

//Toon het op het scherm
document.write(text);

let i = 7;

console.log(i);
//Er wordt eentje bijgeteld maar wordt pas getoond als je nogmaals i neerschrijft
console.log(i++);
console.log(++i);

//We maken een array met deze namen
let students = ['Yentl', 'Steff', 'Casper', 'Ona', 'Fleur'];

//We vragen de naam van students[2]--> dit is Casper want we beginnen bij 0
let name = students[2];

//We vragen de naam op van deze student
console.log(name);

//We vragen alle namen van de studenten
console.log(students);

//We voegen er namen bij
students.push('Simon');

//We voegen er namen bij
students.push('Stef');

//We kunnen namen veranderen
students[2] = students[3];

//We vragen welke naam er tevoorschijn komt in de console
console.log(students[2]);
*/

//We zeggen wat het number is
let number = 7263;
//1 uur = 3600 seconden

//We gaan berekenen hoeveel keer 3600 seconden in 7263
let amountHours = number / 3600;
console.log(amountHours);

//We laten alleen het cijfer zien, niet na de komma
amountHours = Math.floor(amountHours);
console.log('Aantal uur: ' + amountHours);

//Hoeveel seconden blijven erover
let remainingSeconds = amountHours % 3600;
console.log('Overgebleven seconden: ' + remainingSeconds);

//Hoeveel minuten zijn er aanwezig
let amountMinutes = Math.floor(remainingSeconds / 60);
console.log('Aantal minuten:' + amountMinutes);


