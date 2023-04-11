let index = 0;
let picInterval;

const duration = 1000;

const $slide = $("#Slide")
const $slideImgInner = $slide.find(".img-inner")

// const $pageBtn = $("#Pagination")
const $pageBtnItems = $slide.find(".pagination-item")

const $imgItems = $slide.find(".img-resp")

function toDo() {
    $slideImgInner.css(
        "left", `${index * -100}%`
    )
    $pageBtnItems
        .eq(index).addClass("js-pagination-item")
        .siblings().removeClass("js-pagination-item")
}

function setSlide() {
    index < $imgItems.length - 1 ? index += 1 : index = 0;
    console.log(index)
    toDo()
}

// init
picInterval = setInterval(setSlide, duration)
toDo()

// event
$slide.hover(function () {
    clearInterval(picInterval)
}, function () {
    picInterval = setInterval(setSlide, duration)
})

$pageBtnItems.click(function () {
    // console.log($(this).index())
    index = $(this).index()
    console.log(index)

    toDo()
})

