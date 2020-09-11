import test from 'ava';

import {increasing, decreasing} from '@aureooms/js-compare';

import {list, range, sorted} from '@aureooms/js-itertools';

import {SkipList} from '../../../src';

const macro = (t, p, compare, n) => {
	const tree = SkipList.from(compare, range(n), p);
	t.deepEqual(sorted(compare, range(n)), list(tree));
};

macro.title = (title, p, compare, n) =>
	title || `SkipList.from(${compare.name}, range(${n}), ${p})`;

for (const n of [0, 1, 2, 3, 7, 36, 100, 1011, 4387, 10000]) {
	for (const compare of [increasing, decreasing]) {
		for (const p of [1 / 4, 1 / 3, 1 / 2, 2 / 3, 3 / 4]) {
			test(macro, p, compare, n);
		}
	}
}
