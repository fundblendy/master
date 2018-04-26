


/////////////////////////////////////////////////
// リールストップ 1
/////////////////////////////////////////////////
function reel1stop(x){
    switch(x){
        case 0: break;
        case 1: reeltop1 = 300; break; //リプ・赤・青
        case 2: reeltop1 = 235; break; //赤・青・チェリー
        case 3: reeltop1 = 160; break; //青・チェリー・ベル
        case 4: reeltop1 = 90; break; //チェリー・ベル・リプ
        case 5: reeltop1 = 15; break; //ベル・リプ・ブランク
        case 6: reeltop1 = -60; break; //リプ・ブランク・チェリー
        case 7: reeltop1 = -135; break; //ブランク・チェリー・スイカ
        case 8: reeltop1 = -210; break; //チェリー・スイカ・ベル
        case 9: reeltop1 = -285; break; //スイカ・ベル・リプ
        case 10: reeltop1 = -360; break; //ベル・リプ・BAR
        case 11: reeltop1 = -430; break; //リプ・BAR・チェリー
        case 12: reeltop1 = -505; break; //BAR・チェリー・スイカ
        case 13: reeltop1 = -580; break; //チェリー・スイカ・ベル
        case 14: reeltop1 = -655; break; //スイカ・ベル・リプ
        case 15: reeltop1 = -730; break; //ベル・リプ・スイカ
        case 16: reeltop1 = -805; break; //リプ・スイカ・ベル
        case 17: reeltop1 = -875; break; //スイカ・ベル・リプ
        case 18: reeltop1 = -950; break; //ベル・リプ・ブランク
        case 19: reeltop1 = -1025; break; //リプ・ブランク・リプ
        case 20: reeltop1 = -1100; break; //ブランク・リプ・赤

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
        case 1: reeltop2 = 300; break; //青・赤・リプ
        case 2: reeltop2 = 235; break; //赤・リプ・ブランク
        case 3: reeltop2 = 160; break; //リプ・ブランク・スイカ
        case 4: reeltop2 = 90; break; //ブランク・スイカ・リプ
        case 5: reeltop2 = 15; break; //スイカ・リプ・ベル
        case 6: reeltop2 = -60; break; //リプ・ベル・チェリー
        case 7: reeltop2 = -135; break; //ベル・チェリー・ブランク
        case 8: reeltop2 = -210; break; //チェリー・ブランク・スイカ
        case 9: reeltop2 = -285; break; //ブランク・スイカ・チェリー
        case 10: reeltop2 = -360; break; //スイカ・チェリー・BAR
        case 11: reeltop2 = -430; break; //チェリー・BAR・リプ
        case 12: reeltop2 = -505; break; //BAR・リプ・スイカ
        case 13: reeltop2 = -580; break; //リプ・スイカ・リプ
        case 14: reeltop2 = -655; break; //スイカ・リプ・ベル
        case 15: reeltop2 = -730; break; //リプ・ベル・ブランク
        case 16: reeltop2 = -805; break; //ベル・ブランク・スイカ
        case 17: reeltop2 = -875; break; //ブランク・スイカ・リプ
        case 18: reeltop2 = -950; break; //スイカ・リプ・ベル
        case 19: reeltop2 = -1025; break; //リプ・ベル・青
        case 20: reeltop2 = -1100; break; //ベル・青・赤
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
        case 1: reeltop3 = 300; break; //ベル・赤・青
        case 2: reeltop3 = 235; break; //赤・青・スイカ
        case 3: reeltop3 = 160; break; //青・スイカ・リプ
        case 4: reeltop3 = 90; break; //スイカ・リプ・ベル
        case 5: reeltop3 = 15; break; //リプ・ベル・リプ
        case 6: reeltop3 = -60; break; //ベル・リプ・チェリー
        case 7: reeltop3 = -135; break; //リプ・チェリー・ベル
        case 8: reeltop3 = -210; break; //チェリー・ベル・スイカ
        case 9: reeltop3 = -285; break; //ベル・スイカ・チェリー
        case 10: reeltop3 = -360; break; //スイカ・チェリー・BAR
        case 11: reeltop3 = -430; break; //チェリー・BAR・ベル
        case 12: reeltop3 = -505; break; //BAR・ベル・BAR
        case 13: reeltop3 = -580; break; //ベル・BAR・リプ
        case 14: reeltop3 = -655; break; //BAR・リプ・ブランク
        case 15: reeltop3 = -730; break; //リプ・ブランク・スイカ
        case 16: reeltop3 = -805; break; //ブランク・スイカ・ベル
        case 17: reeltop3 = -875; break; //スイカ・ベル・リプ
        case 18: reeltop3 = -950; break; //ベル・リプ・ブランク
        case 19: reeltop3 = -1025; break; //リプ・ブランク・ベル
        case 20: reeltop3 = -1100; break; //ブランク・ベル・赤
    }
    var i = reeloffset(reeltop3);
    clearInterval(kaiten3);

    var target3 = document.getElementById("reel3"); //対象要素をIDで指定
    var reel3;
    reel3 = i + "px";
    target3.style.top = reel3;
}


function reel1flag(){

    var target1 = document.getElementById("reel1").style.top;
    var a = target1.slice( 0, -2 );
    var wait;
    switch (flag){
        case "ハズレ": 
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
        case "リプレイ": 
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
        case "ベル": 
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
        case "BBベル": 
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
        case "スイカ": 
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
        case "チェリー": 
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
        case "SPリプレイ": 
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
        case "強チェリー":
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
        case "強チャンス": 
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
        case "確定チェリー": reel1stop(4); break;
        case "BB": reel1stop(1); break;
        case "特殊BB": reel1stop(3); break;
        case "青BB": reel1stop(1); break;
        case "RB": reel1stop(1); break;
        default: reel1stop(0);
    
    }

}

function reel2flag(){

    var target2 = document.getElementById("reel2").style.top;
    var a = target2.slice( 0, -2 );
    var wait;
    switch (flag){
        case "ハズレ":
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
        case "リプレイ":
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
        case "ベル": 
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
        case "BBベル":
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
        case "スイカ":
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
        case "チェリー":
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
        case "SPリプレイ":
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
        case "強チェリー": reel2stop(10); yakumonoaction2(); break;
        case "強チャンス":
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
        case "確定チェリー": reel2stop(10); break;
        case "BB": reel2stop(1); break;
        case "特殊BB": reel2stop(11); break;
        case "青BB": reel2stop(20); break;
        case "RB": reel2stop(1); break;
        default: reel2stop(0);
    }
}

function reel3flag(){
    var target3 = document.getElementById("reel3").style.top;
    var a = target3.slice( 0, -2 );
    var wait;
    switch (flag){
        case "ハズレ":
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
        case "リプレイ":
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
        case "ベル":
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
        case "BBベル":
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
        case "スイカ":
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
        case "チェリー":
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
        case "SPリプレイ":
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
        case "強チェリー": reel3stop(11); break;
        case "強チャンス":
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
        case "確定チェリー": reel3stop(10); break;
        case "BB": reel3stop(1); break;
        case "特殊BB": reel3stop(11); break;
        case "青BB": reel3stop(3); yakumonoup(); break;
        case "RB": reel3stop(2); break;
        default: reel3stop(0);
    }
}

