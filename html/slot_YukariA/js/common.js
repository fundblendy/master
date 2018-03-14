//////////////////////////////////////////////////
////////　共通関数　common.js     /////////////////
//////////////////////////////////////////////////

/////////////////////////////////////////////////
//  バージョン履歴
/////////////////////////////////////////////////
    //

//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	定数
/////////////////////////////////////////////////
    //
    BBMAX = 300;
    RBMAX = 120;

//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	共通グローバル変数
/////////////////////////////////////////////////
    //リール回転用
    var reeltop1 = -730;
    var reeltop2 = -730;
    var reeltop3 = -730;

    //リール回転制御用
    var kaiten1;
    var kaiten2;
    var kaiten3;

    //キー入力フラグ
    var keyflag;


    //子役フラグ
    var flag;

    //ボーナス最大枚数
    var Maxget;



//---------------------------------------------//
/////////////////////////////////////////////////


//---------------------------------------------------------------//
//                                                               //
//---------------------------------------------------------------//


/////////////////////////////////////////////////
// リール回転 1
/////////////////////////////////////////////////
function reel1kaiten(){

    var target1 = document.getElementById("reel1"); //対象要素をIDで指定
    var reel1;
    
    reeltop1 += 5
    if (reeltop1 == 305){
        reeltop1 = -1180
    }   
    reel1 = reeltop1 + "px";
    target1.style.top = reel1;
    
}

/////////////////////////////////////////////////
// リール回転 2
/////////////////////////////////////////////////
function reel2kaiten(){

    var target2 = document.getElementById("reel2"); //対象要素をIDで指定
    var reel2;
    
    reeltop2 += 5
    if (reeltop2 == 305){
        reeltop2 = -1180
    }   
    reel2 = reeltop2 + "px";
    target2.style.top = reel2;
    
}

/////////////////////////////////////////////////
// リール回転 3
/////////////////////////////////////////////////
function reel3kaiten(){

    var target3 = document.getElementById("reel3"); //対象要素をIDで指定
    var reel3;
    
    reeltop3 += 5
    if (reeltop3 == 305){
        reeltop3 = -1180
    }   
    reel3 = reeltop3 + "px";
    target3.style.top = reel3;
    
}



/////////////////////////////////////////////////
// クリックorタッチ入力
/////////////////////////////////////////////////

