class Body{

    constructor(header, students) {
        this.table_header = header;
        this.table_body = new Array();
    
        this.students = students;
        this.table = "";
    }

    setTableHeader(val){this.table_header = val;}
    getTableHeader() {return this.table_header;}

    setTableBody(val){this.table_body = val;}
    getTableBody() {return this.table_body;}

    setTable(val){this.table = val;}
    getTable() {return this.table;}

    setStudents(val){this.students = val;}
    getStudents() {return this.students;}


    buildBodyList(){

        if( ! Array.isArray(this.table_header) ){

            //Converting Set to Array
            this.table_header = Array.from(this.table_header);
        }


        for(var m=0; m <this.students.length; m++ ){

            //Stepping though JSON Array to get the object from the database.js
            //element[0] =  {name : "Pete Johnson",age : 18,dept : "CSE",score : 90}
            var element = this.students[m];

            this.table = this.table + "<tr>";

            for(var i=0; i <this.table_header.length; i++ ){

                //This is array of all keys from the Header Set
                //table_header = ['name', 'age', 'dept', 'score', 'grade']

                var table_data = element[this.table_header[i]];

                if (table_data === undefined || table_data === null){
                    this.table = this.table + "<td></td>";
                }else{
                    this.table = this.table + "<td>" + table_data + "</td>";
                }

            }

            this.table = this.table + "</tr> \n";

            
        }

    }

}

module.exports = Body;