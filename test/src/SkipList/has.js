import test from 'ava';

import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';
import {increasing, decreasing} from '@total-order/primitive';

import {SkipList} from '#module';

test('SkipList::has', (t) => {
	for (const compare of [increasing, decreasing]) {
		const tree = new SkipList(1 / 3, compare);

		t.falsy(tree.has(0));

		const n = 10_000;
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
