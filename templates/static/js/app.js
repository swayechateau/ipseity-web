const nav = document.getElementById("navigation");
const navStyle = {
  scroll: "bg-main",
  default: "bg-transparent",
};

// Function to watch Y-axis position and change classes
function watchYAxis() {
  var scrollY = window.scrollY || window.pageYOffset;
  if (scrollY >= 60) {
    // Add classes when Y-axis position is at 60 or more
    nav.classList.add(navStyle.scroll);
    nav.classList.remove(navStyle.default);
  } else {
    // Remove classes when Y-axis position is less than 60
    nav.classList.remove(navStyle.scroll);
    nav.classList.add(navStyle.default);
  }
}

// function toggleNav() {
//   navigation.classList.toggle('bg-transparent');
//   navigation.classList.toggle('bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 shadow-0_8px_32px_0_rgba(31,38,135,0.37)');
// }
// Attach the function to the window's scroll event
window.addEventListener("scroll", watchYAxis);