var round = 1;

function result(){
    var HPadd;
    var a = Math.floor(Math.random() * 3)+1;

    switch(a){
        case 1:HPadd = localStorage.getItem("yukariHP"); break;
        case 2:HPadd = localStorage.getItem("akaneHP"); break;
        case 3:HPadd = localStorage.getItem("aoiHP"); break;
    }
    var add = parseFloat(HPadd)+1;
    switch(a){
        case 1:HPadd = localStorage.setItem("yukariHP",add);$("#result_3").html("ノーマルチケット×"+round+" | ゆかりさん最大HP+1"); break;
        case 2:HPadd = localStorage.setItem("akaneHP",add);$("#result_3").html("ノーマルチケット×"+round+" | あかねさん最大HP+1"); break;
        case 3:HPadd = localStorage.setItem("aoiHP",add);$("#result_3").html("ノーマルチケット×"+round+" | あおいさん最大HP+1"); break;
    }

    $("#result_1").html("戦闘に勝利");
    $("#result_2").html("~報酬~");

    var t = localStorage.getItem("ticket");
    ticket = parseFloat(t) + parseFloat(round);
    localStorage.setItem("ticket",ticket);

    $("#battle_result").animate({
        opacity: "1"
    }, 1000)
    $("#battle_result").animate({
        opacity: "0"
    }, 2000)

    round += 1;
    setTimeout(function(){
        nextbattle(round);
    }, 3000);
    
}

function defeat(){

    $("#result_1").html("戦闘に敗北……");
    $("#result_2").html("アトリエに帰還します");
    $("#result_3").html("");

    $("#battle_result").animate({
        opacity: "1"
    }, 1000)
    $("#battle_result").animate({
        opacity: "0"
    }, 2000)

    setTimeout(function(){
        history.back();
    }, 3000);

}

function nextbattle(round){

    MAXHP_1 =localStorage.getItem("yukariHP");
    MAXHP_2 =localStorage.getItem("akaneHP");
    MAXHP_3 =localStorage.getItem("aoiHP");
    sta_p1 = 1;
    sta_p2 = 1;
    sta_p3 = 1;
    sta_e1 = 1;
    sta_e2 = 1;
    sta_e3 = 1;
    var ahp1 = parseFloat(AHP_1) + 1;
    var ahp2 = parseFloat(AHP_2) + 1;
    var ahp3 = parseFloat(AHP_3) + 1;
    AHP_1 = ahp1;
    AHP_2 = ahp2;
    AHP_3 = ahp3;

    if (AHP_1 > MAXHP_1){AHP_1 = MAXHP_1}
    if (AHP_2 > MAXHP_2){AHP_2 = MAXHP_2}
    if (AHP_3 > MAXHP_3){AHP_3 = MAXHP_3}





    switch (round){

        case 1:
            $("#result_1").html("回廊の森");
            $("#result_2").html("階層　1/5");
            $("#result_3").html("");
            $("#Enemy1").html("アンブレラバット Lv.1");
            $("#Enemy2").html("グリーンキャタピラ Lv.1");
            $("#Enemy3").html("グラスゴースト Lv.1");
            MAXEHP_1 =50;
            MAXEHP_2 =60;
            MAXEHP_3 =45;
            CTB_e1 = "./static/img/Enemy/s_bat.png";
            CTB_e2 = "./static/img/Enemy/s_caterpillar.png";
            CTB_e3 = "./static/img/Enemy/s_ghost.png";
        break;

        case 2:
        $("#result_1").html("回廊の森");
        $("#result_2").html("階層　2/5");
        $("#result_3").html("");
        $("#Enemy1").html("アンブレラバット Lv.2");
        $("#Enemy2").html("グリーンキャタピラ Lv.2");
        $("#Enemy3").html("グラスゴースト Lv.2");
        MAXEHP_1 =60;
        MAXEHP_2 =70;
        MAXEHP_3 =55;
        CTB_e1 = "./static/img/Enemy/s_bat.png";
        CTB_e2 = "./static/img/Enemy/s_caterpillar.png";
        CTB_e3 = "./static/img/Enemy/s_ghost.png";
        break;

        case 3:
        $("#result_1").html("回廊の森");
        $("#result_2").html("階層　3/5");
        $("#result_3").html("");
        $("#Enemy1").html("アンブレラバット Lv.3");
        $("#Enemy2").html("グリーンキャタピラ Lv.3");
        $("#Enemy3").html("グラスゴースト Lv.3");
        MAXEHP_1 =70;
        MAXEHP_2 =80;
        MAXEHP_3 =65;
        CTB_e1 = "./static/img/Enemy/s_bat.png";
        CTB_e2 = "./static/img/Enemy/s_caterpillar.png";
        CTB_e3 = "./static/img/Enemy/s_ghost.png";
        break;

        case 4:
        $("#result_1").html("回廊の森");
        $("#result_2").html("階層　4/5");
        $("#result_3").html("");
        $("#Enemy1").html("コモンダケ Lv.1");
        $("#Enemy2").html("マンドラゴラ Lv.1");
        $("#Enemy3").html("フォレストウルフ Lv.1");
        MAXEHP_1 =75;
        MAXEHP_2 =80;
        MAXEHP_3 =75;
        CTB_e1 = "./static/img/Enemy/s_maitake.png";
        CTB_e2 = "./static/img/Enemy/s_mandragora.png";
        CTB_e3 = "./static/img/Enemy/s_lobo.png";
        break;

        case 5:
        $("#result_1").html("回廊の森");
        $("#result_2").html("階層　5/5");
        $("#result_3").html("");
        $("#Enemy1").html("コモンダケ Lv.2");
        $("#Enemy2").html("ウッドゴーレム");
        $("#Enemy3").html("フォレストウルフ Lv.2");
        MAXEHP_1 =85;
        MAXEHP_2 =140;
        MAXEHP_3 =85;
        CTB_e1 = "./static/img/Enemy/s_maitake.png";
        CTB_e2 = "./static/img/Enemy/s_golem.png";
        CTB_e3 = "./static/img/Enemy/s_lobo.png";
        break;

        case 6:
        $("#result_1").html("ステージクリア");
        $("#result_2").html("アトリエに帰還します");
        $("#result_3").html("");
        $("#battle_result").animate({
            opacity: "1"
        }, 1000)
        $("#battle_result").animate({
            opacity: "0"
        }, 2000)
        setTimeout(function(){
            history.back();
        }, 3000);
        break;
    }
    $("#e1").children("img").attr("src",CTB_e1);
    $("#e2").children("img").attr("src",CTB_e2);
    $("#e3").children("img").attr("src",CTB_e3);
    EHP_1 = MAXEHP_1;
    EHP_2 = MAXEHP_2;
    EHP_3 = MAXEHP_3;
    $("#e1").animate({
        opacity: "1" 
    }, 400)
    $("#e2").animate({
        opacity: "1" 
    }, 400)
    $("#e3").animate({
        opacity: "1" 
    }, 400)

    turninit();
}