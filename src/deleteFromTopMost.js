import assert from 'assert';

const deleteFromTopMost = (node) => {
	assert(node !== null);
	assert(node.up === null); // Node is from top-most level
	do {
		assert(node.left !== null); // Node is not sentinel
		node.left.right = node.right;
		if (node.right !== null) node.right.left = node.left;
		node = node.down;
	} while (node !== null);
};

export default deleteFromTopMost;
