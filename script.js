//Post button
// $(document).ready(function () {
//     $("#btnPostPerson").click(function () {
//         var firstname = $("#firstname").val();
//         var lastname = $("#lastname").val();
//         var age = $("#age").val();
//         $(".table tbody").append(
//             '<tr>' +
//             '<td>' + firstname + '</td>' +
//             '<td>' + lastname + '</td>' +
//             '<td>' + age + '</td>' +
//             '</tr>'
//         );
//         $('.table tbody > tr:last-child').append(
//             '<td> <i class="ui-icon ui-icon-pencil edit-button"></i> </td>' +
//             '<td> <i class="ui-icon ui-icon-trash delete-button"></i> </td>'
//         );
//     })
// })


//Delete button
$(".table tbody").on('click', '.delete-button', function () {
    $(this).closest('tr').remove();
})


$(document).ready(function () {

    getUsers();


    function getUsers() {
        $('#users-body').html('');
        $.ajax({
            url: 'https://gorest.co.in/public/v2/users',
            method: 'get',
            dataType: 'json',
            data: {
                test: 'test data'
            },
            success: function (data) {
                $(data).each(function (i, user) {
                    $('#users-body').append($("<tr>")
                        .append($("<td>").append(user.id))
                        .append($("<td>").append(user.name))
                        .append($("<td>").append(user.email))
                        .append($("<td>").append(user.gender))
                        .append($("<td>").append(user.status))
                        .append($("<td>").append(`<i class="ui-icon ui-icon-pencil edit-button" data-userid="` + user.id + `"></i>
                                                <i class="ui-icon ui-icon-trash delete-button" data-userid="`+ user.id + `"></i> </td>`)));
                });
            },
            error: function () {
                alert("error");
            }
        });
    }

    function getOneUser(id) {
        $.ajax({
            url: 'https://gorest.co.in/public/v2/users/' + id,
            method: 'get',
            dataType: 'json',
            success: function (data) {
                $(data).each(function (i, user) {
                    $('#second-user-body').append($("<tr>")
                        .append($("<td>").append(user.id))
                        .append($("<td>").append(user.name))
                        .append($("<td>").append(user.email))
                        .append($("<td>").append(user.gender))
                        .append($("<td>").append(user.status))
                        .append($("<td>").append(`<i class="ui-icon ui-icon-pencil edit-button" data-userid="` + user.id + `"></i>
                                                <i class="ui-icon ui-icon-trash delete-button" data-userid="`+ user.id + `"></i> </td>`)));
                })
            },
            error: function () {
                alert("error");
            }
        });
    }

    $(".btn-get-user").click(function () {
        getOneUser($(".input-id-get-user").val());
        console.log("bla-bla");
    });

    $("#btnPostPerson").on("click", function (e) {
        let data = {
            name: $("#name").val(),
            email: $("#email").val(),
            gender: $("#gender").val(),
            status: $("#status").val()
        }
        console.log(data);
        postUser(data);
    });

    function postUser(data) {
        console.log(data);
        $.ajax({
            url: 'https://gorest.co.in/public/v2/users',
            method: 'POST',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                getUsers();
            },
            error: function () {
                alert("post error");
            }
        });
    }


    function deleteUser(id) {
        $.ajax({
            url: 'https://gorest.co.in/public/v2/users/' + id,
            method: 'DELETE',
            dataType: 'json',
            success: function () {
                getUsers();
            },
            error: function () {
                alert("error");
            }
        });
    }

    $(".delete-button").click(function () {
        deleteUser($($(this)[0]).data("table-div"));
    });

});

