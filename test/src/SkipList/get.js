import test from 'ava';

import {increasing, decreasing} from '@aureooms/js-compare';

import {map, range} from '@aureooms/js-itertools';

import {SkipList} from '../../../src';

test('SkipList::get', (t) => {
	for (const compare of [increasing, decreasing]) {
		const tree = new SkipList(1 / 2, compare);

		t.is(null, tree.get(0));

		const n = 10000;
		const reference = [];

		for (const x of map(Math.random, range(n))) {
			tree.add(x);
			reference.push(x);
		}

		for (const x of reference) {
			t.deepEqual(x, tree.get(x));
		}

		t.is(null, tree.get(-1));
		t.is(null, tree.get(n));
	}
});
