const $naviItems = $("#NaviLs > li");

$naviItems.hover(function () {
$(this).find("ul").stop(true, false).slideDown()
}, function () {
    $(this).find("ul").stop(true, false).slideUp()
})