POD = function(serviceURL, appKey) {
	this.service = serviceURL;
	this.appKey = appKey;

	this.getGeoLocation = function(callback) {
		var url = "https://freegeoip.net/json/?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: 'iplocation',
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				console.dir(json.country_code);
				console.dir(json.country_name);
				console.dir(json.region_code);
				console.dir(json.region_name);
				console.dir(json.city);
				console.dir(json.zip_code);
				console.dir(json.latitude);
				console.dir(json.longitude);
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
	//GET https://discotato.com/pod/apps/{APPKEY}
	this.getApp = function(callback) {
		var url = "https://discotato.com/pod/apps/" + this.appKey + "?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a1",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
	//GET https://discotato.com/pod/users/{USERID}
	this.getUserById = function(callback, userId) {
		var url = "https://discotato.com/pod/users/" + userId + "?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a2",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
	//GET https://discotato.com/pod/users/{USERID}/apps
	this.getUserApps = function(callback, userId) {
		var url = "https://discotato.com/pod/users/" + userId + "/apps?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a3",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
	//GET https://discotato.com/pod/objects/{OBJECTID}
	this.getObjectById = function(callback, objId) {
		var url = "https://discotato.com/pod/objects/" + objId + "?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a4",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
	//GET https://discotato.com/pod/objects/search
	//Example: https://discotato.com/pod/objects/search?categoryname=Stores.Store1&depth=2&appkey=20150609_testapp&callback=p
	this.getObjectByCategory = function(callback, categoryname, depth) {
		var url = "https://discotato.com/pod/objects/search?categoryname=" + categoryname + "&depth=" + depth + "&appkey=" + this.appKey + "&callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a5",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
	//GET https://discotato.com/pod/apps/{APPKEY}/objects
	this.getAppObjects = function(callback) {
		var url = "https://discotato.com/pod/apps/" + this.appKey + "/objects?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a6",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
	//GET https://discotato.com/pod/categories/{CATEGORYID}/objects
	this.getObjectsByCategoryId = function(callback, categoryid) {
		var url = "https://discotato.com/pod/categories/" + categoryid + "/objects?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a6",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
	//GET https://discotato.com/pod/apps/{APPKEY}/categories/objects
	this.getAppObjectsByCategoryName = function(callback, categoryname, depth) {
		var url = "https://discotato.com/pod/apps/" + this.appKey + "/categories/objects?categoryname=" + categoryname + "&depth=" + depth + "&callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a7",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	

	//GET https://discotato.com/pod/apps/{APPKEY}/categories
	this.getAppCategories = function(callback) {
		var url = "https://discotato.com/pod/apps/" + this.appKey + "/categories?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a8",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				//console.dir(json[0].parentid);
				//console.dir(json[0].id);
				//console.dir(json[0].name);
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
	
	//GET https://discotato.com/pod/categories
	this.getCategories = function(callback) {
		var url = "https://discotato.com/pod/categories?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a9",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				//console.dir(json[0].parentid);
				//console.dir(json[0].id);
				//console.dir(json[0].name);
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
	//GET https://discotato.com/pod/objects/{OBJECTID}/keys
	this.getObjectKeys = function(callback, objectid) {
		var url = "https://discotato.com/pod/objects/" + objectid + "/keys?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a10",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				//console.dir(json[0].parentid);
				//console.dir(json[0].id);
				//console.dir(json[0].name);
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
	//GET https://discotato.com/pod/keys/{KEYID}
	this.getKey = function(callback, keyid) {
		var url = "https://discotato.com/pod/keys/" + keyid + "?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a11",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				//console.dir(json[0].parentid);
				//console.dir(json[0].id);
				//console.dir(json[0].name);
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
	//GET https://discotato.com/pod/keys/{KEYID}/values
	this.getValueByKeyId = function(callback, keyid) {
		var url = "https://discotato.com/pod/keys/" + keyid + "/values?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a12",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				//console.dir(json[0].parentid);
				//console.dir(json[0].id);
				//console.dir(json[0].name);
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};

	//GET https://discotato.com/pod/values/{VALUEID}
	this.getValueById = function(callback, valueid) {
		var url = "https://discotato.com/pod/values/" + valueid + "?callback=?";
		$.ajax({
			type: 'GET',
			url: url,
			async: false,
			jsonpCallback: "a13",
			contentType: "application/json",
			dataType: 'jsonp',
			success: function(json) {
				//console.dir(json[0].parentid);
				//console.dir(json[0].id);
				//console.dir(json[0].name);
				callback(json);
			},
			error: function(e) {
				console.log(e.message);
			}
		});
	};
	
}
