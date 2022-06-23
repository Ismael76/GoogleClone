let accept = localStorage.getItem("value");

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

if (accept === "accept") {
  getAll();
  localStorage.setItem("value", "reset");
}
