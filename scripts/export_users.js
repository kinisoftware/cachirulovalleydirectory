var _redis = require("redis")
var config = require ('../config').values
var redis = _redis.createClient(config.server.database.port, config.server.database.host)
var common = require ('../lib/common.js');

var module_users = require("../lib/modules/users.js")

var params = { max: 5000 }
module_users.GetUsers(redis, params, function(data){
	var fs = require('fs');
	fs.writeFile("users.json", JSON.stringify(data), function(err) {
	    if(err) {
	        console.log(err);
	    } else {
	        console.log("The file was saved!");
	    }
	});
})

redis.quit