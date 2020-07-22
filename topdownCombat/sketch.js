var troops = [];
var archer;

var grid = [];

var squareSize = 50;
var cols, rows;

function setup() {
	createCanvas(800, 800);

	cols = floor(width/squareSize);
	rows = floor(height/squareSize);
	for(var i = 0; i < rows; i++){
        for(var j = 0; j < cols; j++){
            var cell = new Cell(i, j);
            grid.push(cell);
        }
	}
	console.log(grid)

	archer = new Troop(50, 60, 20)
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