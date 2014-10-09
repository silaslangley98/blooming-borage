(function(angular) {
	"use strict";
 
	var app = angular.module('gardensApp');
 
	// Inject in the CartService
	app.directive('gaCart', function(CartService) {
 
		return {
			scope: {
			},
			restrict: 'E',
			replace: true,
			templateUrl: 'cart.html',
			link: function(scope, elem, attr) {

				scope.items = CartService.getItems();
 
 				scope.getItemCount = CartService.getItemCount;

 				scope.removeItem = CartService.removeItem;

 				scope.cartTotal = CartService.getCartTotal;

 				scope.emptyCart = CartService.emptyCart;

 				scope.resetCart = function () {
				    scope.items = CartService.getItems();
				};

			}
		};
	});
 
})(window.angular);