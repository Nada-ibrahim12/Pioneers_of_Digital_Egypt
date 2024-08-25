let xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=fefdcf3b720b43a3acc7a54ab7da2b18');
xhttp.send();
let allData = [];
let container = document.getElementById('cont');

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let res = JSON.parse(this.responseText);
    let data = res.articles;
    allData = data;
    console.log(allData);
    displayData(allData);
  }
}

async function getData() {
  var data = await fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=fefdcf3b720b43a3acc7a54ab7da2b18`);
  let res = await data.json();
  allData = await res.articles;
  console.log(allData);
  displayData(allData);
}

getData();

function displayData(data) {
  let box = '';
  for (let i = 0; i < data.length; i++) {
    box += `<div class="col-12 col-md-4 my-2">
            <div class="box text-center">
              <div class="imgBox">
                <img src=${data[i].urlToImage} alt="" />
              </div>
              <div class=" p-3">
              <h3 class="title text-center">${data[i].title}</h3>
              <p class="content ">
                ${data[i].content || 'No content available'}
              </p>
              </div>
            </div>
          </div>`;
  }
  container.innerHTML = box;
}
