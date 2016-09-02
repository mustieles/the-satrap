'use strict';

/**
 * @ngdoc function
 * @name luxiveApp.controller:MovieListController
 * @description
 * # MovieListController
 * Controller of the satrapApp
 */
angular.module('satrapApp')
	.controller('MovieListController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
	    //Initializes the movieTitle variable
	    $scope.movieTitle = "";
	    
	    /* 
	      Initializes the showLoader variable that 
	      controls whether the loader is shown, and
	      sets it to false 
	    */
	    $scope.showLoader = false;
	    
	    /*
	      Function changeLoader: sets the showLoader
	      variable to true whenever a search is made
	    */
	    $scope.changeLoader = function(){
	      $scope.showLoader = true;
	    }

	    /*
	      Function writeTitle: makes the Ajax call
	      to the omdb API, returns the result to 
	      the view
	    */
	    $scope.writeTitle = function(val){
	      val = val.replace(/ /g, "+");
	      var ajax_url = 'http://www.omdbapi.com/?s='+val+'*';
	      $http.get(ajax_url).success(function(data) {
	            $scope.movies = data.Search;
	            $scope.showLoader = false;
	      });
	    }
	}]);