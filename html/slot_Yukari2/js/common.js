//////////////////////////////////////////////////
////////�@���ʊ֐��@common.js     /////////////////
//////////////////////////////////////////////////

/////////////////////////////////////////////////
//  �o�[�W��������
/////////////////////////////////////////////////
    //

//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	�萔
/////////////////////////////////////////////////
    //
    BBMAX = 50;
    RBMAX = 30;
    SBBMAX = 100;

//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	���ʃO���[�o���ϐ�
/////////////////////////////////////////////////
    //���[����]�p
    var reeltop1 = -730;
    var reeltop2 = -730;
    var reeltop3 = -730;

    //���[����]����p
    var kaiten1;
    var kaiten2;
    var kaiten3;
    var kaiten4;

    //�L�[���̓t���O
    var keyflag;


    //�q���t���O
    var flag;

    //�{�[�i�X�ő喇��
    var Maxget;

    //BGM�Đ�������(0:off/1:on)
    var BGMflg = 0;

    //SpecialBGM�Đ�������(0:off/1:on)
    var SBGMflg = 0;

    //autoplay�p
    var autoplay1;
    var autoplayflg = 0;

    //�f�B�X�v���C�t���b�V���p
    var dflash;

    var color1;

    //icon�z��
    var icon = new Array( );
        icon[1] = 0;
        icon[2] = 0;
        icon[3] = 0;
        icon[4] = 0;
        icon[5] = 0;
        icon[6] = 0;
        icon[7] = 0;




//---------------------------------------------//
/////////////////////////////////////////////////


//---------------------------------------------------------------//
//                                                               //
//---------------------------------------------------------------//


/////////////////////////////////////////////////
// ���[����] 1
/////////////////////////////////////////////////
function reel1kaiten(){

    var target1 = document.getElementById("reel1"); //�Ώۗv�f��ID�Ŏw��
    var reel1;
    
    reeltop1 += 5;
    if (reeltop1 == 305){
        reeltop1 = -1180;
    }   
    reel1 = reeltop1 + "px";
    target1.style.top = reel1;
    
}

/////////////////////////////////////////////////
// ���[����] 2
/////////////////////////////////////////////////
function reel2kaiten(){

    var target2 = document.getElementById("reel2"); //�Ώۗv�f��ID�Ŏw��
    var reel2;
    
    reeltop2 += 5;
    if (reeltop2 == 305){
        reeltop2 = -1180;
    }   
    reel2 = reeltop2 + "px";
    target2.style.top = reel2;
    
}

/////////////////////////////////////////////////
// ���[����] 3
/////////////////////////////////////////////////
function reel3kaiten(){

    var target3 = document.getElementById("reel3"); //�Ώۗv�f��ID�Ŏw��
    var reel3;
    
    reeltop3 += 5;
    if (reeltop3 == 305){
        reeltop3 = -1180;
    }   
    reel3 = reeltop3 + "px";
    target3.style.top = reel3;
    
}

/////////////////////////////////////////////////
// ���[���S�t��]
/////////////////////////////////////////////////
function reelgyakukaiten(){


    var target1 = document.getElementById("reel1"); //�Ώۗv�f��ID�Ŏw��
    var target2 = document.getElementById("reel2"); //�Ώۗv�f��ID�Ŏw��
    var target3 = document.getElementById("reel3"); //�Ώۗv�f��ID�Ŏw��
    var reel1;
    var reel2;
    var reel3;

    reeltop1 -= 5;
    if (reeltop1 == -1180){
        reeltop1 = 305;
    }   
    reel1 = reeltop1 + "px";
    target1.style.top = reel1;

    reeltop2 -= 5;
    if (reeltop2 == -1180){
        reeltop2 = 305;
    }   
    reel2 = reeltop2 + "px";
    target2.style.top = reel2;

    
    reeltop3 -= 5;
    if (reeltop3 == -1180){
        reeltop3 = 305;
    }   
    reel3 = reeltop3 + "px";
    target3.style.top = reel3;
    
}



