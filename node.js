class Node {
	constructor(x, y, text, id, radius=30) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.id = id;
		this.text = text;

		this.overBox = false;
		this.color = "#7B1FA2";
		this.locked = false;

		this.xOffset = 0;
		this.yOffset = 0;
	}

	draw() {
		this.onHover();
		noStroke();
		fill(this.color);
		circle(this.x, this.y, this.radius);


		fill("#FFFFFF");
		text(this.id, this.x - 20, this.y);
	}

	setColor(c) {
		this.color = c;
	}

	onHover() {
		let d = dist(this.x, this.y, mouseX, mouseY);
		if (d < this.radius) {
			this.overBox = true;
			this.color = "#7B1FA2";
		}
		else {
			this.overBox = false;
			this.color = "#9C27B0";
		}
	}

	mousePressed() {
		if (this.overBox) {
			console.log(this.id);
			this.locked = true;
		}
		else {
			this.locked = false;
		}
		this.xOffset = mouseX - this.x;
		this.yOffset = mouseY - this.y;
	}

	mouseDragged() {
		if (this.locked) {
			this.x = mouseX - this.xOffset;
			this.y = mouseY - this.yOffset;
		}
	}

	mouseReleased() {
		if (this.locked) {
			this.locked = false;
		}
	}
}