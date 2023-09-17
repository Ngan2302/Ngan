function setup() {
  createCanvas(500, 500);
background("white");
}

function draw() {
  if (mouseIsPressed) {
      fill(0, 255, 255);
    circle(mouseX, mouseY, 25);
  }}

function mouseClicked(){
  fill(0, 255, 0);
  circle(mouseX, mouseY, 80);
}
function keyPressed(){
 if (key == 'r') {
      background("red");
    }
    else if (key == 'y') {
      background("yellow");
    }
    else if (key == 'p') {
      background("#fae");
    }  
    else if (key == 'u') {
      background("blue");
    } 
else if (key == 'o') {
      background("orange");
}}
