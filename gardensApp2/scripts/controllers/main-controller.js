(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('MainController', function($scope, CartService){
		
		/* PlantService.getPlants().then

			(function(results){

	        	
				$scope.plants = results.data;
				console.log("Success: " + results.data);
			
			},

				function(results){
				console.log("Error: " + results.data);
			}) */

		$scope.plants = plants;

		$scope.getItemCount = CartService.getItemCount;

		$scope.addItem = CartService.addItem;

		$scope.cartDisplay = CartService.cartDisplay;

		$scope.master = {};

		$scope.reset = function() {
    		$scope.productSearch = angular.copy($scope.master);
    	};
  
  		$scope.reset();

  		$scope.browserSizeBig = function() {
			if (document.body.clientWidth > 957){				
				return true;
			} else {			
				return false;
			}
		}

		$scope.browserSizeSmall = function() {
			if (document.body.clientWidth < 345){				
				return true;
			} else {			
				return false;
			}
		}

	});

})(window.angular);
