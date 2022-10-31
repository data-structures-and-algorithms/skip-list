import test from 'ava';

import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {range} from '@iterable-iterator/range';

import {increasing, decreasing} from '@total-order/primitive';

import {
	SkipList,
	makeBottomLevel,
	makeDeterministic,
	debug,
} from '../../src/index.js';

test('debug (empty)', (t) => {
	for (const compare of [increasing, decreasing]) {
		const iterable = [];
		const p = 1 / 2;
		const bottomLevelHead = makeBottomLevel(compare, iterable);
		const head = makeDeterministic(p, bottomLevelHead);
		const skiplist = new SkipList(p, compare, head);

		t.deepEqual(list(debug(skiplist)), [[0, 0]]);
		t.is(skiplist.levels(), 1);
	}
});

test('debug', (t) => {
	for (const levels of range(1, 12)) {
		for (const compare of [increasing, decreasing]) {
			const p = 1 / 2;
			const n = 2 ** (levels - 1);
			const iterable = range(n);

			const bottomLevelHead = makeBottomLevel(compare, iterable);
			const head = makeDeterministic(p, bottomLevelHead);
			const skiplist = new SkipList(p, compare, head);

			t.deepEqual(
				list(debug(skiplist)),
				list(map((k) => [k, 2 ** k], range(levels))),
			);

			t.is(skiplist.levels(), levels);
		}
	}
});

test('debug (7)', (t) => {
	for (const compare of [increasing, decreasing]) {
		const iterable = range(7);
		const p = 1 / 2;
		const bottomLevelHead = makeBottomLevel(compare, iterable);
		const head = makeDeterministic(p, bottomLevelHead);
		const skiplist = new SkipList(p, compare, head);

		t.deepEqual(list(debug(skiplist)), [
			[0, 1],
			[1, 3],
			[2, 7],
		]);
		t.is(skiplist.levels(), 3);
	}
});
