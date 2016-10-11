(function(angular){
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('moviecat', [
		'ngRoute',
		'moviecat.movie_detail',
		'moviecat.movie_list',
		'moviecat.directives.auto_active'

	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/in_theaters'});
	}])
		.controller('SearchController',['$scope','$route',function($scope,$route){
			$scope.input = '';
			$scope.search = function(){
				$route.updateParams({
					category : 'search',
					q : $scope.input,
					page:1
				})
			}
		}])
})(angular);
