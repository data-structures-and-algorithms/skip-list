import assert from 'assert';

export default function* iter(head) {
	assert(head !== null);
	while (head.right !== null) {
		head = head.right;
		yield head;
	}
}
