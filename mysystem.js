//This will be a simply program that will give us some info about our operating system!

//This brings in the os module and assigns it to the variable os
var os = require('os');

var message = 'Here is some info about your system';

var sysArray = new Array('Type: ' + os.type(), 
						 'Node Version: ' + process.version,
						 'Platform: ' + os.platform(),
						 'Hostname: ' + os.hostname(),
						 'Total Memory: ' + os.totalmem(),
						 'Free Memory: ' + os.freemem(),
						 'Uptime: '+(os.uptime()/60/60)+ ' hours'
						);
						
console.log(message);

var arraylen = sysArray.length;

i=0;
while(i<arraylen){
	console.log(sysArray[i]);
	i++;
}