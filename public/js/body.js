class Body{

    constructor(header, students) {
        this.table_header = header;
        this.table_body = new Array();
    
        this.students = students;
    }

    setTableHeader(val){this.table_header = val;}
    getTableHeader() {return this.table_header;}

    setTableBody(val){this.table_body = val;}
    getTableBody() {return this.table_body;}

    setStudents(val){this.students = val;}
    getStudents() {return this.students;}


    toString(){

        if( ! Array.isArray(this.table_header) ){

            //Converting Set to Array
            this.table_header = Array.from(this.table_header);
        }

        var table = "";

        for(var m=0; m <this.students.length; m++ ){

            //Stepping though JSON Array to get the object from the database.js
            //element[0] =  {name : "Pete Johnson",age : 18,dept : "CSE",score : 90}
            var element = this.students[m];

            table = table + "<tr>";

            for(var i=0; i <this.table_header.length; i++ ){

                //This is array of all keys from the Header Set
                //table_header = ['name', 'age', 'dept', 'score', 'grade']

                var table_data = element[this.table_header[i]];

                if (table_data === undefined || table_data === null){
                    table = table + "<td></td>";
                }else{
                    table = table + "<td>" + table_data + "</td>";
                }

            }

            table = table + "</tr> \n";

            
            
        }

        return table;

    }

}

module.exports = Body;