import assert from 'assert';
import Node from './Node';

/**
 * Make a balanced Skip-list with p = 1/2.
 */
const makeDeterministic = (p, head) => {
	assert(p === 1 / 2);

	// Together, the if and while conditions guarantee that `makeQuasiRandom`
	// does not do anything if the number of elements is <= 1
	// TODO Could use some other constant?
	if (head.right === null) return head;

	while (head.right.right !== null) {
		const newHead = new Node(head.key, head);

		let current = head;
		let next = newHead;
		while (current.right !== null) {
			current = current.right;
			if (current.right === null) break; // Skip odd indexed nodes
			current = current.right;
			next = new Node(current.key, current, next);
			next.left.right = next;
			current.up = next;
		}

		head.up = newHead;
		head = newHead;
		assert(head.right !== null);
	}

	return head;
};

export default makeDeterministic;
