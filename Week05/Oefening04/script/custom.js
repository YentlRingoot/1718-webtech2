/***************************************************
* @author: Yentl Ringoot
* @created: 14/03/2018
* @modified: 14/03/2018
* @copyright: Artevelde University College Ghent
***************************************************/

// create an array with happy tree friends
let happytreefriends = ['cuddles', 'handy', 'giggles', 'lumpy', 'mime', 'monkey', 'nutty', 'pop'];

// duplicate the content of this array
let doublefriends = happytreefriends.concat(happytreefriends);

// shuffle the array
shuffle(doublefriends);

// initialize all blocks, put them in an array
let blocks = document.getElementsByClassName('memory-block');

// initialize url params
let urlPrefix = "https://rogerthat.be/images/praktijk5/";
let urlSuffix = ".png";

// initialize an empty array that will contain the active blocks
let activeBlocks = [];

// loop through each block to add functionality
for (let i = 0; i < blocks.length; i++) {

  // combine url
  let url = urlPrefix + doublefriends[i] + urlSuffix;

  // add the background image to each block + add a class
  blocks[i].style.backgroundImage = 'url(' + url + ')';
  blocks[i].className += " " + doublefriends[i];

  // functionality after a click
  blocks[i].onclick = function(event) {

    let block = event.target;

    // vakje tonen als er op geklikt word.
    if (activeBlocks.length < 2) {
      showBlock(block);
    }
    if (activeBlocks.length == 2) {
      checkBlocks();
      
      // Laat de vakjes na 1.5 seconden verdwijnen
      setTimeout(hideBlocks, 1500);
    }
  }
}

function checkBlocks() {

  //De actieve vakjes zitten in de array activeBlocks
  let blockActive1 = activeBlocks[0];
  let blockActive2 = activeBlocks[1];

  // De klasses vergelijken
  // Identieke uit het spel smijten
  if (blockActive1.className == blockActive2.className) {

    // Klasse weizigen = functionaliteit weg
    activeBlocks[0].className = "memory-found";
    activeBlocks[1].className = "memory-found";

    // Maak nieuw element
    let newDiv = document.createElement('div');
    // Voeg een klasse toe
    newDiv.className = 'small-found';
    // haal de achterground op
    let background = activeBlocks[0].style.backgroundImage;
    // wijs een achterground toe aan het element
    newDiv.style.backgroundImage = background;
    
    let foundContainer = document.getElementById('found');
    foundContainer.appendChild(newDiv);
  }
}

function hideBlocks(block) {
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.opacity = 0;
  }
  activeBlocks = [];
}

function showBlock(block) {
  if (activeBlocks.indexOf(block) < 0) {
    // voeg vakje toe aan array
    activeBlocks.push(block);
    // toon de blok
    block.style.opacity = 1;
  }

}

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
  let j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}