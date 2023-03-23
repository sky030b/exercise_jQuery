const $content = $("#Content")

$("#BtnLg").click(function () {
    // $("#Content").css("fontSize", 20)
    // $("#Content").css("background-color", "pink")
    // $("#Content").css("letter-spacing", 5)
    // $("#Content").css({
    //     "fontSize": "1.5em",
    //     "background-color": "#ddd",
    //     "letter-spacing": 10
    // })
    $content.css({
        fontSize: "1.5em",
        backgroundColor: "#ddd",
        letterSpacing: 10
    })
})

$("#BtnSm").click(function () {
    $content.css("font-size", 15)
})