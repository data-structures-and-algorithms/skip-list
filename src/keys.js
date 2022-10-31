import iter from './iter.js';

export default function* keys(level) {
	for (const node of iter(level)) yield node.key;
}
