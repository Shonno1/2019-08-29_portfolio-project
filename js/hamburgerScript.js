// JavaScript Document
function toggleHamburger (x) {
  x.classList.toggle("change"); 
  toggleHamburgerItems ();
}

function toggleHamburgerItems () {
  var y = document.getElementById("toggleHamburgerItems");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}