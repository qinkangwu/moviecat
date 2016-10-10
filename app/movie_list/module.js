(function(angular){
	'use strict';
	angular.module('moviecat.movie_list', ['ngRoute','moviecat.service.http'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/:category/:page?', {
			templateUrl: './movie_list/view.html',
			controller: 'MovieListController'
		});
	}])

	.controller('MovieListController', ['$scope','$routeParams','HttpService',function($scope,$routeParams,HttpService) {
		$scope.page = parseInt($routeParams.page || 1);
		var start = ($scope.page-1)*5;
		$scope.title = 'Loading.........';
		$scope.loading = true;
		$scope.movies= [];
		$scope.totalCount = 0;
		$scope.totalPage = 0;
		$scope.category = $routeParams.category;
		$scope.q = $routeParams.q;
		HttpService.jsonp('http://api.douban.com/v2/movie/'+$routeParams.category,{
			count:5,start:start,q : $routeParams.q
		},function(data){
			console.log(data.subjects);
			var pageSize = 5;
			$scope.loading = false;
			$scope.totalCount = data.total;
			$scope.title = data.title;
			$scope.movies = data.subjects;
			$scope.totalPage = Math.ceil(data.total/pageSize);
			$scope.$apply();
		})

	}]);
})(angular);
