'use strict';
angular.module('mgcrea.overflowScroll', []).directive('scrollable', [
  '$window',
  '$timeout',
  '$route',
  function ($window, $timeout, $route) {
    var debounce = function (func, wait) {
      var timeout, result;
      return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          result = func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        return result;
      };
    };
    var getHeight = function (elem, outer) {
      var computedStyle = $window.getComputedStyle(elem);
      var value = elem.offsetHeight;
      if (outer) {
        value += parseFloat(computedStyle.marginTop) + parseFloat(computedStyle.marginBottom);
      } else {
        value -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.borderTopWidth) + parseFloat(computedStyle.borderTopWidth);
      }
      return value;
    };
    return {
      restrict: 'A',
      compile: function compile(tElement, tAttrs, transclude) {
        var template = '<div class="spacer"></div>';
        tElement.append(template);
        var sElement = tElement[0].querySelector('.spacer');
        return function postLink(scope, iElement, iAttrs, controller) {
          var updateSpacerHeight = function () {
            var containerHeight = getHeight(iElement[0]), contentHeight = 0;
            angular.forEach(iElement.children(), function (childElement, i) {
              contentHeight += getHeight(childElement, true);
            });
            if (contentHeight < containerHeight) {
              sElement.style.height = containerHeight - contentHeight + 1 + 'px';
            }
          };
          var debouncedUpdate = debounce(updateSpacerHeight, 400);
          scope.$on('$viewContentLoaded', debouncedUpdate);
          scope.$on('$includeContentLoaded', debouncedUpdate);
        };
      }
    };
  }
]);