'use strict';

/**
 * @ngdoc function
 * @name luxiveApp.filter:groupBy
 * @description
 * # groupBy
 * Filter for the satrapApp
 */
angular.module('satrapApp')
	.filter('groupByJob', function(){
		return function(input){
			if (!input || !input.length) { return; }
			var out = new Object();
			for (var crew of input){
				if(typeof out[crew.job] === 'undefined'){
					out[crew.job] = new Array();
				}
				out[crew.job].push(crew.name);
			}			
			return out;
		}
	});