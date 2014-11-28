(function(angular){
	'use strict';
	
	var app = angular.module('gardensApp');

	app.controller('IndexController', function($scope){

		var show = true;

		$scope.toggle = function(){
			if (show) {
				show = false;
			} else {
				show = true;
			}
		}

		$scope.main = function(){
			if (show) {
				return true;
			} else {
				return false;
			}
		}

		$scope.plants = plants;
	});

})(window.angular);