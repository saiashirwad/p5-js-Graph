class Graph {
	constructor() {
		this.nodes = [];
		this.ids = [];
		this.relationships = [];

	}

	addNode(x = width/2, y = height/2, t) {
		// let id = getRandomId(5);
		let id = this.nodes.length;
		let node = new Node(x, y, t, id);
		this.nodes.push(node);
		localStorage.setItem(id, node);

		this.ids.push(id);
		// this.adj[id] = [];
		return id;
	}



	addRelationship(relText, id1, id2) {
		let node1 = this.getNode(id1);
		let node2 = this.getNode(id2);

		let rel = new Relationship(relText, node1, node2);
		this.relationships.push(rel);
	}


	getNode(id) {
		for (let i = 0; i < this.nodes.length; i++) {
			if (this.nodes[i].id == id) {
				return this.nodes[i];
			}
		}
		return false;
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

		for (let i = 0; i < this.relationships.length; i++) {
			this.relationships[i].draw();
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