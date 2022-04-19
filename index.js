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



$(document).ready(function () {

    getTutorials();


    function getTutorials() {
        $('#tutorialsBody').html('');
        $.ajax({
            url: 'https://gorest.co.in/public/v2/users',
            method: 'get',
            dataType: 'json',
            data: {
                test: 'test data'
            },
            success: function (data) {
                $(data).each(function (i, user) {
                    $('#tutorialsBody').append($("<tr>")
                        .append($("<td>").append(user.id))
                        .append($("<td>").append(user.name))
                        .append($("<td>").append(user.email))
                        .append($("<td>").append(user.gender))
                        .append($("<td>").append(user.status)));
                });
                //loadButtons();
            }
        });
    }

    function getOneTutorial(id) {
        $.ajax({
            url: 'http://localhost:3000/api/tutorials/' + id,
            method: 'get',
            dataType: 'json',
            success: function (data) {
                $($("#updateForm")[0].tutId).val(data._id);
                $($("#updateForm")[0].updateNum).val(data.tutorialNumber);
                $($("#updateForm")[0].updateTitle).val(data.title);
                $($("#updateForm")[0].updateAuthor).val(data.author);
                $($("#updateForm")[0].updateType).val(data.type);
                $("#updateForm").show();
            }
        });
    }

    function loadButtons() {
        $(".editTut").click(function (e) {
            getOneTutorial($($(this)[0]).data("tutid"));
            e.preventDefault();
        });

        $(".deleteTut").click(function (e) {
            deleteTutorial($($(this)[0]).data("tutid"));
            e.preventDefault();
        })
    }



});

