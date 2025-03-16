class Walker {
  constructor() {
    this.speed = 8;
    this.x = width / 2;
    this.y = height / 2;
    this.mouseProbability = 0;
    this.color = [random(360), 120 + random(60), 100 + random(80)];
  }

  show() {
    stroke(this.color);
    point(this.x, this.y);
  }

  step() {
    const xstep = random(-this.speed, this.speed);
    const ystep = random(-this.speed, this.speed);
    const moveToMouse = random() < this.mouseProbability / 100;
    const mouseDirection = [mouseX - this.x, mouseY - this.y];
    const magnitude = Math.sqrt(
      Math.pow(mouseDirection[0], 2) + Math.pow(mouseDirection[1], 2)
    );

    if (moveToMouse) {
      this.x += (mouseDirection[0] / magnitude) * this.speed;
      this.y += (mouseDirection[1] / magnitude) * this.speed;
    } else {
      this.x += xstep;
      this.y += ystep;
    }
  }
}
