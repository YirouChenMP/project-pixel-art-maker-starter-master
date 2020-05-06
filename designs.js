//Define UI Vars
let canvas = document.querySelector('#pixelCanvas');
let submitBtn = document.querySelector('#Submit');

// Load all event listeners
LoadEventListeners();

// Load all event listeners
function LoadEventListeners(){
  submitBtn.addEventListener('click', function(event){
  event.preventDefault();
  canvas.innerHTML='';
  let height = document.querySelector('#inputHeight').value;
  let width = document.querySelector('#inputWidth').value;
  makeGrid(height, width);
  });
}

// makeGrid function with user color and size input
function makeGrid(height, width) {
  //set color picker
  let color = document.querySelector('#colorPicker');
  let setColor = function (cell){
    cell.addEventListener('click', function(){
      cell.style.backgroundColor = color.value;
    });
  }
  // make grid with size input
  for (let i = 0; i < height; i++) {
    let row = canvas.insertRow(i);
    for (let n = 0; n < width; n++) {
      var cell = row.insertCell(n);
      cell.addEventListener('click', setColor(cell));
    }
  }
}
