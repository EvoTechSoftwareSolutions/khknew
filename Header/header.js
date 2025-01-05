function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



// Apply scroll effect to all headers
window.addEventListener("scroll", function () {
  const headers = document.querySelectorAll(".header--sec1--div1, .header--sec2--div1, .header--sec3--div1"); // Select all headers

  headers.forEach(header => {
    if (window.scrollY > 0) {
      header.style.backgroundColor = "white";
      header.style.color = "black";

      // Update text colors within the header
      header.querySelectorAll(".header--text,.header--text3, .dropbtn").forEach(element => {
        element.style.color = "black";
      });
    } else {
      header.style.backgroundColor = "transparent";
      header.style.color = "white";

      // Revert text colors within the header
      header.querySelectorAll(".header--text,.header--text3, .dropbtn").forEach(element => {
        element.style.color = "white";
      });
    }
  });
});
