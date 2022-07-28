class ParsesHtml{

    constructor(path, data) {
        this.path = path;
        // A string of the html website
        this.data =  data;
        this.fs = require('fs');
        /* 
        *The index of the Right (<) and Left  (>) Tags from the html website. 
        *The Left Tag (<) is odd index. The Right Tag (>) is even index.
        */
        this.index = new Array();
        //Array of HTML Tags such as <h1>, </h1>, or Inner HTML such as Hello World! 
        this.tags = new Array();

    }

    setPath(val){this.path = val;}
    getPath() {return this.path;}

    setData(val){this.data = val;}
    getData() {return this.data;}

    setIndex (val){this.index  = val;}
    getIndex() {return this.index;}

    setTags(val){this.tags  = val;}
    getTags() {return this.tags;}

    readFile(){

        var result_data = this.fs.readFileSync(this.path,{encoding:'utf8', flag:'r'}); 

        this.setData( result_data );

    }

    buildIndex(){
        const regex = /<|>/g;  

        while(regex.exec(this.data) !== null) {
            this.index.push(regex.lastIndex -1);
        } 

    }

    buildTags(){
        
        for(var m=0; m < this.index.length; m = m +2) {

            //Inner HTML 
            if("/" == this.data[ this.index[m] + 1] ){
                this.tags.push( this.data.substring( this.index[m-1] + 1, this.index[m]  ) );
            }

            //HTML Tags
            this.tags.push(this.data.substring(this.index[m], this.index[m +1] +1 )  );
        }

    }

    buildPage(table_header,table_body){

        //console.log("File Length: " + this.tags.length );
    
        var thead_front = this.tags.findIndex( x => x == "<thead>");
        //console.log("Index of <thead> : " + thead_front );
    
        var thead_end = this.tags.findIndex( x => x == "</thead>");
        //console.log("Index of </thead> : " + thead_end );
    
        var tbody_front = this.tags.findIndex( x => x == "<tbody>");
        //console.log("Index of <tbody> : " + tbody_front );
    
        var tbody_end = this.tags.findIndex( x => x == "</tbody>");
        //console.log("Index of </tbody> : " + tbody_end );
    
        var top = this.tags.slice(0, thead_front + 1);
        var bottom = this.tags.slice(tbody_end + 1);
    
        var new_top = top.concat(table_header);
    
        new_top.splice(new_top.length +1 , 0, "</thead>", "<tbody>");
    
        var new_bottom = new_top.concat(table_body);
    
        new_bottom.splice(new_bottom.length + 1 , 0,  "</tbody>");
    
        var result = new_bottom.concat(bottom);

        return result;

    }
}


module.exports = ParsesHtml;