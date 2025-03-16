let walkers = [];

function setup() {
  createCanvas(640, 512);

  for (let i = 0; i < 64; i++) {
    walkers[i] = new Walker(random(8));
  }

  colorMode("HSB");

  frameRate(30);
  strokeWeight(16);
  background(33);
}

function draw() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step();
    walkers[i].show();
  }
}
