"use strict";

var width = process.argv[2] || 100;
var height = process.argv[3] || 1000;

var w = process.stdout.write.bind(process.stdout);

w(`P2
${width} ${height}
255
`);

for (var y = 1; y <= height; y++) {
	var pct = y/height;
	var x = 1;
	for (x; x < width*pct; x++) {
		w(Math.round((255-x/(width*pct)*255))+' ');
	}
	for (x; x <= width; x++) {
		w('0 ')
	}
	w('\n');
}
