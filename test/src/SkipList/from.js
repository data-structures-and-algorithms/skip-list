import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';
import {sorted} from '@iterable-iterator/sorted';
import {increasing, decreasing} from '@total-order/primitive';

import {SkipList} from '#module';

const macro = (t, p, compare, n) => {
	const tree = SkipList.from(compare, range(n), p);
	t.deepEqual(sorted(compare, range(n)), list(tree));
};

macro.title = (title, p, compare, n) =>
	title ??
	`SkipList.from(${compare === increasing ? 'inc' : 'dec'}, range(${n}), ${p})`;

for (const n of [0, 1, 2, 3, 7, 36, 100, 1011, 4387, 10_000]) {
	for (const compare of [increasing, decreasing]) {
		for (const p of [1 / 4, 1 / 3, 1 / 2, 2 / 3, 3 / 4]) {
			test(macro, p, compare, n);
		}
	}
}
