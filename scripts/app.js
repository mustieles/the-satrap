'use strict';

/**
 * @ngdoc overview
 * @name satrapApp
 * @description
 * # satrapApp
 *
 * Main module of the application.
 */

angular
	.module('satrapApp', [
    'ngRoute',
    'ngResource'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/movieList.html',
				controller: 'MovieListController',
				controllerAs: 'movieList'
			})
			.when('/movie/:movieID', {
				templateUrl: 'views/movieItem.html',
				controller: 'MovieItemController',
				controllerAs: 'movieItem'
			})
	      .otherwise({
	        redirectTo: '/'
	      });
	});

