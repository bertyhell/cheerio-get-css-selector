var $ = require('cheerio');
var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');

var getUniqueSelector = require('../src/getUniqueSelector.js').init();

describe('Get Unique Selector', () => {
  var htmlString = fs.readFileSync('./test/fixtures/example.html', 'utf8');
  var $html = $(htmlString);

  it('should get the unique selector for normal LI', () => {
    expect($.getUniqueSelector($html.find('.test1'))).to.equal('body > div:nth-child(0) > div:nth-child(0) > ul:nth-child(0) > li:nth-child(1)');
  });

  it('should get the unique selector for element with ID', () => {
    expect($.getUniqueSelector($html.find('.test2'))).to.equal('#testId');
  });

  it('should get the unique selector for element with ID ANCESTOR', () => {
    expect($.getUniqueSelector($html.find('.test3'))).to.equal('#testId > span:nth-child(2) > span:nth-child(0)');
  });

  it('should get the unique selector for BODY', () => {
    expect($.getUniqueSelector($html.find('.test4'))).to.equal('body');
  });

  it('should get the unique selector for span with id under other id', () => {
    expect($.getUniqueSelector($html.find('.test5'))).to.equal('#my-span');
  });

  it('should get the unique selector for span under multiple anchestors with an id', () => {
    expect($.getUniqueSelector($html.find('.test6'))).to.equal('#my-span > span:nth-child(0) > em:nth-child(0)');
  });
});
