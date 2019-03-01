let font, fontsize = 15;

function preload() {

}


function setup() {
	createCanvas(1000, 1000);
	localStorage.clear();
	g = new Graph();

	g.addNode(100, 100, "hey");
	g.addNode(300, 250, "new node");
	g.addNode(340, 200, "hey there");


}

function draw() {
	background(255);

	// smooth();
	g.draw();
}

function mousePressed() {
	g.mousePressed();
}

function mouseDragged() {
	g.mouseDragged();
}

function mouseReleased() {
	g.mouseReleased();
}

// function displayText(s) {
// 	// console.log("hey");
// 	text("hey", 50, 300);
// }