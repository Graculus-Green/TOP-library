let myLibrary = [{
    title:"Book, yo",
    author:"Some Writer",
    pages: 297,
    read: "Yes",
},
{
    title:"Another Book",
    author:"Another Person",
    pages: 603,
    read: "No",
},];

let form = document.querySelector("form");
let addTitle = document.querySelector('#title');
let addAuthor = document.querySelector('#author');
let addPages = document.querySelector('#pages');
let addRead = document.querySelector('#read');

class Book {
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

let isBookInLib = (book) => {
    return myLibrary.some((book) => {
        return book.title === title
    });
};

let addBookToLibrary = () => {
    document.querySelector('.submit-btn').addEventListener('click', (e) => {
        e.preventDefault();
        title = addTitle.value;
        author = addAuthor.value;
        pages = addPages.value;

        if (document.querySelector("#read-check").checked === true) {
            read = "Yes";
        }
        else {
            read = "No";
        }
        newBook = new Book(title, author, pages, read);
        if (isBookInLib(newBook) === false){
        myLibrary.push(newBook);
        }
          
        displayLib();
    });
}

let displayLib = (Book) => {
    let tableRef = document.querySelector('#table-body');
    tableRef.innerHTML = '';

    myLibrary.forEach (book => {
        let newRow = tableRef.insertRow(-1);

        let newtitle = newRow.insertCell();
        newtitle.innerHTML = book.title;

        let newAuthor = newRow.insertCell();
        newAuthor.innerHTML = book.author;

        let newPages = newRow.insertCell();
        newPages.innerHTML = book.pages;

        let newRead = newRow.insertCell();
        newRead.innerHTML = book.read;
    }
    )
    
};
displayLib();
addBookToLibrary();
