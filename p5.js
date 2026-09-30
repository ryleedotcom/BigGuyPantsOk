// credit mahdadbor on p5

let btn, colorPicker, slider, eraser;
function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  background(250);

  button = createButton('save doodle');
  //button.position(10, 410);
  button.size(100, 40);
  button.mousePressed(saveDrawing);

  btn = createButton("clear");
  btn.size(100, 40);
  btn.mousePressed(Clear);

  colorPicker = createColorPicker("#ed225d");
  stroke(colorPicker.color());

  slider = createSlider(0, 100, 40, 0.1);
  strokeWeight(slider.value());
}

function draw() {
  //background(51);
  if (mouseIsPressed) {
      //blendMode(LIGHTEST);
    stroke(colorPicker.color());
    strokeWeight(slider.value());
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  if (keyIsDown(69)) {
    blendMode(BLEND);
    strokeWeight(0);
    stroke(255);
    fill(51);
    ellipse(mouseX, mouseY, 50, 50);
  }
}

function Clear() {
  blendMode(BLEND);
  background(251);
}
function saveDrawing() {
  save("Picture.png");
}

