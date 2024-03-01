import test from 'ava';

import {exhaust} from '@iterable-iterator/consume';
import {iter} from '@iterable-iterator/iter';
import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';
import {head} from '@iterable-iterator/slice';
import {sorted} from '@iterable-iterator/sorted';
import {shuffle} from '@randomized/random';
import {increasing} from '@total-order/primitive';

import {SkipList} from '#module';

test('SkipList::remove', (t) => {
	const n = 10_000;
	const reference = list(range(n));
	shuffle(reference, 0, n);

	// Const reference = [3,0,2,4,1];
	// const n = reference.length ;

	const tree = SkipList.from(increasing, reference);
	t.deepEqual(
		list(tree),
		sorted(increasing, reference),
		'tree contains n items',
	);

	// Console.log(reference);

	const m = Math.floor(n / 2);

	for (const i of range(m)) {
		const x = reference[i];
		t.true(tree.remove(x));
		t.true(tree.get(x) === null);
	}

	const _rest = iter(reference);
	exhaust(head(_rest, m));
	const rest = sorted(increasing, _rest);

	t.deepEqual(list(tree), rest, 'tree contains n - m last items');

	for (const i of range(m, n)) {
		const x = reference[i];
		t.deepEqual(tree.get(x), x);
	}

	t.deepEqual(list(tree), rest, 'tree contains n - m last items');

	for (const i of range(m)) {
		const x = reference[i];
		t.true(tree.get(x) === null);
		tree.add(x);
		t.true(tree.get(x) === x);
	}

	t.deepEqual(
		list(tree),
		sorted(increasing, reference),
		'tree contains all n items',
	);

	for (const i of range(n)) {
		const x = reference[i];
		t.true(tree.remove(x));
		t.true(tree.get(x) === null);
	}

	t.deepEqual(list(tree), [], 'tree is empty');
});

test('delete root with right child', (t) => {
	const tree = new SkipList(1 / 3, increasing);

	tree.add(0);
	tree.add(1);

	tree.remove(0);

	t.deepEqual(list(tree), [1]);
});

test('delete root with left child', (t) => {
	const tree = new SkipList(3 / 5, increasing);

	tree.add(0);
	tree.add(-1);

	tree.remove(0);

	t.deepEqual(list(tree), [-1]);
});

test('remove from empty tree', (t) => {
	const tree = new SkipList(0.1, increasing);

	t.false(tree.remove(0));
});

test('remove unexisting stuff', (t) => {
	const tree = SkipList.from(increasing, range(100), 1 / 4);

	t.false(tree.remove(Math.PI));
});
