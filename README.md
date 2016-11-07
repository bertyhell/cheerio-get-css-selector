# cheerio-get-css-selector

Adds one extra function to cheerio: get a unique css selector.

When searching through the ancestors while building the selector the algorithm with stop at the closest element that has an id.

## How to use:

install the package:
```sh
npm install cheerio-get-css-selector
``` 

init the library:
```js
var getUniqueSelector = require('../src/get-unique-selector.js').init();
```

use it as a function on the cheerio object:
```js
$.getUniqueSelector(element);
```


## Example

```html
<html> 
  <body> 
    <div id="my-div"> 
      <span> 
        <span class="test-class"></span>
        <span></span>
      </span> 
    </div> 
  </body> 
</html>
```

```js
var $ = require('cheerio');

var getUniqueSelector = require('../src/get-unique-selector.js').init();

var $html = $('<html><body><div id="my-div"><span><span class="test-class"></span></span></div></body></html>');

var element = $html.find('.test-class');
console.log($.getUniqueSelector(element)); // outputs:#my-div > span > span:first-child
```




