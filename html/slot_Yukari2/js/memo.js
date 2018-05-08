
function reel3flag(){
    var target3 = document.getElementById("reel3").style.top;
    var a = target3.slice( 0, -2 );
    var wait3;
    switch (flag){
        case "ハズレ":
            if (a <= -1025){
                wait3 = -1025 - a;
                setTimeout(function(){
                    reel3stop(19);
                }, wait3/5);
            }
            if (a >= -1020 && a <= -730){
                wait3 = -730 - a;
                setTimeout(function(){
                    reel3stop(15);
                }, wait3/5);
            }
            if (a >= -725 && a <= -580){
                wait3 = -580 - a;
                setTimeout(function(){
                    reel3stop(13);
                }, wait3/5);
            }
            if (a >= -575 && a <= -430){
                wait3 = -430 - a;
                setTimeout(function(){
                    reel3stop(11);
                }, wait3/5);
            }
            if (a >= -425 && a <= -285){
                wait3 = -285 - a;
                setTimeout(function(){
                    reel3stop(9);
                }, wait3/5);
            }
            if (a >= -280 && a <= 15){
                wait3 = 15 - a;
                setTimeout(function(){
                    reel3stop(5);
                }, wait3/5);
            }
            if (a >= 20 && a <= 160){
                wait3 = 160 - a;
                setTimeout(function(){
                    reel3stop(3);
                }, wait3/5);
            }
            if (a >= 165){
                wait3 = 300 - a + 75;
                setTimeout(function(){
                    reel3stop(19);
                }, wait3/5);
            }
            break;
        case "リプレイ":
            if (a <= -950){
                wait3 = -950 - a;
                setTimeout(function(){
                    reel3stop(18);
                }, wait3/5);
            }
            if (a >= -945 && a <= -655){
                wait3 = -655 - a;
                setTimeout(function(){
                    reel3stop(14);
                }, wait3/5);
            }
            if (a >= -650 && a <= -60){
                wait3 = -60 - a;
                setTimeout(function(){
                    reel3stop(6);
                }, wait3/5);
            }
            if (a >= -55 && a <= 90){
                wait3 = 90 - a;
                setTimeout(function(){
                    reel3stop(4);
                }, wait3/5);
            }
            if (a >= 95){
                wait3 = 300 - a + 250;
                setTimeout(function(){
                    reel3stop(18);
                }, wait3/5);
            }
            break;
        case "ベル":
            if (a <= -950){
                wait3 = -950 - a;
                setTimeout(function(){
                    reel3stop(18);
                }, wait3/5);
            }
            if (a >= -945 && a <= -580){
                wait3 = -580 - a;
                setTimeout(function(){
                    reel3stop(13);
                }, wait3/5);
            }
            if (a >= -575 && a <= -285){
                wait3 = -285 - a;
                setTimeout(function(){
                    reel3stop(9);
                }, wait3/5);
            }
            if (a >= -280 && a <= -60){
                wait3 = -60 - a;
                setTimeout(function(){
                    reel3stop(6);
                }, wait3/5);
            }
            if (a >= -55){
                wait3 = 300 - a;
                setTimeout(function(){
                    reel3stop(1);
                }, wait3/5);
            }
            break;
        case "BBベル":
            if (a <= -950){
                wait3 = -950 - a;
                setTimeout(function(){
                    reel3stop(18);
                }, wait3/5);
            }
            if (a >= -945 && a <= -580){
                wait3 = -580 - a;
                setTimeout(function(){
                    reel3stop(13);
                }, wait3/5);
            }
            if (a >= -575 && a <= -285){
                wait3 = -285 - a;
                setTimeout(function(){
                    reel3stop(9);
                }, wait3/5);
            }
            if (a >= -280 && a <= -60){
                wait3 = -60 - a;
                setTimeout(function(){
                    reel3stop(6);
                }, wait3/5);
            }
            if (a >= -55){
                wait3 = 300 - a;
                setTimeout(function(){
                    reel3stop(1);
                }, wait3/5);
            }
            break;
        case "スイカ":
            if (a <= -730){
                wait3 = -730 - a;
                setTimeout(function(){
                    reel3stop(15);
                }, wait3/5);
            }
            if (a >= -725 && a <= -210){
                wait3 = -210 - a;
                setTimeout(function(){
                    reel3stop(8);
                }, wait3/5);
            }
            if (a >= -205 && a <= 235){
                wait3 = 235 - a;
                setTimeout(function(){
                    reel3stop(2);
                }, wait3/5);
            }
            if (a >= 240){
                wait3 = 300 - a + 350;
                setTimeout(function(){
                    reel3stop(15);
                }, wait3/5);
            }
            break;
        case "チェリー":
            if (a <= -950){
                wait3 = -950 - a;
                setTimeout(function(){
                    reel3stop(18);
                }, wait3/5);
            }
            if (a >= -945 && a <= -655){
                wait3 = -655 - a;
                setTimeout(function(){
                    reel3stop(14);
                }, wait3/5);
            }
            if (a >= -650 && a <= -60){
                wait3 = -60 - a;
                setTimeout(function(){
                    reel3stop(6);
                }, wait3/5);
            }
            if (a >= -55 && a <= 90){
                wait3 = 90 - a;
                setTimeout(function(){
                    reel3stop(4);
                }, wait3/5);
            }
            if (a >= 95){
                wait3 = 300 - a + 250;
                setTimeout(function(){
                    reel3stop(18);
                }, wait3/5);
            }
            break;
        case "SPリプレイ":
            if (a <= -875){
                wait3 = -875 - a;
                setTimeout(function(){
                    reel3stop(17);
                }, wait3/5);
            }
            if (a >= -870 && a <= -580){
                wait3 = -580 - a;
                setTimeout(function(){
                    reel3stop(13);
                }, wait3/5);
            }
            if (a >= -575 && a <= 15){
                wait3 = 90 - a;
                setTimeout(function(){
                    reel3stop(5);
                }, wait3/5);
            }
            if (a >= 20 && a <= 160){
                wait3 = 160 - a;
                setTimeout(function(){
                    reel3stop(3);
                }, wait3/5);
            }
            if (a >= 165){
                wait3 = 300 - a + 250;
                setTimeout(function(){
                    reel3stop(17);
                }, wait3/5);
            }
            break;
        case "強チェリー": reel3stop(11); break;
        case "強チャンス":
            if (a <= -875){
                wait3 = -875 - a;
                setTimeout(function(){
                    reel3stop(17);
                }, wait3/5);
            }
            if (a >= -870 && a <= -360){
                wait3 = -360 - a;
                setTimeout(function(){
                    reel3stop(10);
                }, wait3/5);
            }
            if (a >= -355 && a <= 90){
                wait3 = 90 - a;
                setTimeout(function(){
                    reel3stop(4);
                }, wait3/5);
            }
            if (a >= 95){
                wait3 = 300 - a + 250;
                setTimeout(function(){
                    reel3stop(17);
                }, wait3/5);
            }
        case "確定チェリー": reel3stop(10); break;
        case "BB": reel3stop(1); break;
        case "特殊BB": reel3stop(11); break;
        case "青BB": reel3stop(3); yakumonoup(); break;
        case "RB": reel3stop(2); break;
        default: reel3stop(0);
    }
}
