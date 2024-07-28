var BookNa = document.getElementById("BookNa");
var BookPr = document.getElementById("BookPr");
var BookCat = document.getElementById("BookCat");
var BookDesc = document.getElementById("BookDesc");
var tableBody = document.getElementById("tableBody");
var AddandUpdateBtn = document.getElementById("AddandUpdateBtn");
var currentindex;

var bookCont = [];
if (localStorage.getItem("allBooks") != null) {
    bookCont = JSON.parse(localStorage.getItem("allBooks"));
    displayBooks(bookCont);
}

function action() {
    if (AddandUpdateBtn.textContent === "Add book") {
        addBook();
    } else {
        updateBook();
    }
}

function addBook() {
    var book = {
        name: BookNa.value,
        price: BookPr.value,
        category: BookCat.value,
        description: BookDesc.value
    };
    bookCont.push(book);
    localStorage.setItem("allBooks", JSON.stringify(bookCont));
    displayBooks(bookCont);
    clearInputs();
}

function clearInputs() {
    BookNa.value = "";
    BookPr.value = "";
    BookCat.value = "";
    BookDesc.value = "";
}

function displayBooks(arrayContainer) {
    var box = ``;
    for (var i = 0; i < arrayContainer.length; i++) {
        box += `<tr>
                <td>${i + 1}</td>
                <td>${arrayContainer[i].name}</td>
                <td>${arrayContainer[i].price}</td>
                <td>${arrayContainer[i].category}</td>
                <td>${arrayContainer[i].description}</td>
                <td>
                  <button class="btn btn-danger" onclick="deleteBook(${i})">Delete</button>
                  <button class="btn btn-secondary" onclick="getBook(${i})">Update</button>
                </td>
              </tr>`;
    }
    tableBody.innerHTML = box;
}

function deleteBook(index) {
    bookCont.splice(index, 1);
    localStorage.setItem("allBooks", JSON.stringify(bookCont));
    displayBooks(bookCont);
}

function getBook(index) {
    currentindex = index;
    BookNa.value = bookCont[index].name;
    BookPr.value = bookCont[index].price;
    BookCat.value = bookCont[index].category;
    BookDesc.value = bookCont[index].description;
    AddandUpdateBtn.textContent = "Update book";
}

function updateBook() {
    var book = {
        name: BookNa.value,
        price: BookPr.value,
        category: BookCat.value,
        description: BookDesc.value
    };
    bookCont[currentindex] = book;
    localStorage.setItem("allBooks", JSON.stringify(bookCont));
    displayBooks(bookCont);
    clearInputs();
    AddandUpdateBtn.textContent = "Add book";
}
