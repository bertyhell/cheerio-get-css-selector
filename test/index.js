var cheerio = require('cheerio');
var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');

var GetUniqueSelector = require('../src/get-unique-selector.js');

function compareElementsForSelector($, classSelector) {
  var findUsingClass          = $(classSelector);
  var findUsingUniqueSelector = $(findUsingClass.getUniqueSelector());
  var isSameElement           = findUsingClass.is(findUsingUniqueSelector);
  expect(isSameElement).to.be.true;
  expect(findUsingUniqueSelector).to.have.lengthOf(1); // Only one selected element
}

describe('Get Unique Selector', () => {
  var htmlString = fs.readFileSync('./test/fixtures/example.html', 'utf8');
  var htmlString2 = fs.readFileSync('./test/fixtures/example2.html', 'utf8');
  var $ = cheerio.load(htmlString);
  var $2 = cheerio.load(htmlString2);

  GetUniqueSelector.init($);
  GetUniqueSelector.init($2);

  it('should get the unique selector for normal LI', () => {
    compareElementsForSelector($, '.test1');
  });

  it('should get the unique selector for element with ID', () => {
    compareElementsForSelector($, '.test2');
  });

  it('should get the unique selector for element with ID ANCESTOR', () => {
    compareElementsForSelector($, '.test3');
  });

  it('should get the unique selector for BODY', () => {
    compareElementsForSelector($, '.test4');
  });

  it('should get the unique selector for span with id under other id', () => {
    compareElementsForSelector($, '.test5');
  });

  it('should get the unique selector for span under multiple anchestors with an id', () => {
    compareElementsForSelector($, '.test6');
  });

  it('should get the unique selector for the first span', () => {
    compareElementsForSelector($, '.test7');
  });

  it('should get the unique selector using the :last-child selector', () => {
    compareElementsForSelector($, '.test8');
  });

  it('should get the unique selector if element doesn\'t have any parents', () => {
    var findUsingUniqueSelector = $2.root().getUniqueSelector($2('.test9'));
    // The :root selector isn't supported by cheerio yet
    expect(findUsingUniqueSelector).to.equal(':root');
  });
});
