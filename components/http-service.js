(function(angular){
	angular.module('moviecat.service.http',[])
		.service('HttpService',['$window','$document',function($window,$document){
			this.jsonp = function (url,params,fn){
				var cbName = 'jsonp_' + (Math.random() * Math.random()).toString().substr(2);
				$window[cbName] = function (data) {
					fn(data);
					$window.document.body.removeChild(scriptElement);
				};
				var queryString = '';
				for(var key in params){
					queryString += `${key}=${params[key]}&`;
				}
				queryString += `callback=${cbName}`;
				url = `${url}?${queryString}`;
				var scriptElement = $window.document.createElement('script');
				scriptElement.src = url;
				$window.document.body.appendChild(scriptElement);
			}
		}])
})(angular);
