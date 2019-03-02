class Relationship {
	constructor(text, node1, node2) {
		this.text = text;
		this.node1 = node1;
		this.node2 = node2;
	}

	draw() {
		stroke("#9C27B0");
		line(this.node1.x, this.node1.y, this.node2.x, this.node2.y);

		// let m = (this.node2.y - this.node1.y) / (this.node2.x - this.node1.x);
		// let x = (this.node1.x + this.node2.x) / 2;
		// let y = m * x - m * node1.x + node1.y;
		// console.log(x, y);
		let x = this.node1.x + this.node2.x;
		let y = this.node1.y + this.node2.y;
		noStroke();
		fill(0);
		text(this.text, x/2, y/2);
	}

}