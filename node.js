class Node {
	constructor(x, y, text, radius=30) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.text = text;

	}

	draw() {
		fill("#7B1FA2");
		circle(this.x, this.y, this.radius);
		fill(0);
		text(this.text, this.x - this.radius, this.y);
	}

	setColor() {

	}
}