
// ���C���v�f
var main = $("<div></div>", {
    width: 852,
    height: 840,
    css: {border: "2px solid gray"},
    addClass: "main",
    on: {
      click: function(event) {
        // �C�x���g�ݒ�
      }
    }
});

// ���[���{�f�B�v�f
var reelbody = $("<div></div>", {
    width: 852,
    height: 720,
    addClass: "reel-body",
    zindex: 2,
    on: {
      click: function(event) {
        // �C�x���g�ݒ�
      }
    }
});

// �t���v�f
var display = $("<div></div>", {
    width: 852,
    height: 320,
    css: {
        top: "129px",
        left: "2px",
        zindex: 1,
        background: "black",
        position: "absolute",
        overflow: "hidden"
    },
    addClass: "display",
    on: {
      click: function(event) {
        // �C�x���g�ݒ�
      }
    }
});

// ���[��1�v�f
var reel1 = $("<div></div>", {
    width: 201,
    height: 216,
    css: {
        top: "509px",
        left: "107px",
        zindex: 1,
        background: "lightgray",
        position: "absolute",
        overflow: "hidden"
    },
    addClass: "reel1",
    on: {
      click: function() {
        // �C�x���g�ݒ�
      }
    }
});


// ���[��2�v�f
var reel2 = $("<div></div>", {
    width: 201,
    height: 216,
    css: {
        top: "509px",
        left: "325px",
        zindex: 1,
        background: "lightgray",
        position: "absolute",
        overflow: "hidden"
    },
    addClass: "reel2",
    on: {
      click: function() {
        // �C�x���g�ݒ�
      }
    }
});

// ���[��3�v�f
var reel3 = $("<div></div>", {
    width: 201,
    height: 216,
    css: {
        top: "509px",
        left: "544px",
        zindex: 1,
        background: "lightgray",
        position: "absolute",
        overflow: "hidden"
    },
    addClass: "reel3",
    on: {
      click: function() {
        // �C�x���g�ݒ�
      }
    }
});

// �{�^���y��v�f
var buttonbase = $("<div></div>", {
    width: 852,
    height: 120,
    css: {
        zindex: 1,
        background: "lightslategray",
    },
    addClass: "buttonbase",
    on: {
      click: function(event) {
        // �C�x���g�ݒ�
      }
    }
});


// �X�^�[�g�{�^��
var startb = $("<div></div>", {
    width: 80,
    height: 80,
    css: {
        display: "inline-block",
        "margin-top": "20px",
        "margin-left":"50px",
        "border-radius": "50%",
        zindex: 1,
        background: "black",
    },
    Id: "start",
    on: {
      click: function() {
        if (keyflag == 0){
            startall();
            keyflag += 1;
            r1_stop = 0;
            r2_stop = 0;
            r3_stop = 0;
            $("#stop1").css("background","#990000");
            $("#stop2").css("background","#990000");
            $("#stop3").css("background","#990000");
        }
      }
    }
});

// �X�g�b�v�{�^��1
var stop1b = $("<div></div>", {
    width: 90,
    height: 90,
    css: {
        display: "inline-block",
        "margin-top": "15px",
        "margin-left":"110px",
        "border-radius": "50%",
        zindex: 1,
        background: "#990000",
    },
    Id: "stop1",
    on: {
      click: function() {
        r1_stop = 1;
        $("#stop1").css("background","#330000");
        keyflag += 1;
        end();
      }
    }
});

// �X�g�b�v�{�^��2
var stop2b = $("<div></div>", {
    width: 90,
    height: 90,
    css: {
        display: "inline-block",
        "margin-top": "15px",
        "margin-left":"45px",
        "border-radius": "50%",
        zindex: 1,
        background: "#990000",
    },
    Id: "stop2",
    on: {
      click: function() {
        r2_stop = 1;
        $("#stop2").css("background","#330000");
        keyflag += 1;
        end();
      }
    }
});

// �X�g�b�v�{�^��3
var stop3b = $("<div></div>", {
    width: 90,
    height: 90,
    css: {
        display: "inline-block",
        "margin-top": "15px",
        "margin-left":"45px",
        "border-radius": "50%",
        zindex: 1,
        background: "#990000",
    },
    Id: "stop3",
    on: {
      click: function() {
        r3_stop = 1;
        $("#stop3").css("background","#330000");
        keyflag += 1;
        end();
      }
    }
});

// �G�N�X�g���{�^��
var exb = $("<div></div>", {
    width: 190,
    height: 100,
    css: {
        position: "absolute",
        top: "830px",
        left:"650px",
        "text-align":"center",
        "border-radius": "10%",
        zindex: 1,
        background: "#333333",
    },
    addClass: "extra",
    on: {
      click: function() {
      }
    }
});

