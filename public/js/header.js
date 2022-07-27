class Header{

    constructor(students) {
        this.table_header = new Set();
        this.students = students;
    }

    setTableHeader(val){this.table_header = val;}
    getTableHeader() {return this.table_header;}

    setStudents(val){this.students = val;}
    getStudents() {return this.students;}

    buildHeader(){

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

    toString(){

        var table =  "<tr>";

        for (var element of this.table_header) {

            table = table + "<th>" + element +"</th>";
        }

        table = table + "</tr>";

        return table;

    }

    toArray(){

        this.table = this.table + "<tr>";

        for (var element of this.table_header) {

            this.table = this.table + "<th>" + element +"</th>";
        }

        this.table = this.table + "</tr>";

    }

}

module.exports = Header