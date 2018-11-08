# cheerio-get-css-selector

Adds one extra function to cheerio: get a unique css selector.

When searching through the ancestors while building the selector the algorithm with stop at the closest element that has an id.

## How to use:

Install the package:
```sh
npm install cheerio-get-css-selector
``` 

Init the library and pass it your cheerio object:
```js
require('cheerio-get-css-selector').init($);
```

Use it as a method of cheerio objects:
```js
$element.getUniqueSelector();
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
var cheerio = require('cheerio');
var GetUniqueSelector = require('cheerio-get-css-selector');

var $ = cheerio.load('<html><body><div id="my-div"><span><span class="test-class"></span></span></div></body></html>');
GetUniqueSelector.init($);

var $element = $('.test-class');

console.log($element.getUniqueSelector()); // outputs:#my-div > span > span:first-child
```




