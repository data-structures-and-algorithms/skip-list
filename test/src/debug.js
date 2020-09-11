import test from 'ava';

import {range, list, map} from '@aureooms/js-itertools';
import {increasing, decreasing} from '@aureooms/js-compare';

import {SkipList, makeBottomLevel, makeDeterministic, debug} from '../../src';

test('debug (empty)', (t) => {
	for (const compare of [increasing, decreasing]) {
		const iterable = [];
		const p = 1 / 2;
		const bottomLevelHead = makeBottomLevel(compare, iterable);
		const head = makeDeterministic(p, bottomLevelHead);
		const skiplist = new SkipList(p, compare, head);

		t.deepEqual([[0, 0]], list(debug(skiplist)));
		t.is(1, skiplist.levels());
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
				list(map((k) => [k, 2 ** k], range(levels))),
				list(debug(skiplist)),
			);

			t.is(levels, skiplist.levels());
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

		t.deepEqual(
			[
				[0, 1],
				[1, 3],
				[2, 7],
			],
			list(debug(skiplist)),
		);
		t.is(3, skiplist.levels());
	}
});
