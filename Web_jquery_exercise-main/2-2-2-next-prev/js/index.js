const $advItems = $("#AdvLs .adv-item")

// console.log($adItems); //去F12 console檢查

$advItems.hover(function () {
    $(this).stop(true, false).animate({top: 0}, 200)
    $(this).prev().stop(true, false).animate({top: 116}, 200)
    $(this).next().stop(true, false).animate({top: 116}, 200)
}, function () {
    $advItems.stop(true, false).animate({top: 166}, 200)
})