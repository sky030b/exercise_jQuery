// const $

// 按p的話也會收起來
// $("#LessonLs > .lesson-item").click(function () {
//     // $(this).find(".lesson-desc").slideDown()
//     $(this).find(".lesson-desc").slideToggle()
//     $(this).siblings().find(".lesson-desc").slideUp()
// })

// click設在h2上就不會有這個問題了
$("#LessonLs .lesson-title").click(function () {
    $(this).next().stop(true, false).slideToggle();
    $(this).parent().siblings().find(".lesson-desc").slideUp();
})