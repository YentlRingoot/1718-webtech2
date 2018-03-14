// elementen selecteren en in variabelen stoppen
let anchorTags, strongTags, spanTags;

anchorTags = document.getElementsByTagName('a');
strongTags = document.getElementsByTagName('strong');
spanTags = document.getElementsByTagName('span');

//eerste anchor tag uit de array van anchorTag halen
let linkElement = anchorTags [0];

//event toepassen
linkElement.addEventListener('mouseover', function() {
    
    //eerste strong tag oranje maken
    let firstStrongTag = strongTags[0];
    firstStrongTag.style.color = 'orange';

    // tweede strong tag oranje maken
    strongTags[1].style.color = 'orange';


        // alle span tags doorlopen
    for(let i = 0; i < spanTags.length; i++) {
        spanTags[i].style.color = 'purple';

    }

});

linkElement.addEventListener('mouseout', function() {

    for(let i = 0; i < spanTags.length; i++) {
        spanTags[i].style.color = 'black';

    }
    
    let firstStrongTag = strongTags[0];
    firstStrongTag.style.color = 'black';

    strongTags[1].style.color = 'black';

});



//element ophalen
let spinachElement = document.getElementById('spinach');
console.log(spinachElement);

//kleur veranderen
spinachElement.style.color = "#FF00FF";
