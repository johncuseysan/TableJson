class Header{

    constructor(students,message) {
        this.table_header = new Set();

        this.students = students;
        this.message = message;
    }

    setTableHeader(val){this.table_header = val;}
    getTableHeader() {return this.table_header;}

    setMessage(val){this.message = val;}
    getMessage() {return this.message;}

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

}

module.exports = Header