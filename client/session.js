let btn = document.getElementById("result");
let searchInput = document.getElementById("searchInput");

const checkSearch = async (event) => {
  event.preventDefault();

  const response = await fetch("http://localhost:5500/search");
  const data = await response.json();

  for (let i = 0; i <= data.length; i++) {
    if (searchInput.value.toLowerCase() == data[i].Name) {
      localStorage.setItem("searchValue", searchInput.value.toLowerCase());
      window.location.href = event.target.href;
    }
  }

  alert("This Search Item Does Not Exist In Our API!");
};

btn.addEventListener("click", checkSearch);
