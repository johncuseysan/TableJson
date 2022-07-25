console.log("Server Start/Restarted");

/*********************\
 * LIBRARY            *
\*********************/
const fs = require('fs');

const express = require("express")
const app = express()

var db = require("./public/js/database");
var template = require("./public/js/template");

var Header = require("./public/js/header");
var Body = require("./public/js/body");

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
    header.buildHeaderList();
    header.buildTableList();

    var table_header = header.getTable();

    console.log("Header: " + table_header );

    var body = new Body(header.getTableHeader(), db.students);
    body.buildBodyList();

    var table_body = body.getTable();

    var website = template.page;
    var result = website.replace("<tr><th>Replace</th></tr>", table_header );

    fs.writeFile('./index.html', result, { flag: 'w+' }, err => {

        if (err) {
            res.send(error);
        }else{
            res.send("File written successfully");
        }
              
    });
 
})

// http://localhost:3000/raw
app.get("/raw", (req, res) => {

    var header = new Header(db.students);
    header.buildHeaderList();
    header.buildTableList();

    var table_header = header.getTable();

    console.log("Header: " + table_header );

    var body = new Body(header.getTableHeader(), db.students);
    body.buildBodyList();

    var table_body = body.getTable();

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