class bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':1,
          'friction':0,
          'frictionAir':0.0,
          'slop':1,
          'inertia': Infinity

      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(8);
      stroke("cyan");
      fill("white");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  