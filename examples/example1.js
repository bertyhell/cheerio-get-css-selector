var $ = require('cheerio');

var getUniqueSelector = require('../src/get-unique-selector.js').init();

var $html = $('<html><body><div id="my-div"><span><span class="test-class"></span></span></div></body></html>');


var element = $html.find('.test-class');
console.log($.getUniqueSelector(element)); // outputs: #my-div > span:nth-child(0) > span:nth-child(0)
