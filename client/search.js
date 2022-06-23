let url = document.querySelector(".url");
let title = document.querySelector(".title");
let desc = document.querySelector(".desc");
let tags = document.querySelector(".tags");

let search = localStorage.getItem("searchValue");

const getResult = async () => {
  const response = await fetch("http://localhost:5500/search");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    if (search == data[i].Name) {
      url.innerText = data[i].URL;
      title.innerText = data[i].Title;
      title.setAttribute("href", data[i].URL);
      desc.innerText = data[i].Description;
      tags.innerText = data[i].Tags;
    }
  }
};

getResult();
