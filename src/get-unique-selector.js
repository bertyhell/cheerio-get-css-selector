module.exports = {
  init: function($) {
    $.prototype.getUniqueSelector = function () {
      var el = this;
      var parents = el.parents();
      if (!parents[0]) {
        // Element doesn't have any parents
        return ':root';
      }
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
        }
        if (el.siblings().length === 0) {
          return el.get(0).tagName;
        }
        if (el.index() === 0) {
          return el.get(0).tagName + ':first-child';
        }
        if (el.index() === el.siblings().length){
          return el.get(0).tagName + ':last-child';
        }
        return el.get(0).tagName+ ':nth-child(' + (el.index() + 1) + ')';
      }
    }
  }
};
