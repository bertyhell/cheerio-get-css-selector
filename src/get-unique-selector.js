var $ = require('cheerio');

module.exports = {
  init: function() {

    $.getUniqueSelector = function (el) {
      var parents = el.parents();
      var selector = getElementSelector(el);
      var i = 0;
      var elementSelector;

      if (selector[0] === '#' || selector === 'body') {
        return selector;
      }

      do {
        elementSelector = getElementSelector($(parents[i]));
        selector = elementSelector + ' > ' + selector;
        i++;
      } while (i < parents.length - 1 && elementSelector[0] !== '#'); // Stop before we reach the html element parent
      return selector;
    };

    function getElementSelector(el) {
      if (el.attr('id')) {
        return '#' + el.attr('id');
      } else {
        var tagName = el.get(0).tagName;
        if (tagName === 'body') {
          return tagName;
        } else {
          return el.get(0).tagName + ':nth-child(' + el.index() + ')'; // TODO if num children === 1  => don't add nth child
        }
      }
    }
  }
};
