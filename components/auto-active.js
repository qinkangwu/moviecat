(function(angular){
	angular.module('moviecat.directives.auto_active',[])
		.directive('autoActive',['$location',function($location){
			return {
				link : function(scope,element,attr){
					var url = $location.url();
					scope.$location = $location;
					scope.$watch('$location.url()',function(now,old){
						var aLink = element.children().attr('href').substr(1);
						if(now.indexOf(aLink) == 0){
							element.parent().children().removeClass('active');
							element.addClass('active');
						}
					});
				}
			}
		}])
})(angular);
