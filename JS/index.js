'use strict';
let aud1 = document.getElementById("aud1");
let aud2 = document.getElementById("aud2");
let aud3 = document.getElementById("aud3");
let aud4 = document.getElementById("aud4");
let aud5 = document.getElementById("aud5");
let aud6 = document.getElementById("aud6");


let sb1 = document.getElementById("sb1");
sb1.addEventListener("click", function () {
    aud1.currentTime = 0.1;
    aud1.play();

} ,true);

let sb2 = document.getElementById("sb2");
sb2.addEventListener("click", function () {
    aud2.currentTime = 0.1;
    aud2.play();
} ,true);

let sb3 = document.getElementById("sb3");
sb3.addEventListener("click", function () {
    aud3.currentTime = 0.1;
    aud3.play();
} ,true);

let sb4 = document.getElementById("sb4");
sb4.addEventListener("click", function () {
    aud4.currentTime = 0.1;
    aud4.play();
} ,true);

let sb5 = document.getElementById("sb5");
sb5.addEventListener("click", function () {
    aud5.currentTime = 0.1;
    aud5.play();
} ,true);

let sb6 = document.getElementById("sb6");
sb6.addEventListener("click", function () {
    aud6.currentTime = 0;
    aud6.play();
} ,true);

let drum1 = document.getElementById("drum1");
let drum2 = document.getElementById("drum2");
let drum3 = document.getElementById("drum3");
let drum4 = document.getElementById("drum4");

let d1 = document.getElementById("d1");
d1.addEventListener("click", function () {
    drum1.currentTime = 0;
    drum1.play()
});
let d2 = document.getElementById("d2");
d2.addEventListener("click", function () {
    drum2.currentTime = 0.2;
    drum2.play()
});
let d3 = document.getElementById("d3");
d3.addEventListener("click", function () {
    drum3.currentTime = 0;
    drum3.play()
});
let d4 = document.getElementById("d4");
d4.addEventListener("click", function () {
    drum4.currentTime = 0;
    drum4.play()
});

window.onkeydown = function (e) {
    let key = e.keyCode ? e.keyCode : e.which;
    if(key == 81){
        drum1.currentTime = 0.2;
        drum1.play();
    }
    if(key == 69){
        drum2.currentTime = 0.5;
        drum2.play();
    }
    if(key == 84){
        drum3.currentTime = 0.2;
        drum3.play();
    }
    if(key == 85){
        drum4.currentTime = 0.2;
        drum4.play();
    }
    if(key == 66){
        aud1.currentTime = 0.2;
        aud1.play();
    }
    if(key == 78){
        aud2.currentTime = 0.2;
        aud2.play();
    }
    if(key == 77){
        aud3.currentTime = 0.2;
        aud3.play();
    }
    if(key == 188){
        aud4.currentTime = 0.2;
        aud4.play();
    }
    if(key == 190){
        aud5.currentTime = 0.2;
        aud5.play();
    }
    if(key == 189){
        aud6.currentTime = 0.2;
        aud6.play();
    }

}