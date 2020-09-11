import assert from 'assert';

import node from './node';
import heads from './heads';
import predecessorOnPreviousLevel from './predecessorOnPreviousLevel';

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