// �����{�^��
var oneb = $("<div></div>", {
    width: 150,
    height: 40,
    css: {
        "margin-top": "5px",
        "margin-left":"20px",
        "border-radius": "3%",
        "font-size": "24px",
        "text-align":"center",
        zindex: 1,
        background: "#33cc66",
    },
    Id: "one",
    on: {
        click: function() {
            startauto();
        }
    }
});

// �I�[�g�{�^��
var autob = $("<div></div>", {
    width: 150,
    height: 40,
    css: {
        "margin-top": "5px",
        "margin-left":"20px",
        "border-radius": "3%",
        "font-size": "24px",
        "text-align":"center",
        zindex: 1,
        background: "#ff6600",
    },
    Id: "auto",
    on: {
        click: function() {

            if (autoflg == 0){
                startauto();
                autoplay = setInterval (startauto,800);
                autoflg = 1;
                return;
            }
            
            if (autoflg == 1){
                clearInterval(autoplay);
                autoflg = 0;
                return;
            }
            
        }
    }
});


// �t���b�V��
var flash1_0 = $("<div></div>", {
    width: 201,
    height: 72,
    css: {
        top: "509px",
        left: "107px",
        zindex: 100,
        background: "black",
        position: "absolute",
        opacity: 0
    },
    addClass: "reel1_0"
});
var flash1_1 = $("<div></div>", {
    width: 201,
    height: 72,
    css: {
        top: "581px",
        left: "107px",
        zindex: 100,
        background: "black",
        position: "absolute",
        opacity: 0
    },
    addClass: "reel1_1"
});
var flash1_2 = $("<div></div>", {
    width: 201,
    height: 72,
    css: {
        top: "653px",
        left: "107px",
        zindex: 100,
        background: "black",
        position: "absolute",
        opacity: 0
    },
    addClass: "reel1_2",
});

var flash2_0 = $("<div></div>", {
    width: 201,
    height: 72,
    css: {
        top: "509px",
        left: "325px",
        zindex: 100,
        background: "black",
        position: "absolute",
        opacity: 0
    },
    addClass: "reel2_0",
});
var flash2_1 = $("<div></div>", {
    width: 201,
    height: 72,
    css: {
        top: "581px",
        left: "325px",
        zindex: 100,
        background: "black",
        position: "absolute",
        opacity: 0
    },
    addClass: "reel2_1",
});
var flash2_2 = $("<div></div>", {
    width: 201,
    height: 72,
    css: {
        top: "653px",
        left: "325px",
        zindex: 100,
        background: "black",
        position: "absolute",
        opacity: 0
    },
    addClass: "reel2_2",
});
var flash3_0 = $("<div></div>", {
    width: 201,
    height: 72,
    css: {
        top: "509px",
        left: "544px",
        zindex: 100,
        background: "black",
        position: "absolute",
        opacity: 0
    },
    addClass: "reel3_0",
});
var flash3_1 = $("<div></div>", {
    width: 201,
    height: 72,
    css: {
        top: "581px",
        left: "544px",
        zindex: 100,
        background: "black",
        position: "absolute",
        opacity: 0
    },
    addClass: "reel3_1",
});
var flash3_2 = $("<div></div>", {
    width: 201,
    height: 72,
    css: {
        top: "653px",
        left: "544px",
        zindex: 100,
        background: "black",
        position: "absolute",
        opacity: 0
    },
    addClass: "reel3_2",
});


var imgbody = $("<img class='imgbody'>").attr("src","./img/main-black.png").attr("style","z-index:1000; position:absolute;");



