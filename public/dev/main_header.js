var db = require("../js/database");
var Header = require("../js/header");

console.log("PROGRAM STARTED");

/***  Get The Database Array Objects ***/
console.log(" Student list from the Database \n");
console.log(db.students);

/***  Get The Keys from the Database Array Objects ***/
var header = new Header(db.students);

header.buildHeaderList();

console.log(" Header list from the Database \n");
console.log(header.getTableHeader());

/***  Building the table HTML header ***/
header.buildTableList();

console.log(" HTML Header form the table  \n");
console.log(header.getTable());


console.log("PROGRAM ENDED");