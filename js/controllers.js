var satrapControllers = angular.module('satrapControllers', ['ngRoute']);


satrapControllers.controller('MoviesController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
    var _title =  return arguments.length ? (_title = newTitle) : "Martian";
    $http.get('http://www.omdbapi.com/?t='._title).success(function(data) {
        $scope.movie = data;
    });
}]);
