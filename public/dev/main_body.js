var db = require("../js/database");

var Header = require("../js/header");
var Body = require("../js/body");

console.log("PROGRAM STARTED");

/***  Get The Database Array Objects ***/
console.log(" Student list from the Database \n");
console.log(db.students);

/***  Get The Keys from the Database Array Objects ***/
var header = new Header(db.students);

header.buildHeader();

console.log(" Header list from the Database \n");
console.log(header.getTableHeader());

/*** ***/
var body = new Body(header.getTableHeader(), db.students);


console.log(" Data list from the Database \n");
console.log(body.toString());