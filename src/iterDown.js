export default function* iterDown(head) {
	while (head !== null) {
		yield head;
		head = head.down;
	}
}
