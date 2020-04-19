
$("input[type='radio']").click(function () {
    var status = $(this).data("status");
    var name = $(this).prop("name");

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

    //updateMap();

    //gtag('event', $(this).data("status") + "", {
    //    'event_category': "restricciones",
    //    'event_label': name + " " + $(this).val() + ""
    //});
});

$("input[type='checkbox']").click(function () {
    var id = this.id;
    var name = id.split("-")[0];
    $("#" + name + "-layers").toggle({ direction: "top" }, 1000);
    //gtag('event', "toggle" + "", {
    //    'event_category': "restricciones",
    //    'event_label': name + " " + id + ""
    //});

});

$("#regions-checkbox").click(function () {
    //updateMap();
});

$("#about-checkbox").click(function () {
    $("#about-box").slideToggle("fast", "linear");
});



