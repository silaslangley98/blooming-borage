'use strict';

/**
 * @ngdoc overview
 * @name gardensApp
 * @description
 * # gardensApp
 *
 * Main module of the application.
 */
angular
  .module('gardensApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      
      // .when('/plant/:id', {
      //  templateUrl: 'views/plant-detail.html',
      //  controller: 'PlantDetailsController'
      //})    
      .when('/shopping-cart', {
        templateUrl: 'views/shopping-cart.html',
        controller: 'ShoppingCartController'
      })
      .otherwise({
        redirectTo: '/'
      });
      
  });
