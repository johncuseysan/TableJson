console.log("Server Start/Restarted");

const express = require("express")
const app = express()

var db = require("./public/js/database");
var Header = require("./public/js/header");

app.use(express.static(__dirname));

app.set("view engine","ejs")

app.get("/", (req, res) => {

    res.render('index');
})

app.get("/raw_table", (req, res) => {

    var header = new Header(db.students);
    header.buildHeaderList();
    header.buildTableList();

    var table = header.getTable();

    var page = "";

    page = page + `<style>
                        table, th, td {
                            border:1px solid black;
                        }
                    </style>
    `;

    page = page + "<h1>Cusey Org</h1>";

    page = page + "<table>"+ table +"</table>"

    res.send(page);
})

app.listen(3000)