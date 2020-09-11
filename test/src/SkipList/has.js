import test from 'ava';

import {increasing, decreasing} from '@aureooms/js-compare';

import {range, map} from '@aureooms/js-itertools';

import {SkipList} from '../../../src';

test('SkipList::has', (t) => {
	for (const compare of [increasing, decreasing]) {
		const tree = new SkipList(1 / 3, compare);

		t.falsy(tree.has(0));

		const n = 10000;
		const reference = [];

		for (const x of map(Math.random, range(n))) {
			tree.add(x);
			reference.push(x);
		}

		for (const x of reference) {
			t.truthy(tree.has(x));
		}

		t.falsy(tree.has(-1));
		t.falsy(tree.has(n));
	}
});
