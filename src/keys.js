import iter from './iter';

export default function* keys(level) {
	for (const node of iter(level)) yield node.key;
}
