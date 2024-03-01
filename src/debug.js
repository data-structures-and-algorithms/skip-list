import {count} from '@iterable-iterator/cardinality';
import {enumerate} from '@iterable-iterator/zip';

import iter from './iter.js';
import iterDown from './iterDown.js';

export default function* debug(skiplist) {
	for (const [k, sentinel] of enumerate(iterDown(skiplist.head))) {
		yield [k, count(iter(sentinel))];
	}
}
