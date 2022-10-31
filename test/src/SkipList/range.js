import test from 'ava';

import {increasing, decreasing} from '@total-order/primitive';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {shuffle} from '@randomized/random';

import {SkipList} from '../../../src/index.js';

test('SkipList::range', (t) => {
	for (const [s, compare] of [
		[1, increasing],
		[-1, decreasing],
	]) {
		const n = 10_000;
		const reference = range(n);
		shuffle(reference, 0, n);

		const tree = SkipList.from(compare, reference);

		const x = (a, b) =>
			t.deepEqual(list(tree.range(a, b)), list(range(a, b, s)));

		x(0, n);
		x(10, 20);
		x(20, 10);
		x(7, 13);
		x(13, 7);
		x(n - 1, -1);
		x(10, 10);
	}
});

test('SkipList::range (with duplicates)', (t) => {
	const iterable = [
		1, 2, 3, 55, 55, 23, 41, 23, 7, 7, 9, 21, 17, 11, 23, 99, 12_374, -11, 14,
	];
	const tree = SkipList.from(increasing, iterable);
	t.deepEqual(list(tree.range(17, 17)), []);
	t.deepEqual(list(tree.range(17, 99)), [17, 21, 23, 23, 23, 41, 55, 55]);
	t.deepEqual(list(tree.range(17, 100)), [17, 21, 23, 23, 23, 41, 55, 55, 99]);
	t.deepEqual(list(tree.range(22, 100)), [23, 23, 23, 41, 55, 55, 99]);
	t.deepEqual(list(tree.range(23, 100)), [23, 23, 23, 41, 55, 55, 99]);
	t.deepEqual(list(tree.range(23, 99)), [23, 23, 23, 41, 55, 55]);
	t.deepEqual(list(tree.range(24, 99)), [41, 55, 55]);
	t.deepEqual(list(tree.range(42, 99)), [55, 55]);
	t.deepEqual(list(tree.range(55, 56)), [55, 55]);
	t.deepEqual(list(tree.range(55, 55)), []);
});
