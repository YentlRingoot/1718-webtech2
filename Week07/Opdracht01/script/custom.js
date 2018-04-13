/***************************************************
* @author: Yentl Ringoot
* @created: 29/03/2018
* @modified: 29/03/2018
* @copyright: Artevelde University College Ghent
****************************************************/

const button = document.getElementById('btnMakeJoke');

const factsList = document.getElementById('facts');

// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

button.addEventListener('click', function(){
    
// waardes uit de elementen halen
    const firstName = document.getElementById('firstNameField').value;
    const lastName = document.getElementById('lastNameField').value;

    //GET JSON
    //Url met dynamische parameters
    const url = 'http://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName=' + lastName;


//JSON FUNCTIE OPROEPEN, BINNEN DE CALLBACK MANIPULEREN WE DE VERKREGEN DATA
    getJSON(url, function(error, data) {
    
    //Fact komt in je venster
   //document.write(data.value.joke);

   //list item maken
   const listItem = document.createElement('li');
   //inhoud aan toevoegen
   listItem.textContent = data.value.joke;
   //
   factsList.appendChild(listItem);

});
})




