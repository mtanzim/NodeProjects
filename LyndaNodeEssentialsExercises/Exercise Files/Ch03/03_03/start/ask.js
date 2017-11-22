var questions = ['name?','hobby?','language?'];

var answers=[];

function ask (i) {
	process.stdout.write(`\n\n${questions[i]}`);
	process.stdout.write("   >   ");

}

process.stdin.on('data', function (data) {
	//process.stdout.write('\n' + data.toString().trim() + '\n');
	answers.push(data.toString().trim());

	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}

});

process.on('exit', function() {
	process.stdout.write("\n\n\n\n");
	process.stdout.write(`${answers[0]} loves ${answers[1]} and programming in ${answers[2]}`);

});

ask(0);
