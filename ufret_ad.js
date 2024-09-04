// ==UserScript==
// @name         Remove Adblock Thing
// @namespace    http://tampermonkey.net/
// @version      5.6
// @description  Removes Adblock Thing
// @author       JoelMatic
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://github.com/TheRealJoelmatic/RemoveAdblockThing/raw/main/Youtube-Ad-blocker-Reminder-Remover.user.js
// @downloadURL  https://github.com/TheRealJoelmatic/RemoveAdblockThing/raw/main/Youtube-Ad-blocker-Reminder-Remover.user.js
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

}, 100);
