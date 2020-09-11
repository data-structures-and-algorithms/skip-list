import assert from 'assert';

const bottomMostPredecessor = (compare, node, key) => {
	// eslint-disable-next-line no-constant-condition
	while (true) {
		assert(node !== null);
		// Predecessor search on current level
		while (node.right !== null && compare(key, node.right.key) > 0)
			node = node.right;

		// Continue on bottom level or abandon
		if (node.down === null) return node;
		node = node.down;
	}
};

export default bottomMostPredecessor;
