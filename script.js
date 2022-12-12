let items = document.querySelectorAll(".nav-item");
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
hamburger.addEventListener("click", toggleNav);
function toggleNav() {
  navList.classList.toggle("show");
  navList.classList.contains("show")
    ? hamburger.setAttribute("aria-expanded", "true")
    : hamburger.setAttribute("aria-expanded", "false");
  navList.classList.contains("show") ? console.log(true) : console.log(false);
}
// infinite for loop

function fun() {
  // Loop through the items
  for (let i = 0; i < items.length; i++) {
    // Add the highlight class
    setTimeout(function () {
      items[i].classList.add("shake");
    }, 1000 * (i + 1));
    // Remove the highlight class after one second
    setTimeout(function () {
      items[i].classList.remove("shake");
    }, 1000 + 1000 * (i + 1));
  }
}
fun();
setInterval(function () {
  fun();
}, 3000);
