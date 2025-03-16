let walkers = [];

function setup() {
  createCanvas(640, 512);

  for (let i = 0; i < 64; i++) {
    walkers[i] = new Walker();
  }

  colorMode("HSB");

  frameRate(60);
  strokeWeight(16);
  background(33, 33, 33, 255);
}

function draw() {
  background(33, 33, 33, 255 / 16);
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step();
    walkers[i].show();
  }
}

function mouseDragged() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].mouseProbability += 0.5;
    walkers[i].speed += 0.1;
  }
}

function mouseReleased() {
  for (let i = 0; i < walkers.length; i++) {
    walkers[i].mouseProbability = 0;
    walkers[i].speed = 4;
  }
}
