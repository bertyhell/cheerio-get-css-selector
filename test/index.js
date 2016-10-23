var $ = require('cheerio');
var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');

var getUniqueSelector = require('../src/get-unique-selector.js').init();

function compareElementsForSelector($html, classSelector) {
  var findUsingUniqueSelector = $html.find($.getUniqueSelector($html.find(classSelector)));
  var findUsingClass          = $html.find(classSelector);
  var isSameElement           = findUsingClass.is(findUsingUniqueSelector);
  expect(isSameElement).to.be.true;
  expect(findUsingUniqueSelector).to.have.lengthOf(1); // Only one selected element
}

describe('Get Unique Selector', () => {
  var htmlString = fs.readFileSync('./test/fixtures/example.html', 'utf8');
  var $html = $(htmlString);

  it('should get the unique selector for normal LI', () => {

    compareElementsForSelector($html, '.test1');
  });

  it('should get the unique selector for element with ID', () => {
    compareElementsForSelector($html, '.test2');
  });

  it('should get the unique selector for element with ID ANCESTOR', () => {
    compareElementsForSelector($html, '.test3');
  });

  it('should get the unique selector for BODY', () => {
    compareElementsForSelector($html, '.test4');
  });

  it('should get the unique selector for span with id under other id', () => {
    compareElementsForSelector($html, '.test5');
  });

  it('should get the unique selector for span under multiple anchestors with an id', () => {
    compareElementsForSelector($html, '.test6');
  });

  it('should get the unique selector for the first span', () => {
    compareElementsForSelector($html, '.test7');
  });
});
