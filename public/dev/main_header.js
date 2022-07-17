var db = require("../js/database");
var Header = require("../js/header");

console.log("PROGRAM STARTED");

//console.log(db.students);

var header = new Header(db.students, "");

header.buildHeaderList();

console.log(header.getTableHeader());

console.log("PROGRAM ENDED");