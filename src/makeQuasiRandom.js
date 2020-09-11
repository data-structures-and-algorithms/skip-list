import assert from 'assert';
import Node from './Node';
import heads from './heads';

/**
 * Make a balanced Skip-list with p = 1/2 but randomizing the choice of
 * promoted nodes at each level.
 */
const makeQuasiRandom = (p, head) => {
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
			let previousPromoted = false;

			if (heads(1 / 2)) {
				previousPromoted = true;
				next = new Node(current.key, current, next);
				next.left.right = next;
				current.up = next;
				// TODO can reduce branching by getting rid of `previousPromoted`
			}

			if (current.right === null) break;
			current = current.right;
			if (!previousPromoted) {
				next = new Node(current.key, current, next);
				next.left.right = next;
				current.up = next;
			}
		}

		head.up = newHead;
		head = newHead;
		assert(head.right !== null);
	}

	return head;
};

export default makeQuasiRandom;
