


/////////////////////////////////////////////////
// ���[���X�g�b�v 1
/////////////////////////////////////////////////
function reel1stop(x){
    switch(x){
        case 0: break;
        case 1: reeltop1 = 300; break; //���v�E�ԁE��
        case 2: reeltop1 = 235; break; //�ԁE�E�`�F���[
        case 3: reeltop1 = 160; break; //�E�`�F���[�E�x��
        case 4: reeltop1 = 90; break; //�`�F���[�E�x���E���v
        case 5: reeltop1 = 15; break; //�x���E���v�E�u�����N
        case 6: reeltop1 = -60; break; //���v�E�u�����N�E�`�F���[
        case 7: reeltop1 = -135; break; //�u�����N�E�`�F���[�E�X�C�J
        case 8: reeltop1 = -210; break; //�`�F���[�E�X�C�J�E�x��
        case 9: reeltop1 = -285; break; //�X�C�J�E�x���E���v
        case 10: reeltop1 = -360; break; //�x���E���v�EBAR
        case 11: reeltop1 = -430; break; //���v�EBAR�E�`�F���[
        case 12: reeltop1 = -505; break; //BAR�E�`�F���[�E�X�C�J
        case 13: reeltop1 = -580; break; //�`�F���[�E�X�C�J�E�x��
        case 14: reeltop1 = -655; break; //�X�C�J�E�x���E���v
        case 15: reeltop1 = -730; break; //�x���E���v�E�X�C�J
        case 16: reeltop1 = -805; break; //���v�E�X�C�J�E�x��
        case 17: reeltop1 = -875; break; //�X�C�J�E�x���E���v
        case 18: reeltop1 = -950; break; //�x���E���v�E�u�����N
        case 19: reeltop1 = -1025; break; //���v�E�u�����N�E���v
        case 20: reeltop1 = -1100; break; //�u�����N�E���v�E��

    }
    var i = reeloffset(reeltop1);
    clearInterval(kaiten1);

    var target1 = document.getElementById("reel1"); //�Ώۗv�f��ID�Ŏw��
    var reel1;
    reel1 = i + "px";
    target1.style.top = reel1;
}

/////////////////////////////////////////////////
// ���[���X�g�b�v 2
/////////////////////////////////////////////////
function reel2stop(x){
    switch(x){
        case 0: break;
        case 1: reeltop2 = 300; break; //�E�ԁE���v
        case 2: reeltop2 = 235; break; //�ԁE���v�E�u�����N
        case 3: reeltop2 = 160; break; //���v�E�u�����N�E�X�C�J
        case 4: reeltop2 = 90; break; //�u�����N�E�X�C�J�E���v
        case 5: reeltop2 = 15; break; //�X�C�J�E���v�E�x��
        case 6: reeltop2 = -60; break; //���v�E�x���E�`�F���[
        case 7: reeltop2 = -135; break; //�x���E�`�F���[�E�u�����N
        case 8: reeltop2 = -210; break; //�`�F���[�E�u�����N�E�X�C�J
        case 9: reeltop2 = -285; break; //�u�����N�E�X�C�J�E�`�F���[
        case 10: reeltop2 = -360; break; //�X�C�J�E�`�F���[�EBAR
        case 11: reeltop2 = -430; break; //�`�F���[�EBAR�E���v
        case 12: reeltop2 = -505; break; //BAR�E���v�E�X�C�J
        case 13: reeltop2 = -580; break; //���v�E�X�C�J�E���v
        case 14: reeltop2 = -655; break; //�X�C�J�E���v�E�x��
        case 15: reeltop2 = -730; break; //���v�E�x���E�u�����N
        case 16: reeltop2 = -805; break; //�x���E�u�����N�E�X�C�J
        case 17: reeltop2 = -875; break; //�u�����N�E�X�C�J�E���v
        case 18: reeltop2 = -950; break; //�X�C�J�E���v�E�x��
        case 19: reeltop2 = -1025; break; //���v�E�x���E��
        case 20: reeltop2 = -1100; break; //�x���E�E��
    }
    var i = reeloffset(reeltop2);
    clearInterval(kaiten2);

    var target2 = document.getElementById("reel2"); //�Ώۗv�f��ID�Ŏw��
    var reel2;
    reel2 = i + "px";
    target2.style.top = reel2;
}

