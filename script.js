let myLibrary = [];
let bookId=0;

function Book(name,author,status) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.status = status;
  
}

function addBookToLibrary(name, author, status) {
  // do stuff here
    const newBook=new Book(name,author,status);
    myLibrary.push(newBook);
    bookId++;
}

let inpBook=document.querySelector('#name');
let inpAuthor=document.querySelector('#author');
let ReadUnread=document.querySelector('#status');
let form=document.querySelector('#book-form');
let table=document.querySelector('.table');
let properties=['name','author', 'status']

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    addBookToLibrary(inpBook.value, inpAuthor.value, ReadUnread.value);
    let tr = document.createElement('tr');
    let btn1 = document.createElement('button');
    btn1.className = 'button-status';
    let btn2 = document.createElement('button');
    btn2.className = 'button-del';
    btn2.innerText = 'Delete';
    tr.id='row-'+bookId;
    document.getElementById('book-table-body').appendChild(tr); // Append to tbody

    for (let i = 0; i < 2; i++) {
        let td = document.createElement('td');
        td.innerText = myLibrary[myLibrary.length - 1][properties[i]];
        tr.appendChild(td);
    }
    btn1.innerText = ReadUnread.value;
    tr.appendChild(btn1);
    tr.appendChild(btn2);
    
    inpBook.value = '';
    inpAuthor.value = '';

    btn1.addEventListener('click', () => {
        btn1.innerText = btn1.innerText === 'Read' ? 'Unread' : 'Read';
    });

    btn2.addEventListener('click',()=>{
        let delId=tr.id.substring(3);
        myLibrary.splice(delId,1);
        tr.remove();
        
    });
});


