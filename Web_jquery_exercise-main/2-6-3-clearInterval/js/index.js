let fileNum = 1;
const $pic = $("#Pic")
let picInterval;
const duration = 0.1;

// fileNum += 1;
function doNext () {
    // if (fileNum > 24) {
    //     fileNum = 1
    // }
    fileNum < 24 ? fileNum += 1 : fileNum = 1;
    // console.log(fileNum)

    $pic.attr("src", `./images/pic${fileNum}.jpg`)
    // $("#Pic").attr("src", "./images/pic" + fileNum + ".jpg")
}

picInterval = setInterval(doNext, duration * 1000)

$("#BtnPause").click(function () {
    clearInterval(picInterval)
})

$("#BtnPlay").click(function () {
    clearInterval(picInterval)
    picInterval = setInterval(doNext, duration * 1000)
})
