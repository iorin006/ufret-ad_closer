// ==UserScript==
// @name         ufret-ad_close
// @namespace    http://tampermonkey.net/
// @description  ublock推奨
// @author       me & ChatGPT
// @match        https://www.ufret.jp/*
// @icon         https://www.ufret.jp/favicon.ico
// @updateURL    https://github.com/iorin006/ufret-ad_closer/raw/main/ufret-ad_close.js
// @downloadURL  https://github.com/iorin006/ufret-ad_closer/raw/main/ufret-ad_close.js
// @grant        none
// ==/UserScript==

(() => {
  $.get('/web_api/set_ad_free_start_time.php', { start_time: Date.now() / 10 })
    .fail(() => alert('広告非表示の設定に失敗しました。'));

  const removeByClass = cls =>
    document.querySelectorAll('.' + cls.split(' ').join('.')).forEach(el => el.remove());

  setInterval(() => {
    const adCloseBtn = document.getElementById('ufret-ad-close');
    adCloseBtn && adCloseBtn.click();

    document.querySelectorAll('img').forEach(img => img.setAttribute('width', '0%'));

    [
      'notice-close-button',
      'd-block w-100',
      'btn btn-lg btn-danger btn-block',
      'fixed-trial-banner__content d-flex',
      'fixed-trial-banner container',
      'fixed-premium-banner__content d-flex',
      'fixed-premium-banner container',
      'notice-background'
    ].forEach(removeByClass);
  }, 100);
})();