///////////////////////////////////////////////////////////////////////////////////////////////////
// ���[��1�̐}���z��(�ŏ���3�͍Ō��3�Ɠ����}���ɂ��邱��)
var r1_00 = $("<img id='r1_00'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r1_01 = $("<img id='r1_00'>").attr("src","./img/00sevenR.png").attr("style","display:block;");
var r1_02 = $("<img id='r1_00'>").attr("src","./img/00sevenB.png").attr("style","display:block;");
var r1_03 = $("<img id='r1_01'>").attr("src","./img/00cherry.png").attr("style","display:block;");
var r1_04 = $("<img id='r1_02'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r1_05 = $("<img id='r1_03'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r1_06 = $("<img id='r1_04'>").attr("src","./img/00blank.png").attr("style","display:block;");
var r1_07 = $("<img id='r1_05'>").attr("src","./img/00cherry.png").attr("style","display:block;");
var r1_08 = $("<img id='r1_06'>").attr("src","./img/00suika.png").attr("style","display:block;");
var r1_09 = $("<img id='r1_07'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r1_10 = $("<img id='r1_08'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r1_11 = $("<img id='r1_09'>").attr("src","./img/00bar.png").attr("style","display:block;");
var r1_12 = $("<img id='r1_10'>").attr("src","./img/00cherry.png").attr("style","display:block;");
var r1_13 = $("<img id='r1_11'>").attr("src","./img/00suika.png").attr("style","display:block;");
var r1_14 = $("<img id='r1_12'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r1_15 = $("<img id='r1_13'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r1_16 = $("<img id='r1_14'>").attr("src","./img/00blank.png").attr("style","display:block;");
var r1_17 = $("<img id='r1_15'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r1_18 = $("<img id='r1_16'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r1_19 = $("<img id='r1_17'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r1_20 = $("<img id='r1_18'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r1_21 = $("<img id='r1_19'>").attr("src","./img/00sevenR.png").attr("style","display:block;");
var r1_22 = $("<img id='r1_20'>").attr("src","./img/00sevenB.png").attr("style","display:block;");

var r1 = [r1_00,r1_01,r1_02,r1_03,r1_04,r1_05,r1_06,r1_07,r1_08,r1_09,r1_10,r1_11,r1_12,r1_13,r1_14,r1_15,r1_16,r1_17,r1_18,r1_19,r1_20,r1_21,r1_22];
var r1move = [["#r1_20","�V"],
              ["#r1_19","�ԂV"],
              ["#r1_18","���v���C"],
              ["#r1_17","�x��"],
              ["#r1_16","���v���C"],
              ["#r1_15","�x��"],
              ["#r1_14","�u�����N"],
              ["#r1_13","���v���C"],
              ["#r1_12","�x��"],
              ["#r1_11","�X�C�J"],
              ["#r1_10","�`�F���["],
              ["#r1_09","BAR"],
              ["#r1_08","���v���C"],
              ["#r1_07","�x��"],
              ["#r1_06","�X�C�J"],
              ["#r1_05","�`�F���["],
              ["#r1_04","�u�����N"],
              ["#r1_03","���v���C"],
              ["#r1_02","�x��"],
              ["#r1_01","�`�F���["]
             ];

////////////////////////////////////////////////////////////////////////////////////////////////////
// ���[��2�̐}���z��(�ŏ���3�͍Ō��3�Ɠ����}���ɂ��邱��)
var r2_00 = $("<img id='r2_00'>").attr("src","./img/00sevenB.png").attr("style","display:block;");
var r2_01 = $("<img id='r2_00'>").attr("src","./img/00sevenR.png").attr("style","display:block;");
var r2_02 = $("<img id='r2_00'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r2_03 = $("<img id='r2_01'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r2_04 = $("<img id='r2_02'>").attr("src","./img/00suika.png").attr("style","display:block;");
var r2_05 = $("<img id='r2_03'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r2_06 = $("<img id='r2_04'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r2_07 = $("<img id='r2_05'>").attr("src","./img/00cherry.png").attr("style","display:block;");
var r2_08 = $("<img id='r2_06'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r2_09 = $("<img id='r2_07'>").attr("src","./img/00suika.png").attr("style","display:block;");
var r2_10 = $("<img id='r2_08'>").attr("src","./img/00cherry.png").attr("style","display:block;");
var r2_11 = $("<img id='r2_09'>").attr("src","./img/00bar.png").attr("style","display:block;");
var r2_12 = $("<img id='r2_10'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r2_13 = $("<img id='r2_11'>").attr("src","./img/00suika.png").attr("style","display:block;");
var r2_14 = $("<img id='r2_12'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r2_15 = $("<img id='r2_13'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r2_16 = $("<img id='r2_14'>").attr("src","./img/00blank.png").attr("style","display:block;");
var r2_17 = $("<img id='r2_15'>").attr("src","./img/00suika.png").attr("style","display:block;");
var r2_18 = $("<img id='r2_16'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r2_19 = $("<img id='r2_17'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r2_20 = $("<img id='r2_18'>").attr("src","./img/00sevenB.png").attr("style","display:block;");
var r2_21 = $("<img id='r2_19'>").attr("src","./img/00sevenR.png").attr("style","display:block;");
var r2_22 = $("<img id='r2_20'>").attr("src","./img/00replay.png").attr("style","display:block;");

var r2 = [r2_00,r2_01,r2_02,r2_03,r2_04,r2_05,r2_06,r2_07,r2_08,r2_09,r2_10,r2_11,r2_12,r2_13,r2_14,r2_15,r2_16,r2_17,r2_18,r2_19,r2_20,r2_21,r2_22];
var r2move = [["#r2_20","���v���C"],
              ["#r2_19","�ԂV"],
              ["#r2_18","�V"],
              ["#r2_17","�x��"],
              ["#r2_16","���v���C"],
              ["#r2_15","�X�C�J"],
              ["#r2_14","�u�����N"],
              ["#r2_13","�x��"],
              ["#r2_12","���v���C"],
              ["#r2_11","�X�C�J"],
              ["#r2_10","���v���C"],
              ["#r2_09","BAR"],
              ["#r2_08","�`�F���["],
              ["#r2_07","�X�C�J"],
              ["#r2_06","���v���C"],
              ["#r2_05","�`�F���["],
              ["#r2_04","�x��"],
              ["#r2_03","���v���C"],
              ["#r2_02","�X�C�J"],
              ["#r2_01","�x��"]
             ];

////////////////////////////////////////////////////////////////////////////////////////////////////
// ���[��3�̐}���z��(�ŏ���3�͍Ō��3�Ɠ����}���ɂ��邱��)
var r3_00 = $("<img id='r3_00'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r3_01 = $("<img id='r3_00'>").attr("src","./img/00sevenR.png").attr("style","display:block;");
var r3_02 = $("<img id='r3_00'>").attr("src","./img/00sevenB.png").attr("style","display:block;");
var r3_03 = $("<img id='r3_01'>").attr("src","./img/00suika.png").attr("style","display:block;");
var r3_04 = $("<img id='r3_02'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r3_05 = $("<img id='r3_03'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r3_06 = $("<img id='r3_04'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r3_07 = $("<img id='r3_05'>").attr("src","./img/00cherry.png").attr("style","display:block;");
var r3_08 = $("<img id='r3_06'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r3_09 = $("<img id='r3_07'>").attr("src","./img/00suika.png").attr("style","display:block;");
var r3_10 = $("<img id='r3_08'>").attr("src","./img/00cherry.png").attr("style","display:block;");
var r3_11 = $("<img id='r3_09'>").attr("src","./img/00bar.png").attr("style","display:block;");
var r3_12 = $("<img id='r3_10'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r3_13 = $("<img id='r3_11'>").attr("src","./img/00bar.png").attr("style","display:block;");
var r3_14 = $("<img id='r3_12'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r3_15 = $("<img id='r3_13'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r3_16 = $("<img id='r3_14'>").attr("src","./img/00suika.png").attr("style","display:block;");
var r3_17 = $("<img id='r3_15'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r3_18 = $("<img id='r3_16'>").attr("src","./img/00replay.png").attr("style","display:block;");
var r3_19 = $("<img id='r3_17'>").attr("src","./img/00cherry.png").attr("style","display:block;");
var r3_20 = $("<img id='r3_18'>").attr("src","./img/00bell.png").attr("style","display:block;");
var r3_21 = $("<img id='r3_19'>").attr("src","./img/00sevenR.png").attr("style","display:block;");
var r3_22 = $("<img id='r3_20'>").attr("src","./img/00sevenB.png").attr("style","display:block;");

var r3 = [r3_00,r3_01,r3_02,r3_03,r3_04,r3_05,r3_06,r3_07,r3_08,r3_09,r3_10,r3_11,r3_12,r3_13,r3_14,r3_15,r3_16,r3_17,r3_18,r3_19,r3_20,r3_21,r3_22];
var r3move = [["#r3_20","�V"],
              ["#r3_19","�ԂV"],
              ["#r3_18","�x��"],
              ["#r3_17","�`�F���["],
              ["#r3_16","���v���C"],
              ["#r3_15","�x��"],
              ["#r3_14","�X�C�J"],
              ["#r3_13","�x��"],
              ["#r3_12","���v���C"],
              ["#r3_11","BAR"],
              ["#r3_10","�x��"],
              ["#r3_09","BAR"],
              ["#r3_08","�`�F���["],
              ["#r3_07","�X�C�J"],
              ["#r3_06","�x��"],
              ["#r3_05","�`�F���["],
              ["#r3_04","���v���C"],
              ["#r3_03","�x��"],
              ["#r3_02","���v���C"],
              ["#r3_01","�X�C�J"]
             ];


$('body').append(main);
$('.main').append(reelbody);
$('.reel-body').append(display);
$('.reel-body').append(imgbody);
$('.reel-body').append(reel1);
$('.reel-body').append(reel2);
$('.reel-body').append(reel3);
$('.reel-body').append(flash1_0);
$('.reel-body').append(flash1_1);
$('.reel-body').append(flash1_2);
$('.reel-body').append(flash2_0);
$('.reel-body').append(flash2_1);
$('.reel-body').append(flash2_2);
$('.reel-body').append(flash3_0);
$('.reel-body').append(flash3_1);
$('.reel-body').append(flash3_2);
$("body").center();
$('.main').append(buttonbase);
$('.buttonbase').append(startb);
$('.buttonbase').append(stop1b);
$('.buttonbase').append(stop2b);
$('.buttonbase').append(stop3b);
$('.buttonbase').append(exb);
$('.extra').append(oneb);
$('.extra').append(autob);


for (var i=0; i <= 22; i++){
    $('.reel1').append(r1[i]);
    $('.reel2').append(r2[i]);
    $('.reel3').append(r3[i]);
}

displayinit();

function startauto(){
    if (keyflag == 0){
        startall();
        keyflag += 1;
        r1_stop = 0;
        r2_stop = 0;
        r3_stop = 0;
        $("#stop1").css("background","#990000");
        $("#stop2").css("background","#990000");
        $("#stop3").css("background","#990000");
        return;
    }
        if (keyflag == 1){
        r1_stop = 1;
        $("#stop1").css("background","#330000");
        keyflag += 1;
        end();
        return;
    }
        if (keyflag == 2){
        r2_stop = 1;
        $("#stop2").css("background","#330000");
        keyflag += 1;
        end();
        return;
    }
        if (keyflag == 3){
        r3_stop = 1;
        $("#stop3").css("background","#330000");
        keyflag += 1;
        end();
        return;
    }
}

function startall() {
    vm.coin -= 3;
    vm.get = 0;
    vm.count1 += 1;
    if (nextmode != 2){vm.count2 += 1;}
    vm.count3 -= 1;
    setTimeout('reelkaiten1()'); //�A�j���[�V���������s
    setTimeout('reelkaiten2()');
    setTimeout('reelkaiten3()');
    var no = [".reel1_0",".reel1_1",".reel1_2",".reel2_0",".reel2_1",".reel2_2",".reel3_0",".reel3_1",".reel3_2"];
    flashreset(no);
    mainpot(nextmode);
    nopotall();
}


function reelkaiten1() {
    if (r1move[0][0] == "#r1_20"){
        $("#r1_00").animate({
            marginTop: "-"+(KOMA*20)+"px"�@//�v�f��߂��ʒu
        }, 0)
    }
    $("#r1_00").animate({
        marginTop: "+="+KOMA+"px" //�v�f�𓮂����ʒu
    }, 50,"linear")
    r1move.push(r1move[0]);
    r1move.shift();
    //alert(r1move[0]);

    if (r1_stop == 0){
        setTimeout("reelkaiten1()", 58);//�A�j���[�V�������J��Ԃ��Ԋu
    } else{
        reel1suberi();
    }
}

function reelkaiten2() {
    if (r2move[0][0] == "#r2_20"){
        $("#r2_00").animate({
            marginTop: "-"+(KOMA*20)+"px"�@//�v�f��߂��ʒu
        }, 0)
    }
    $("#r2_00").animate({
        marginTop: "+="+KOMA+"px" //�v�f�𓮂����ʒu
    }, 50,"linear")
    r2move.push(r2move[0]);
    r2move.shift();
    //alert(r1move[0]);


    if (r2_stop == 0){
        setTimeout("reelkaiten2()", 58);//�A�j���[�V�������J��Ԃ��Ԋu
    } else{
        reel2suberi();
    }
}

function reelkaiten3() {
    if (r3move[0][0] == "#r3_20"){
        $("#r3_00").animate({
            marginTop: "-"+(KOMA*20)+"px"�@//�v�f��߂��ʒu
        }, 0)
    }
    $("#r3_00").animate({
        marginTop: "+="+KOMA+"px" //�v�f�𓮂����ʒu
    }, 50,"linear")
    r3move.push(r3move[0]);
    r3move.shift();
    //alert(r1move[0]);

    if (r3_stop == 0){  
        setTimeout("reelkaiten3()", 58);//�A�j���[�V�������J��Ԃ��Ԋu
    } else{
        reel3suberi();
    }
}
   


//////////////////////////////////////////////////////////////////////////////////////////////
//���萧��
function reel1suberi(){
    switch(flg){
        case "�n�Y��A":if(r1move[1][1] != "���v���C"){setTimeout("reelkaiten1()", 58);} break;
        case "�n�Y��B":if(r1move[2][1] != "�x��"){setTimeout("reelkaiten1()", 58);} break;
        case "�n�Y��C":if(r1move[1][1] != "���v���C"){setTimeout("reelkaiten1()", 58);} break;
        case "���v���C":if(r1move[1][1] != "���v���C"){setTimeout("reelkaiten1()", 58);} break;
        case "�x��A":if(r1move[2][1] != "�x��"){setTimeout("reelkaiten1()", 58);} break;
        case "�x��B":if(r1move[2][1] != "�x��"){setTimeout("reelkaiten1()", 58);} break;
        case "�x��C":if(r1move[1][1] != "�x��"){setTimeout("reelkaiten1()", 58);} break;
        case "�`�F���[A":if(r1move[2][1] != "���v���C"){setTimeout("reelkaiten1()", 58);} break;
        case "�`�F���[B":if(r1move[2][1] != "���v���C"){setTimeout("reelkaiten1()", 58);} break;
        case "�`�F���[C":if(r1move[1][1] != "�`�F���["){setTimeout("reelkaiten1()", 58);} break;
        case "�X�C�JA":if(r1move[2][1] != "�X�C�J"){setTimeout("reelkaiten1()", 58);} break;
        case "�X�C�JB":if(r1move[2][1] != "�X�C�J"){setTimeout("reelkaiten1()", 58);} break;
        case "�`�����X��A":if(r1move[1][1] != "���v���C"){setTimeout("reelkaiten1()", 58);} break;
        case "�`�����X��B":if(r1move[2][1] != "�X�C�J"){setTimeout("reelkaiten1()", 58);} break;
        case "�`�����X��C":if(r1move[2][1] != "�x��"){setTimeout("reelkaiten1()", 58);} break;
        case "�ԂV":if(r1move[2][1] != "���v���C"){setTimeout("reelkaiten1()", 58);} break;
        case "�ԂV�t�F�C�N":if(r1move[1][1] != "���v���C"){setTimeout("reelkaiten1()", 58);} break;
        case "�V":if(r1move[0][1] != "�`�F���["){setTimeout("reelkaiten1()", 58);} break;
    }
}

function reel2suberi(){
    switch(flg){
        case "�n�Y��A":if(r2move[1][1] != "���v���C"){setTimeout("reelkaiten2()", 58);} break;
        case "�n�Y��B":if(r2move[2][1] != "�x��"){setTimeout("reelkaiten2()", 58);} break;
        case "�n�Y��C":if(r2move[1][1] != "�x��"){setTimeout("reelkaiten2()", 58);} break;
        case "���v���C":if(r2move[1][1] != "���v���C"){setTimeout("reelkaiten2()", 58);} break;
        case "�x��A":if(r2move[2][1] != "�x��"){setTimeout("reelkaiten2()", 58);} break;
        case "�x��B":if(r2move[1][1] != "�x��"){setTimeout("reelkaiten2()", 58);} break;
        case "�x��C":if(r2move[1][1] != "�x��"){setTimeout("reelkaiten2()", 58);} break;
        case "�`�F���[A":if(r2move[1][1] != "���v���C"){setTimeout("reelkaiten2()", 58);} break;
        case "�`�F���[B":if(r2move[2][1] != "�X�C�J"){setTimeout("reelkaiten2()", 58);} break;
        case "�`�F���[C":if(r2move[1][1] != "�`�F���["){setTimeout("reelkaiten2()", 58);} break;
        case "�X�C�JA":if(r2move[1][1] != "�X�C�J"){setTimeout("reelkaiten2()", 58);} break;
        case "�X�C�JB":if(r2move[2][1] != "�X�C�J"){setTimeout("reelkaiten2()", 58);} break;
        case "�`�����X��A":if(r2move[1][1] != "���v���C"){setTimeout("reelkaiten2()", 58);} break;
        case "�`�����X��B":if(r2move[1][1] != "�X�C�J"){setTimeout("reelkaiten2()", 58);} break;
        case "�`�����X��C":if(r2move[1][1] != "�x��"){setTimeout("reelkaiten2()", 58);} break;
        case "�ԂV":if(r2move[0][1] != "���v���C"){setTimeout("reelkaiten2()", 58);} break;
        case "�ԂV�t�F�C�N":if(r2move[0][1] != "���v���C"){setTimeout("reelkaiten2()", 58);} break;
        case "�V":if(r2move[2][1] != "�x��"){setTimeout("reelkaiten2()", 58);} break;
    }
}

function reel3suberi(){
    switch(flg){
        case "�n�Y��A":if(r3move[1][1] != "�x��"){setTimeout("reelkaiten3()", 58);} break;
        case "�n�Y��B":if(r3move[2][1] != "���v���C"){setTimeout("reelkaiten3()", 58);} break;
        case "�n�Y��C":if(r3move[1][1] != "�x��"){setTimeout("reelkaiten3()", 58);} break;
        case "���v���C":if(r3move[1][1] != "���v���C"){setTimeout("reelkaiten3()", 58);} break;
        case "�x��A":if(r3move[2][1] != "�x��"){setTimeout("reelkaiten3()", 58);} break;
        case "�x��B":if(r3move[0][1] != "�x��"){setTimeout("reelkaiten3()", 58);} break;
        case "�x��C":if(r3move[1][1] != "�x��"){setTimeout("reelkaiten3()", 58);} break;
        case "�`�F���[A":if(r3move[1][1] != "���v���C"){setTimeout("reelkaiten3()", 58);} break;
        case "�`�F���[B":if(r3move[2][1] != "�`�F���["){setTimeout("reelkaiten3()", 58);} break;
        case "�`�F���[C":if(r3move[1][1] != "�`�F���["){setTimeout("reelkaiten3()", 58);} break;
        case "�X�C�JA":if(r3move[0][1] != "�X�C�J"){setTimeout("reelkaiten3()", 58);} break;
        case "�X�C�JB":if(r3move[2][1] != "�X�C�J"){setTimeout("reelkaiten3()", 58);} break;
        case "�`�����X��A":if(r3move[1][1] != "�X�C�J"){setTimeout("reelkaiten3()", 58);} break;
        case "�`�����X��B":if(r3move[1][1] != "�X�C�J"){setTimeout("reelkaiten3()", 58);} break;
        case "�`�����X��C":if(r3move[2][1] != "�x��"){setTimeout("reelkaiten3()", 58);} break;
        case "�ԂV":if(r3move[2][1] != "�x��"){setTimeout("reelkaiten3()", 58);} break;
        case "�ԂV�t�F�C�N":if(r3move[2][1] != "�x��"){setTimeout("reelkaiten3()", 58);} break;
        case "�V":if(r3move[0][1] != "�X�C�J"){setTimeout("reelkaiten3()", 58);} break;
    }
}

function payout(){
    //���i����
    if (r1move[1][1] == r2move[1][1] && r2move[1][1] == r3move[1][1]){
        var no = [".reel1_0",".reel1_2",".reel2_0",".reel2_2",".reel3_0",".reel3_2"];
        flash1(no);
        return;
    }
    //��i����
    if (r1move[2][1] == r2move[2][1] && r2move[2][1] == r3move[2][1]){
        var no = [".reel1_1",".reel1_2",".reel2_1",".reel2_2",".reel3_1",".reel3_2"];
        flash1(no);
        return;
    }
    //���i����
    //if (r1move[0][1] == r2move[0][1] && r2move[0][1] == r3move[0][1]){
    //    var no = [".reel1_0",".reel1_1",".reel2_0",".reel2_1",".reel3_0",".reel3_1"];
    //    flash1(no);
    //    return;
    //}
    //�E�����葵��
    if (r1move[2][1] == r2move[1][1] && r2move[1][1] == r3move[0][1]){
        var no = [".reel1_1",".reel1_2",".reel2_0",".reel2_2",".reel3_0",".reel3_1"];
        flash1(no);
        return;
    }
    //�E�オ�葵��
    if (r1move[0][1] == r2move[1][1] && r2move[1][1] == r3move[2][1]){
        var no = [".reel1_0",".reel1_1",".reel2_0",".reel2_2",".reel3_1",".reel3_2"];
        flash1(no);
        return;
    }
    //�`�F���[(�V���O����)
    if (r1move[0][1] == "�`�F���[" && r2move[1][1] != r3move[2][1]){
        var no = [".reel1_0",".reel1_1",".reel2_0",".reel2_1",".reel2_2",".reel3_0",".reel3_1",".reel3_2"];
        flash1(no);
        return;
    }
    //���̑����A��
    if (flg == "�`�����X��A" ||flg == "�`�����X��B"||flg == "�`�����X��C"){
        var no = [".reel1_0",".reel1_1",".reel1_2",".reel2_0",".reel2_1",".reel2_2",".reel3_0",".reel3_1",".reel3_2"];
        flash2(no);
        return;
    }
    getcoin();

}

function keyflagreset(){
    keyflag = 0;
    $("#stop1").css("background","#990000");
    $("#stop2").css("background","#990000");
    $("#stop3").css("background","#990000");
}

function end(){
    if (keyflag == 4){
        setTimeout("payout()",400)
        setTimeout("keyflagreset()",1500)
    }
}


function flashreset(no){
    for(var i = 0;i <= 9;i++){
        $(no[i]).animate({
                opacity: 0
            }, 50)
        }
}

//3��t���b�V��
function flash1(no){
    getcoin();
    for(var i = 0;i <= 9;i++){
    $(no[i]).animate({
            opacity: 0.5
        }, 100).animate({
            opacity: 0
        }, 100).animate({
            opacity: 0.5
        }, 100).animate({
            opacity: 0
        }, 100).animate({
            opacity: 0.5
        }, 100)
    }
}

//�X���E�t���b�V��
function flash2(no){
    getcoin();
    for(var i = 0;i <= 9;i++){
    $(no[i]).animate({
            opacity: 0.5
        }, 500).animate({
            opacity: 0
        }, 500).animate({
            opacity: 0.5
        }, 500)
    }
}


// ���C�����I�@mode:0 �ʏ�@mode:1 �{�[�i�X�m��(�ԂV) mode:2 �{�[�i�X�� mode:3 RT��
function mainpot(mode){
    switch(mode){
        case 0:var min = 1; var max = 10000; break;
        case 1:var min = 10001; var max = 10005;break;
        case 2:var min = 10101; var max = 10200;break;
        case 3:var min = 20001; var max = 30000;break;
    }
    var a = Math.floor( Math.random() * ((max+1) - min)) + min;
    nopotflg = a;
    if(a >= 1 && a <=4500){flg = "�n�Y��A"}
    if(a >= 4501 && a <=6500){flg = "�n�Y��B";}
    if(a >= 6501 && a <=7500){flg = "�n�Y��C";}
    if(a >= 7501 && a <=8500){flg = "���v���C";}
    if(a >= 8501 && a <=9500){flg = "�x��A";}
    if(a >= 9501 && a <=9600){flg = "�`�F���[A"; subpot1(2);}
    if(a >= 9601 && a <=9700){flg = "�X�C�JA"; subpot1(2);}
    if(a >= 9701 && a <=9800){flg = "�`�����X��A";subpot1(3);}
    if(a >= 9801 && a <=9850){flg = "�X�C�JB"; subpot1(20);}
    if(a >= 9851 && a <=9900){flg = "�`�F���[B"; subpot1(25);}
    if(a >= 9901 && a <=9950){flg = "�`�����X��B";subpot1(25);}
    if(a >= 9951 && a <=9970){flg = "�`�����X��C";subpot1(50);}
    if(a >= 9971 && a <=9999){flg = "�x��C";subpot1(70);}
    if(a == 10000){flg = "�`�F���[C";subpot1(100);}
    // �{�[�i�X�m��
    if(a == 10001){flg = "���v���C";}
    if(a == 10002){flg = "�x��A";}
    if(a == 10003){flg = "�ԂV";}
    if(a == 10004){flg = "�n�Y��B";}
    if(a == 10005){flg = "�n�Y��C";}
    // �{�[�i�X��
    if(a == 10101){flg = "�ԂV";}
    if(a >= 10102 && a <=10110){flg = "�ԂV�t�F�C�N";}
    if(a >= 10111 && a <=10200){flg = "�x��B";}
    // RT��
    if(a >= 20001 && a <=21500){flg = "�n�Y��C";}
    if(a >= 21501 && a <=28500){flg = "���v���C";}
    if(a >= 28501 && a <=29500){flg = "�x��A";}
    if(a >= 29501 && a <=29600){flg = "�`�F���[A"; subpot1(2);}
    if(a >= 29601 && a <=29700){flg = "�X�C�JA"; subpot1(2);}
    if(a >= 29701 && a <=29800){flg = "�`�����X��A";subpot1(3);}
    if(a >= 29801 && a <=29850){flg = "�X�C�JB"; subpot1(20);}
    if(a >= 29851 && a <=29900){flg = "�`�F���[B"; subpot1(25);}
    if(a >= 29901 && a <=29950){flg = "�`�����X��B";subpot1(25);}
    if(a >= 29951 && a <=29970){flg = "�`�����X��C";subpot1(50);}
    if(a >= 29971 && a <=29999){flg = "�x��C";subpot1(70);}
    if(a == 30000){flg = "�`�F���[C";subpot1(100);}
}

// �T�u���I�P�@�{�[�i�X���I
function subpot1(i){
    var a = Math.floor( Math.random() * 100) + 1;
    if(a <= i){nextmode = 1;} 
}