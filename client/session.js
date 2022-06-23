let btn = document.getElementById("result");
let searchInput = document.getElementById("searchInput");

let allBtn = document.getElementById("all");

let url = document.querySelector(".url");
let title = document.querySelector(".title");
let desc = document.querySelector(".desc");
let tags = document.querySelector(".tags");

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

const checkSearch = async (event) => {
  event.preventDefault();

  const response = await fetch("http://localhost:5500/search");
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    if (data[i].Name == searchInput.value.toLowerCase()) {
      localStorage.setItem("searchValue", searchInput.value.toLowerCase());
      window.location.href = event.target.href;
      getResult();
      return;
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (searchInput.value.toLowerCase() !== data[i].Name) {
      alert("This Search Item Does Not Exist In Our API!");
      return;
    }
  }
};

btn.addEventListener("click", checkSearch);

allBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  localStorage.setItem("value", "accept");
});
