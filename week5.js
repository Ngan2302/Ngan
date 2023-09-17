function setup() {
  createCanvas(500, 500, WEBGL);
}
function draw() {
  background(255);
  
  rotateY(millis() / 1000);
  box(100);
  circle(0, -70, 90);
  
  translate(0, 100);
  rotateY(millis() / 1000);
  cone(70, 100);
  
  translate(170, -150);
  rotateZ(millis() / 1000);
triangle(20, 80, 50, 20, 75, 80);  
}
