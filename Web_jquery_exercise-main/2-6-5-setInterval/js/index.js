let index = 0;
let picInterval;
const $slice = $("#Slide")
const $sliceImgInner = $slice.find(".img-inner")
const duration = 1000

// index: 0 -> 第 1 張, left: 0
// index: 1 -> 第 2 張, left: -100%
// index: 2 -> 第 3 張, left: -200%
// index: 3 -> 第 4 張, left: -300%
// index: 4 -> 第 5 張, left: -400%

function toDo() {
    picInterval = setInterval(setSlide, duration)
}

function setSlide() {
    // index += 1;
    // if (index > 4) {
    //     index = 0
    // }
    index < 4 ? index += 1 : index = 0;
    console.log(index)

    $sliceImgInner.css(
        // "left", - 100 * index + "%"
        "left", `${index * -100}%`
    )
}

// init
toDo();

// event
$sliceImgInner.hover(function () {
    clearInterval(picInterval)
}, function () {
    toDo();
})