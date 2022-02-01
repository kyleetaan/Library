const container = document.getElementById("container");

const form = document.getElementById("params");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
form.addEventListener('submit', addBookToLibrary);


const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

//reset every refresh
titleInput.value = "";
authorInput.value = "";
pagesInput.value = "";
readInput.checked = false;
let id = 0;


let myLibrary = [
    // {
    //     title: "Harry Potter",
    //     author: "J.K. Rowling",
    //     pages: 123,
    //     read: true,
    // }
];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(){ 
    let book = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked, id);
    //reset value for new input
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
    id++; // id for dom and array connection. add function for delete
    myLibrary.push(book);
    displayLibrary();
}

function displayLibrary(){
    container.replaceChildren();
    if(myLibrary.length === 0){
        return;
    }
    myLibrary.forEach(element => {
        createCard(element);
    });
}


function createCard(obj){ 
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "Title: "
    const titleObj = document.createElement("div");
    titleObj.className = "title";
    titleObj.textContent = obj["title"];

    const author = document.createElement("div");
    author.className = "author";
    author.textContent = "Author: "
    const authorObj = document.createElement("div");
    authorObj.className = "author";
    authorObj.textContent = obj.author;

    const bookPages = document.createElement("div");
    bookPages.className = "title";
    bookPages.textContent = "Pages: "
    const bookPagesObj = document.createElement("div");
    bookPagesObj.className = "title";
    bookPagesObj.textContent = obj.pages;

    const toggles = document.createElement("div");
    toggles.className = "toggles";
    
    const read = document.createElement("button");
    read.className = "read";
    read.textContent = "READ";
    if(obj["read"] === true){
        read.classList.add("button-read");
    }
    read.addEventListener('click', ifRead);

    const trash = document.createElement("button");
    const trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash-o trash";
    // trash.addEventListener('click', deleteFunc);

    trash.appendChild(trashIcon);

    toggles.appendChild(read);
    toggles.appendChild(trash);
    
    card.appendChild(title);
    card.appendChild(titleObj);
    card.appendChild(author);
    card.appendChild(authorObj);
    card.appendChild(bookPages);
    card.appendChild(bookPagesObj);
    card.appendChild(toggles);

    container.appendChild(card);
}

displayLibrary();

function ifRead(){
    this.classList.toggle("button-read");
}