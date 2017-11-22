var waitTime=3000;
var currentTime=0;
var waitInterval=100;
var pctWaited=0;

console.log("Wait for it!");

function writeWaitPct (p) {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting ... ${p}%`);
}

var x = setInterval (function() {
	currentTime+=waitInterval;
	pctWaited=Math.floor((currentTime/waitTime)*100);
	writeWaitPct(pctWaited);
	//console.log(`${currentTime/1000} seconds`);
}, waitInterval);

setTimeout(function (argument) {
	clearTimeout(x);
	writeWaitPct (100);
	process.stdout.write(`\n\n\nDone!\n\n\n`);
}, waitTime)