/////////////////////////////////////////////////
// �N���b�Nor�^�b�`����
/////////////////////////////////////////////////

function touch(){

    if (keyflag == 0){
        keyflag = 1;
        document.getElementById("btn1").style.background = "#694816";
        document.getElementById("balloon").style.opacity=0;
        flashreset();

        switch(potmode){
            case 0: Nomalpot(); potmodesub = 0; break;
            case 1: CZ1(); potmodesub = 1; break;
            case 2: Bonusmode(); potmodesub = 2; break;
            case 3: RTpot(); potmodesub = 3; break;
            case 4: Bonuskakutei6(); potmodesub = 4;break;
            case 5: Bonuskakutei7(); potmodesub = 5; break;
            case 6: SRTpot(); potmodesub = 6; break;
            case 7: Bonuskakutei3(); break;
            case 8: CRTpot();break;
        }

        if (Rpoint >= 5){
            if (countpot == 0){
                if(potmode == 0){
                    act5();
                }
            }  
        }

        kaiten1 = setInterval (reel1kaiten,1);
        kaiten2 = setInterval (reel2kaiten,1);
        kaiten3 = setInterval (reel3kaiten,1);
        


        document.getElementById("sound-start").play();

        
            
        setTimeout(function(){
            keyflag = 2;
        }, 600);

        
    }

    if (keyflag == 2){
        touch1();
    }
        
    if (keyflag == 4){
        touch2();
    }

    if (keyflag == 6){
        touch3();
    }
}


/////////////////////////////////////////////////
// �I�[�g�v���C
/////////////////////////////////////////////////

function autoplay(){

    
    if (autoplayflg == 0){
        autoplay1 = setInterval (touch,400);
        autoplayflg = 1;
    }
    else{
        clearInterval(autoplay1);
        autoplayflg = 0;
    }


}





/////////////////////////////////////////////////
// �X�g�b�v�{�^��
/////////////////////////////////////////////////

function touch1(){
    if (keyflag == 2){
        keyflag = 3;
        
        document.getElementById("uwanose").innerHTML="";
        document.getElementById("gensan").innerHTML="";
        flashreset();
        switch (flag){
            case "�n�Y��": reel1stop(1); break;
            case "���v���C": reel1stop(1); break;
            case "�x��": reel1stop(1); break;
            case "BB�x��": reel1stop(1); break;
            case "�X�C�J": reel1stop(2); break;
            case "�`�F���[": reel1stop(3); break;
            case "SP���v���C": reel1stop(3); break;
            case "���`�F���[": reel1stop(3); break;
            case "���`�����X": reel1stop(2); break;
            case "�m��`�F���[": reel1stop(4); break;
            case "BB": reel1stop(5); break;
            case "����BB": reel1stop(3); break;
            case "��BB": reel1stop(5); break;
            case "RB": reel1stop(5); break;
            default: reel1stop(0);
        }
        document.getElementById("btn2").style.background = "#441010";
        document.getElementById("sound-stop1").play();
        setTimeout(function(){
            keyflag = 4;
        }, 100);
        
    }
}

function touch2(){

    if (keyflag == 4){
        keyflag = 5;
        
        flashreset();
        switch (flag){
            case "�n�Y��": reel2stop(1); break;
            case "���v���C": reel2stop(1); break;
            case "�x��": reel2stop(2); break;
            case "BB�x��": reel2stop(2); break;
            case "�X�C�J": reel2stop(3); break;
            case "�`�F���[": reel2stop(4); break;
            case "SP���v���C": reel2stop(4); break;
            case "���`�F���[": reel2stop(5); break;
            case "���`�����X": reel2stop(3); break;
            case "�m��`�F���[": reel2stop(4); break;
            case "BB": reel2stop(6); break;
            case "����BB": reel2stop(7); break;
            case "��BB": reel2stop(8); break;
            case "RB": reel2stop(6); break;
            default: reel2stop(0);
        }
        document.getElementById("btn3").style.background = "#441010";
        document.getElementById("sound-stop2").play();
        setTimeout(function(){
            keyflag = 6;
        }, 100);

    }
}

