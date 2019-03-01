let font, fontsize = 15;

function preload() {

}

n = new Node(100, 100, "hi there");

function setup() {
	createCanvas(1000, 1000);
	background(255);
}

function draw() {
	smooth();
	n.draw();
}