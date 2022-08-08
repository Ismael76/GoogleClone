let url = document.querySelector(".url");
let title = document.querySelector(".title");
let desc = document.querySelector(".desc");
let tags = document.querySelector(".tags");

let sectionAddTo = document.querySelector(".container");

let search = localStorage.getItem("searchValue");

let all = localStorage.getItem("allResult");
let one = localStorage.getItem("oneResult");
let googleSearch = localStorage.getItem("googleResult");

const getResult = async () => {
  const response = await fetch("http://localhost:3000/search");
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

      section.append(paraURL);
      section.append(anchorTitle);
      section.append(paraDesc);
      section.append(paraTags);
    }
  }
};

const getAll = async (e) => {
  const response = await fetch("http://localhost:3000/search");

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

    section.append(paraURL);
    section.append(anchorTitle);
    section.append(paraDesc);
    section.append(paraTags);
  }
};

const googleSearchFunc = async (e) => {
  const response = await fetch("http://localhost:3000/google");

  const data = await response.json();

  for (let i = 0; i < 4; i++) {
    console.log(data.organic_results[i]);
    let section = document.createElement("section");
    let anchorTitle = document.createElement("a");
    let paraURL = document.createElement("p");
    let paraDesc = document.createElement("p");

    sectionAddTo.append(section);

    anchorTitle.innerText = data.organic_results[i].title;
    paraURL.innerText = data.organic_results[i].link;
    anchorTitle.setAttribute("href", data.organic_results[i].link);
    paraDesc.innerText =
      data.organic_results[i].about_this_result.source.description;

    paraURL.classList.add("url");
    anchorTitle.classList.add("title");
    paraDesc.classList.add("desc");

    section.append(paraURL);
    section.append(anchorTitle);
    section.append(paraDesc);
  }
};

if (all === "all") {
  getAll();
  localStorage.setItem("allResult", "reset");
} else if (one === "one") {
  getResult();
  localStorage.setItem("oneResult", "reset");
} else if (googleSearch === "google") {
  googleSearchFunc();
  localStorage.setItem("googleResult", "reset");
}
