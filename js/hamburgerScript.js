// JavaScript Document
function toggleHamburger (x) {
  x.classList.toggle("change"); 
  toggleHamburgerItems ();
}

function toggleHamburgerItems () {
  var x = document.getElementById("toggleHamburgerItems");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
