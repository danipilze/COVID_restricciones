
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

    updateResult();

});





function updateResult() {
    var cedula = $("#cedula-menu input[type='radio']:checked").val();
    var placa = $("#placa-menu input[type='radio']:checked").val();
    var vehicle = $("#vehicle-menu input[type='radio']:checked").val();
    var days = ['LUNES 4', 'MARTES 5', 'MIÉRCOLES 6', 'JUEVES 7', 'VIERNES 8', 'SÁBADO 9', 'DOMINGO 10']

    pico_cedula = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '8'], ['9', '0'], ['1', '3', '5', '7', '9'], ['0', '2', '4', '6', '8']]
    pico_placa_particular = [['5', '6'], ['7', '8'], ['9', '0'], ['1', '2'], ['3', '4'], [], []]

    for (i = 0; i < 7; i++) {
        if (cedula != undefined) {
            if (pico_cedula[i].includes(cedula)) {

                            if (placa != undefined) {
                                if (pico_placa_particular[i].includes(placa)) {
                                    $(".day #day-" + i).prop("class", "box_yes");
                                    $(".day #day-" + i).html('<span><i class="fas fa-clock"> </i> ' + days[i] + ': Tu vehículo puede salir en horas permitidas <i class="fas fa-clock"><i class="fas fa-car"></span>');
                                } else {
                                    $(".day #day-" + i).prop("class", "box_yes");
                                    $(".day #day-" + i).html('<span><i class="fas fa-car"> </i> ' + days[i] + ': Tu vehículo puede salir 24 horas <i class="fas fa-check"><i class="fas fa-car"></span>');

                                }
                            } else {
                                $(".day #day-" + i).prop("class", "box_yes");
                                $(".day #day-" + i).html('<span><i class="fas fa-walking"> </i> ' + days[i] + ': Puedes salir caminando');
                            }

            } else {
                $(".day #day-" + i).prop("class", "box_no");
                $(".day #day-" + i).html('<span><i class="fas fa-ban"> </i> ' + days[i] + ': Quédate en casa</span>');
            }
        } else {
            $(".day #day-" + i).prop("class", "box_no");
            $(".day #day-" + i).html('<span><i class="fas fa-ban"> </i> ' + days[i] + ': Quédate en casa</span>');

        }



    }





}



