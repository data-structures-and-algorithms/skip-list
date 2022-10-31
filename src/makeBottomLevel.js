import Node from './Node.js';

const makeBottomLevel = (compare, iterable) => {
	const sorted = [...iterable].sort(compare);
	const bottomLevelHead = new Node();
	let current = bottomLevelHead;
	for (const key of sorted) {
		current = new Node(key, null, current);
		current.left.right = current;
	}

	return bottomLevelHead;
};

export default makeBottomLevel;
