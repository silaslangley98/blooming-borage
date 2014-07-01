(function(angular){
	"use strict";
	var app = angular.module('gardensApp');

	app.directive('gaViewCartButton', function(CartService){

		return {
			// scope: {
				
			//},
			restrict: 'E',
			replace: true,
			template: '<button type="button" ng-show = "getItemCount()" ng-click = "toggle()">View Cart</button>',
			link: function(scope, elem, attr) {
				scope.getItemCount = CartService.getItemCount;			
			}
		};
	});
})(window.angular);