'use strict';

app.directive('uiColorpicker', function() {
    return {
        restrict: 'AE',
        require: 'ngModel',
        scope: false,
        replace: true,
        template: "<span><input  /></span>",
        link: function(scope, element, attrs, ngModel) {
            var input = element.find('input');
            var options = angular.extend({
                color: ngModel.$viewValue,
				className: 'colorInput',
				preferredFormat: "hex",
				chooseText: "",
			    cancelText: "",
				showInitial: true,
				showInput: true,
				showPalette: true,
			    showSelectionPalette: true,
				clickoutFiresChange: true,
                change: function(color) {
                    scope.$apply(function() {
                      ngModel.$setViewValue(color.toHexString());
                    });
                }
            }, scope.$eval(attrs.options));
            
            ngModel.$render = function() {
              input.spectrum('set', ngModel.$viewValue || '');
            };
            
            input.spectrum(options);
        }
    };
});
