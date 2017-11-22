var Person = require ('./lib/Person');

var ben= new Person ("Ben Franklin");
var joe= new Person ("Joe Sale");
var TM= new Person ("Tanzim Mokammel");

/*
ben.on('speak', function(said) {
	console.log(`${this.name}: ${said}`);
});
*/

ben.emit('speak', "Hi there, I am Ben.");
joe.emit('speak', "Hi there, I am Joe Sale.");
TM.emit('speak', "Hi there, I am the best.");