/////////////////////////////////////////////////
// ���[���X�g�b�v 3
/////////////////////////////////////////////////
function reel3stop(x){
    switch(x){
        case 0: break;
        case 1: reeltop3 = 300; break; //�x���E�ԁE��
        case 2: reeltop3 = 235; break; //�ԁE�E�X�C�J
        case 3: reeltop3 = 160; break; //�E�X�C�J�E���v
        case 4: reeltop3 = 90; break; //�X�C�J�E���v�E�x��
        case 5: reeltop3 = 15; break; //���v�E�x���E���v
        case 6: reeltop3 = -60; break; //�x���E���v�E�`�F���[
        case 7: reeltop3 = -135; break; //���v�E�`�F���[�E�x��
        case 8: reeltop3 = -210; break; //�`�F���[�E�x���E�X�C�J
        case 9: reeltop3 = -285; break; //�x���E�X�C�J�E�`�F���[
        case 10: reeltop3 = -360; break; //�X�C�J�E�`�F���[�EBAR
        case 11: reeltop3 = -430; break; //�`�F���[�EBAR�E�x��
        case 12: reeltop3 = -505; break; //BAR�E�x���EBAR
        case 13: reeltop3 = -580; break; //�x���EBAR�E���v
        case 14: reeltop3 = -655; break; //BAR�E���v�E�u�����N
        case 15: reeltop3 = -730; break; //���v�E�u�����N�E�X�C�J
        case 16: reeltop3 = -805; break; //�u�����N�E�X�C�J�E�x��
        case 17: reeltop3 = -875; break; //�X�C�J�E�x���E���v
        case 18: reeltop3 = -950; break; //�x���E���v�E�u�����N
        case 19: reeltop3 = -1025; break; //���v�E�u�����N�E�x��
        case 20: reeltop3 = -1100; break; //�u�����N�E�x���E��
    }
    var i = reeloffset(reeltop3);
    clearInterval(kaiten3);

    var target3 = document.getElementById("reel3"); //�Ώۗv�f��ID�Ŏw��
    var reel3;
    reel3 = i + "px";
    target3.style.top = reel3;
}


