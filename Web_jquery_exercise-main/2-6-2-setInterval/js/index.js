let picNum = 1
const duration = 1
const $pic = $("#Pic")

setInterval(todo, duration * 1000)

function todo() {
    if (picNum < 5) {
        picNum += 1;
    } else {
        picNum = 1;
    }
    $pic.attr("src", `./images/photo${picNum}.jpg`)
}