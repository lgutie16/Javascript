var fs = require('fs');
var file = fs.readFileSync(process.argv[0]);
var vect = file.split('\n');
console.log(vect.length);

