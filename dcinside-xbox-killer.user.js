// ==UserScript==
// @name         dcinside xbox killer
// @version      1.0.0
// @description  디시인사이드 엑스 박스 완화 유저 스크립트
// @author       green1052
// @include      *.dcinside.com/*
// @run-at       document-end
// ==/UserScript==

(function () {
    "use strict";

    const imgTag = document.getElementsByTagName("img");

    for (const i = 0; i < imgTag.length; i++) {
        if (imgTag[i].src.includes(".dcinside.co.kr/viewimage.php?"))
            imgTag[i].src = `https://image.dcinside.com/viewimage.php?${imgTag[i].src.split("?")[1]}`;
    }
})();