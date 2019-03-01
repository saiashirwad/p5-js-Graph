class Graph {
	constructor() {
		this.nodes = [];
		this.adj = {};
		this.ids = [];

	}

	addNode(x, y, text) {
		let id = getRandomId(5);
		let node = new Node(x, y, text, id);
		this.nodes.push(node);
		localStorage.setItem(id, node);

		return id;
	}

	clearLS() {
		for (let i = 0; i < this.nodes.length; i++) {
			localStorage.removeItem(this.nodes[i].id);
		}
	}

	draw() {
		for (let i = 0; i < this.nodes.length; i++) {
			this.nodes[i].draw();
		}
	}

	mousePressed() {
		// this.nodes[1].mousePressed();
		for (let i = 0; i < this.nodes.length; i++) {
			this.nodes[i].mousePressed();
		}
	}

	mouseDragged() {
		for (let i = 0; i < this.nodes.length; i++) {
			this.nodes[i].mouseDragged();
		}
	}

	mouseReleased() {
		for (let i = 0; i < this.nodes.length; i++) {
			this.nodes[i].mouseReleased();
		}
	}
}