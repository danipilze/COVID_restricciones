var month = ["none", "DJF", "JFM", "FMA", "MAM", "AMJ", "MJJ", "JJA", "JAS", "ASO", "SON", "OND", "NDJ"];

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

    updateMap();

    gtag('event', $(this).data("status") + "", {
        'event_category': "AgMetGaps",
        'event_label': name + " " + $(this).val() + ""
    });
});

$("input[type='checkbox']").click(function () {
    var id = this.id;
    var name = id.split("-")[0];
    $("#" + name + "-layers").toggle({ direction: "top" }, 1000);
    gtag('event', "toggle" + "", {
        'event_category': "AgMetGaps",
        'event_label': name + " " + id + ""
    });

});

$("#regions-checkbox").click(function () {
    updateMap();
});

$("#about-checkbox").click(function () {
    $("#about-box").slideToggle("fast", "linear");
});



var handle = $("#custom-handle");
$("#time-slider").slider({
    min: 1,
    max: 12,
    value: 1,
    create: function () {
        handle.text(month[$(this).slider("value")]);
    },
    slide: function (event, ui) {
        handle.text(month[ui.value]);
        updateMapBySlider(month[ui.value]);
        gtag('event', "slide", {
            'event_category': "AgMetGaps",
            'event_label': "slider " + month[ui.value] + ""
        });
    }

});