function touch3(){

    if (keyflag == 6){
        keyflag = 7;
        
        flashreset();
            switch (flag){
                case "�n�Y��": reel3stop(1); break;
                case "���v���C": reel3stop(2); break;
                case "�x��": reel3stop(3); break;
                case "BB�x��": reel3stop(3); break;
                case "�X�C�J": reel3stop(4); break;
                case "�`�F���[": reel3stop(2); break;
                case "SP���v���C": reel3stop(3); break;
                case "���`�F���[": reel3stop(4); break;
                case "���`�����X": reel3stop(5); break;
                case "�m��`�F���[": reel3stop(4); break;
                case "BB": reel3stop(6); break;
                case "����BB": reel3stop(8); break;
                case "��BB": reel3stop(7); break;
                case "RB": reel3stop(9); break;
                default: reel3stop(0);
            }
        reel3stop();
        payout1();
        document.getElementById("btn4").style.background = "#441010";
        document.getElementById("sound-stop3").play();

        if (potmode == 1 && CZgame==0){



            CZpoint += Math.floor( Math.random() * 5 ) ;
            if (CZpoint >= 0 && CZpoint <= 20){
                color1 = document.getElementById("white")
            }
            if (CZpoint >= 21 && CZpoint <= 40){
                color1 = document.getElementById("blue")
            }
            if (CZpoint >= 41 && CZpoint <= 1000){
                color1 = document.getElementById("green")
            }

            var cmd = setInterval(colormode,1500)

            keyflag = 8;
            setTimeout(function(){
                flashreset();
                kaiten4 = setInterval (reelgyakukaiten,10);
                document.getElementById("sound-SE1").play();
                document.getElementById("mode").innerHTML="";
                document.getElementById("getcoin").innerHTML="";
            }, 1200);

            setTimeout(function(){

                CZpoint += Math.floor( Math.random() * 5 ) ;
                color1.style.opacity = 0;
                if (CZpoint >= 0 && CZpoint <= 21){
                    color1 = document.getElementById("white")
                }
                if (CZpoint >= 20 && CZpoint <= 40){
                    color1 = document.getElementById("blue")
                }
                if (CZpoint >= 41 && CZpoint <= 60){
                    color1 = document.getElementById("green")
                }
                if (CZpoint >= 61 && CZpoint <= 1000){
                    color1 = document.getElementById("red")
                }

                var i = reeloffset(reeltop1);
                clearInterval(kaiten4);
            
                var target1 = document.getElementById("reel1"); //�Ώۗv�f��ID�Ŏw��
                var reel1;
                reel1 = i + "px";
                target1.style.top = reel1;
                flash7();
            }, 3000);

            setTimeout(function(){
                CZpoint += Math.floor( Math.random() * 5 ) ;
                color1.style.opacity = 0;
                if (CZpoint >= 0 && CZpoint <= 21){
                    color1 = document.getElementById("white")
                }
                if (CZpoint >= 20 && CZpoint <= 40){
                    color1 = document.getElementById("blue")
                }
                if (CZpoint >= 41 && CZpoint <= 60){
                    color1 = document.getElementById("green")
                }
                if (CZpoint >= 61 && CZpoint <= 1000){
                    color1 = document.getElementById("red")
                }

                kaiten1 = setInterval (reel1kaiten,1); 
                document.getElementById("sound-SE2").play();
                flashreset();
                flash7();
            }, 5000);

            setTimeout(function(){
                CZpoint += Math.floor( Math.random() * 5 ) ;
                color1.style.opacity = 0;
                if (CZpoint >= 0 && CZpoint <= 21){
                    color1 = document.getElementById("white")
                }
                if (CZpoint >= 20 && CZpoint <= 40){
                    color1 = document.getElementById("blue")
                }
                if (CZpoint >= 41 && CZpoint <= 60){
                    color1 = document.getElementById("green")
                }
                if (CZpoint >= 61 && CZpoint <= 1000){
                    color1 = document.getElementById("red")
                }
                kaiten2 = setInterval (reel2kaiten,1); 
                document.getElementById("sound-SE2").play();
                flashreset();
                flash7();
            }, 6000);

            setTimeout(function(){
                CZpoint += Math.floor( Math.random() * 5 ) ;
                color1.style.opacity = 0;
                if (CZpoint >= 0 && CZpoint <= 21){
                    color1 = document.getElementById("white")
                }
                if (CZpoint >= 20 && CZpoint <= 40){
                    color1 = document.getElementById("blue")
                }
                if (CZpoint >= 41 && CZpoint <= 60){
                    color1 = document.getElementById("green")
                }
                if (CZpoint >= 61 && CZpoint <= 99){
                    color1 = document.getElementById("red")
                }
                if (CZpoint >= 100 && CZpoint <= 1000){
                    
                }
                kaiten3 = setInterval (reel3kaiten,1); 
                document.getElementById("sound-SE2").play();
                flashreset();
                flash7();
            }, 7000);

            setTimeout(function(){

                CZpoint += Math.floor( Math.random() * 15 ) ;
                color1.style.opacity = 0;
                if (CZpoint >= 0 && CZpoint <= 21){
                    color1 = document.getElementById("white")
                }
                if (CZpoint >= 20 && CZpoint <= 40){
                    color1 = document.getElementById("blue")
                }
                if (CZpoint >= 41 && CZpoint <= 60){
                    color1 = document.getElementById("green")
                }
                if (CZpoint >= 61 && CZpoint <= 99){
                    color1 = document.getElementById("red")
                }
                if (CZpoint >= 100 && CZpoint <= 1000){
                    
                }
                if (CZpoint >= 0 && CZpoint <= 30){
                    reeltop1 = 300; 
                    
                }
                if (CZpoint >= 31 && CZpoint <= 50){
                    reeltop1 = 300; 
                    
                }
                if (CZpoint >= 51 && CZpoint <= 70){
                    reeltop1 = 300; 
                    
                }
                if (CZpoint >= 71 && CZpoint <= 99){
                    reeltop1 = 300; 
                    
                }
                if (CZpoint >= 100 && CZpoint <= 1000){
                    reeltop1 = 300; 
                    
                }

                var i = reeloffset(reeltop1);
                clearInterval(kaiten1);
            
                var target1 = document.getElementById("reel1"); //�Ώۗv�f��ID�Ŏw��
                var reel1;
                reel1 = i + "px";
                target1.style.top = reel1;
                document.getElementById("sound-777").play();

            }, 10000);

            setTimeout(function(){
                
                CZpoint += Math.floor( Math.random() * 15 ) ;
                color1.style.opacity = 0;
                if (CZpoint >= 0 && CZpoint <= 30){
                    reeltop2 = 300; 
                    document.getElementById("sound-RT").play();
                    flag = "SB";
                }
                if (CZpoint >= 31 && CZpoint <= 50){
                    reeltop2 = 300; 
                    document.getElementById("sound-RT").play();
                    flag = "MB";
                }
                if (CZpoint >= 51 && CZpoint <= 70){
                    reeltop2 = 300; 
                    document.getElementById("sound-RT").play();
                    flag = "RB";
                    
                }
                if (CZpoint >= 71 && CZpoint <= 99){
                    reeltop2 = 300; 
                    document.getElementById("sound-RT").play();
                    flag = "BB";
                    
                }
                if (CZpoint >= 100 && CZpoint <= 1000){
                    reeltop2 = -1105; 
                    document.getElementById("sound-SP2").play();
                    color1 = document.getElementById("rainbow")
                    flag = "��BB";
                    uwanose += 100;
                }

                var i = reeloffset(reeltop2);
                clearInterval(kaiten2);
            
                var target2 = document.getElementById("reel2"); //�Ώۗv�f��ID�Ŏw��
                var reel2;
                reel2 = i + "px";
                target2.style.top = reel2;
                

            }, 12000);

            setTimeout(function(){
                
                flashreset();

                if (CZpoint >= 0 && CZpoint <= 30){
                    reeltop3 = -655; 
                    flash7();
                }
                if (CZpoint >= 31 && CZpoint <= 50){
                    reeltop3 = -440; 
                    flash7();
                }
                if (CZpoint >= 51 && CZpoint <= 70){
                    reeltop3 = 230; 
                    document.getElementById("bgvid1").src="./img/bcg2.mp4";
                    document.getElementById("logo").style.opacity=1;
                    
                    RTmodechange();
                    RTmodecount();
                    flash7();
                }
                if (CZpoint >= 71 && CZpoint <= 99){
                    reeltop3 = 300; 
                    document.getElementById("bgvid1").src="./img/bcg2.mp4";
                    document.getElementById("logo").style.opacity=1;
                    
                    RTmodechange();
                    RTmodecount();
                    flash7();
                }
                if (CZpoint >= 100 && CZpoint <= 1000){
                    reeltop3 = 140; 
                    document.getElementById("bgvid1").src="./img/bcg2.mp4";
                    document.getElementById("logo").style.opacity=1;
                    RTmode = "�V��A";
                    RTmodecount();
                    flash8();
                    uwanose = 200;
                }

                var i = reeloffset(reeltop3);
                clearInterval(kaiten3);
                clearInterval(cmd);
                color1.style.opacity = 0;

                var target3 = document.getElementById("reel3"); //�Ώۗv�f��ID�Ŏw��
                var reel3;
                reel3 = i + "px";
                target3.style.top = reel3;
                payout1();
                document.getElementById("sound-CZ").pause();
                document.getElementById("sound-CZ").currentTime = 0;
            }, 16000);

            setTimeout(function(){
                
                CZpoint = 0;
                keyflag = 0;
                document.getElementById("btn1").style.background = "#fdc689";
                document.getElementById("btn2").style.background = "#ff3535";
                document.getElementById("btn3").style.background = "#ff3535";
                document.getElementById("btn4").style.background = "#ff3535";

                clearInterval(cmd);
                Rpoint = 0;

                document.getElementById("logo").style.opacity=0;

            }, 20000);

        } else {

            if (potmode == 0 && countpot == 0){
                if (Rpoint >= 5){
                    potmode = 1;
                    CZgame = 15;
                    CZpoint = Rpoint;
                }
                Rpoint = 0;
                countpot = 50;
            }



            setTimeout(function(){
                keyflag = 0;
                document.getElementById("btn1").style.background = "#fdc689";
                document.getElementById("btn2").style.background = "#ff3535";
                document.getElementById("btn3").style.background = "#ff3535";
                document.getElementById("btn4").style.background = "#ff3535";
            }, 900);
        }
    }
}



