var MAXHP_1 =localStorage.getItem("yukariHP");
var MAXHP_2 =localStorage.getItem("akaneHP");
var MAXHP_3 =localStorage.getItem("aoiHP");
var AHP_1 =MAXHP_1;
var AHP_2 =MAXHP_2;
var AHP_3 =MAXHP_3;

var MAXEHP_1 =50;
var MAXEHP_2 =60;
var MAXEHP_3 =45;
var EHP_1 =50;
var EHP_2 =60;
var EHP_3 =45;

var sta_p1 = 1; //ステート　0:戦闘不能/1:通常
var sta_p2 = 1;
var sta_p3 = 1;
var sta_e1 = 1;
var sta_e2 = 1;
var sta_e3 = 1;

var damage = 0;
var heal = 0;



// ダメージ計算(カード内容読み取り)
function damagecore(card){

    damage = 0;
    heal = 0;

    var target; //対象
    var dhflag; //攻撃回復フラグ 0:攻撃/1:回復

    var name = $("#card"+card+"name").html();
    var main = $("#card"+card+"main").html();
    var s1 = $("#card"+card+"sub1").html();
    var s2 = $("#card"+card+"sub2").html();
    var s3 = $("#card"+card+"sub3").html();

    // 効果
    var sub1 = s1.split(" ");
    var sub2 = s2.split(" ");
    var sub3 = s3.split(" ");

    // 効果量
    if (sub1[1] != undefined){var d1 = sub1[1].slice(1,-1);}
    if (sub2[1] != undefined){var d2 = sub2[1].slice(1,-1);}
    if (sub3[1] != undefined){var d3 = sub3[1].slice(1,-1);}

    //alert(sub1[0]+","+sub1[1]);

    // 対象の指定、攻撃回復判定
    switch (main){
        case "ランダム単体にダメージ": target = 0; dhflag = 0; break;
        case "ランダム単体を回復": target = 0; dhflag = 1; break;
        case "敵単体[1]にダメージ": target = 1; dhflag = 0; break;
        case "味方単体[1]を回復": target = 1; dhflag = 1; break;
        case "敵単体[2]にダメージ": target = 2; dhflag = 0; break;
        case "味方単体[2]を回復": target = 2; dhflag = 1; break;
        case "敵単体[3]にダメージ": target = 3;dhflag = 0; break;
        case "味方単体[3]を回復": target = 3; dhflag = 1; break;
        case "敵全体にダメージ": target = 4; dhflag = 0; break;
        case "味方全体を回復": target = 4; dhflag = 1; break;
        case "使用者を回復": target = parseInt(turn.slice(2)); dhflag = 1; break;
        case "行動順を全てシャッフル": shuffle(CTBwait); dhflag = 1; break;
    }

    // 効果判定1
    switch (sub1[0]){
        case "固定ダメージ": damage += parseInt(d1); break;
        case "固定回復": heal += parseInt(d1); break;
        case "追加ダメージ": 
            var d = d1.split("~");
            damage += Math.floor( Math.random() * parseInt(d[1]) ) + parseInt(d[0]);
            break;
        case "追加回復": 
            var d = d1.split("~");
            heal += Math.floor( Math.random() * parseInt(d[1]) ) + parseInt(d[0]);
            break;
    }

    switch (sub2[0]){
        case "固定ダメージ": damage += parseInt(d2); break;
        case "固定回復": heal += parseInt(d2); break;
        case "追加ダメージ": 
            var d = d2.split("~");
            damage += Math.floor( Math.random() * parseInt(d[1]) ) + parseInt(d[0]);
            break;
        case "追加回復": 
            var d = d2.split("~");
            heal += Math.floor( Math.random() * parseInt(d[1]) ) + parseInt(d[0]);
            break;
    }

    switch (sub3[0]){
        case "固定ダメージ": damage += parseInt(d3); break;
        case "固定回復": heal += parseInt(d3); break;
        case "追加ダメージ": 
            var d = d3.split("~");
            damage += Math.floor( Math.random() * parseInt(d[1]) ) + parseInt(d[0]);
            break;
        case "追加回復": 
            var d = d3.split("~");
            heal += Math.floor( Math.random() * parseInt(d[1]) ) + parseInt(d[0]);
            break;
    }
    


    switch(dhflag){
        case 0:actoratk(target);break;
        case 1:actorheal(target);break;
    }



}






