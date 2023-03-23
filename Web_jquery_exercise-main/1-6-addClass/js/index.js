// $("#Tab1").click(function () {
//     $("#EntryType").removeClass()
//     $("#EntryType").addClass("entry-out Type1")
// })

// $("#Tab2").click(function () {
//     $("#EntryType").removeClass()
//     $("#EntryType").addClass("entry-out Type2")
// })

// $("#Tab3").click(function () {
//     $("#EntryType").removeClass()
//     $("#EntryType").addClass("entry-out Type3")
// })

const $entryType = $("#EntryType")

$entryType.addClass("Type1")

$("#Tab1").click(function () {
    $entryType
        .removeClass()
        .addClass("entry-out Type1")
    // 相當於$entryType.removeClass().addClass("entry-out Type1")
})

$("#Tab2").click(function () {
    $entryType
        .removeClass()
        .addClass("entry-out Type2")
})

$("#Tab3").click(function () {
    $entryType
        .removeClass()
        .addClass("entry-out Type3")
})