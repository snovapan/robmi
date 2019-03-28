// ==UserScript==
// @name         robmi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  抢小米手机!
// @author       You
// @match        https://item.mi.com/product/10000135.html
// @match        https://item.mi.com/product/10000134.html
// @match        https://item.mi.com/product/10000131.html
// @match        https://item.mi.com/product/10000123.html
// @match        https://item.mi.com/product/9455.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var count = 0;
    setInterval(function(){
      var buyBtn = document.getElementById('J_buyBtnBox').children;
      if(count < 1 && buyBtn.length > 0  && '加入购物车' == buyBtn[0].children[0].innerText){
          count += 1;
          buyBtn[0].children[0].click();
          console.log(buyBtn[0].children[0].innerText);
      }
    }, 1);
})();