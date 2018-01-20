var cheerio = require('cheerio');
var GetUniqueSelector = require('../src/get-unique-selector.js');

var $ = cheerio.load('<html><body><div id="my-div"><span><span class="test-class"></span><span></span></span></div></body></html>');

GetUniqueSelector.init($);

var $element = $('.test-class');

console.log($element.getUniqueSelector()); // outputs: #my-div > span > span:first-child
