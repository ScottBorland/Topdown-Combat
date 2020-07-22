function Troop(x, y, r){
    this.coord = createVector(x, y);
    this.pos = coordToPixel(this.coord.x, this.coord.y);
    this.r = r;

    this.show = function(){
        stroke(212, 66, 245);
        fill(212, 66, 245);
        ellipse(this.pos.x, this.pos.y, this.r)
    }
}