/////////////////////////////////////////////////
// ��~�ʒu�����֐�
/////////////////////////////////////////////////
function reeloffset(i){
    var r;


    if (i <= -1100 && i >= -1180 ){
        r = -1105;
    } 
    if (i <= -1025 && i >= -1095 ){
        r = -1031;
    } 
    if (i <= -950 && i >= -1020 ){
        r = -957;
    } 
    if (i <= -875 && i >= -945 ){
        r = -883;
    } 
    if (i <= -800 && i >= -870 ){
        r = -809;
    } 
    if (i <= -730 && i >= -800 ){
        r = -735;
    } 
    if (i <= -655 && i >= -725 ){
        r = -661;
    }
    if (i <= -580 && i >= -650 ){
        r = -587;
    }
    if (i <= -505 && i >= -575 ){
        r = -513;
    }
    if (i <= -430 && i >= -500 ){
        r = -439;
    }
    if (i <= -360 && i >= -425 ){ //1���[����BAR�@��ʒu
        r = -365;
    }
    if (i <= -285 && i >= -355 ){
        r = -291;
    }
    if (i <= -210 && i >= -280 ){
        r = -217;
    }
    if (i <= -135 && i >= -205 ){
        r = -143;
    }
    if (i <= -60 && i >= -130 ){
        r = -69;
    }
    if (i <= 15 && i >= -55 ){
        r = 5;
    }
    if (i <= 90 && i >= 20 ){
        r = 79;
    }
    if (i <= 160 && i >= 95 ){
        r = 153;
    }
    if (i <= 235 && i >= 165 ){
        r = 227;
    }
    if (i <= 300 && i >= 240 ){
        r = 301;
    }
    return r;
}


