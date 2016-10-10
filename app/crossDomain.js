function crossDomain(url,params,fn){
	var cbName = `jsonp_${Math.random().toString().substr(2)}`;
	window.cbName = function (data) {
		fn(data);
		document.body.removeChild(scriptElement);
	};
	var queryString = '';
	for(var key in params){
		queryString += `${key}=${params[key]}&`;
	}
	queryString += `callback=${cbName}`;
	url = `${url}?${queryString}`;
	var scriptElement = document.createElement('script');
	scriptElement.src = url;
	document.body.appendChild(scriptElement);
}
