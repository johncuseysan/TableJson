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

    //console.log("Table Header: \n");

    for(var m = 0; m < table_header.length; m++){
        //console.log(table_header[m]);
    }

    var body = new Body(header.getTableHeader(), db.students);
    var table_body = body.toArray();

    //console.log("Table Body: \n");

    for(var m = 0; m < table_body.length; m++){
        //console.log(table_body[m]);
    }

    //var parse = new ParseHtml("index_table.html","");
    var parse = new ParseHtml("index.html","");

    parse.readFile();
    parse.buildIndex();
    parse.buildTags();

    var tags = parse.getTags();

    //console.log("File Length: " + tags.length );

    var thead_front = tags.findIndex( x => x == "<thead>");
    //console.log("Index of <thead> : " + thead_front );

    var thead_end = tags.findIndex( x => x == "</thead>");
    //console.log("Index of </thead> : " + thead_end );

    var tbody_front = tags.findIndex( x => x == "<tbody>");
    //console.log("Index of <tbody> : " + tbody_front );

    var tbody_end = tags.findIndex( x => x == "</tbody>");
    //console.log("Index of </tbody> : " + tbody_end );

    var top = tags.slice(0, thead_front + 1);
    var bottom = tags.slice(tbody_end + 1);

    var new_top = top.concat(table_header);

    new_top.splice(new_top.length +1 , 0, "</thead>", "<tbody>");

    var new_bottom = new_top.concat(table_body);

    new_bottom.splice(new_bottom.length + 1 , 0,  "</tbody>");

    var finial = new_bottom.concat(bottom);

    var page = "";

    //console.log("*** TABLE ***");
    for(var u=0; u< finial.length; u++){
        //console.log("["+u+"] " + finial[u] );

        page = page + finial[u] +"\n";

    }

    fs.writeFileSync("index.html", page);


    res.send("File written successfully");
})

// http://localhost:3000/raw
app.get("/raw", (req, res) => {

    var header = new Header(db.students);

    header.buildHeader();
    var table_header = header.toString();

    //console.log("Table Header: \n" + table_header );

    var body = new Body(header.getTableHeader(), db.students);
    var table_body = body.toString();

    //console.log("Table Body: \n" + table_body );

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