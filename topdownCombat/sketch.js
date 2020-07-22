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
	background(51);
	stroke(255);
	for(var i = 0; i < rows; i++){
		line(0, i*squareSize, height, i*squareSize)
	}
	for(var i = 0; i < cols; i++){
		line(i*squareSize, 0, i*squareSize, height)
	}

	archer.show();
}

function coordToPixel(x, y){
	pixel = createVector(x * squareSize + 0.5 * squareSize, y * squareSize + 0.5 * squareSize);
	return pixel;
}




