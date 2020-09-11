import assert from 'assert';

const downMost = (node) => {
	assert(node !== null);
	while (node.down !== null) node = node.down;
	return node;
};

export default downMost;
