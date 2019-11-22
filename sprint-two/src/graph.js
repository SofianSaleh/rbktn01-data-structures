

// Instantiate a new graph
var Graph = function() {
	this.storage  = {
	nodes : {},
	edges : []
	};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.storage.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	for(var key in this.storage.nodes) {
		if (this.storage.nodes[node] === node) {
			return true;
		}
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	delete this.storage.nodes[node]

	var link = this.storage.edges

	_.each(link, function(edge, i){
		if(edge === node) {
			link.splice(i, 1)
			return;
		}
	})

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
for(var i = 0; i < this.storage.edges.length; i++) {
	if(this.storage.edges[i] === fromNode && this.storage.edges[i+1] === toNode ||  
		this.storage.edges[i] === toNode && this.storage.edges[i+1] === fromNode){
		return true;
	}
}
return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.storage.edges.push(fromNode, toNode)
	//console.log(this.storage.edges)
	////console.log(this.storage.edges)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

	if(this.hasEdge(fromNode, toNode)) {
		//console.log(this.storage.edges.slice(fromNode, toNode))
		this.storage.edges = this.storage.edges.slice(fromNode, toNode)
		//console.log(this.storage)
		return this.storage.edges
		
	}
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

	for(var key in this.storage.nodes) {
		 cb(this.storage.nodes[key])
	}
	
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


