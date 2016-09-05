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
	    $scope.showError = false;
	    
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
	      
	      $scope.showError = false;

	      $http.get(ajax_url).then(
	      		function(response) {
	      			if(response.data.Response == "True"){
	            		$scope.movies = response.data.Search;
	            	}
	            	else{
	            		$scope.movies = '';
	      				$scope.showError = true;
	      				$scope.errorMessage = "No results."          		
	            	}
	            	$scope.showLoader = false;	  
	      		},
	      		function(response){
	      			$scope.showError = true;
	      			$scope.errorMessage = "There's been a problem, please check your Internet connexion and try again."
	            	$scope.showLoader = false;	      
	      		}
	      );
	    }
	}]);