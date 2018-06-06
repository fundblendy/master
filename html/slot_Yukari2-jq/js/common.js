// ストップフラグ
var r1_stop = 0;
var r2_stop = 0;
var r3_stop = 0;

// ウェイトフラグ
var keyflag = 0;

// 子役フラグ
var flg;

// 次回モード
var nextmode = 1;

// オートプレイ用
var autoflg = 0;
var autoplay;

// 液晶演出用
var nopotflg = 0;

// CZカウント
var czcount = 0;

// RTカウント
var RTcount = 0;

jQuery.fn.center = function () {
    //position:absolute;を与えて、ウィンドウのサイズを取得し、topとleftの値を調整
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
    return this;
};

/* ダブルタップによる拡大を禁止 */
let lastTouch = 0;
document.addEventListener('touchend', event => {
const now = window.performance.now();
if (now - lastTouch <= 400) {
    event.preventDefault();
}
lastTouch = now;
}, true);