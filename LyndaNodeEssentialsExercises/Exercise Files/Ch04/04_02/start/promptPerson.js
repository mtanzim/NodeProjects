var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var person = {
	name: '',
	sayings: []
};

rl.question ("What is the name?", function(answer){
	person.name = answer;
	rl.setPrompt(`What would ${person.name} say? `);
	rl.prompt ();
	rl.on('line', function (saying){
		//console.log(person.sayings);
		if (saying.toLowerCase().trim()==='exit') {
			rl.close();
		} else {
			person.sayings.push(saying);
			rl.setPrompt(`What else would ${person.name} say? Type "exit" to leave. `);
			rl.prompt ();
		}
	}); 
});

rl.on('close', function(){
	console.log (` ${person.name} says: `);
	person.sayings.forEach(function(item, index){
		console.log(`${index}: ${item}`);
	});
	process.exit();
});