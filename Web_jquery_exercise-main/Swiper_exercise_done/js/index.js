const $swiper = $("#Swiper");
const $swiperItem = $swiper.find(".swiper-li");
const $swiperPageItem = $swiper.find(".swiper-pagination");
const $swiperBtnPrev = $swiper.find(".swiper-btn-prev");
const $swiperBtnNext = $swiper.find(".swiper-btn-next");
let picInterval;
const duration = 5000

// console.log($swiper);
// console.log($swiperPageItem.index());

let index = $swiperPageItem.index();
// console.log(index)

// init: 載入畫面時
// $swiperItem.eq(index).css("display", "block")
// $swiperItem.eq(index).show()
// $swiperPageItem.eq(index).addClass("swiper-pagination-active")
setState()

function setState() {
    $swiperItem
        .eq(index).stop(true, false).fadeIn()
        .siblings().stop(true, false).fadeOut()

    $swiperPageItem
        .eq(index).addClass("swiper-pagination-active")
        .siblings().removeClass("swiper-pagination-active")
} 

function doNext() {
    $swiperBtnNext.click()
}

// event: 事件處理
$swiperBtnNext.click(function () {
    // $swiperItem.eq(index).css("display", "none")
    // $swiperPageItem.eq(index).removeClass("swiper-pagination-active")
    // // if (index < 4) {
    // //     index += 1
    // // } else {
    // //     index = 0
    // // }
    // index += 1
    // if (index > 4) {
    //     index = 0
    // }
    // // console.log(index);

    // index += 1
    // if (index > 4) {
    //     index = 0
    // }
    index < 4 ? index += 1 : index = 0;

    // $swiperItem.eq(index).css("display", "block")
    // $swiperPageItem.eq(index).addClass("swiper-pagination-active")
    // // clearInterval(timerId)


    // $swiperItem
    //     .eq(index).stop(true, false).fadeIn()
    //     .siblings().stop(true, false).fadeOut()

    // $swiperPageItem
    //     .eq(index).addClass("swiper-pagination-active")
    //     .siblings().removeClass("swiper-pagination-active")
    setState()
    clearInterval(picInterval)
    picInterval = setInterval(doNext, duration)
})

$swiperBtnPrev.click(function () {
    // index -= 1
    // if (index < 0) {
    //     index = 4
    // }

    index > 0 ? index -= 1 : index = 4;

    // $swiperItem
    //     .eq(index).stop(true, false).css("display", "block")
    //     .siblings().stop(true, false).css("display", "none")

    // $swiperPageItem
    //     .eq(index).addClass("swiper-pagination-active")
    //     .siblings().removeClass("swiper-pagination-active")
    setState()
    clearInterval(picInterval)
    picInterval = setInterval(doNext, duration)
})

picInterval = setInterval(doNext, duration)
