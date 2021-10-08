let myLibrary = [{
    title:"Book, yo",
    author:"Some Writer",
    pages: 297,
    read: true,
},
{
    title:"Another Book",
    author:"Another Person",
    pages: 603,
    read: false,
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

let addBookToLibrary = () => {
    document.querySelector('#submit').addEventListener('click', (e) => {

        title = addTitle.value;
        author = addAuthor.value;
        pages = addPages.value;
        read = addRead.value

        newBook = new Book(title, author, pages, read)
        myList.push(newBook)
        
        
        return displayLib;
    });
}


let displayLib = (Book) => {
    let tableRef = document.querySelector('.lib-table');
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
    
}
    
displayLib();
