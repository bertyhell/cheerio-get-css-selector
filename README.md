# cheerio-get-css-selector

Adds one extra function to cheerio: get a unique css selector.

When searching through the ancestors while building the selector the algorithm with stop at the closest element that has an id.

## How to use:
```html
<html> 
  <body> 
    <div id="my-div"> 
      <span> 
        <span class="test-class"></span> 
      </span> 
    </div> 
  </body> 
</html>
```

```js
var $ = require('cheerio');

var getUniqueSelector = require('../src/getUniqueSelector.js').init();

var $html = $('<html><body><div id="my-div"><span><span class="test-class"></span></span></div></body></html>');

var element = $html.find('.test-class');
console.log($.getUniqueSelector(element)); // outputs: #my-div > span:nth-child(0) > span:nth-child(0)
```




