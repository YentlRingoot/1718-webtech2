/***************************************************
* @author: Yentl Ringoot
* @created: 15/03/2018
* @modified: 15/03/2018
* @copyright: Artevelde University College Ghent
***************************************************/

let books = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        alreadyRead: false
    },

    {
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        alreadyRead: true
    },
    
    {
        title: 'De verschrikkelijke schoolmeester',
        author: 'Dolf Verroen',
        alreadyRead: true
    }
    ];


    let divBooks = document.getElementById('books');

    for(let i= 0; i < books.length; i++) {
        if (books[i].alreadyRead == true){
            document.write("You read " + books [i].title);
        }
        else {
            document.write("You didn't read " + books [i].title);
        }

        document.write("</br>");
    }

    let Book = function(title, writer, alreadyRead) {

        this.title = name,
        this.author = writer,
        this.alreadyRead = alreadyRead,
        this.output = function() {
            if (this.alreadyRead){
                return "Al gelezen";
            }
            else {
                return "Nog niet gelezen";
            }   
        }
    }

let myFavouriteBook = new Book("Twilight", "Stephanie Meyer", false);
let myFavouriteBook2 = new Book("The Da Vinci Code", "Dan Brown", true);

console.log(myFavouriteBook.output());

console.log(myFavouriteBook2.output());