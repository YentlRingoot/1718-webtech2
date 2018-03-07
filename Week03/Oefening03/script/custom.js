  // teken de mountain
  drawMountain(2);
  drawMountain(10);
  drawMountain(5);
  
  function drawMountain(lengthOfMountain) {
    // initiele toplengte
    let i = 1;  
    
    // helling
    document.write('/');

      // zolang de top van de helling nog niet bereikt is
      while(i <= lengthOfMountain){
        document.write("'");
        i++;

      }

      document.write("\\");
  }

 
  