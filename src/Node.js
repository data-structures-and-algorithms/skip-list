export default function Node(
	key = undefined,
	down = null,
	left = null,
	right = null,
	up = null,
) {
	this.key = key;
	this.right = right;
	this.down = down;
	this.left = left;
	this.up = up;
}
