var MonsterImg = document.getElementById("MonsterImg");
var thanksId = document.getElementById("thanksId");
var ClickMeImg = document.getElementById("ClickMeImg");
//hideimages on page load
MonsterImg.style.display = "none";
thanksId.style.display = "none";
//onclick toggle img 
function myFunction() {
    if (MonsterImg.style.display === "none") {
        MonsterImg.style.display = "block";
        ClickMeImg.style.display = "none";
        thanksId.style.display = "block";
    }
}
//onlcick move item to the right
var MonsterImgObj = null;

function init() {
    MonsterImgObj = document.getElementById('MonsterImg');
    MonsterImgObj.style.position = 'relative';
    MonsterImgObj.style.left = '0px';
    MonsterImgObj.style.top = "-62px";
}
function moveRight() {
    MonsterImgObj.style.left = parseInt(MonsterImgObj.style.left) + 300 + 'px';
}

window.onload = init;