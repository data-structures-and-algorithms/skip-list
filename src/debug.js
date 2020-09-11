import iter from './iter';
import iterDown from './iterDown';
import {enumerate} from '@aureooms/js-itertools';
import {count} from '@aureooms/js-cardinality';

export default function* debug(skiplist) {
	for (const [k, sentinel] of enumerate(iterDown(skiplist.head))) {
		yield [k, count(iter(sentinel))];
	}
}
