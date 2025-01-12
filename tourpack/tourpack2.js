function readmore(id) {
    var content = document.getElementById("card--content" + id);
    var button = document.getElementById("card--showMore" + id);
    var button2 = document.getElementById("card--showLess" + id);
  
    content.classList.remove("collapse");
    button.hidden = true;
    button2.hidden = false;
  }
  
  function readless(id) {
    var content = document.getElementById("card--content" + id);
    var button = document.getElementById("card--showMore" + id);
    var button2 = document.getElementById("card--showLess" + id);
  
    content.classList.add("collapse");
    button.hidden = false;
    button2.hidden = true;
  }