function touch(){

    if (keyflag == 0){
        keyflag = 1;
        document.getElementById("btn1").style.background = "#694816";
        flashreset();

        switch(potmode){
            case 0: Nomalpot(); break;
            case 1: Bonuskakutei(); break;
            case 2: Bonusmode(); break;
            case 3: RTpot(); break;
        }
        kaiten1 = setInterval (reel1kaiten,1);
        kaiten2 = setInterval (reel2kaiten,1);
        kaiten3 = setInterval (reel3kaiten,1);

        document.getElementById("sound-start").play();
            
        setTimeout(function(){
            keyflag = 2
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
// ストップボタン
/////////////////////////////////////////////////

function touch1(){
    if (keyflag == 2){
        keyflag = 3
        
        flashreset();
        switch (flag){
            case "ハズレ": reel1stop(1); break;
            case "リプレイ": reel1stop(1); break;
            case "ベル": reel1stop(1); break;
            case "BBベル": reel1stop(1); break;
            case "スイカ": reel1stop(2); break;
            case "チェリー": reel1stop(3); break;
            case "強チェリー": reel1stop(3); break;
            case "強チャンス": reel1stop(2); break;
            case "確定チェリー": reel1stop(4); break;
            case "BB": reel1stop(5); break;
            case "RB": reel1stop(5); break;
            default: reel1stop(0);
        }
        document.getElementById("btn2").style.background = "#441010";
        document.getElementById("sound-stop1").play();
        setTimeout(function(){
            keyflag = 4
        }, 100);
        
    }
}

function touch2(){

    if (keyflag == 4){
        keyflag = 5
        
        flashreset();
        switch (flag){
            case "ハズレ": reel2stop(1); break;
            case "リプレイ": reel2stop(1); break;
            case "ベル": reel2stop(2); break;
            case "BBベル": reel2stop(2); break;
            case "スイカ": reel2stop(3); break;
            case "チェリー": reel2stop(4); break;
            case "強チェリー": reel2stop(5); break;
            case "強チャンス": reel2stop(3); break;
            case "確定チェリー": reel2stop(4); break;
            case "BB": reel2stop(6); break;
            case "RB": reel2stop(6); break;
            default: reel2stop(0);
        }
        document.getElementById("btn3").style.background = "#441010";
        document.getElementById("sound-stop2").play();
        setTimeout(function(){
            keyflag = 6
        }, 100);

    }
}

function touch3(){

    if (keyflag == 6){
        keyflag = 7
        
        flashreset();
            switch (flag){
                case "ハズレ": reel3stop(1); break;
                case "リプレイ": reel3stop(2); break;
                case "ベル": reel3stop(3); break;
                case "BBベル": reel3stop(3); break;
                case "スイカ": reel3stop(4); break;
                case "チェリー": reel3stop(3); break;
                case "強チェリー": reel3stop(4); break;
                case "強チャンス": reel3stop(5); break;
                case "確定チェリー": reel3stop(4); break;
                case "BB": reel3stop(6); break;
                case "RB": reel3stop(7); break;
                default: reel3stop(0);
            }
        reel3stop();
        payout1();
        document.getElementById("btn4").style.background = "#441010";
        document.getElementById("sound-stop3").play();
        setTimeout(function(){
            keyflag = 0
            document.getElementById("btn1").style.background = "#fdc689";
            document.getElementById("btn2").style.background = "#ff3535";
            document.getElementById("btn3").style.background = "#ff3535";
            document.getElementById("btn4").style.background = "#ff3535";
        }, 900);
    }
}



/////////////////////////////////////////////////
// 停止位置調整関数
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
    if (i <= -360 && i >= -425 ){ //1リール下BAR　基準位置
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
// リールストップ 1
/////////////////////////////////////////////////
function reel1stop(x){
    switch(x){
        case 0: break;
        case 1: reeltop1 = -365; break;
        case 2: reeltop1 = -290; break;
        case 3: reeltop1 = -440; break;
        case 4: reeltop1 = -515; break;
        case 5: reeltop1 = 235; break;
    }
    var i = reeloffset(reeltop1);
    clearInterval(kaiten1);

    var target1 = document.getElementById("reel1"); //対象要素をIDで指定
    var reel1;
    reel1 = i + "px";
    target1.style.top = reel1;
}

/////////////////////////////////////////////////
// リールストップ 2
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
    }
    var i = reeloffset(reeltop2);
    clearInterval(kaiten2);

    var target2 = document.getElementById("reel2"); //対象要素をIDで指定
    var reel2;
    reel2 = i + "px";
    target2.style.top = reel2;
}

/////////////////////////////////////////////////
// リールストップ 3
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
    }
    var i = reeloffset(reeltop3);
    clearInterval(kaiten3);

    var target3 = document.getElementById("reel3"); //対象要素をIDで指定
    var reel3;
    reel3 = i + "px";
    target3.style.top = reel3;
}

////////////////////////////////////////////////
//　払い出し処理
////////////////////////////////////////////////
function payout1(){

    var payout;
    switch (flag){
        case "ハズレ": payout = NON; break;
        case "リプレイ": payout = RP; flash1(); document.getElementById("sound-RP").play();　break;
        case "ベル": payout = BELL; flash2(); document.getElementById("sound-BELL").play(); break;
        case "BBベル": payout = BELL2; flash2(); document.getElementById("sound-BELL").play(); break;
        case "スイカ": payout = SUIKA; flash4(); document.getElementById("sound-Rare").play(); break;
        case "チェリー": payout = CHERRY; flash3(); document.getElementById("sound-Rare").play(); break;
        case "強チェリー": payout = CHERRY; flash5(); document.getElementById("sound-Rare2").play(); break;
        case "強チャンス": payout = SUIKA; flash6(); document.getElementById("sound-Rare2").play(); break;
        case "確定チェリー": payout = CHERRY; flash7(); document.getElementById("sound-Rare2").play(); break;
        case "BB": payout = RP; Bgame = 20; potmode = 2; flash7(); document.getElementById("sound-Bonus").play(); Maxget = BBMAX; break;
        case "RB": payout = RP; Bgame = 8; potmode = 2; flash7(); document.getElementById("sound-Bonus").play();  Maxget = RBMAX; break;
        default: payout = NON; break;
    }

    mycoin += payout;

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;

    if (potmode == 0){
        document.getElementById("getcoin").innerHTML="";
    }

    if (potmode == 2){
        document.getElementById("getcoin").innerHTML="GET "+Bget+"/"+Maxget;
    }
    
    if (potmode == 3){
        document.getElementById("getcoin").innerHTML=RTgame+"/30";
    }

}

////////////////////////////////////////////////
//　リールフラッシュ演出
////////////////////////////////////////////////

function flash1(){ //リプレイ中段3回フラッシュ
    
    var target1 = document.getElementById("f1")

    setTimeout(function(){
        target1.style.opacity = 1;
    }, 50);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 100);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 150);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 200);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 250);

}

