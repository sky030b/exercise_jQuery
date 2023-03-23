// $("h1").on( "click", function () {
//     alert("我點到標題一")
// })

$("h1").click( function () {
    alert(123)
})

// $("p").on( "click", function () {
//     alert("我點到段落")
// })

// $("p").click( function () {
//     alert("我點到段落"),alert(456)
// })

$("p").click(saysomething)

function saysomething() {
    alert("我點到段落"),alert(456)
}