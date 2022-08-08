let searchInput = document.getElementById("searchInput");
let allBtn = document.getElementById("all");
let btn = document.getElementById("result");

const checkSearch = async (event) => {
  event.preventDefault();

  const response = await fetch("http://localhost:3000/search");
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    if (data[i].Name == searchInput.value.toLowerCase()) {
      localStorage.setItem("searchValue", searchInput.value.toLowerCase());
      localStorage.setItem("oneResult", "one");
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

allBtn.addEventListener("click", () => {
  localStorage.setItem("allResult", "all");
});

const googleAPI = async (e) => {
  const response = await fetch("http://localhost:3000/google");

  const data = await response.json();

  for (let i = 0; i < 4; i++) {
    console.log(data.organic_results[i]);
    let section = document.createElement("section");
    let anchorTitle = document.createElement("a");
    let paraURL = document.createElement("p");
    let paraDesc = document.createElement("p");
    let paraTags = document.createElement("p");

    sectionAddTo.append(section);

    paraURL.innerText = data[i].URL;
    anchorTitle.innerText = data.organic_results[i].title;
    anchorTitle.setAttribute("href", data.organic_results[i].link);
    paraDesc.innerText =
      data.organic_results[i].about_this_result[i].description;
    paraTags.innerText = data.organic_results[i].about_this_result[i].keywords;

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

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Im here");
    e.preventDefault();
    searchData = {
      value: searchInput.value,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(searchData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:3000/google", options)
      .then((r) => r.json())
      .catch((err) => {
        console.log(err);
      });

    localStorage.setItem("googleResult", "google");
    window.location.replace("result.html");
  }
});
