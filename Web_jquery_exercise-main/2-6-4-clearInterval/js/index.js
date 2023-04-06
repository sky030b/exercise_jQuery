let fileNum = 1;
const $pic = $("#Pic")
const $wrap = $("#Wrap")
const $btnPrev = $("#BtnPrev")
const $btnNext = $("#BtnNext")
let picInterval;
const duration = 100
let cisTrans = 1

function doNext() {
    // fileNum > 23 ? fileNum = 1 : fileNum += 1
    fileNum < 24 ? fileNum += 1 : fileNum = 1
    // console.log(fileNum)
    $pic.attr("src", `./images/pic${fileNum}.jpg`)
    cisTrans = 1
}

function doPrev() {
    // fileNum < 2 ? fileNum = 24 : fileNum -= 1
    fileNum > 1 ? fileNum -= 1 : fileNum = 24
    $pic.attr("src", `./images/pic${fileNum}.jpg`)
    cisTrans = 0
}

function doEnter() {
    clearInterval(picInterval)
}

function doLeave() {
    picInterval = cisTrans == 1 ? setInterval(doNext, duration) : setInterval(doPrev, duration)
}

// init
// picInterval = setInterval(doNext, duration)
doLeave()

// event
$wrap.hover(function () {
    clearInterval(picInterval)
}, function () {
    picInterval = setInterval(doNext, duration)
})

// $wrap.hover(doEnter,doLeave)
// $wrap.mouseenter(doEnter)
// $wrap.mouseleave(doLeave)

$btnPrev.click(doPrev)

$btnNext.click(doNext)

