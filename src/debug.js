import {enumerate} from '@iterable-iterator/zip';
import {count} from '@iterable-iterator/cardinality';

import iter from './iter.js';
import iterDown from './iterDown.js';

export default function* debug(skiplist) {
	for (const [k, sentinel] of enumerate(iterDown(skiplist.head))) {
		yield [k, count(iter(sentinel))];
	}
}
