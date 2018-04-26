/***************************************************
* @author: Yentl Ringoot
* @created: 26/04/2018
* @modified: 26/04/2018
* @copyright: Artevelde University College Ghent
*****************************************************/
/*
if(localStorage.getItem("demolis")) {
};

let btn = document.getElementById("storeMole");

btn.addEventListener("click", showStorage);



function showStorage(){
    let deMol = document.getElementById("naam").value;
    localStorage.setItem("demolis",deMol)
    document.getElementById("antwoord").innerHTML = localStorage.getItem("demolis")
    document.write(deMol);
    console.log(deMol);
}

//AANPASSEN ZIE FLEUR */


let btnSubmit = document.getElementById("storeMol");
let inputField = document.getElementById("naam");
let moleBackground = document.getElementById("moleBackground");

btnSubmit.addEventListener('click', function(){
    let mole = inputField.value;

    localStorage.setItem("antwoord", mole);
})

let storedMol = localStorage.getItem("antwoord");
if(storedMol != null) {
    if (storedol == 'Pieter')
        moleBackground.style.background = "green";
    else
        moleBackground.style.background = "red";
}