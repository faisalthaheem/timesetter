var redis = require('redis');
var client = redis.createClient(6379,'redis');

var isConnected = false;

client.on('connect', function(){
	console.log('connected to redis');
	isConnected = true;
});


function timeSetter(){
	if(!isConnected){
		console.log('not setting time,not connected');
		return;
	}
	console.log('time set in redis successfully.')
	client.set('currenttime',new Date().toISOString());
}

setInterval(timeSetter,1000);
