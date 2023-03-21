// jquery 選取
// $("h1")
// $("#ID")
// $(".class")

// css 選取
// h1
// #ID
// .class

// 標題一 的 "事件" 放開
// $("h1").on("click", function() {
//     alert("hello world")
// });

// $("p").on("click", function() { 
//     alert("我點到段落了")
// });

// 匿名函式
// ----------------------------------------------------------------------------
// 具名函式

// $("h1").on("click", getTitle);
// $("p").on("click", getParagraph);

// function getTitle() {
//     alert("我點到標題一");
// }

// function getParagraph() {
//     alert("我點到段落");
// }

// ----------------------------------------------------------------------------
// $("h1"), $("p") .on("click", function() {
//     alert("hello world")
// }); 錯誤嘗試

// 群組化

// $("h1, p").on("click", function() {
//     alert("hello world")
// }); 

$("h1").on("click", HelloWorld);
$("p").on("mouseover", HelloWorld);

function HelloWorld() {
    alert("hello world"); //一行的話可以不用加;
}