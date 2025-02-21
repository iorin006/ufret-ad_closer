// ==UserScript==
// @name         ufret-ad_close
// @namespace    http://tampermonkey.net/
// @description  ublock推奨
// @author       me & AI
// @match        https://www.ufret.jp/*
// @icon         https://www.ufret.jp/favicon.ico
// @updateURL    https://github.com/iorin006/ufret-ad_closer/raw/main/ufret-ad_close.js
// @downloadURL  https://github.com/iorin006/ufret-ad_closer/raw/main/ufret-ad_close.js
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    
    // 広告非表示開始時刻をセキュアに設定する（fetchを利用）
    const setAdFreeStartTime = () => {
        const now = Date.now() / 10;
        fetch(`/web_api/set_ad_free_start_time.php?start_time=${encodeURIComponent(now)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('ネットワークエラー');
                }
            })
            .catch(error => {
                console.error('広告非表示設定に失敗:', error);
            });
    };

    // 指定したセレクタに合致する要素をすべて削除する
    const removeElements = (selectors) => {
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => element.remove());
        });
    };

    // 指定したセレクタの要素が存在すればクリックする
    const clickIfExists = (selector) => {
        const el = document.querySelector(selector);
        if (el) el.click();
    };

    // すべての画像の幅を0%にして非表示にする
    const hideImages = () => {
        document.querySelectorAll('img').forEach(img => {
            img.style.width = '0%';
        });
    };

    // 広告や不要な要素を削除する処理をまとめる
    const removeAds = () => {
        clickIfExists('#ufret-ad-close');
        hideImages();
        removeElements([
            '.notice-close-button',
            '.d-block.w-100',
            '.btn.btn-lg.btn-danger.btn-block',
            '.fixed-trial-banner__content.d-flex',
            '.fixed-trial-banner.container',
            '.fixed-premium-banner__content.d-flex',
            '.fixed-premium-banner.container',
            '.notice-background'
        ]);
    };

    // 定期的に広告削除処理を実行（ランダムな間隔で実行することでパターンを隠蔽）
    const scheduleRemoval = () => {
        removeAds();
        const delay = 500 + Math.random() * 250; // 500～750msのランダムな遅延
        setTimeout(scheduleRemoval, delay);
    };

    // 初期化処理
    setAdFreeStartTime();
    scheduleRemoval();
})();
