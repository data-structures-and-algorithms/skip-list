import test from 'ava';

import {increasing, decreasing} from '@total-order/primitive';

import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';

import {SkipList} from '../../../src/index.js';

test('SkipList::get', (t) => {
	for (const compare of [increasing, decreasing]) {
		const tree = new SkipList(1 / 2, compare);

		t.is(tree.get(0), null);

		const n = 10_000;
		const reference = [];

		for (const x of map(Math.random, range(n))) {
			tree.add(x);
			reference.push(x);
		}

		for (const x of reference) {
			t.deepEqual(x, tree.get(x));
		}

		t.is(tree.get(-1), null);
		t.is(tree.get(n), null);
	}
});
