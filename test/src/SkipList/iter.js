import test from 'ava';

import {increasing, decreasing} from '@aureooms/js-compare';

import {list, range, map} from '@aureooms/js-itertools';

import {SkipList} from '../../../src';

test('SkipList::Symbol.iterator', (t) => {
	for (const compare of [increasing, decreasing]) {
		const tree = new SkipList(2 / 3, compare);

		const a1 = list(tree);

		t.is(a1.length, 0, 'tree contains 0 elements');

		const n = 10000;
		const reference = [];

		for (const x of map(Math.random, range(n))) {
			tree.add(x);
			reference.push(x);
		}

		reference.sort(compare);

		const a2 = list(tree);

		t.deepEqual(a2.length, n, `tree contains ${n} elements`);
		t.deepEqual(a2, reference, 'tree is sorted');
	}
});
