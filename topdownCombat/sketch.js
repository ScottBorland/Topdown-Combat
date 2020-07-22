var troops = [];
var archer;

var grid = [];

var squareSize = 50;
var cols, rows;

function setup() {
	createCanvas(802, 802);

	cols = floor(width/squareSize);
	rows = floor(height/squareSize);
	for(var i = 0; i < rows; i++){
        for(var j = 0; j < cols; j++){
            var cell = new Cell(i, j);
            grid.push(cell);
        }
	}

	archer = new Troop(5, 6, 20)
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
	stroke(c3);
	for(var i = 0; i < rows; i++){
		line(0, i*squareSize, height, i*squareSize)
	}
	for(var i = 0; i < cols; i++){
		line(i*squareSize, 0, i*squareSize, height)
	}

	archer.show(c5);
}

function coordToPixel(x, y){
	pixel = createVector(x * squareSize + 0.5 * squareSize, y * squareSize + 0.5 * squareSize);
	return pixel;
}




