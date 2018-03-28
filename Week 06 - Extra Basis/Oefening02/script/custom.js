/***************************************************
* @author: Yentl Ringoot
* @created: 22/03/2018
* @modified: 22/03/2018
* @copyright: Artevelde University College Ghent
***************************************************/

const fruits = ["Apple", "Pineapple", "Mango", "Kiwi", "Strawberry"];

const showItems = function(arrayName) {
    
    for(let i = 0; i < arrayName.length; i++){
        document.write(arrayName[i]);
        document.write("</br>");
    }
}

showItems(fruits);