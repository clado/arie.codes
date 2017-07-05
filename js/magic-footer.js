angular.module('SurpriseApp')
  .directive('magicFooter', function(Routes){
    return {
      restrict: 'A',
      // it's not actually magic, but I didn't want to override <footer>
      templateUrl: 'js/templates/magic-footer.html'
    }

  })
