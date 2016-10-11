(function(angular){
	'use strict';
	angular.module('moviecat.movie_detail', ['ngRoute','moviecat.service.http'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/detail/:id', {
			templateUrl: './movie_detail/view.html',
			controller: 'MovieDetailController'
		});
	}])

	.controller('MovieDetailController', ['$scope','$routeParams','HttpService',function($scope,$routeParams,HttpService) {
		$scope.movie = {};
		$scope.loading = true;
		$scope.title = 'Loading.........';
		HttpService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{

		},function(data){
			$scope.movie = data;
			$scope.loading = false;
			$scope.title = data.title;
			$scope.$apply();
		})

	}]);
})(angular);