function flash2(){ //ベル上段6回フラッシュ
    
    var target1 = document.getElementById("f2")

    setTimeout(function(){
        target1.style.opacity = 1;
    }, 50);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 100);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 150);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 200);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 250);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 300);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 350);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 400);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 450);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 500);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 550);

}

function flash3(){ //チェリーフラッシュ
    
    var target1 = document.getElementById("f10")
    var target2 = document.getElementById("f4")
    var target3 = document.getElementById("f5")
    var target4 = document.getElementById("f6")

    setTimeout(function(){
        target2.style.opacity = 1;
    }, 100);
    setTimeout(function(){
        target2.style.opacity = 0;
    }, 150);
    setTimeout(function(){
        target3.style.opacity = 1;
    }, 150);
    setTimeout(function(){
        target3.style.opacity = 0;
    }, 250);
    setTimeout(function(){
        target4.style.opacity = 1;
    }, 250);
    setTimeout(function(){
        target4.style.opacity = 0;
    }, 350);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 350);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 400);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 450);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 500);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 550);
}

function flash4(){ //スイカフラッシュ
    
    var target1 = document.getElementById("f8")
    var target2 = document.getElementById("f4")
    var target3 = document.getElementById("f5")
    var target4 = document.getElementById("f6")

    setTimeout(function(){
        target2.style.opacity = 1;
    }, 100);
    setTimeout(function(){
        target2.style.opacity = 0;
    }, 150);
    setTimeout(function(){
        target3.style.opacity = 1;
    }, 150);
    setTimeout(function(){
        target3.style.opacity = 0;
    }, 250);
    setTimeout(function(){
        target4.style.opacity = 1;
    }, 250);
    setTimeout(function(){
        target4.style.opacity = 0;
    }, 350);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 350);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 400);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 450);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 500);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 550);
}

function flash5(){ //右上がり特殊フラッシュ
    
    var target1 = document.getElementById("f9")
    var target2 = document.getElementById("f4")
    var target3 = document.getElementById("f5")
    var target4 = document.getElementById("f6")

    setTimeout(function(){
        target2.style.opacity = 1;
    }, 50);
    setTimeout(function(){
        target2.style.opacity = 0;
    }, 100);
    setTimeout(function(){
        target3.style.opacity = 1;
    }, 100);
    setTimeout(function(){
        target3.style.opacity = 0;
    }, 150);
    setTimeout(function(){
        target4.style.opacity = 1;
    }, 150);
    setTimeout(function(){
        target4.style.opacity = 0;
    }, 200);
    setTimeout(function(){
        target2.style.opacity = 1;
    }, 200);
    setTimeout(function(){
        target2.style.opacity = 0;
    }, 250);
    setTimeout(function(){
        target3.style.opacity = 1;
    }, 250);
    setTimeout(function(){
        target3.style.opacity = 0;
    }, 300);
    setTimeout(function(){
        target4.style.opacity = 1;
    }, 300);
    setTimeout(function(){
        target4.style.opacity = 0;
    }, 350);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 350);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 400);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 450);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 500);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 550);
}

