function Troop(x, y, r){
    this.coord = createVector(x, y);
    this.pos = coordToPixel(this.coord.x, this.coord.y);
    console.log(pixelToCoord(this.pos.x, this.pos.y))
    this.r = r;

    this.show = function(colour){
        stroke(colour);
        fill(colour);
        ellipse(this.pos.x, this.pos.y, this.r)
    }
}












