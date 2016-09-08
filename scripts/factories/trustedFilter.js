'use strict';

/**
 * @ngdoc function
 * @name luxiveApp.filter:trusted
 * @description
 * # trusted
 * Filter for the satrapApp
 */
angular.module('satrapApp')
	.filter('trusted', ['$sce', function($sce){
		return function(url) {
	        return $sce.trustAsResourceUrl(url);
	    };
	}]);