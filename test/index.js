var $ = require('cheerio');
var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');

var getUniqueSelector = require('../src/get-unique-selector.js').init();

describe('Get Unique Selector', () => {
  var htmlString = fs.readFileSync('./test/fixtures/example.html', 'utf8');
  var $html = $(htmlString);

  it('should get the unique selector for normal LI', () => {
    expect($html.find($.getUniqueSelector($html.find('.test1')))).to.deep.equal($html.find('.test1'));
  });

  it('should get the unique selector for element with ID', () => {
    expect($html.find($.getUniqueSelector($html.find('.test1')))).to.deep.equal($html.find('.test1'));
  });

  it('should get the unique selector for element with ID ANCESTOR', () => {
    expect($html.find($.getUniqueSelector($html.find('.test1')))).to.deep.equal($html.find('.test1'));
  });

  it('should get the unique selector for BODY', () => {
    expect($html.find($.getUniqueSelector($html.find('.test1')))).to.deep.equal($html.find('.test1'));
  });

  it('should get the unique selector for span with id under other id', () => {
    expect($html.find($.getUniqueSelector($html.find('.test1')))).to.deep.equal($html.find('.test1'));
  });

  it('should get the unique selector for span under multiple anchestors with an id', () => {
    expect($html.find($.getUniqueSelector($html.find('.test1')))).to.deep.equal($html.find('.test1'));
  });
});
