let font, fontsize = 15;

function preload() {

}


function setup() {
	createCanvas(1000, 1000);
	localStorage.clear();
	g = new Graph();

	g.addNode(100, 300, "hey");
	g.addNode(300, 250, "new node");
	g.addNode(340, 200, "hey there");

	handleInput();


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

function handleInput() {
	node1 = createInput();
	node1.position(20, 20);

	node2 = createInput();
	node2.position(20, node1.y + node1.height);

	relText = createInput();
	relText.position(20, node2.y + node2.height);

	button = createButton("create relationship");
	button.position(20, relText.y + relText.height);
	button.mousePressed(addRelationship);

	newNode = createInput();
	newNode.position(300, 20);

	newNodeButton = createButton("create node");
	newNodeButton.position(300, newNode.y + newNode.height);
	newNodeButton.mousePressed(addNode);

}

function addRelationship() {
	g.addRelationship(relText.value(), node1.value(), node2.value());
}

function addNode() {
	g.addNode(width/2, height/2, newNode.value());
}