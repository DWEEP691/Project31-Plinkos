class Particle {
    constructor(x,y,r) {
        var options = {
            restitution:0.4,
        }
        this.r=r;
        this.rand = color(random(0,255), random(0,255), random(0,255));

        this.body = Bodies.circle(x,y,this.r,options);
        this.color = this.rand;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var ang = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(ang);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}