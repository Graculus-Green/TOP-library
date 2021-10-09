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
    delete(book)  {
        // Delete the current row
        this.myLibrary.splice(book, 1);
        // Display the new list
        displayLib();
       };
    
};

let isBookInLib = (book) => {
    return myLibrary.some((book) => {
        return book.title === title
    });
};

let addBookToLibrary = () => {
    document.querySelector('.submit-btn').addEventListener('click', (e) => {
        if (addTitle.value !== ""){
            if (addAuthor.value !== "") {
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
                addTitle.value = "";
                addAuthor.value = "";
                addPages.value = 0;
            }
            else {
                alert ("Please insert an author");
            }
        }
        else {
            alert ("Please insert a title!");
        }
    });
};


let editTable = () => {

};
let deleteBook = (book) => {
    let reallyDel = confirm("Are you sure you want to delete?");
    if (reallyDel) {
        myLibrary.splice(book,1);
        displayLib(); 
    }
};

let displayLib = (Book) => {
    let tableRef = document.querySelector('#table-body');
    tableRef.innerHTML = '';
    let bookNum = 0;
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

        let newDel = newRow.insertCell();

        const button = document.createElement("button");
        button.class = "delete-btn";
        button.id = bookNum;
        button.innerHTML ="&#10006;";
        newDel.appendChild(button)
        button.onclick = function(){deleteBook(Number(button.id))};
        console.log(myLibrary[bookNum]);
        bookNum ++;
});
}


displayLib();
addBookToLibrary();
