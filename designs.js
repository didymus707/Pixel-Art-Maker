// Select color input
// Select size input
var color, height, width;

// When size is submitted by the user, call makeGrid()

$("#sizePicker").submit(function (event) {
  event.preventDefault();
  height = $("#inputHeight").val();
  width = $("#inputWidth").val();
  makeGrid(height, width);
});

function makeGrid(height, width) {
  $("tr").remove();
  //removes all everything in the grid when called

// Your code goes here!
for (var x=1; x<=height; x++) {
  // $("#pixelCanvas").append("<tr id=table>" + x + "</tr>");
  // for (var y=1; y<=width; y++) {
  //   $("#table"+ x).append("<td></td>");
  //   }
  $("#pixelCanvas").append("<tr id=table" + x + "></tr>");
 for (var y=1; y<=width; y++) {
  $("#table"+ x).append("<td></td>");
  }
  }
  $("td").click(function addColor() {
    color = $("#colorPicker").val();

    if ($(this).attr("style")) {
      $(this).removeAttr("style");
// removes every box clicked 

    } else {
      $(this).attr("style", "background-color:" + color);
    }
  });
}