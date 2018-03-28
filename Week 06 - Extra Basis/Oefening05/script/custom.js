/***************************************************
* @author: Yentl Ringoot
* @created: 28/03/2018
* @modified: 28/03/2018
* @copyright: Artevelde University College Ghent
***************************************************/

let userNumber = parseInt(prompt("Geef een getal in."));
document.write("Is getal priemgetal?: " + isPrimeNumber(userNumber));

function primeNumber(value) {
  //indien kleiner dan 2, geen priemgetal
  if(value < 2)
    return false;
  
  //delen door elke getal behalve getallen kleiner dan 1 of groet dan gelijk aan zichzelf
  for(i=2; i < value; i++) {
    
  //is het deelbaar?
    if((value % i) == 0){
  //indien de restwaarde 0 is, dan is het deelbaar door dat getal
      return false;
    }
  }
  return true;
}
