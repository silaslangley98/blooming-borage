(function(angular) {
 
    var app = angular.module('gardensApp');
 
    app.controller('ShoppingCartController', function($scope, CartService) {

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

    });
})(window.angular);