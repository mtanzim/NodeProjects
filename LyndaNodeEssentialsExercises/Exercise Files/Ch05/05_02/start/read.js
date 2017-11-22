var fs=require("fs");
var path=require ("path");

fs.readdir("./lib", function(err, files){
	files.forEach(function(fileName){
		var file=path.join(__dirname,"lib", fileName);
		var stats=fs.statSync(file);
		if (stats.isFile() && fileName!==".DS_store"){
			fs.readFile(file,"UTF-8", function(err, contents){
				console.log(file); 
				console.log(contents);
			});
		}
	});
});

/*
fs.readFile("./lib/sayings.md", "UTF-8", function (err, contents){
	if (err) {
		throw err;
	}
	console.log(contents);
});
*/
