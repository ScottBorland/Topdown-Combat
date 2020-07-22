function Troop(x, y, r){
    this.coord = createVector(x, y);
    this.pos = coordToPixel(this.coord.x, this.coord.y);
    //console.log(pixelToCoord(this.pos.x, this.pos.y))
    this.r = r;
    this.health;
    this.moveSpeed = 5;
    this.damage;
    this.attackSpeed;
    this.range;
    this.armour;
    this.magicResist;
    
    this.target;
    this.wander = true;

    this.show = function(colour){
        stroke(colour);
        fill(colour);
        ellipse(this.pos.x, this.pos.y, this.r)
    }

    this.move= function(target){
        this.target = target;
        var dir = p5.Vector.sub(this.target, this.pos);
        if(dir.mag() < this.moveSpeed){
            this.pos = this.target;
            if(this.wander){
                this.target = createVector(random(width), random(height));
                this.move(this.target);
            }
        }else{
        dir.setMag(this.moveSpeed);
        this.pos.add(dir);
        }
    }
    
}












