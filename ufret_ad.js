// ==UserScript==
// @name         ufret-adclose
// @namespace    https://www.ufret.jp/
// @version      2126-08-27
// @description  ublock 必須
// @author       You
// @match        https://www.ufret.jp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ufret.jp
// @grant        none
// @updateURL    https://raw.githubusercontent.com/iorin006/ufret-ad_closer/main/ufret_ad.js
// @downloadURL  https://raw.githubusercontent.com/iorin006/ufret-ad_closer/main/ufret_ad.js
// ==/UserScript==

function remove_class(elements) {
    var jama = document.getElementsByClassName(elements);
    if (jama.length > 0) {
        for (var i = 0; i < jama.length; i++) {
            jama[i].remove()
        }
    }
}

setInterval(() => {

    var jama1 = document.getElementById('ufret-ad-close')
    if (jama1) {
        jama1.click()
    }
    remove_class('notice-close-button');
    remove_class('d-block w-100');
    remove_class('btn btn-lg btn-danger btn-block');
    remove_class('fixed-trial-banner__content d-flex');
    remove_class('fixed-trial-banner container');
    remove_class('fixed-premium-banner__content d-flex');
    remove_class('fixed-premium-banner container');

}, 100);
