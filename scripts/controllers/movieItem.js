'use strict';

/**
 * @ngdoc function
 * @name luxiveApp.controller:MovieItemController
 * @description
 * # MovieItemController
 * Controller of the satrapApp
 */
angular.module('satrapApp')
	.controller('MovieItemController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
	    
		$scope.params = $routeParams;
	    
	    //Receives the movie ID from the URL parameter
	    var movieID = $scope.params.movieID;

	    //Makes the ajax call to get all the information from the movie
	    var ajax_url = 'http://www.omdbapi.com/?i='+movieID+'&plot=short&r=json&tomatoes=true';
	      $http.get(ajax_url).success(function(data) {
	            $scope.movie = data;
	      });
	    
	    
	}]);