var troops = [];
var archer;
var punchingBag;

var grid = [[]];

var squareSize = 50;
var cols, rows;

function setup() {
	createCanvas(802, 802);

	cols = floor(width/squareSize);
	rows = floor(height/squareSize);

	for (i = 0; i < rows; i++) {
        grid[i] = new Array(cols);
    }

	for(var i = 0; i < rows; i++){
        for(var j = 0; j < cols; j++){
			var cell = new Cell(i, j);
            grid[i][j] = cell;
        }
	}

	archer = new Troop(12, 5, 17, 2, false);
	punchingBag = new Troop(11, 6, 20, 0, true);
	archer.target = createVector(100, 200);
}

function draw() {
	//colour palette
	//navy blue
	let c1 = color(35, 61, 77);
	//light green
	let c2 = color(163, 193, 129);
	//dark green
	let c3 = color(97, 155, 138);
	//orange
	let c4 = color(254, 127, 45);
	//mustard yellow
	let c5 = color(252, 202, 70);

	background(c2);
	stroke(c1);
	for(var i = 0; i < rows; i++){
		line(0, i*squareSize, height, i*squareSize)
	}
	for(var i = 0; i < cols; i++){
		line(i*squareSize, 0, i*squareSize, height)
	}

	archer.show(c4);
	archer.targetPos = createVector(200, 200);
	archer.update();

	punchingBag.show(c5);
}

function coordToPixel(x, y){
	pixel = createVector(x * squareSize + 0.5 * squareSize, y * squareSize + 0.5 * squareSize);
	return pixel;
}

function pixelToCoord(x, y){
	xcoord = floor(x / squareSize);
	ycoord = floor(y / squareSize);
	coord = createVector(xcoord, ycoord);
	return coord;
}

function enemyInRange(coord, range){
	let xMin = coord.x - range;
	let xMax = coord.x + range;
	let yMin = coord.y - range;
	let yMax = coord.y + range;
	//console.log(xMin, xMax, yMin, yMax)
	for(var i = xMin; i <= xMax; i++){
		for(var j = yMin; j <= yMax; j++){
			if(!grid[i][j].empty){
				return true;
				console.log("enemy in range")
			}else{
				console.log("no enemy in range")
				return false;
			}
		}
	}
}







