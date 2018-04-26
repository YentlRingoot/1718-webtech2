/***************************************************
* @author: Yentl Ringoot
* @created: 19/04/2018
* @modified: 19/04/2018
* @copyright: Artevelde University College Ghent
****************************************************/

let btn = document.getElementById('button');

btn.addEventListener('click', function() {
    let color = document.querySelector('input[name="color"]:checked');

    btn.className = `btn ${(color) ? color.value : 'btn-warning'}`;

    /*
    if(color){
        btn.className = 'btn ' + color.value;
    }
    else{
        btn.className = 'btn ' + 'btn-warning';
    }
*/

    

});