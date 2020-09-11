import assert from 'assert';

const searchTopMost = (compare, node, key) => {
	// eslint-disable-next-line no-constant-condition
	while (true) {
		assert(node !== null);
		if (node.right === null) {
			if (node.down === null) {
				return null;
			}

			node = node.down;
		} else {
			const d = compare(key, node.right.key);
			if (d === 0) {
				assert(node.right.up === null);
				return node.right;
			}

			if (d > 0) node = node.right;
			else {
				if (node.down === null) {
					return null;
				}

				node = node.down;
			}
		}
	}
};

export default searchTopMost;
