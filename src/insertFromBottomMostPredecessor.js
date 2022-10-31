import assert from 'assert';

import node from './node.js';
import heads from './heads.js';
import predecessorOnPreviousLevel from './predecessorOnPreviousLevel.js';

const insertFromBottomMostPredecessor = (p, pred, key) => {
	assert(pred !== null);
	let newNode = node(key, null, pred, pred.right);
	while (heads(p)) {
		pred = predecessorOnPreviousLevel(pred);
		assert(pred !== null);
		newNode = node(key, newNode, pred, pred.right);
	}

	return pred;
};

export default insertFromBottomMostPredecessor;