function reel1flag(){

    var target1 = document.getElementById("reel1").style.top;
    var a = target1.slice( 0, -2 );
    var wait;
    switch (flag){
        case "�n�Y��": 
            if (a <= -950){
                wait = -950 - a;
                setTimeout(function(){
                    reel1stop(18);
                }, wait/5);
            }
            if (a >= -945 && a <= -730){
                wait = -730 - a;
                setTimeout(function(){
                    reel1stop(15);
                }, wait/5);
            }
            if (a >= -725 && a <= -360){
                wait = -360 - a;
                setTimeout(function(){
                    reel1stop(10);
                }, wait/5);
            }
            if (a >= -355 && a <= 15){
                wait = 15 - a;
                setTimeout(function(){
                    reel1stop(5);
                }, wait/5);
            }
            if (a >= 20 && a <= 300){
                wait = 300 - a;
                setTimeout(function(){
                    reel1stop(20);
                }, wait/5);
            } 
        break;
        case "���v���C": 
            if (a <= -950){
                wait = -950 - a;
                setTimeout(function(){
                    reel1stop(18);
                }, wait/5);
            }
            if (a >= -945 && a <= -730){
                wait = -730 - a;
                setTimeout(function(){
                    reel1stop(15);
                }, wait/5);
            }
            if (a >= -725 && a <= -360){
                wait = -360 - a;
                setTimeout(function(){
                    reel1stop(10);
                }, wait/5);
            }
            if (a >= -355 && a <= 15){
                wait = 15 - a;
                setTimeout(function(){
                    reel1stop(5);
                }, wait/5);
            }
            if (a >= 20){
                wait = 300 - a;
                setTimeout(function(){
                    reel1stop(20);
                }, wait/5);
            }  

        break;
        case "�x��": 
            if (a <= -950){
                wait = -950 - a;
                setTimeout(function(){
                    reel1stop(18);
                }, wait/5);
            }
            if (a >= -945 && a <= -730){
                wait = -730 - a;
                setTimeout(function(){
                    reel1stop(15);
                }, wait/5);
            }
            if (a >= -725 && a <= -360){
                wait = -360 - a;
                setTimeout(function(){
                    reel1stop(10);
                }, wait/5);
            }
            if (a >= -355 && a <= 15){
                wait = 15 - a;
                setTimeout(function(){
                    reel1stop(5);
                }, wait/5);
            }
            if (a >= 20){
                wait = 300 - a;
                setTimeout(function(){
                    reel1stop(20);
                }, wait/5);
            } 
        
        break;
        case "BB�x��": 
            if (a <= -950){
                wait = -950 - a;
                setTimeout(function(){
                    reel1stop(18);
                }, wait/5);
            }
            if (a >= -945 && a <= -730){
                wait = -730 - a;
                setTimeout(function(){
                    reel1stop(15);
                }, wait/5);
            }
            if (a >= -725 && a <= -360){
                wait = -360 - a;
                setTimeout(function(){
                    reel1stop(10);
                }, wait/5);
            }
            if (a >= -355 && a <= 15){
                wait = 15 - a;
                setTimeout(function(){
                    reel1stop(5);
                }, wait/5);
            }
            if (a >= 20){
                wait = 300 - a;
                setTimeout(function(){
                    reel1stop(20);
                }, wait/5);
            } 
        break;
        case "�X�C�J": 
            if (a <= -875){
                wait = -875 - a;
                setTimeout(function(){
                    reel1stop(17);
                }, wait/5);
            }
            if (a >= -870 && a <= -655){
                wait = -655 - a;
                setTimeout(function(){
                    reel1stop(14);
                }, wait/5);
            }
            if (a >= -650 && a <= -285){
                wait = -285 - a;
                setTimeout(function(){
                    reel1stop(9);
                }, wait/5);
            }
            if (a >= -210 && a <= 15){
                wait = 15 - a;
                setTimeout(function(){
                    reel1stop(5);
                }, wait/5);
            }
            if (a >= 20){
                wait = 300 - a;
                setTimeout(function(){
                    reel1stop(20);
                }, wait/5);
            } 
        break;
        case "�`�F���[": 
           if (a <= -430){
                wait = -430 - a;
                setTimeout(function(){
                    reel1stop(11);
                }, wait/5);
            }
            if (a >= -425 && a <= -60){
                wait = 60 - a;
                setTimeout(function(){
                    reel1stop(6);
                }, wait/5);
            }
            if (a >= -60 && a <= 235){
                wait = 235 - a;
                setTimeout(function(){
                    reel1stop(2);
                }, wait/5);
            }
            if (a >= 240){
                wait = 300 - a;
                setTimeout(function(){
                    reel1stop(20);
                }, wait/5);
            }
        break;
        case "SP���v���C": 
            if (a <= -430){
                wait = -430 - a;
                setTimeout(function(){
                    reel1stop(11);
                }, wait/5);
            }
            if (a >= -425 && a <= -60){
                wait = 60 - a;
                setTimeout(function(){
                    reel1stop(6);
                }, wait/5);
            }
            if (a >= -60 && a <= 235){
                wait = 235 - a;
                setTimeout(function(){
                    reel1stop(2);
                }, wait/5);
            }
            if (a >= 240){
                wait = 300 - a;
                setTimeout(function(){
                    reel1stop(20);
                }, wait/5);
            }
        break;
        case "���`�F���[":
           if (a <= -430){
                wait = -430 - a;
                setTimeout(function(){
                    reel1stop(11);
                }, wait/5);
            }
            if (a >= -425 && a <= -60){
                wait = 60 - a;
                setTimeout(function(){
                    reel1stop(6);
                }, wait/5);
            }
            if (a >= -60 && a <= 235){
                wait = 235 - a;
                setTimeout(function(){
                    reel1stop(2);
                }, wait/5);
            }
            if (a >= 240){
                wait = 300 - a;
                setTimeout(function(){
                    reel1stop(20);
                }, wait/5);
            }
        break;
        case "���`�����X": 
           if (a <= -875){
                wait = -875 - a;
                setTimeout(function(){
                    reel1stop(17);
                }, wait/5);
            }
            if (a >= -870 && a <= -655){
                wait = -655 - a;
                setTimeout(function(){
                    reel1stop(14);
                }, wait/5);
            }
            if (a >= -650 && a <= -285){
                wait = -285 - a;
                setTimeout(function(){
                    reel1stop(9);
                }, wait/5);
            }
            if (a >= -210 && a <= 15){
                wait = 15 - a;
                setTimeout(function(){
                    reel1stop(5);
                }, wait/5);
            }
            if (a >= 20){
                wait = 300 - a;
                setTimeout(function(){
                    reel1stop(20);
                }, wait/5);
            } 
        break;
        case "�m��`�F���[": reel1stop(4); break;
        case "BB": reel1stop(1); break;
        case "����BB": reel1stop(3); break;
        case "��BB": reel1stop(1); break;
        case "RB": reel1stop(1); break;
        default: reel1stop(0);
    
    }

}

