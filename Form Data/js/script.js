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

AddandUpdateBtn.addEventListener("click", action);

function action() {
    if (AddandUpdateBtn.textContent === "Add book") {
        if (regx()) {
            addBook();
        }
    } else {
        if (regx()) {
            updateBook();
        }
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

function search(word) {
    var filter = [];
    for (var i = 0; i < bookCont.length; i++) {
        if (bookCont[i].name.toUpperCase().includes(word.toUpperCase()) ||
            bookCont[i].description.toUpperCase().includes(word.toUpperCase()) ||
            bookCont[i].category.toUpperCase().includes(word.toUpperCase()) ||
            bookCont[i].price.includes(word)) {
            filter.push(bookCont[i]);
        }
    }
    displayBooks(filter);
}

function regx() {
    var nameRegex = /^[a-zA-Z\s]{3,30}$/;
    var priceRegex = /^\d{1,4}$/;
    var categoryRegex = /^[a-zA-Z\s]{3,20}$/;
    var descriptionRegex = /^.{5,100}$/;

    if (!nameRegex.test(BookNa.value)) {
        BookNa.classList.remove("is-valid");
        BookNa.classList.add("is-invalid");
        // alert("Invalid book name. It should be 3-30 characters long, containing only letters and spaces.");
        return false;
    } else {
        BookNa.classList.remove("is-invalid");
        BookNa.classList.add("is-valid");
    }

    if (!priceRegex.test(BookPr.value)) {
        BookPr.classList.remove("is-valid");
        BookPr.classList.add("is-invalid");
        // alert("Invalid book price. It should be a valid number with up to 4 digits.");
        return false;
    } else {
        BookPr.classList.remove("is-invalid");
        BookPr.classList.add("is-valid");
    }

    if (!categoryRegex.test(BookCat.value)) {
        BookCat.classList.remove("is-valid");
        BookCat.classList.add("is-invalid");
        // alert("Invalid book category. It should be 3-20 characters long, containing only letters and spaces.");
        return false;
    } else {
        BookCat.classList.remove("is-invalid");
        BookCat.classList.add("is-valid");
    }

    if (!descriptionRegex.test(BookDesc.value)) {
        BookDesc.classList.remove("is-valid");
        BookDesc.classList.add("is-invalid");
        // alert("Invalid book description. It should be 5-100 characters long.");
        return false;
    } else {
        BookDesc.classList.remove("is-invalid");
        BookDesc.classList.add("is-valid");
    }

    return true;
}
