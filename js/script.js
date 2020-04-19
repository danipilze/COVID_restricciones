
$("input[type='radio']").click(function () {
    var status = $(this).data("status");
    var name = $(this).prop("name");
    console.log(status + " " + name)
    // clear the other checked options of the radio group
    $("#" + name + "-menu input[type='radio']").each(function (index) {
        $(this).data("status", "unchecked");;
    });

    // change of status checked/unchecked
    if (status == undefined || status == "unchecked") {
        $(this).prop("checked", true);
        $(this).data("status", "checked");
    } else {
        $(this).prop("checked", false);
        $(this).data("status", "unchecked");
    }

    updateResult();

});




function updateResult() {
    var cedula = $("#cedula-menu input[type='radio']:checked").val();
    var placa = $("#placa-menu input[type='radio']:checked").val();

    console.log(cedula + " " + placa)


    $(".day")


}