function enemyatk(){

    edamagecore();

    var a = Math.floor( Math.random() * 3 ) + 1;

    switch(a){
        case 1: 
            if (AHP_1 ==0){enemyatk(); return;}
            if (AHP_1 > damage){
                AHP_1 -= damage;
            } else{
                AHP_1 = 0;
                sta_p1 = 0;
                $("#p1").children("img").attr("src","./static/img/SV/"+ actor1 +"_61.png");
            }
            break;
        case 2:
            if (AHP_2 ==0){enemyatk(); return;}
            if (AHP_2 > damage){
                AHP_2 -= damage;
            } else{
                AHP_2 = 0;
                sta_p2 = 0;
                $("#p2").children("img").attr("src","./static/img/SV/"+ actor2 +"_61.png");
            }
        break;
        case 3:
            if (AHP_3 ==0){enemyatk(); return;}
            if (AHP_3 > damage){
                AHP_3 -= damage;
            } else{
                AHP_3 = 0;
                sta_p3 = 0;
                $("#p3").children("img").attr("src","./static/img/SV/"+ actor3 +"_61.png");
            }
        break;
    }

    var select = "#HPbox_p"+a;
    var selectB = "#Damage_"+a;
    var dmvis = damage;

    $(selectB).html(dmvis);
    $(selectB).css("color","pink");

    $(selectB).animate({
        opacity: 1
    }, 200)
    $(selectB).animate({
        opacity: 0
    }, 1500)
    $(select).animate({
        backgroundColor: "rgb(200, 0, 0)"
    }, 300)
    $(select).animate({
        backgroundColor: "rgb(0, 0, 0)"
    }, 300)

    $("#HP_1").html( "HP "+AHP_1+"/"+MAXHP_1);
    $("#HP_2").html( "HP "+AHP_2+"/"+MAXHP_2);
    $("#HP_3").html( "HP "+AHP_3+"/"+MAXHP_3);

    damage =0;

    if(sta_p1 == 0 && sta_p2 == 0 && sta_p3 == 0){
        defeat();
        return;
    }
    if(sta_e1 == 0 && sta_e2 == 0 && sta_e3 == 0){
        result();
        return;
    }
}



// no=攻撃対象 0:ランダム 1~3:対象の番号 4:全体
function actoratk(no){

    if (no == 0){
        var a = Math.floor( Math.random() * 3 ) + 1;
    } else{
        var a = no;
    }


    switch(a){
        case 1: 
            if (EHP_1 == 0){actoratk(0); return;}
            if (EHP_1 > damage){
                EHP_1 -= damage;
            } else{
                EHP_1 = 0;
                sta_e1 = 0;
                $("#e1").animate({
                    opacity: "0" 
                }, 400)
            }
            break;
        case 2:
            if (EHP_2 == 0){actoratk(0); return;}
            if (EHP_2 > damage){
                EHP_2 -= damage;
            } else{
                EHP_2 = 0;
                sta_e2 = 0;
                $("#e2").animate({
                    opacity: "0" 
                }, 400)
            }
        break;
        case 3:
            if (EHP_3 == 0){actoratk(0); return;}
            if (EHP_3 > damage){
                EHP_3 -= damage;
            } else{
                EHP_3 = 0;
                sta_e3 = 0;
                $("#e3").animate({
                    opacity: "0" 
                }, 400)
            }
        break;
        case 4:
            if (EHP_1 > damage){
                EHP_1 -= damage;
            } else{
                EHP_1 = 0;
                sta_e1 = 0;
                $("#e1").animate({
                    opacity: "0" 
                }, 400)
            }
            if (EHP_2 > damage){
                EHP_2 -= damage;
            } else{
                EHP_2 = 0;
                sta_e2 = 0;
                $("#e2").animate({
                    opacity: "0" 
                }, 400)
            }
            if (EHP_3 > damage){
                EHP_3 -= damage;
            } else{
                EHP_3 = 0;
                sta_e3 = 0;
                $("#e3").animate({
                    opacity: "0" 
                }, 400)
            }
        break;
    }

    var dmvis = damage;
    
    if (a <= 3){
        var select = "#HPbox_e"+a;
        var selectB = "#EDamage_"+a;
        
        $(selectB).html(dmvis);
        $(selectB).css("color","pink");

        $(select).animate({
            backgroundColor: "rgb(200, 0, 0)"
        }, 300)
        $(select).animate({
            backgroundColor: "rgb(0, 0, 0)"
        }, 300)
        $(selectB).animate({
            opacity: 1
        }, 200)
        $(selectB).animate({
            opacity: 0
        }, 1000)
    } else{
        $("#EDamage_1").html(dmvis);
        $("#EDamage_1").css("color","pink");
        $("#EDamage_2").html(dmvis);
        $("#EDamage_2").css("color","pink");
        $("#EDamage_3").html(dmvis);
        $("#EDamage_3").css("color","pink");

        $("#HPbox_e1").animate({
            backgroundColor: "rgb(200, 0, 0)"
        }, 300)
        $("#HPbox_e2").animate({
            backgroundColor: "rgb(200, 0, 0)"
        }, 300)
        $("#HPbox_e3").animate({
            backgroundColor: "rgb(200, 0, 0)"
        }, 300)
        $("#HPbox_e1").animate({
            backgroundColor: "rgb(0, 0, 0)"
        }, 300)
        $("#HPbox_e2").animate({
            backgroundColor: "rgb(0, 0, 0)"
        }, 300)
        $("#HPbox_e3").animate({
            backgroundColor: "rgb(0, 0, 0)"
        }, 300)

        $("#EDamage_1").animate({
            opacity: 1
        }, 200)
        $("#EDamage_1").animate({
            opacity: 0
        }, 1000)
        $("#EDamage_2").animate({
            opacity: 1
        }, 200)
        $("#EDamage_2").animate({
            opacity: 0
        }, 1000)
        $("#EDamage_3").animate({
            opacity: 1
        }, 200)
        $("#EDamage_3").animate({
            opacity: 0
        }, 1000)
    }


    $("#EHP_1").html( "HP "+EHP_1+"/"+MAXEHP_1);
    $("#EHP_2").html( "HP "+EHP_2+"/"+MAXEHP_2);
    $("#EHP_3").html( "HP "+EHP_3+"/"+MAXEHP_3);

    if(sta_p1 == 0 && sta_p2 == 0 && sta_p3 == 0){
        defeat();
        return;
    }
    if(sta_e1 == 0 && sta_e2 == 0 && sta_e3 == 0){
        result();
        return;
    }

    damage = 0;


}

