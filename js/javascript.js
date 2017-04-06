// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var add = document.getElementById("btnAddtoList");

var submit = document.getElementById("submit");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

submit.onclick = function(){
  modal.style.display = "none";
  //Reset the modal
  $("#ingredientAddBlock").empty();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$("#btnAddtoList").click(function () {
    $("#ingredientAddBlock").append('<br><div class = "ingredients"><input type="text" id="ingredientName" name="name" class="ingredientName" placeholder="ingredient name"/><input type="text" maxlength = "2" id="ingredientNumber" name="name" class="ingredientNumber" placeholder="#"/>');
  return false;
  });
