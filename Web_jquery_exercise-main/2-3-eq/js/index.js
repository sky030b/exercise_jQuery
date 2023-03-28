const $thumbItems = $("#ThumbLs > img")
const $picItems = $("#PicLs > img")

// console.log($thumbItems)
// console.log($picItems)

$thumbItems.click(function () {
    // console.log($(this).index()); // 抓this的索引
    
    const index = $(this).index()
    // console.log(index); // 抓this的索引

    // $picItems.fadeOut();
    // $picItems.eq(index).fadeIn();

    // $picItems
    //     .fadeOut()
    //     .eq(index).fadeIn()

    $picItems
        .eq(index).fadeIn()
        .siblings().fadeOut()
})