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
}


module.exports = ParsesHtml;