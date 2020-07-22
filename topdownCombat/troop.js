function Troop(x, y, r){
    this.pos = createVector(x, y);
    this.r = r;

    this.show = function(){
        stroke(212, 66, 245);
        fill(212, 66, 245);
        ellipse(this.pos.x, this.pos.y, this.r)
    }
}












