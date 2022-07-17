class Header{

    constructor(students) {
        this.table_header = new Set();

        this.students = students;
        this.table = "";
    }

    setTableHeader(val){this.table_header = val;}
    getTableHeader() {return this.table_header;}

    setTable(val){this.table = val;}
    getTable() {return this.table;}

    setStudents(val){this.students = val;}
    getStudents() {return this.students;}

    buildHeaderList(){

        //Getting the objects from the database.js student (Array of Objects)
        //Loop though th objects in the Array
        for( var i = 0; i < this.students.length; i++ ){

            // Get key for each Object. Returns Arrays of keys
            var studentArray = Object.keys(this.students[i]);

            //Going though the Array of keys adding to the Set
            studentArray.forEach(element => {

                this.table_header.add(element);

            });
        }
    } 

    buildTableList(){

        this.table = this.table + "<tr>";

        for (var element of this.table_header) {

            this.table = this.table + "<td>" + element +"</td>";
        }

        this.table = this.table + "<tr>";

    }

}

module.exports = Header