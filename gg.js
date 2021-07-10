function hello()
{
$(document).ready(function () {

    // FETCHING DATA FROM JSON FILE
    $.getJSON("g.json",
            function (data) {
        var student = '';

        // ITERATING THROUGH OBJECTS
        $.each(data, function (key, value) {

            //CONSTRUCTION OF ROWS HAVING
            // DATA FROM JSON OBJECT
            student += '<tr>';
            student += '<td>' +
                value.slno + '</td>';

            student += '<td>' +
                value.Name + '</td>';

            student += '<td>' +
                value.Quantity + '</td>';

            student += '<td>' +
                value.unit + '</td>';
                student += '<td>' +
                value.dept + '</td>';
                student += '<td>' +
                value.notes + '</td>';

            student += '</tr>';
        });
        
        //INSERTING ROWS INTO TABLE
        $('#table').append(student);
    });
});
}