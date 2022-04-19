//Post button
$(document).ready(function () {
    $("#btnPostPerson").click(function () {
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var age = $("#age").val();
        $(".table tbody").append(
            '<tr>' +
            '<td>' + firstname + '</td>' +
            '<td>' + lastname + '</td>' +
            '<td>' + age + '</td>' +
            '</tr>'
        );
        $('.table tbody > tr:last-child').append(
            '<td> <i class="ui-icon ui-icon-pencil edit-button"></i> </td>' +
            '<td> <i class="ui-icon ui-icon-trash delete-button"></i> </td>'
        );
    })
})


//Delete button
$(".table tbody").on('click', '.delete-button', function () {
    $(this).closest('tr').remove();
})

//Edit button
