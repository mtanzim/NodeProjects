var EventEmitter = require ('events').EventEmitter;
var util = require ('util');

var Person = function (name) {
	this.name=name;
	this.on('speak', function(said) {
		console.log(`${this.name}: ${said}`);
	});
}

util.inherits(Person, EventEmitter);

module.exports = Person;