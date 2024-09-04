// ==UserScript==
// @name         ufret-ad_close
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  ublock必須
// @author       me
// @match        https://www.ufret.jp/*
// @icon         https://www.ufret.jp/favicon.ico
// @updateURL    https://github.com/iorin006/ufret-ad_closer/raw/main/ufret-ad_close.js
// @downloadURL  https://github.com/iorin006/ufret-ad_closer/raw/main/ufret-ad_close.js
// @require      https://github.com/iorin006/ufret-ad_closer/raw/main/ufret-ad_close.js
// @grant        none
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
    remove_class('notice-background')
    remove_class('col-12')

}, 100);