/////////////////////////////////////////////////
// ���[���X�g�b�v 1
/////////////////////////////////////////////////
function reel1stop(x){
    switch(x){
        case 0: break;
        case 1: reeltop1 = -365; break;
        case 2: reeltop1 = -290; break;
        case 3: reeltop1 = -440; break;
        case 4: reeltop1 = -515; break;
        case 5: reeltop1 = 300; break;
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
        case 1: reeltop2 = -515; break;
        case 2: reeltop2 = -135; break;
        case 3: reeltop2 = -580; break;
        case 4: reeltop2 = -515; break;
        case 5: reeltop2 = -365; break;
        case 6: reeltop2 = 300; break;
        case 7: reeltop2 = -440; break;
        case 8: reeltop2 = -1150; break;
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
        case 1: reeltop3 = -440; break;
        case 2: reeltop3 = -655; break;
        case 3: reeltop3 = -580; break;
        case 4: reeltop3 = -210; break;
        case 5: reeltop3 = -365; break;
        case 6: reeltop3 = 300; break;
        case 7: reeltop3 = 155; break;
        case 8: reeltop3 = -440; break;
        case 9: reeltop3 = 230; break;
    }
    var i = reeloffset(reeltop3);
    clearInterval(kaiten3);

    var target3 = document.getElementById("reel3"); //�Ώۗv�f��ID�Ŏw��
    var reel3;
    reel3 = i + "px";
    target3.style.top = reel3;
}

