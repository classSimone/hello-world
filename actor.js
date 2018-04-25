class actor {
  constructor(aspettoTmp) {
    this.position = new createVector(random(-250, 250), 0);
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(0, 0);
    this.aspetto = aspettoTmp;
    this.controller = new p5.Vector(0,0);
    this.mass = 1;
  }

  applyForce(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    //this.position.rotate(radians(1));
    //this.position.add(controller);

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }


  display() {
    //noStroke();
    fill('red');
    ellipseMode(CENTER);
    rectMode(CENTER);
    imageMode(CENTER);

    push();
      //line(0, 0, this.position.x, this.position.y);
      translate(this.position.x,this.position.y);

      noStroke();

      rect(0, 30, 40, 50);
      ellipse(0, 0, 50);
      image(this.aspetto, 0, 0);
    pop();

  }

  checkEdges() {
    if (this.position.x > width/2) {
      this.position.x = width/2;
      this.velocity.x *= -1;
    } else if (this.position.x < -width/2) {
      this.velocity.x *= -1;
      this.position.x = -width/2;
    }
    if (this.position.y > height/2) {
      this.velocity.y *= -1;
      this.position.y = height/2;
    }
  }

}
