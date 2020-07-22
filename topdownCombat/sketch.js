var troops = [];
var archer;

var grid = [];

var squareSize = 50;
var cols, rows;

function setup() {
	createCanvas(800, 800);

	cols = floor(width/w);
	rows = floor(height/w);
	for(var i = 0; i < rows; i++){
        for(var j = 0; j < cols; j++){
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }

	archer = new Troop(50, 60, 50)
}

function draw() {
	background(51);
	archer.show();
}