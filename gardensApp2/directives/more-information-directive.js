(function(angular){
	"use strict";
	var app = angular.module('gardensApp');

	app.directive('gaMoreInformationButton', function(){

		return {
			scope: {
				plantId: "@"
			},
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/more-information-button.html'
		};
	});
})(window.angular);