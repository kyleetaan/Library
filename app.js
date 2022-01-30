let myLibrary = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        read: true,
    }
];



const kyle = {
    title: "kyle amazings stories",
    author: "kyle",
    read: false,
};



function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(){
    if(myLibrary.length !== 0){
        myLibrary.forEach(element => {
            
        });
    }
}

function hehe(){
    createCard(kyle);
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

    const toggles = document.createElement("div");
    toggles.className = "toggles";
    
    const read = document.createElement("button");
    read.className = "read";
    read.textContent = "READ";

    const trash = document.createElement("button");
    
    const trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash-o trash";

    trash.appendChild(trashIcon);

    toggles.appendChild(read);
    toggles.appendChild(trash);
    
    card.appendChild(title);
    card.appendChild(titleObj);
    card.appendChild(author);
    card.appendChild(authorObj);
    card.appendChild(toggles);
    const container = document.getElementById("container");
    container.appendChild(card);
}