////////////////////////////////////////////////
//�@�����o������
////////////////////////////////////////////////
function payout1(){

    var payout;
    switch (flag){
        case "�n�Y��": payout = NON; break;
        case "���v���C": payout = RP; flash1(); document.getElementById("sound-RP").play();�@getcoin += RP; break;
        case "�x��": payout = BELL; flash2(); document.getElementById("sound-BELL").play(); getcoin += BELL; break;
        case "BB�x��": payout = BELL2; flash2(); document.getElementById("sound-BELL").play(); getcoin += BELL2; Bget += 10; break;
        case "�X�C�J": payout = SUIKA; flash4(); document.getElementById("sound-Rare").play(); getcoin += SUIKA; break;
        case "�`�F���[": payout = CHERRY; flash3(); document.getElementById("sound-Rare").play(); getcoin += CHERRY; break;
        case "SP���v���C": payout = CHERRY; flash4(); document.getElementById("sound-Rare3").play(); getcoin += CHERRY; break;
        case "���`�F���[": payout = CHERRY; flash5(); document.getElementById("sound-Rare2").play(); getcoin += CHERRY; break;
        case "���`�����X": payout = SUIKA; flash6(); document.getElementById("sound-Rare2").play(); getcoin += SUIKA; break;
        case "�m��`�F���[": payout = CHERRY; flash7(); document.getElementById("sound-Rare2").play(); getcoin += CHERRY; break;
        case "SB": payout = RP;  potmode = 0; flash7();  document.getElementById("sound-RP").play(); getcoin += RP; break;
        case "MB": payout = RP;  potmode = 0; flash7();  document.getElementById("sound-RP").play(); getcoin += RP; break;
        case "BB": payout = RP; uwanose += 200;  flash7(); Maxget = 100; document.getElementById("sound-777").play(); getcoin += RP; bonusgamen(); break;
        case "����BB": payout = RP;  SRTgame = 10; potmode = 6; flash7(); document.getElementById("sound-SP").play(); getcoin += RP; break;
        case "��BB": payout = RP; Bgame = 15;   flash8();  Maxget = 150;  document.getElementById("sound-777").play(); getcoin += RP; bonusgamen(); break;
        case "RB": payout = RP; uwanose += 100;  flash7();  Maxget = 40; document.getElementById("sound-777").play(); getcoin += RP; bonusgamen(); break;
        default: payout = NON; break;
    }



    if (potmode == 3){
        if (flag == "�x��"){
            RTgame -= 5;
        }
        if (uwanose2 >= 1){
            countpot2 -= uwanose2;
            document.getElementById("gensan").innerHTML="-"+uwanose2;
            uwanose2 = 0;

        }
        if (countpot2 <= 0){
            potmode = 8;
            CRTgame =10;
            document.getElementById("sound-CRT").play();
            RTmodechange();
            RTmodecount();
            
        }
        document.getElementById("countpot").innerHTML=countpot2;
        document.getElementById("getcoin").innerHTML="LAST "+RTgame+" ��";
        document.getElementById("mode").innerHTML="�B���{�[�i�X";
        document.getElementById("totalcoin1").innerHTML="GET";
        document.getElementById("totalcoin2").innerHTML=getcoin;
    }

    //��BB�� BGM����
    if(SBGMflg == 1 && Bgame ==15){
        document.getElementById("sound-Bonus2").play();
    }

    if(SBGMflg == 0 && Bgame ==15){
        if(BGMflg == 1){
            document.getElementById("sound-Bonus").pause();
            document.getElementById("sound-Bonus").currentTime = 0;
        }
        document.getElementById("sound-Bonus2").play();
        SBGMflg = 1;
    }


    //RB�� BGM����
    if(SBGMflg == 0 && uwanose == 40){
        document.getElementById("sound-Bonus").play();
        BGMflg = 1;

    }

    //��BB�� BGM����
    if(SBGMflg == 0 && uwanose >=100){
        document.getElementById("sound-Bonus").play();
        BGMflg = 1;
    }

    //�a�`�q����������
    if(flag == "����BB"){
        potmode = 6;
    }

    // SRT��7��������
    if (potmode == 6){
        if(flag == "BB"){
            potmode = 6;
        }
        if(flag == "RB"){
            potmode = 6;
        }
        if(flag == "��BB"){
            potmode = 6;
            uwanose += 300;
        }
    } else {
        if(flag == "BB"){
            potmode = 3;
        }
        if(flag == "RB"){
            potmode = 3;
        }
        if(flag == "��BB"){
            potmode = 2;
        }
    }



    mycoin += payout;

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;

    if (potmode == 0){
        document.getElementById("getcoin").innerHTML="";
        document.getElementById("mode").innerHTML="";
        document.getElementById("RSgame").innerHTML=""
    }

    if (potmode == 1){
        document.getElementById("mode").innerHTML="�B���`�������W";
        document.getElementById("getcoin").innerHTML="LAST "+CZgame+" G";
        document.getElementById("sound-CZ").play();
    }

    if (potmode == 2){
        document.getElementById("getcoin").innerHTML=" "+Bget+"/"+Maxget;
        document.getElementById("mode").innerHTML="BONUS GAME";
        if (SRTgame > 0){
            document.getElementById("RSgame").innerHTML=SRTgame;
        }
        document.getElementById("totalcoin1").innerHTML="GET";
        document.getElementById("totalcoin2").innerHTML=getcoin;
    }



    if (potmode == 4){
        
        document.getElementById("mode").innerHTML="Stand-by�c�c�c?";
    }

    if (potmode == 5){
        
        document.getElementById("mode").innerHTML="";

    }

    if (potmode == 6){
        document.getElementById("getcoin").innerHTML="LAST "+SRTgame+" G  ||  TOTAL "+RTgame+" ��";
        document.getElementById("mode").innerHTML="SEVEN RUSH";
        document.getElementById("totalcoin1").innerHTML="GET";
        document.getElementById("totalcoin2").innerHTML=getcoin;
        }

    if (potmode == 8){
        document.getElementById("getcoin").innerHTML="LAST "+CRTgame+" G  ||  TOTAL "+RTgame+" ��";
        document.getElementById("mode").innerHTML="�B���`�����X";
        document.getElementById("totalcoin1").innerHTML="GET";
        document.getElementById("totalcoin2").innerHTML=getcoin;
        }
    
    if (uwanose >= 1){
        document.getElementById("sound-uwanose").play();
        document.getElementById("uwanose").innerHTML="+"+uwanose;
        RTgame += uwanose;
        uwanose = 0;
        
    }





    setTimeout(function(){

        var target = document.getElementById("maindisplay");

        clearInterval(dflash);
        target.style.opacity = 1;
        target.style.backgroundColor = "#000000"
    }, 100);


    storage.setItem('mycoin', mycoin);




}






