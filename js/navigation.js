angular.module('SurpriseApp')
  .directive('navigation', function(Routes){
    return {
      restrict: 'A',
      scope: {
        current: '@'
      },
      templateUrl: 'js/templates/navigation.html',
      link: function(scope, element, attrs) {
        scope.links = Routes.links

        scope.isCurrent = function(link) {
          return link.url == scope.current
        }
      }
    }

  })