function reel2flag(){

    var target2 = document.getElementById("reel2").style.top;
    var a = target2.slice( 0, -2 );
    var wait;
    switch (flag){
        case "�n�Y��":
            if (a <= -950){
                wait = -950 - a;
                setTimeout(function(){
                    reel2stop(18);
                }, wait/5);
            }
            if (a >= -945 && a <= -655){
                wait = -655 - a;
                setTimeout(function(){
                    reel2stop(14);
                }, wait/5);
            }
            if (a >= -650 && a <= -505){
                wait = -505 - a;
                setTimeout(function(){
                    reel2stop(12);
                }, wait/5);
            }
            if (a >= -500 && a <= 15){
                wait = 15 - a;
                setTimeout(function(){
                    reel2stop(5);
                }, wait/5);
            }
            if (a >= 20 && a <= 235){
                wait = 235 - a;
                setTimeout(function(){
                    reel2stop(2);
                }, wait/5);
            }
            if (a >= 240){
                wait = 300 - a + 250;
                setTimeout(function(){
                    reel2stop(18);
                }, wait/5);
            }
        break;
        case "���v���C":
            if (a <= -950){
                wait = -950 - a;
                setTimeout(function(){
                    reel2stop(18);
                }, wait/5);
            }
            if (a >= -945 && a <= -655){
                wait = -655 - a;
                setTimeout(function(){
                    reel2stop(14);
                }, wait/5);
            }
            if (a >= -650 && a <= -505){
                wait = -505 - a;
                setTimeout(function(){
                    reel2stop(12);
                }, wait/5);
            }
            if (a >= -500 && a <= 15){
                wait = 15 - a;
                setTimeout(function(){
                    reel2stop(5);
                }, wait/5);
            }
            if (a >= 20 && a <= 235){
                wait = 235 - a;
                setTimeout(function(){
                    reel2stop(2);
                }, wait/5);
            }
            if (a >= 240){
                wait = 300 - a + 250;
                setTimeout(function(){
                    reel2stop(18);
                }, wait/5);
            }
        break;
        case "�x��": 
            if (a <= -805){
                wait = -805 - a;
                setTimeout(function(){
                    reel2stop(16);
                }, wait/5);
            }
            if (a >= -800 && a <= -135){
                wait = -135 - a;
                setTimeout(function(){
                    reel2stop(7);
                }, wait/5);
            }
            if (a >= -130){
                wait = 300 - a;
                setTimeout(function(){
                    reel2stop(20);
                }, wait/5);
            }
        break;
        case "BB�x��":
                    if (a <= -805){
                wait = -805 - a;
                setTimeout(function(){
                    reel2stop(16);
                }, wait/5);
            }
            if (a >= -800 && a <= -135){
                wait = -135 - a;
                setTimeout(function(){
                    reel2stop(7);
                }, wait/5);
            }
            if (a >= -130){
                wait = 300 - a;
                setTimeout(function(){
                    reel2stop(20);
                }, wait/5);
            }
        break;
        case "�X�C�J":
            if (a <= -875){
                wait = -875 - a;
                setTimeout(function(){
                    reel2stop(17);
                }, wait/5);
            }
            if (a >= -870 && a <= -580){
                wait = -580 - a;
                setTimeout(function(){
                    reel2stop(13);
                }, wait/5);
            }
            if (a >= -575 && a <= -285){
                wait = -285 - a;
                setTimeout(function(){
                    reel2stop(9);
                }, wait/5);
            }
            if (a >= -280 && a <= 90){
                wait = 90 - a;
                setTimeout(function(){
                    reel2stop(4);
                }, wait/5);
            }
            if (a >= 95){
                wait = 300 - a + 250;
                setTimeout(function(){
                    reel2stop(17);
                }, wait/5);
            }
        break;
        case "�`�F���[":
                    if (a <= -950){
                wait = -950 - a;
                setTimeout(function(){
                    reel2stop(18);
                }, wait/5);
            }
            if (a >= -945 && a <= -655){
                wait = -655 - a;
                setTimeout(function(){
                    reel2stop(14);
                }, wait/5);
            }
            if (a >= -650 && a <= -505){
                wait = -505 - a;
                setTimeout(function(){
                    reel2stop(12);
                }, wait/5);
            }
            if (a >= -500 && a <= 15){
                wait = 15 - a;
                setTimeout(function(){
                    reel2stop(5);
                }, wait/5);
            }
            if (a >= 20 && a <= 235){
                wait = 235 - a;
                setTimeout(function(){
                    reel2stop(2);
                }, wait/5);
            }
            if (a >= 240){
                wait = 300 - a + 250;
                setTimeout(function(){
                    reel2stop(18);
                }, wait/5);
            }
        break;
        case "SP���v���C":
            if (a <= -950){
                wait = -950 - a;
                setTimeout(function(){
                    reel2stop(18);
                }, wait/5);
            }
            if (a >= -945 && a <= -655){
                wait = -655 - a;
                setTimeout(function(){
                    reel2stop(14);
                }, wait/5);
            }
            if (a >= -650 && a <= -505){
                wait = -505 - a;
                setTimeout(function(){
                    reel2stop(12);
                }, wait/5);
            }
            if (a >= -500 && a <= 15){
                wait = 15 - a;
                setTimeout(function(){
                    reel2stop(5);
                }, wait/5);
            }
            if (a >= 20 && a <= 235){
                wait = 235 - a;
                setTimeout(function(){
                    reel2stop(2);
                }, wait/5);
            }
            if (a >= 240){
                wait = 300 - a + 250;
                setTimeout(function(){
                    reel2stop(18);
                }, wait/5);
            }
        break;
        case "���`�F���[": reel2stop(10); yakumonoaction2(); break;
        case "���`�����X":
        if (a <= -875){
            wait = -875 - a;
            setTimeout(function(){
                reel2stop(17);
            }, wait/5);
        }
        if (a >= -870 && a <= -580){
            wait = -580 - a;
            setTimeout(function(){
                reel2stop(13);
            }, wait/5);
        }
        if (a >= -575 && a <= -285){
            wait = -285 - a;
            setTimeout(function(){
                reel2stop(9);
            }, wait/5);
        }
        if (a >= -280 && a <= 90){
            wait = 90 - a;
            setTimeout(function(){
                reel2stop(4);
            }, wait/5);
        }
        if (a >= 95){
            wait = 300 - a + 250;
            setTimeout(function(){
                reel2stop(17);
            }, wait/5);
        }
        yakumonoaction2(); break;
        case "�m��`�F���[": reel2stop(10); break;
        case "BB": reel2stop(1); break;
        case "����BB": reel2stop(11); break;
        case "��BB": reel2stop(20); break;
        case "RB": reel2stop(1); break;
        default: reel2stop(0);
    }
}

