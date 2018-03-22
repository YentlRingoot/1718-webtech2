/***************************************************
* @author: Yentl Ringoot
* @created: 15/03/2018
* @modified: 15/03/2018
* @copyright: Artevelde University College Ghent
***************************************************/

let recipe = {

    name: "Pizza Margharita",
    servings: 2,
    difficulty: 'Easy Peasy',
    ingredients: [
        'Cheese',
        'Dough',
        'Tomato sauce',
        'Basil',
        'Garlic'
    ]

};

let divRecipe = document.getElementById('recipe');

divRecipe.innerHTML = '<h2>' + recipe.name + '</h2>';
divRecipe.innerHTML += '<p>' + recipe.servings + '</p>';
divRecipe.innerHTML += '<p>' + recipe.difficulty + '</p>';

divRecipe.innerHTML += '<ul>';

for(let i = 0; i < recipe.ingredients.length; i++) {
    divRecipe.innerHTML += "<li>" + recipe.ingredients[i] + "</li>"
}

divRecipe.innerHTML += '</ul>';



