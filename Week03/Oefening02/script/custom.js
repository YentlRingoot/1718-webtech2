// variabelen declareren
let popcorn;
let hamburger, donut, pizza, fries, hotdog;

let popcornString = prompt('Geef de waarde in van een heerlijk emmertje popcorn');
popcorn = parseInt(popcornString);
let hamburgerString = prompt('Geef de waarde in van een heerlijke hamburger');
hamburger = parseInt(hamburgerString);
let donutString = prompt('Geef de waarde in van een heerlijke donut');
donut = parseInt(donutString);

let elResult1 = document.getElementById('result1');
let result1 = popcorn + popcorn + popcorn;
elResult1.value = result1;

let elResult2 = document.getElementById('result2');
let result2 = popcorn + hamburger + hamburger;
elResult2.value = result2;

let elResult3 = document.getElementById('result3');
let result3 = donut*2 + hamburger + donut*2;
elResult3.value = result3;

let elResult4 = document.getElementById('result4');
let result4 = hamburger + donut * popcorn;
//elResult4.value = result4;

//tweede methode om de actie uit te voeren 
let elButton = document.getElementById('check');
console.log (elButton);
elButton.onclick = function(){
  alert('Het correcte resultaat is ' + result4);

//uitbreiding
let userValue = parseInt(elResult4.value);
if (result4 == userValue)
{
    alert('Goed gewerkt je verdient een stukje pizza');
}
else
  {
    alert('Jeetje, je mag nog een beetje studeren');
  }
}
