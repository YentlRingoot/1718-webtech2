/***************************************************
* @author: Yentl Ringoot
* @created: 08/03/2018
* @modified: 08/03/2018
* @copyright: Artevelde University College Ghent
***************************************************/
/* 
    //element maken
    let brick = document.createElement('div');
    //klasse toevoegen aan het element
    brick.className = "brick brick-yellow";
    // de muur definieren
    let wall= document.getElementById('wall-1');
    //de steen toevoegen aan de muur
    wall.appendChild(brick);
*/
    function createBrick(color) {

        //element maken
        let brick = document.createElement('div');
        
        //klasse toevoegen aan het element
        brick.className = "brick brick-" + color; 
        
        return brick;

    }

    function addBrickToWall(color, wallNumber) {

            // id beschrijven
            let wallId = 'wall-' + wallNumber;
            // elementen ophalen ( juiste muur ophalen)
            let wall = document.getElementById(wallId);

            //steentje maken met juiste kleur
            let newBrick = createBrick(color);

            //steentje toevoegen aan de muur
            wall.appendChild(newBrick);
    }

    function removeBrickFromWall(color, wallNumber){
           
             // id beschrijven
             let wallId = 'wall-' + wallNumber;
             // elementen ophalen ( juiste muur ophalen)
             let wall = document.getElementById(wallId);

             let bricks = document.getElementsByClassName('brick-' + color);
             if(bricks.length > 0){
                 wall.removeChild(bricks[0]);

             }
}

