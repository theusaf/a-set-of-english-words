# `a-set-of-english-words`

Set of ~275,000 English words.
Derived from [the Letterpress word list][letterpress].

## Install

[npm][]:

```sh
npm install @theusaf/a-set-of-english-words
```

## Use

```js
var words = require('@theusaf/a-set-of-english-words');

console.log(words.filter(d => /fun/.test(d)))
```

Yields:

```js
Set(
  'antifungal',
  'antifungals',
  'bifunctional',
  'cofunction',
  'cofunctions',
  // …and many more
)
```

## API

### `aSetOfEnglishWords`

`Set.<string>` — List of all English words, lowercased.
