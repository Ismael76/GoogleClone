let btn = document.getElementById("result");
let searchInput = document.getElementById("searchInput");
console.log(btn)
btn.addEventListener("click", (e) => {
  localStorage.setItem("searchValue", searchInput.value);
  console.log(searchInput.value);
});