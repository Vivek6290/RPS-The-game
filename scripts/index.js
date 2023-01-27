 function clickme() {
    var modal = document.getElementById("Rules-id");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeme() {
  var modal = document.getElementById("Rules-id");
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal = document.getElementById("Rules-id");
  var modal1 = document.getElementById("About-id");
  if (event.target == modal) {
    modal.style.display = "none";
    }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
function clickme1() {
    var modal = document.getElementById("About-id");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeme1() {
  var modal = document.getElementById("About-id");
  modal.style.display = "none";
}
function myFunction() {
  var x = document.getElementById("myhead");
  if (x.className === "head") {
    x.className += " responsive";
  } else {
    x.className = "head";
  }
}
