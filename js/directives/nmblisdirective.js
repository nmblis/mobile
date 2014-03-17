'use strict';

app.directive('showNmblis', function() {
    return {
        restrict: 'E',
        scope: false,
        replace: true,
        templateUrl: 'views/directives/nmblis.html'
    };
});
