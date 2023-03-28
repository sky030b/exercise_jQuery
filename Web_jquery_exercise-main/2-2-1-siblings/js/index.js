const $advItems = $("#AdvLs .adv-item")

// 用$("#AdvLs").children()呢？好像也可
$advItems.hover(function () {
    $(this).stop(true, false).animate({top: 0}, 200)
    $(this).siblings().stop(true, false).animate({top: 118}, 200)
}, function () {
    $advItems.stop(true, false).animate({top: 166}, 200)
    // $(this).stop(true, false).animate({top: 166}, 200)
    // $(this).siblings().stop(true, false).animate({top: 166}, 200)
})

// $("#AdvLs").find(".adv-item")也可以
// $("#AdvLs").children().hover(function () {
//     $(this).stop(true, false).animate({top: 0}, 200)
//     $(this).siblings().stop(true, false).animate({top: 118}, 200)
// }, function () {
//     $advItems.stop(true, false).animate({top: 166}, 200)
// })