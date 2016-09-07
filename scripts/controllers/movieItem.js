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
		var ajax_url = 'http://api.themoviedb.org/3/movie/'+movieID+'?api_key=[API_KEY]';
		$http.get(ajax_url).then(function(response) {
		    $scope.movie = response.data;
		    $scope.movie.year = response.data.release_date.split('-')[0];
		}, function(){
				$scope.showError = true;
				$scope.errorMessage = "There's been a problem, please check your Internet connexion and try again."
			$scope.showLoader = false;	      
		});

		//API call to get the credit info
		ajax_url = 'http://api.themoviedb.org/3/movie/'+movieID+'/credits?api_key=[API_KEY]';
		$http.get(ajax_url).then(function(response) {
				$scope.cast = new Object();
				$scope.cast.actors = new Array();
				$scope.cast.crew = new Array();
		    for (var actor of response.data.cast){
		    	$scope.cast.actors.push(actor);
		    }
		    for (var tech of response.data.crew){
		    	if(tech.department === 'Directing' || tech.department === 'Writing'){
		    		$scope.cast.crew.push(tech);
		    	}
		    }
		}, function(){
			$scope.showError = true;
			$scope.errorMessage = "There's been a problem, please check your Internet connexion and try again."
			$scope.showLoader = false;	      
		});

		//API call to get the images
		ajax_url = 'http://api.themoviedb.org/3/movie/'+movieID+'/images?api_key=[API_KEY]';
		$http.get(ajax_url).then(function(response) {
			$scope.images = response.data;
			$scope.images.backdrops.sort(function(a, b) {
   				return parseFloat(b.vote_average) - parseFloat(a.vote_average);
			});
		}, function(){
		});

		//API call to get the videos - WIP
		ajax_url = 'http://api.themoviedb.org/3/movie/'+movieID+'/videos?api_key=[API_KEY]';
		$http.get(ajax_url).then(function(response) {
			for(var video of response.data.results){
				if(video.site === 'YouTube'){
					$scope.video = 'https://www.youtube.com/embed/'+video.key;
					return;
				}
			}
		}, function(){
		});
	}]);
