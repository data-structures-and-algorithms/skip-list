import assert from 'assert';

import Node from './Node';

const predecessorOnPreviousLevel = (node) => {
	assert(node !== null);

	while (node.up === null) {
		if (node.left === null) {
			const newNode = new Node(undefined, node); // Top-most left-most sentinel
			node.up = newNode;
			return newNode;
		}

		node = node.left;
	}

	return node.up;
};

export default predecessorOnPreviousLevel;
