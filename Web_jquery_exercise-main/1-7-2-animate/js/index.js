$('#BtnRight').click(function () {
    $('#Rocket').stop(true, false).animate({
        left: "+=100"
    }, 600)
});

$('#BtnLeft').click(function () {
    $('#Rocket').stop(true, false).animate({
        left: "-=100"
    }, 600)
});

