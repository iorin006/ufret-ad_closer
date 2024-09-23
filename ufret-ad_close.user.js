// ==UserScript==
// @name         ufret-ad_close
// @namespace    http://tampermonkey.net/
// @description  ublock必須
// @author       me
// @match        https://www.ufret.jp/*
// @icon         https://www.ufret.jp/favicon.ico
// @updateURL    https://github.com/iorin006/ufret-ad_closer/raw/main/ufret-ad_close.js
// @downloadURL  https://github.com/iorin006/ufret-ad_closer/raw/main/ufret-ad_close.js
// @grant        none
// ==/UserScript==

function myFunction(e) {
    e.preventDefault();
    var now = new Date().getTime() / 10;
    $.get('/web_api/set_ad_free_start_time.php', {
        start_time: now
    }, function (response) {
       // window.location.reload();
    }).fail(function () {
        alert('広告非表示の設定に失敗しました。');
    });
}

myFunction(new Event('click'));

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
    var images = document.getElementsByTagName('img')

    if (jama1) {
        jama1.click()
    }

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('width', '0%');
    }

    remove_class('notice-close-button');
    remove_class('d-block w-100');
    remove_class('btn btn-lg btn-danger btn-block');
    remove_class('fixed-trial-banner__content d-flex');
    remove_class('fixed-trial-banner container');
    remove_class('fixed-premium-banner__content d-flex');
    remove_class('fixed-premium-banner container');
    remove_class('notice-background')

}, 100);