//////////////////////////////////
// �f�B�X�v���C�t���b�V��
//////////////////////////////////
function displayflash(){ 

    var color;
    var target = document.getElementById("maindisplay");
    var time = 0;
    var a = Math.floor( Math.random() * 100 ) ;

    if (a >= 30){
        return;
    }
    

    switch (flag){
        case "�n�Y��": color = "#000000" ; break;
        case "���v���C": color = "aqua" ; break;
        case "�x��":  color = "olive" ; break;
        case "BB�x��": color = "olive"; break;
        case "�X�C�J":  color = "green"; break;
        case "�`�F���[":  color = "maroon"; break;
        case "SP���v���C":  break;
        case "���`�F���[":  color= "purple"; break;
        case "���`�����X":  color= "purple"; break;
        case "�m��`�F���[":  color= "purple"; break;
        case "BB": break;
        case "��BB":  break;
        case "RB":  break;
        default:  break;
    }
    
    target.style.opacity = 0;
    target.style.backgroundColor = color;

    function flash1(){
        time += 0.1;
        target.style.opacity = time;
    }

    dflash = setInterval(flash1,50);

    setTimeout(function(){

        clearInterval(dflash);
        target.style.opacity = 1;
        
    }, 500);

}

////////////////////////////////////////////
// �f�B�X�v���C�V���G�b�g�J���[���o
////////////////////////////////////////////
function colormode(){

    var time = 0;
    var cflash;
    var cflash2;

    color1.style.opacity = 0;

    function flash2(){
        time += 0.1;
        color1.style.opacity = time;
    }

    function flash3(){
        time -= 0.1;
        color1.style.opacity = time;
    }

    cflash = setInterval(flash2,50);

    setTimeout(function(){

        clearInterval(cflash);
        color1.style.opacity = 1;
        
    }, 500);

    setTimeout(function(){

        
        color1.style.opacity = 0;
        
    }, 1500);

}


////////////////////////////////////////////
// �{�[�i�X���q�s���
////////////////////////////////////////////
function bonusgamen(){

    var time = 0;
    var cflash;
    var target = document.getElementById("bonusdisplay");

    target.style.opacity = 0;

    function flash4(){
        time += 0.1;
        target.style.opacity = time;
    }

    cflash = setInterval(flash4,50);

    setTimeout(function(){

        clearInterval(cflash);
        target.style.opacity = 1;
        
    }, 500);

}

////////////////////////////////////////////
// �{�[�i�X���q�s��ʁ@�I��
////////////////////////////////////////////
function bonusgamen2(){


    var target = document.getElementById("bonusdisplay");


     target.style.opacity = 0;
        

}