import assert from 'assert';
import Node from './Node';
import keys from './keys';
import iter from './iter';
import downMost from './downMost';
import searchTopMost from './searchTopMost';
import bottomMostPredecessor from './bottomMostPredecessor';
import deleteFromTopMost from './deleteFromTopMost';
import insertFromBottomMostPredecessor from './insertFromBottomMostPredecessor';
import makeQuasiRandom from './makeQuasiRandom';
import makeBottomLevel from './makeBottomLevel';

/**
 * @param {Number} p Promotion probability in (0,1).
 * @param {Function} compare
 * @param {Node} head
 */
export default function SkipList(p, compare, head = new Node()) {
	this.head = head; // Sentinel node
	this.p = p;
	this.compare = compare;
}

SkipList.prototype.add = function (key) {
	const node = bottomMostPredecessor(this.compare, this.head, key);
	const pred = insertFromBottomMostPredecessor(this.p, node, key);
	if (pred.left === null && pred.up === null) this.head = pred;
};

SkipList.prototype.get = function (key) {
	const node = searchTopMost(this.compare, this.head, key);
	return node === null ? null : node.key;
};

SkipList.prototype.has = function (key) {
	return searchTopMost(this.compare, this.head, key) !== null;
};

SkipList.prototype.remove = function (key) {
	const node = searchTopMost(this.compare, this.head, key);
	if (node === null) return false;

	deleteFromTopMost(node);
	return true;
};

SkipList.prototype._predecessor = function (key) {
	return bottomMostPredecessor(this.compare, this.head, key);
};

SkipList.prototype.levelOne = function () {
	return downMost(this.head);
};

SkipList.prototype.levels = function () {
	assert(this.head !== null);
	let k = 0;
	let current = this.head;
	do {
		++k;
		current = current.down;
	} while (current !== null);

	return k;
};

SkipList.prototype.keys = function () {
	const level = this.levelOne();
	return keys(level);
};

SkipList.prototype.values = function () {
	return this.keys();
};

SkipList.prototype[Symbol.iterator] = function () {
	return this.keys();
};

SkipList.prototype.range = function* (left, right) {
	const pred = this._predecessor(left);
	for (const node of iter(pred)) {
		if (this.compare(node.key, right) >= 0) break;
		yield node.key;
	}
};

SkipList.from = (compare, iterable, p = 1 / 2) => {
	if (p === 1 / 2) {
		const bottomLevelHead = makeBottomLevel(compare, iterable);
		const head = makeQuasiRandom(p, bottomLevelHead);
		return new SkipList(p, compare, head);
	}

	const list = new SkipList(p, compare);
	for (const key of iterable) list.add(key);
	return list;
};