function actorheal(no){

    if (no == 0){
        var a = Math.floor( Math.random() * 3 ) + 1;
    } else{
        var a = no;
    }

    if (AHP_1 == MAXHP_1 && AHP_2 == MAXHP_2 && AHP_3 == MAXHP_3){ heal =0; return;}


    switch(a){
        case 1: 
            if (AHP_1 == 0){actorheal(0); return;}
            if (AHP_1 == MAXHP_1){actorheal(0); return;}
            if (MAXHP_1 - AHP_1 > heal ){
                AHP_1 += heal;
            } else{
                AHP_1 = MAXHP_1;
            }
            break;
        case 2:
            if (AHP_2 == 0){actorheal(0); return;}
            if (AHP_2 == MAXHP_2){actorheal(0); return;}
            if (MAXHP_2 - AHP_2 > heal ){
                AHP_2 += heal;
            } else{
                AHP_2 = MAXHP_2;
            }
        break;
        case 3:
            if (AHP_3 == 0){actorheal(0); return;}
            if (AHP_3 == MAXHP_3){actorheal(0); return;}
            if (MAXHP_3 - AHP_3 > heal ){
                AHP_3 += heal;
            } else{
                AHP_3 = MAXHP_3;
            }
        break;
        case 4:
            if (MAXHP_1 - AHP_1 > heal ){
                if (AHP_1 != 0){
                        AHP_1 += heal;
                    }
            } else{
                        AHP_1 = MAXHP_1;
            }
            if (MAXHP_2 - AHP_2 > heal ){
                if (AHP_2 != 0){
                    AHP_2 += heal;
                }
            } else{
                AHP_2 = MAXHP_2;
            }
            if (MAXHP_3 - AHP_3 > heal ){
                if (AHP_3 != 0){
                    AHP_3 += heal;
                }
            } else{
                AHP_3 = MAXHP_3;
            }
    }

    var select = "#HPbox_p"+a;
    var selectB = "#Damage_"+a;
    var dmvis = heal;

    $(selectB).html(dmvis);
    $(selectB).css("color","lightgreen");

    if (a <= 3){
        $(select).animate({
            backgroundColor: "rgb(0, 200, 0)"
        }, 300)
        $(select).animate({
            backgroundColor: "rgb(0, 0, 0)"
        }, 300)
        $(selectB).animate({
            opacity: 1
        }, 200)
        $(selectB).animate({
            opacity: 0
        }, 1000)
    }else{
        $("#Damage_1").html(dmvis);
        $("#Damage_1").css("color","lightgreen");
        $("#Damage_2").html(dmvis);
        $("#Damage_2").css("color","lightgreen");
        $("#Damage_3").html(dmvis);
        $("#Damage_3").css("color","lightgreen");
        $("#HPbox_p1").animate({
            backgroundColor: "rgb(0, 200, 0)"
        }, 300)
        $("#HPbox_p2").animate({
            backgroundColor: "rgb(0, 200, 0)"
        }, 300)
        $("#HPbox_p3").animate({
            backgroundColor: "rgb(0, 200, 0)"
        }, 300)
        $("#HPbox_p1").animate({
            backgroundColor: "rgb(0, 0, 0)"
        }, 300)
        $("#HPbox_p2").animate({
            backgroundColor: "rgb(0, 0, 0)"
        }, 300)
        $("#HPbox_p3").animate({
            backgroundColor: "rgb(0, 0, 0)"
        }, 300)
        $("#Damage_1").animate({
            opacity: 1
        }, 200)
        $("#Damage_1").animate({
            opacity: 0
        }, 1000)
        $("#Damage_2").animate({
            opacity: 1
        }, 200)
        $("#Damage_2").animate({
            opacity: 0
        }, 1000)
        $("#Damage_3").animate({
            opacity: 1
        }, 200)
        $("#Damage_3").animate({
            opacity: 0
        }, 1000)

    }






    $("#HP_1").html( "HP "+AHP_1+"/"+MAXHP_1);
    $("#HP_2").html( "HP "+AHP_2+"/"+MAXHP_2);
    $("#HP_3").html( "HP "+AHP_3+"/"+MAXHP_3);

    heal =0;

}