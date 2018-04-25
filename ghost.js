class Ghost {
  constructor(aspettoTmp, controllerId) {
    this.position = new createVector(random(-250, 250), 0);
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(0, 0);
    this.aspetto = aspettoTmp;
    this.controllerId=controllerId;
    this.controller = new p5.Vector(0,0);
    this.mass = 6;
  }

  applyForce(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update(other) {
    //this.position.rotate(radians(1));
    //this.position.add(controller);
    this.acceleration = p5.Vector.sub(other,this.position);
    // Set magnitude of acceleration
    this.acceleration.setMag(0.2);



    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.velocity.limit(4);
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
      this.position.x = -width/2;
      //this.velocity.x *= -1;
    } else if (this.position.x < -width/2) {
      //this.velocity.x *= -1;
      this.position.x = width/2;
    }
    if (this.position.y > height/2) {
      //this.velocity.y *= -1;
      this.position.y = height/2;
    }
    if (this.position.y < -height/2) {
      //this.velocity.y *= -1;
      this.position.y = height/2;
    }
  }

  intersects(other) {
    let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
    return (d < 100);
    console.log(d);
  }

  }
