import Node from './Node.js';

const node = (
	key = undefined,
	down = null,
	left = null,
	right = null,
	up = null,
) => {
	const newNode = new Node(key, down, left, right, up);
	if (down !== null) down.up = newNode;
	if (left !== null) left.right = newNode;
	if (right !== null) right.left = newNode;
	if (up !== null) up.down = newNode;
	return newNode;
};

export default node;
