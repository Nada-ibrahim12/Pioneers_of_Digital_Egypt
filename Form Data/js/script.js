var BookNa = document.getElementById("BookNa")
var BookPr = document.getElementById("BookPr")
var BookCat = document.getElementById("BookCat")
var BookDesc = document.getElementById("BookDesc")
var tableBody = document.getElementById("tableBody")
// var BookNa = document.getElementById("BookNa")

var bookCont = []
if (localStorage.getItem("allBooks") != null) {
    bookCont = JSON.parse(localStorage.getItem("allBooks"))
    displayBooks(bookCont)
}

// add book function
function addBook() {
    var book = {
        name: BookNa.value,
        price: BookPr.value,
        category: BookCat.value,
        description: BookDesc.value
    }
    bookCont.push(book)
    localStorage.setItem("allBooks", JSON.stringify(bookCont))
    displayBooks(bookCont)
    clearInputs()
}

function clearInputs() {
    BookNa.value = ""
    BookPr.value = ""
    BookCat.value = ""
    BookDesc.value = ""
}

// display book list function
function displayBooks(arrayContainer) {
    var box = ``
    for (var i = 0; i < bookCont.length; i++) {
        box += `<tr>
                <td>${i + 1}</td>
                <td>${bookCont[i].name}</td>
                <td>${bookCont[i].price}</td>
                <td>${bookCont[i].category}</td>
                <td>${bookCont[i].description}</td>
                <td>
                  <button class="btn btn-danger" onclick="deleteBook(${i})">Delete</button>
                  <button class="btn btn-secondary">Update</button>
                </td>
              </tr>`
    }
    tableBody.innerHTML = box
}

// delete book function
function deleteBook(index) {
    bookCont.splice(index, 1)
    localStorage.setItem("allBooks", JSON.stringify(bookCont))
    displayBooks(bookCont)
}