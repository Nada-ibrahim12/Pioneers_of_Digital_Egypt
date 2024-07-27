var BookNa = document.getElementById("BookNa")
var BookPr = document.getElementById("BookPr")
var BookCat = document.getElementById("BookCat")
var BookDesc = document.getElementById("BookDesc")
var tableBody = document.getElementById("tableBody")
// var BookNa = document.getElementById("BookNa")
var bookCont = []
function getBook() {
    var book = {
        name: BookNa.value,
        price: BookPr.value,
        category: BookCat.value,
        description: BookDesc.value
    }
    bookCont.push(book)
    displayBooks()
    clearInputs()
}

function clearInputs() {
    BookNa.value = ""
    BookPr.value = ""
    BookCat.value = ""
    BookDesc.value = ""
}

function displayBooks() {
    var box =``
    for (var i = 0 ; i < bookCont.length ; i++){
        box += `<tr>
                <td>${i+1}</td>
                <td>${bookCont[i].name}</td>
                <td>${bookCont[i].price}</td>
                <td>${bookCont[i].category}</td>
                <td>${bookCont[i].description}</td>
                <td>
                  <button class="btn btn-danger">Delete</button>
                  <button class="btn btn-secondary">Update</button>
                </td>
              </tr>`
    }
    tableBody.innerHTML = box
}