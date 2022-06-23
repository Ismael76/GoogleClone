let url = document.querySelector(".url");
let title = document.querySelector(".title");
let desc = document.querySelector(".desc");
let tags = document.querySelector(".tags");

let sectionAddTo = document.querySelector(".container");

let search = localStorage.getItem("searchValue");

let all = localStorage.getItem("allResult");
let one = localStorage.getItem("oneResult");

const getResult = async () => {
  const response = await fetch("http://localhost:5500/search");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    if (search == data[i].Name) {
      let section = document.createElement("section");
      let anchorTitle = document.createElement("a");
      let paraURL = document.createElement("p");
      let paraDesc = document.createElement("p");
      let paraTags = document.createElement("p");

      sectionAddTo.append(section);

      paraURL.innerText = data[i].URL;
      anchorTitle.innerText = data[i].Title;
      anchorTitle.setAttribute("href", data[i].URL);
      paraDesc.innerText = data[i].Description;
      paraTags.innerText = data[i].Tags;

      paraURL.classList.add("url");
      anchorTitle.classList.add("title");
      paraDesc.classList.add("desc");
      paraTags.classList.add("tags");

      section.append(anchorTitle);
      section.append(paraURL);
      section.append(paraDesc);
      section.append(paraTags);
    }
  }
};

const getAll = async (e) => {
  const response = await fetch("http://localhost:5500/search");

  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    let section = document.createElement("section");
    let anchorTitle = document.createElement("a");
    let paraURL = document.createElement("p");
    let paraDesc = document.createElement("p");
    let paraTags = document.createElement("p");

    sectionAddTo.append(section);

    paraURL.innerText = data[i].URL;
    anchorTitle.innerText = data[i].Title;
    anchorTitle.setAttribute("href", data[i].URL);
    paraDesc.innerText = data[i].Description;
    paraTags.innerText = data[i].Tags;

    paraURL.classList.add("url");
    anchorTitle.classList.add("title");
    paraDesc.classList.add("desc");
    paraTags.classList.add("tags");

    section.append(anchorTitle);
    section.append(paraURL);
    section.append(paraDesc);
    section.append(paraTags);
  }
};

if (all === "all") {
  getAll();
  localStorage.setItem("allResult", "reset");
} else if (one === "one") {
  getResult();
  localStorage.setItem("oneResult", "reset");
}
