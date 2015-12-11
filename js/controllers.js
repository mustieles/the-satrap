var satrapControllers = angular.module('satrapControllers', ['ngRoute']);


satrapControllers.controller('MoviesController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
    $scope.movieTitle = "";
    $scope.writeTitle = function(val){
      val = val.replace(/ /g, "+");
      var ajax_url = 'http://www.omdbapi.com/?s='+val;
      console.log(ajax_url);
      $http.get(ajax_url).success(function(data) {
            $scope.movies = data.Search;
      });
    }
}]);
