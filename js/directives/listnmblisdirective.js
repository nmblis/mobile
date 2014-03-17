'use strict';

app.directive('listNmblis', function() {
    return {
        restrict: 'E',
        scope: false,
        replace: true,
        templateUrl: 'views/directives/listnmblis.html'
    };
});
