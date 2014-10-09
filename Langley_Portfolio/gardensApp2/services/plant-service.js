(function(angular){
	"use strict";
 
	var app = angular.module('gardensApp');
 
	app.factory('PlantService', function($http){

		return {
			getPlants: function(){
				
				return $http.get('/json/plants.json');

			}
		}

	});
 
})(window.angular);
