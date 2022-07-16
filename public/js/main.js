var db = require("./database");
var Header = require("./header");

console.log("PROGRAM STARTED");

//console.log(db.students);

var header = new Header(db.students, "");

header.buildHeaderList();

console.log(header.getTableHeader());

console.log("PROGRAM ENDED");