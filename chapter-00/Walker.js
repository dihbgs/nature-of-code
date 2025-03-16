class Walker {
  constructor(speed) {
    this.x = width / 2;
    this.y = height / 2;
    this.speed = speed;
    this.color = [random(360), 120 + random(60), 100 + random(80)];
  }

  show() {
    stroke(this.color);
    point(this.x, this.y);
  }

  step() {
    let xstep = random(-1, 1);
    let ystep = random(-1, 1);

    this.x += xstep * this.speed;
    this.y += ystep * this.speed;
  }
}