function reel3flag(){
    var target3 = document.getElementById("reel3").style.top;
    var a = target3.slice( 0, -2 );
    var wait;
    switch (flag){
        case "�n�Y��":
            if (a <= -1025){
                wait = -1025 - a;
                setTimeout(function(){
                    reel3stop(19);
                }, wait/5);
            }
            if (a >= -1020 && a <= -730){
                wait = -730 - a;
                setTimeout(function(){
                    reel3stop(15);
                }, wait/5);
            }
            if (a >= -725 && a <= -580){
                wait = -580 - a;
                setTimeout(function(){
                    reel3stop(13);
                }, wait/5);
            }
            if (a >= -575 && a <= -430){
                wait = -430 - a;
                setTimeout(function(){
                    reel3stop(11);
                }, wait/5);
            }
            if (a >= -425 && a <= -285){
                wait = -285 - a;
                setTimeout(function(){
                    reel3stop(9);
                }, wait/5);
            }
            if (a >= -280 && a <= 15){
                wait = 15 - a;
                setTimeout(function(){
                    reel3stop(5);
                }, wait/5);
            }
            if (a >= 20 && a <= 160){
                wait = 160 - a;
                setTimeout(function(){
                    reel3stop(3);
                }, wait/5);
            }
            if (a >= 165){
                wait = 300 - a + 75;
                setTimeout(function(){
                    reel3stop(19);
                }, wait/5);
            }
            break;
        case "���v���C":
            if (a <= -950){
                wait = -950 - a;
                setTimeout(function(){
                    reel3stop(18);
                }, wait/5);
            }
            if (a >= -945 && a <= -655){
                wait = -655 - a;
                setTimeout(function(){
                    reel3stop(14);
                }, wait/5);
            }
            if (a >= -650 && a <= -60){
                wait = -60 - a;
                setTimeout(function(){
                    reel3stop(6);
                }, wait/5);
            }
            if (a >= -55 && a <= 90){
                wait = 90 - a;
                setTimeout(function(){
                    reel3stop(4);
                }, wait/5);
            }
            if (a >= 95){
                wait = 300 - a + 250;
                setTimeout(function(){
                    reel3stop(18);
                }, wait/5);
            }
            break;
        case "�x��":
            if (a <= -950){
                wait = -950 - a;
                setTimeout(function(){
                    reel3stop(18);
                }, wait/5);
            }
            if (a >= -945 && a <= -580){
                wait = -580 - a;
                setTimeout(function(){
                    reel3stop(13);
                }, wait/5);
            }
            if (a >= -575 && a <= -285){
                wait = -285 - a;
                setTimeout(function(){
                    reel3stop(9);
                }, wait/5);
            }
            if (a >= -280 && a <= -60){
                wait = -60 - a;
                setTimeout(function(){
                    reel3stop(6);
                }, wait/5);
            }
            if (a >= -55){
                wait = 300 - a;
                setTimeout(function(){
                    reel3stop(1);
                }, wait/5);
            }
            break;
        case "BB�x��":
            if (a <= -950){
                wait = -950 - a;
                setTimeout(function(){
                    reel3stop(18);
                }, wait/5);
            }
            if (a >= -945 && a <= -580){
                wait = -580 - a;
                setTimeout(function(){
                    reel3stop(13);
                }, wait/5);
            }
            if (a >= -575 && a <= -285){
                wait = -285 - a;
                setTimeout(function(){
                    reel3stop(9);
                }, wait/5);
            }
            if (a >= -280 && a <= -60){
                wait = -60 - a;
                setTimeout(function(){
                    reel3stop(6);
                }, wait/5);
            }
            if (a >= -55){
                wait = 300 - a;
                setTimeout(function(){
                    reel3stop(1);
                }, wait/5);
            }
            break;
        case "�X�C�J":
            if (a <= -875){
                wait = -875 - a;
                setTimeout(function(){
                    reel3stop(17);
                }, wait/5);
            }
            if (a >= -870 && a <= -360){
                wait = -360 - a;
                setTimeout(function(){
                    reel3stop(10);
                }, wait/5);
            }
            if (a >= -355 && a <= 90){
                wait = 90 - a;
                setTimeout(function(){
                    reel3stop(4);
                }, wait/5);
            }
            if (a >= 95){
                wait = 300 - a + 250;
                setTimeout(function(){
                    reel3stop(17);
                }, wait/5);
            }
            break;
        case "�`�F���[":
            if (a <= -950){
                wait = -950 - a;
                setTimeout(function(){
                    reel3stop(18);
                }, wait/5);
            }
            if (a >= -945 && a <= -655){
                wait = -655 - a;
                setTimeout(function(){
                    reel3stop(14);
                }, wait/5);
            }
            if (a >= -650 && a <= -60){
                wait = -60 - a;
                setTimeout(function(){
                    reel3stop(6);
                }, wait/5);
            }
            if (a >= -55 && a <= 90){
                wait = 90 - a;
                setTimeout(function(){
                    reel3stop(4);
                }, wait/5);
            }
            if (a >= 95){
                wait = 300 - a + 250;
                setTimeout(function(){
                    reel3stop(18);
                }, wait/5);
            }
            break;
        case "SP���v���C":
            if (a <= -875){
                wait = -875 - a;
                setTimeout(function(){
                    reel3stop(17);
                }, wait/5);
            }
            if (a >= -870 && a <= -580){
                wait = -580 - a;
                setTimeout(function(){
                    reel3stop(13);
                }, wait/5);
            }
            if (a >= -575 && a <= 15){
                wait = 90 - a;
                setTimeout(function(){
                    reel3stop(5);
                }, wait/5);
            }
            if (a >= 20 && a <= 160){
                wait = 160 - a;
                setTimeout(function(){
                    reel3stop(3);
                }, wait/5);
            }
            if (a >= 165){
                wait = 300 - a + 250;
                setTimeout(function(){
                    reel3stop(17);
                }, wait/5);
            }
            break;
        case "���`�F���[": reel3stop(11); break;
        case "���`�����X":
            if (a <= -875){
                wait = -875 - a;
                setTimeout(function(){
                    reel3stop(17);
                }, wait/5);
            }
            if (a >= -870 && a <= -360){
                wait = -360 - a;
                setTimeout(function(){
                    reel3stop(10);
                }, wait/5);
            }
            if (a >= -355 && a <= 90){
                wait = 90 - a;
                setTimeout(function(){
                    reel3stop(4);
                }, wait/5);
            }
            if (a >= 95){
                wait = 300 - a + 250;
                setTimeout(function(){
                    reel3stop(17);
                }, wait/5);
            }
        case "�m��`�F���[": reel3stop(10); break;
        case "BB": reel3stop(1); break;
        case "����BB": reel3stop(11); break;
        case "��BB": reel3stop(3); yakumonoup(); break;
        case "RB": reel3stop(2); break;
        default: reel3stop(0);
    }
}

