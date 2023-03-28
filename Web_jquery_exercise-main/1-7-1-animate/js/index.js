$("#BtnRight").click(function () {
    // alert(12);
    // console.log(1234);
    // $("#Rocket").css("left", 600);
    $("#Rocket").stop(true, false).animate({
        left: 600, 
        top: 300
    }, 1000)
})

$("#BtnLeft").click(function () {
    $("#Rocket").stop(true, false).animate({
        left: 0,
        top: 0
    }, 1000)
})