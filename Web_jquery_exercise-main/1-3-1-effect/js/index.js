// $("#Thumb1").click(function () {
//     $("#Pic1").fadeIn()
//     $("#Pic2").fadeOut()
//     $("#Pic3").fadeOut()
//     $("#Pic4").fadeOut()
//     $("#Pic5").fadeOut()
// })

// $("#Thumb2").click(function () {
//     $("#Pic2").fadeIn()
//     $("#Pic1").fadeOut()
//     $("#Pic3").fadeOut()
//     $("#Pic4").fadeOut()
//     $("#Pic5").fadeOut()
// })

// $("#Thumb3").click(function () {
//     $("#Pic3").fadeIn()
//     $("#Pic1").fadeOut()
//     $("#Pic2").fadeOut()
//     $("#Pic4").fadeOut()
//     $("#Pic5").fadeOut()
// })

// $("#Thumb4").click(function () {
//     $("#Pic4").fadeIn()
//     $("#Pic1").fadeOut()
//     $("#Pic2").fadeOut()
//     $("#Pic3").fadeOut()
//     $("#Pic5").fadeOut()
// })

// $("#Thumb5").click(function () {
//     $("#Pic5").fadeIn()
//     $("#Pic1").fadeOut()
//     $("#Pic2").fadeOut()
//     $("#Pic3").fadeOut()
//     $("#Pic4").fadeOut()
// })


$("#Thumb1").click(function () {
    $("#Pic1").fadeIn()
    $("#Pic2, #Pic3, #Pic4, #Pic5").fadeOut()
})

$("#Thumb2").click(function () {
    $("#Pic2").fadeIn()
    $("#Pic1, #Pic3, #Pic4, #Pic5").fadeOut()
})

$("#Thumb3").click(function () {
    $("#Pic3").fadeIn()
    $("#Pic1, #Pic2, #Pic4, #Pic5").fadeOut()
})

$("#Thumb4").click(function () {
    $("#Pic4").fadeIn()
    $("#Pic1, #Pic2, #Pic3, #Pic5").fadeOut()
})

$("#Thumb5").click(function () {
    $("#Pic5").fadeIn(2000)
    $("#Pic1, #Pic2, #Pic3, #Pic4").fadeOut(5000)
})
