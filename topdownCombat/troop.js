function Troop(x, y, r, ms, static){
    this.static = static;
    this.coord = createVector(x, y);
    this.pos = coordToPixel(this.coord.x, this.coord.y);
    //console.log(pixelToCoord(this.pos.x, this.pos.y))
    this.radius = r;
    this.health;
    this.moveSpeed = ms;
    this.damage;
    this.attackSpeed;
    this.range = 100;
    this.armour;
    this.magicResist;

    this.squareRange = 0;

    this.targetPos = createVector(200, 200);
    this.targetTroop;
    this.wander = true;
    this.attacking = false;

    this.frameCounter = 0;

    this.show = function(colour){
        stroke(colour);
        fill(colour);
        ellipse(this.pos.x, this.pos.y, this.radius)
    }

    this.move = function(target){
        this.targetPos = target;
        var dir = p5.Vector.sub(this.targetPos, this.pos);
        if(dir.mag() < this.moveSpeed){
            this.pos = this.targetPos;
            if(this.wander){
                this.targetPos = createVector(random(width), random(height));
                this.move(this.targetPos);
            }
        }else{
            dir.setMag(this.moveSpeed);
            this.pos.add(dir);
        }
        let posCoord = pixelToCoord(this.pos.x, this.pos.y);
        if(this.coord != posCoord){
            grid[this.coord.x][this.coord.y].empty = true;
            this.coord = posCoord;
            grid[posCoord.x][posCoord.y].empty = false;
        }
    }

    this.attack = function(troop){
        console.log("attacking")
    }

    this.update = function(){
        if(this.attacking){
            this.attack(this.targetTroop);
        }else{
            if(enemyInRange(this.coord, this.squareRange)){
               this.attacking = true;
            }else if(this.static){
                this.move(targetPos)
            }
        }
    }
}












