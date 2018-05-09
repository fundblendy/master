var MAXHP_1 =28;
var MAXHP_2 =35;
var MAXHP_3 =31;
var AHP_1 =28;
var AHP_2 =35;
var AHP_3 =31;

var MAXEHP_1 =50;
var MAXEHP_2 =60;
var MAXEHP_3 =60;
var EHP_1 =50;
var EHP_2 =60;
var EHP_3 =60;

var sta_p1 = 1; //ステート　0:戦闘不能/1:通常
var sta_p2 = 1;
var sta_p3 = 1;
var sta_e1 = 1;
var sta_e2 = 1;
var sta_e3 = 1;

var damage = 0;
var heal = 0;



// ダメージ計算
function damagecore(card){
    //仮処理
    switch(card){
        case 1:damage = 10 + Math.floor( Math.random() * 2 ) + 1; break;
        case 2:heal = 10 + Math.floor( Math.random() * 5 ) + 1; break;
        case 3:damage = 5; break;
        case 4:heal = 2 + Math.floor( Math.random() * 4 ) + 1; break;
        case 5:damage = 6 + Math.floor( Math.random() * 5 ) + 1; break;
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
                $("#p1").children("img").attr("src","./img/SV/"+ actor1 +"_61.png");
            }
            break;
        case 2:
            if (AHP_2 ==0){enemyatk(); return;}
            if (AHP_2 > damage){
                AHP_2 -= damage;
            } else{
                AHP_2 = 0;
                sta_p2 = 0;
                $("#p2").children("img").attr("src","./img/SV/"+ actor2 +"_61.png");
            }
        break;
        case 3:
            if (AHP_3 ==0){enemyatk(); return;}
            if (AHP_3 > damage){
                AHP_3 -= damage;
            } else{
                AHP_3 = 0;
                sta_p3 = 0;
                $("#p3").children("img").attr("src","./img/SV/"+ actor3 +"_61.png");
            }
        break;
    }

    var select = "#HPbox_p"+a;
    

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

    if (a <= 3){
        var select = "#HPbox_e"+a;

        $(select).animate({
            backgroundColor: "rgb(200, 0, 0)"
        }, 300)
        $(select).animate({
            backgroundColor: "rgb(0, 0, 0)"
        }, 300)
    } else{
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
    }


    $("#EHP_1").html( "HP "+EHP_1+"/"+MAXEHP_1);
    $("#EHP_2").html( "HP "+EHP_2+"/"+MAXEHP_2);
    $("#EHP_3").html( "HP "+EHP_3+"/"+MAXEHP_3);

    damage = 0;


}

function actorheal(no){

    if (no == 0){
        var a = Math.floor( Math.random() * 3 ) + 1;
    } else{
        var a = no;
    }

    if (AHP_1 == MAXHP_1 && AHP_2 == MAXHP_2 && AHP_3 == MAXHP_3){return;}


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
    

    if (a <= 3){
        $(select).animate({
            backgroundColor: "rgb(0, 200, 0)"
        }, 300)
        $(select).animate({
            backgroundColor: "rgb(0, 0, 0)"
        }, 300)
    }else{
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
    }






    $("#HP_1").html( "HP "+AHP_1+"/"+MAXHP_1);
    $("#HP_2").html( "HP "+AHP_2+"/"+MAXHP_2);
    $("#HP_3").html( "HP "+AHP_3+"/"+MAXHP_3);

    heal =0;

}