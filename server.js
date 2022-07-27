console.log("Server Start/Restarted");

/*********************\
 * LIBRARY            *
\*********************/
const fs = require('fs');

const express = require("express")
const app = express()

var db = require("./public/js/database");

var Header = require("./public/js/header");
var Body = require("./public/js/body");

var ParseHtml = require("./public/js/parse_html");

app.use(express.static(__dirname));

app.set("view engine","ejs");

/*********************\
 * API                *
\*********************/

// http://localhost:3000
app.get("/", (req, res) => {

    res.render('index');
});

// http://localhost:3000/save
app.get("/save", (req, res) => {

    var header = new Header(db.students);

    header.buildHeader();
    var table_header = header.toArray();

    console.log("Table Header: \n");

    for(var m = 0; m < table_header.length; m++){
        console.log(table_header[m]);
    }

    var body = new Body(header.getTableHeader(), db.students);
    var table_body = body.toArray();

    console.log("Table Body: \n");

    for(var m = 0; m < table_body.length; m++){
        console.log(table_body[m]);
    }


    var parse = new ParseHtml("index.html","");

    parse.readFile();
    parse.buildIndex();
    parse.buildTags();

    console.log("File Length: " + parse.getTags().length );



    res.send("HELLO");

 
})

// http://localhost:3000/raw
app.get("/raw", (req, res) => {

    var header = new Header(db.students);

    header.buildHeader();
    var table_header = header.toString();

    console.log("Table Header: \n" + table_header );

    var body = new Body(header.getTableHeader(), db.students);
    var table_body = body.toString();

    console.log("Table Body: \n" + table_body );

    var page = "";

    page = page + `<style>
                        table, th, td {
                            border:1px solid black;
                        }
                    </style>
    `;

    page = page + "<h1>Cusey Org</h1>";

    page = page + "<table><thead>"+ table_header +"</thead><tbody>"+ table_body +" </tbody></table>"

    res.send(page);
})

app.listen(3000)