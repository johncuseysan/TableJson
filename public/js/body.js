class Body{

    constructor(header, data) {
        this.table_header = header;
        this.table_body = new Array();
    
        this.data = data;
    }

    setTableHeader(val){this.table_header = val;}
    getTableHeader() {return this.table_header;}

    setTableBody(val){this.table_body = val;}
    getTableBody() {return this.table_body;}

    setData(val){this.data = val;}
    getData() {return this.data;}


    toString(){

        if( ! Array.isArray(this.table_header) ){

            //Converting Set to Array
            this.table_header = Array.from(this.table_header);
        }

        var table = "";

        for(var m=0; m <this.data.length; m++ ){

            //Stepping though JSON Array to get the object from the database.js
            //element[0] =  {name : "Pete Johnson",age : 18,dept : "CSE",score : 90}
            var element = this.data[m];

            table = table + "<tr> \n";

            for(var i=0; i <this.table_header.length; i++ ){

                //This is array of all keys from the Header Set
                //table_header = ['name', 'age', 'dept', 'score', 'grade']

                var table_data = element[this.table_header[i]];

                if (table_data === undefined || table_data === null){
                    table = table + "<td></td> \n";
                }else{
                    table = table + "<td>" + table_data + "</td> \n";
                }

            }

            table = table + "</tr> \n";

            
            
        }

        return table;

    }


    toArray(){

        if( ! Array.isArray(this.table_header) ){

            //Converting Set to Array
            this.table_header = Array.from(this.table_header);
        }

        var table = new Array();

        for(var m=0; m <this.data.length; m++ ){

            //Stepping though JSON Array to get the object from the database.js
            //element[0] =  {name : "Pete Johnson",age : 18,dept : "CSE",score : 90}
            var element = this.data[m];

            table.push("<tr> \n");

            for(var i=0; i <this.table_header.length; i++ ){

                //This is array of all keys from the Header Set
                //table_header = ['name', 'age', 'dept', 'score', 'grade']

                var table_data = element[this.table_header[i]];

                if (table_data === undefined || table_data === null){
                    table.push("<td></td> \n");
                }else{
                    table.push("<td>" + table_data + "</td> \n");
                }

            }

            table.push("</tr> \n");

            
            
        }

        return table;

    }

}

module.exports = Body;