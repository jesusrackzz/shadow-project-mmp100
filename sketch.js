let size = 50;
let growing = true;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('animation');
}

function draw() {
  background(11, 11, 13); // dark background

  stroke(209, 0, 31); // red border
  fill(138, 43, 226, 150); // purple fill with transparency

  ellipse(width / 2, height / 2, size, size);

  if (growing) {
    size += 1;
    if (size > 120) growing = false;
  } else {
    size -= 1;
    if (size < 50) growing = true;
  }
}