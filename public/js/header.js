class Header{

    constructor(students) {
        this.table_header = new Set();
        this.student = students;
        this.message = "";
    }

    get table_header(){
        return this.table_header;
    }

    get message() {
        return this.message;
    }

}

module.exports = Header