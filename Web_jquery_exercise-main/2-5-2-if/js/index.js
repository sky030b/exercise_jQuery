// let fileNum = 2; vs. var
// const $pic = $("#Pic")
 
// // 初始化：利用 Js 注入影像
// // $("#Pic").attr("src", "./images/ui03.jpg")

// $pic.attr("src", "./images/ui0" + fileNum + ".jpg")

// $pic.click(function () {

    // if (fileNum < 4) {
    //     fileNum ++;
    //     // fileNum += 1;
    //     // fileNum = fileNum + 1;
    // } else {
    //     fileNum = 1;
    // }
//     console.log(fileNum);
//     $(this).attr("src", `./images/ui0${fileNum}.jpg`)
//     // $(this) better than $pic, $pic better than $("#Pic")
// })




// －－－－－－－－－－－－－－－－－－－－－－－
// 純javascript寫法
// 可不用加<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

let fileNum = 1;
const elemPic = document.getElementById("Pic");
elemPic.setAttribute("src", `./images/ui0${fileNum}.jpg`);

elemPic.addEventListener("click", function () {
    if (fileNum < 4) {
        fileNum ++;
    } else {
        fileNum = 1;
    }
    this.setAttribute("src", `./images/ui0${fileNum}.jpg`);
})
