'use strict';

/**
 * @ngdoc function
 * @name gardensApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gardensApp
 */
angular.module('gardensApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
