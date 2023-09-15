function setup() {
  createCanvas(300, 300);
}

function draw() {
  if (mouseIsPressed) {
      fill(0, 255, 255);
    circle(mouseX, mouseY, 25);
  }}
function mouseWheel() {
  background(0, 255, 0);}
function mouseClicked(){
  background(32);
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
    }  e for your week 3 exercise below.

