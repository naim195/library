class Book {
    constructor(name, author, status) {
      this.name = name;
      this.author = author;
      this.status = status;
    }
  }

  class Library {
    constructor() {
      this.myLibrary = [];
      this.bookId = 0;
    }

    addBookToLibrary(name, author, status) {
      const newBook = new Book(name, author, status);
      this.myLibrary.push(newBook);
      this.bookId++;
      return newBook;
    }

    removeBookFromLibrary(id) {
      this.myLibrary.splice(id, 1);
    }
  }

  const library = new Library();

  const form = document.querySelector('#book-form');
  const tableBody = document.getElementById('book-table-body');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const inpBook = document.querySelector('#name');
    const inpAuthor = document.querySelector('#author');
    const readUnread = document.querySelector('#status');

    const newBook = library.addBookToLibrary(inpBook.value, inpAuthor.value, readUnread.value);
    
    const tr = document.createElement('tr');
    tr.id = 'row-' + library.bookId;

    for (const property of ['name', 'author', 'status']) {
      const td = document.createElement('td');
      td.innerText = newBook[property];
      tr.appendChild(td);
    }

    const statusBtn = document.createElement('button');
    statusBtn.className = 'button-status';
    statusBtn.innerText = readUnread.value;
    tr.appendChild(statusBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'button-del';
    deleteBtn.innerText = 'Delete';
    tr.appendChild(deleteBtn);

    tableBody.appendChild(tr);

    inpBook.value = '';
    inpAuthor.value = '';

    statusBtn.addEventListener('click', () => {
      statusBtn.innerText = statusBtn.innerText === 'Read' ? 'Unread' : 'Read';
    });

    deleteBtn.addEventListener('click', () => {
      const delId = tr.id.substring(3);
      library.removeBookFromLibrary(delId);
      tr.remove();
    });
  });
