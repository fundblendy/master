// �X�g�b�v�t���O
var r1_stop = 0;
var r2_stop = 0;
var r3_stop = 0;

// �E�F�C�g�t���O
var keyflag = 0;

// �q���t���O
var flg;

// ���񃂁[�h
var nextmode = 1;

// �I�[�g�v���C�p
var autoflg = 0;
var autoplay;

// �t�����o�p
var nopotflg = 0;

// CZ�J�E���g
var czcount = 0;

// RT�J�E���g
var RTcount = 0;

jQuery.fn.center = function () {
    //position:absolute;��^���āA�E�B���h�E�̃T�C�Y���擾���Atop��left�̒l�𒲐�
    this.css("position","absolute");
    this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
    return this;
};

/* �_�u���^�b�v�ɂ��g����֎~ */
let lastTouch = 0;
document.addEventListener('touchend', event => {
const now = window.performance.now();
if (now - lastTouch <= 400) {
    event.preventDefault();
}
lastTouch = now;
}, true);