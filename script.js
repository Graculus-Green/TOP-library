let myLibrary = [{
    title:"Book, yo",
    author:"Some Writer",
    pages: 297,
    read: true,
}];

let addTitle = document.querySelector('#title');
let addAuthor = document.querySelector('#author');
let addPages = document.querySelector('#pages');
let addRead = document.querySelector('#read');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    haveRead = "";
        if(read === true)
            haveRead = 'have read';
        else
            haveRead = 'have not read yet';
                
    
    this.info = () => {
        return `${title} by ${author}, ${pages} pages, ${haveRead}.`
    }
}

let addBookToLibrary = () => {
    document.querySelector('#submit').addEventListener('click', e => {
        addBook = new Book(addTitle.value, addAuthor.value, addPages.value, addRead.value);
        myLibrary.push(addBook);
        
    });
    document.querySelector('.lib').innerHTML = myLibrary;
    console.log(myLibrary);
}