function flash6(){ //小V特殊フラッシュ
    
    var target1 = document.getElementById("f7")
    var target2 = document.getElementById("f4")
    var target3 = document.getElementById("f5")
    var target4 = document.getElementById("f6")

    setTimeout(function(){
        target2.style.opacity = 1;
    }, 50);
    setTimeout(function(){
        target2.style.opacity = 0;
    }, 100);
    setTimeout(function(){
        target3.style.opacity = 1;
    }, 100);
    setTimeout(function(){
        target3.style.opacity = 0;
    }, 150);
    setTimeout(function(){
        target4.style.opacity = 1;
    }, 150);
    setTimeout(function(){
        target4.style.opacity = 0;
    }, 200);
    setTimeout(function(){
        target2.style.opacity = 1;
    }, 200);
    setTimeout(function(){
        target2.style.opacity = 0;
    }, 250);
    setTimeout(function(){
        target3.style.opacity = 1;
    }, 250);
    setTimeout(function(){
        target3.style.opacity = 0;
    }, 300);
    setTimeout(function(){
        target4.style.opacity = 1;
    }, 300);
    setTimeout(function(){
        target4.style.opacity = 0;
    }, 350);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 350);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 400);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 450);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 500);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 550);
}

function flash7(){ //中段特殊フラッシュ
    
    var target1 = document.getElementById("f1")
    var target2 = document.getElementById("f4")
    var target3 = document.getElementById("f5")
    var target4 = document.getElementById("f6")

    setTimeout(function(){
        target2.style.opacity = 1;
    }, 50);
    setTimeout(function(){
        target2.style.opacity = 0;
    }, 100);
    setTimeout(function(){
        target3.style.opacity = 1;
    }, 100);
    setTimeout(function(){
        target3.style.opacity = 0;
    }, 150);
    setTimeout(function(){
        target4.style.opacity = 1;
    }, 150);
    setTimeout(function(){
        target4.style.opacity = 0;
    }, 200);
    setTimeout(function(){
        target2.style.opacity = 1;
    }, 200);
    setTimeout(function(){
        target2.style.opacity = 0;
    }, 250);
    setTimeout(function(){
        target3.style.opacity = 1;
    }, 250);
    setTimeout(function(){
        target3.style.opacity = 0;
    }, 300);
    setTimeout(function(){
        target4.style.opacity = 1;
    }, 300);
    setTimeout(function(){
        target4.style.opacity = 0;
    }, 350);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 350);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 400);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 450);
    setTimeout(function(){
        target1.style.opacity = 0;
    }, 500);
    setTimeout(function(){
        target1.style.opacity = 1;
    }, 550);
}







//////////////////////////////////
// フラッシュ初期化
//////////////////////////////////
function flashreset(){ //フラッシュリセット
    
    document.getElementById("f1").style.opacity = 0;
    document.getElementById("f2").style.opacity = 0;
    document.getElementById("f3").style.opacity = 0;
    document.getElementById("f4").style.opacity = 0;
    document.getElementById("f5").style.opacity = 0;
    document.getElementById("f6").style.opacity = 0;
    document.getElementById("f7").style.opacity = 0;
    document.getElementById("f8").style.opacity = 0;
    document.getElementById("f9").style.opacity = 0;
    document.getElementById("f10").style.opacity = 0;
}