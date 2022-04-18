$(document).ready(function(){
    $("#btnPostPerson").click(function(){
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var age = $("#age").val();
        $(".table tbody tr").last().after(
            '<tr>'+
                '<td>'+firstname+'</td>'+
                '<td>'+lastname+'</td>'+
                '<td>'+age+'</td>'+
            '</tr>'
        );
    })
})