
var ticket = localStorage.getItem("ticket");

$(function(){

    $("#ticket").html("所持チケット　"+ticket+"枚（チケット5枚で回せます）");

});



function gacha(){
    
    if(ticket <= 4){return;}

    $("#g_card1").animate({
        marginTop: "200px", 
        marginLeft: "408px",
        opacity: "0"
    }, 0)
    $("#g_card2").animate({
        marginTop: "200px", 
        marginLeft: "408px",
        opacity: "0"
    }, 0)
    $("#g_card3").animate({
        marginTop: "200px", 
        marginLeft: "408px",
        opacity: "0"
    }, 0)
    $("#g_card4").animate({
        marginTop: "200px", 
        marginLeft: "408px",
        opacity: "0"
    }, 0)
    $("#g_card5").animate({
        marginTop: "200px", 
        marginLeft: "408px",
        opacity: "0"
    }, 0)

    var count = localStorage.getItem("cardcount");
    
    ticket -= 5;
    $("#ticket").html("所持チケット　"+ticket+"枚（チケット5枚で回せます）");
    localStorage.setItem("ticket",ticket);

    var gacha_1 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","",""]
    var gacha_2 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","",""]
    var gacha_3 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","",""]
    var gacha_4 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","",""]
    var gacha_5 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","",""]

    var gacha =[gacha_1, gacha_2, gacha_3, gacha_4, gacha_5]

    for (var i = 0 ; i <=4 ; i++ ){
        //カード種別
        var a = Math.floor(Math.random() * 100)+1;
        var b =  Math.floor(Math.random() * 5)+1;
        var c =  Math.floor(Math.random() * 3)+1;

        if (a >= 1 && a <= 10){
            gacha[i][0] = "./img/Card/Axe.ico";
            gacha[i][1] = "バトルアクス";
            gacha[i][2] = "ランダム単体にダメージ";
            gacha[i][3] = "固定ダメージ ["+(7+b)+"]"
            gacha[i][4] = "追加ダメージ [1~"+(2+c)+"]"
        }
        if (a >= 11 && a <= 20){
            gacha[i][0] = "./img/Card/sword.ico";
            gacha[i][1] = "アイアンソード";
            gacha[i][2] = "敵単体[1]にダメージ";
            gacha[i][3] = "固定ダメージ ["+(5+b)+"]"
            gacha[i][4] = "追加ダメージ [1~"+(2+c)+"]"
        }
        if (a >= 21 && a <= 30){
            gacha[i][0] = "./img/Card/sword.ico";
            gacha[i][1] = "アイアンソード";
            gacha[i][2] = "敵単体[2]にダメージ";
            gacha[i][3] = "固定ダメージ ["+(5+b)+"]"
            gacha[i][4] = "追加ダメージ [1~"+(2+c)+"]"
        }
        if (a >= 31 && a <= 40){
            gacha[i][0] = "./img/Card/sword.ico";
            gacha[i][1] = "アイアンソード";
            gacha[i][2] = "敵単体[3]にダメージ";
            gacha[i][3] = "固定ダメージ ["+(5+b)+"]"
            gacha[i][4] = "追加ダメージ [1~"+(2+c)+"]"
        }
        if (a >= 41 && a <= 50){
            gacha[i][0] = "./img/Card/ele_thunder.ico";
            gacha[i][1] = "ライトニングボルト";
            gacha[i][2] = "敵全体にダメージ";
            gacha[i][3] = "固定ダメージ ["+(5+c)+"]"
            gacha[i][4] = "追加ダメージ [1~"+(2+c)+"]"
        }
        if (a >= 51 && a <= 60){
            gacha[i][0] = "./img/Card/Potion.ico";
            gacha[i][1] = "ノーマルポーション";
            gacha[i][2] = "使用者を回復";
            gacha[i][3] = "固定回復 ["+(10+c)+"]"
            gacha[i][4] = "追加回復 [1~"+(2+c)+"]"
        }
        if (a >= 61 && a <= 70){
            gacha[i][0] = "./img/Card/Art of Chemistry.ico";
            gacha[i][1] = "レアポーション";
            gacha[i][2] = "味方全体を回復";
            gacha[i][3] = "固定回復 ["+b+"]"
            gacha[i][4] = "追加回復 [1~"+(2+c)+"]"
        }
        if (a >= 71 && a <= 80){
            gacha[i][0] = "./img/Card/ele_fire.ico";
            gacha[i][1] = "ファイアボルト";
            gacha[i][2] = "敵単体[2]にダメージ";
            gacha[i][3] = "固定ダメージ ["+(10+c)+"]"
            gacha[i][4] = "追加ダメージ [1~"+(4+c)+"]"
        }
        if (a >= 81 && a <= 90){
            gacha[i][0] = "./img/Card/potion_2.ico";
            gacha[i][1] = "ランダムポーションS";
            gacha[i][2] = "ランダム単体を回復";
            gacha[i][3] = "固定回復 ["+(15+c)+"]"
            gacha[i][4] = "追加回復 [1~"+(2+c)+"]"
        }
        if (a >= 91 && a <= 92){
            gacha[i][0] = "./img/Card/ele_wind.ico";
            gacha[i][1] = "テラウィンド";
            gacha[i][2] = "敵全体にダメージ";
            gacha[i][3] = "固定ダメージ ["+(7+c)+"]"
            gacha[i][4] = "追加ダメージ [1~"+(3+c)+"]"
        }
        if (a >= 93 && a <= 94){
            gacha[i][0] = "./img/Card/ele_water.ico";
            gacha[i][1] = "アクアスパイク";
            gacha[i][2] = "敵単体[1]にダメージ";
            gacha[i][3] = "固定ダメージ ["+(10+c)+"]"
            gacha[i][4] = "追加ダメージ [1~"+(7+c)+"]"
        }
        if (a >= 95 && a <= 96){
            gacha[i][0] = "./img/Card/ele_ice.ico";
            gacha[i][1] = "アイスフォール";
            gacha[i][2] = "敵単体[3]にダメージ";
            gacha[i][3] = "固定ダメージ ["+(10+c)+"]"
            gacha[i][4] = "追加ダメージ [1~"+(7+c)+"]"
        }
        if (a >= 97 && a <= 98){
            gacha[i][0] = "./img/Card/ele_earth.ico";
            gacha[i][1] = "タイタンクエイク";
            gacha[i][2] = "敵全体にダメージ";
            gacha[i][3] = "固定ダメージ [1]"
            gacha[i][4] = "追加ダメージ [1~"+(9+b+c)+"]"
        }
        if (a >= 99 && a <= 100){
            gacha[i][0] = "./img/Card/Potion.ico";
            gacha[i][1] = "ノーマルポーションEX";
            gacha[i][2] = "使用者を回復";
            gacha[i][3] = "固定回復 ["+(20+c)+"]"
            gacha[i][4] = "追加回復 [1~"+(7+b+c)+"]"
        }

        var d = parseFloat(count) + 1;
        count = d;
        localStorage.setItem("cardcount",count);
        localStorage.setItem("card"+count, JSON.stringify(gacha[i]));

        var card = i + 1;
        $("#icon"+card).children("img").attr("src",gacha[i][0]);
        $("#card"+card+"name").html(gacha[i][1]);
        $("#card"+card+"main").html(gacha[i][2]);
        $("#card"+card+"sub1").html(gacha[i][3]);
        $("#card"+card+"sub2").html(gacha[i][4]);
        $("#card"+card+"sub3").html(gacha[i][5]);

        var pos = (i*200) + 8;"px";

        $("#g_card"+card).animate({
            marginTop: "+=200px", 
            marginLeft: pos,
            opacity: "1"
        }, 500)

    }




    
}
