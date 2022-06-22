let url = document.querySelectorAll(".url");
let title = document.querySelectorAll(".title");
let desc = document.querySelectorAll(".desc");
let tags = document.querySelectorAll(".tags");

// let btn = document.getElementById("result");
// let searchInput = document.getElementById("searchInput");
// console.log(btn)
// btn.addEventListener("click", (e) => {
//   localStorage.setItem("searchValue", searchInput.value);
//   console.log(searchInput.value);
// });

const urlArr = Array.from(url);
const titleArr = Array.from(title);
const descArr = Array.from(desc);
const tagsArr = Array.from(tags);


const getAll = async () => {
  const response = await fetch("http://localhost:5500/search");

  const data = await response.json();

  for (let i = 0; i < urlArr.length; i++) {
    urlArr[i].innerText = data[i].URL;
    titleArr[i].innerText = data[i].Title;
    titleArr[i].setAttribute("href", data[i].URL);
    descArr[i].innerText = data[i].Description;
    tagsArr[i].innerText = data[i].Tags;
  }
};

getAll();
