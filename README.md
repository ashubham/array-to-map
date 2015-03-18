# array-to-map

Light utility to convert your [keys] to a {key:key} map


### Build Status
  <a>
	<img src="https://api.travis-ci.org/ashubham/array-to-map.png"/>
  </a>

### Usage

```javascript
var getMap = require('array-to-map');

var map = getMap([1, 2, "abc"]);
// {'1':1, '2':2, 'abc':'abc'}
```
The best use case for this tool is when a conversion from an array to a map is needed for efficient membership checking.


### Gotchas

Unserializable elements like `objects` and `functions` are ignored by this tool.

So something like,
```javascript
var getMap = require('array-to-map');

var map = getMap([1, 2, "abc", {key:123}, function () {}]);
// Still {'1':1, '2':2, 'abc':'abc'}
```

