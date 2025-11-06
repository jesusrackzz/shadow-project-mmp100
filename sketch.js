let size = 50;
let growing = true;
let shadowColor; // global variable for fill color

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('animation');
  shadowColor = color(138, 43, 226, 150); // starting purple
}

function draw() {
  background(11, 11, 13); // dark background

  stroke(209, 0, 31); // red border
  fill(shadowColor); // use global color

  ellipse(width / 2, height / 2, size, size);

  // Pulse logic
  if (growing) {
    size += 1;
    if (size > 120) growing = false;
  } else {
    size -= 1;
    if (size < 50) growing = true;
  }
}

function mousePressed() {
  // Change global color on click
  let r = random(100, 255);
  let g = random(0, 100);
  let b = random(150, 255);
  shadowColor = color(r, g, b, 150);
}
