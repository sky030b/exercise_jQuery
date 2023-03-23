// $("#Item1").mouseover(function () { //vs. mouseenter
//     $("#Child1").slideDown();
// });

// $("#Item1").mouseout(function () { //vs. mouseleave
//     $("#Child1").slideUp()
// })

// $("#Item1").hover("滑入事件", "滑出事件")
$("#Item1").hover(function () {
    $("#Child1").stop(true, false).show();
}, function () {
    $("#Child1").stop(true, false).hide();
});

$("#Item2").hover(function () {
    $("#Child2").stop(true, false).slideDown();
}, function () {
    $("#Child2").stop(true, false).slideUp();
});

// $("#Item2").hover(function () {
//     $("#Child2").stop(true, false).fadeIn();
// }, function () {
//     $("#Child2").stop(true, false).fadeOut();
// });

$("#Item3").hover(function () {
    $("#Child3").stop(true, false).fadeIn();
}, function () {
    $("#Child3").stop(true, false).fadeOut();
});

// $("#Item4").hover(function () {
//     $("#Child4").stop(true, false).fadeIn();
// }, function () {
//     $("#Child4").stop(true, false).fadeOut();
// });

// 嘗試失敗
// function stop_fadeIn(a) {
//     $(a).stop(true, false).fadeIn();
// }

// function stop_fadeOut(a) {
//     $(a).stop(true, false).fadeOut();
// }

// $("#Item4").hover(stop_fadeIn("#Child4"), stop_fadeOut("#Child4"));
