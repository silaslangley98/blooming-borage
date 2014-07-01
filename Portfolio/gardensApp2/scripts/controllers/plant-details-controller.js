(function(angular) {
	'use strict';

	var app = angular.module('gardensApp');

	app.controller('PlantDetailsController', function($scope, $stateParams, PlantService) {

        var plantGuid = $stateParams.id;

        PlantService.getPlants().then(function(response) {

        	var plants = response.data;

        	angular.forEach(plants, function(plant) {
        		if(plant.guid === plantGuid) {
        			$scope.plant = plant;
                }
            });
        });
    });

})(window.angular);