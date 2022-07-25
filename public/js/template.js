page = `
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">

        <!-- JQuery -->
        <script type="text/javascript" src="public/JQuery/jquery-3.6.0.min.js"></script>

        <!-- Bootstrap 5 -->
        <link rel="stylesheet" type="text/css" href="public/bootstrap-5.2.0-dist/css/bootstrap.min.css" ></link>
        <link href="public/bootstrap-5.2.0-dist/css/bootstrap-grid.rtl.min.css" rel="stylesheet"></link>
        <script type="text/javascript" src="public/bootstrap-5.2.0-dist/js/bootstrap.min.js"></script>

        <!-- DataTables -->
        <link rel="stylesheet" type="text/css" href="public/DataTables/datatables.min.css"/>
        <script type="text/javascript" src="public/DataTables/datatables.min.js"></script>


        <script>
            $(document).ready(function () {
                $('#table_student').DataTable();
            });
        </script>


        <title>John Cusey Sandbox</title>
    </head>

    <body>

        <div class="container">

            <h1>Table</h1>

            <table id="table_student" class="display">
                <thead>
                    <tr><th>Replace</th></tr>
                </thead>
                <tbody>
                </tbody>
            </table>

        </div>
       

    </body>

</html>
`;

module.exports.page = page;