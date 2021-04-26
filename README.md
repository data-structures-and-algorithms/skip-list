:fast_forward: [@aureooms/js-skip-list](https://make-github-pseudonymous-again.github.io/js-skip-list)
==

Skip list data structure for JavaScript.
See [docs](https://make-github-pseudonymous-again.github.io/js-skip-list/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {decreasing} from '@aureooms/js-compare';
import {range} from '@aureooms/js-itertools';
import SkipList from '@aureooms/js-skip-list';
const list = SkipList.from(decreasing, range(10000));
[...list]; // [9999, 9998, ...]
list.add(...)
list.get(...)
list.has(...)
list.remove(...)
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-skip-list.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-skip-list/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-skip-list.svg)](https://www.npmjs.org/package/@aureooms/js-skip-list)
[![Build](https://img.shields.io/travis/make-github-pseudonymous-again/js-skip-list/main.svg)](https://travis-ci.org/make-github-pseudonymous-again/js-skip-list/branches)
[![Dependencies](https://img.shields.io/david/make-github-pseudonymous-again/js-skip-list.svg)](https://david-dm.org/make-github-pseudonymous-again/js-skip-list)
[![Dev dependencies](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-skip-list.svg)](https://david-dm.org/make-github-pseudonymous-again/js-skip-list?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-skip-list.svg)](https://github.com/make-github-pseudonymous-again/js-skip-list/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-skip-list.svg)](https://www.npmjs.org/package/@aureooms/js-skip-list)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-skip-list.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-skip-list/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-skip-list.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-skip-list/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-skip-list/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-skip-list)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-skip-list.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-skip-list/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-skip-list/badge.svg)](https://make-github-pseudonymous-again.github.io/js-skip-list/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-skip-list)](https://bundlephobia.com/result?p=@aureooms/js-skip-list)
