
var CTB_p1 = "./img/SV/yukari_14.png";
var CTB_p2 = "./img/SV/akane_14.png";
var CTB_p3 = "./img/SV/aoi_14.png";
var CTB_e1 = "./img/Enemy/s_bat.png";
var CTB_e2 = "./img/Enemy/s_caterpillar.png";
var CTB_e3 = "./img/Enemy/s_ghost.png";


var CTBwait = [CTB_p1,CTB_p2,CTB_p3,CTB_e1,CTB_e2,CTB_e3,CTB_p1,CTB_p2,CTB_p3,CTB_e1,CTB_e2,CTB_e3];


function turninit(){

    CTBwait = [CTB_p1,CTB_p2,CTB_p3,CTB_e1,CTB_e2,CTB_e3,CTB_p1,CTB_p2,CTB_p3,CTB_e1,CTB_e2,CTB_e3];

    $("#battle_result").animate({
        opacity: "1"
    }, 1000)
    $("#battle_result").animate({
        opacity: "0"
    }, 2000)

    $("#HP_1").html( "HP "+AHP_1+"/"+MAXHP_1);
    $("#HP_2").html( "HP "+AHP_2+"/"+MAXHP_2);
    $("#HP_3").html( "HP "+AHP_3+"/"+MAXHP_3);

    $("#EHP_1").html( "HP "+EHP_1+"/"+MAXEHP_1);
    $("#EHP_2").html( "HP "+EHP_2+"/"+MAXEHP_2);
    $("#EHP_3").html( "HP "+EHP_3+"/"+MAXEHP_3);

    $("#w0").children("img").attr("src",CTBwait[0]);
    $("#w1").children("img").attr("src",CTBwait[1]);
    $("#w2").children("img").attr("src",CTBwait[2]);
    $("#w3").children("img").attr("src",CTBwait[3]);
    $("#w4").children("img").attr("src",CTBwait[4]);
    $("#w5").children("img").attr("src",CTBwait[5]);
    $("#w6").children("img").attr("src",CTBwait[6]);
    $("#w7").children("img").attr("src",CTBwait[7]);
    $("#w8").children("img").attr("src",CTBwait[8]);
    $("#w9").children("img").attr("src",CTBwait[9]);


    switch(CTBwait[0]){
        case CTB_p1:turn ="#p1"; break;
        case CTB_p2:turn ="#p2"; break;
        case CTB_p3:turn ="#p3"; break;
        case CTB_e1:turn ="#e1"; break;
        case CTB_e2:turn ="#e2"; break;
        case CTB_e3:turn ="#e3"; break;
    }
    switch (turn) {
        case "#p1": activeactor = actor1; break;
        case "#p2": activeactor = actor2; break;
        case "#p3": activeactor = actor3; break;
        case "#e1": activeactor = enemy1; break;
        case "#e2": activeactor = enemy2; break;
        case "#e3": activeactor = enemy3; break;
    }

    var select = "#HPbox_"+turn.slice(1);

    $(select).animate({
        borderColor: "rgb(255, 254, 210)"
    }, 0)

    keyflag = 0;
}



function turnnext(){
    

    var select = "#HPbox_"+turn.slice(1);

    $(select).animate({
        borderColor: "rgb(44, 21, 0)"
    }, 0)


    $("#CTBicon").animate({
        opacity: "0"
    }, 0)

    var tmp = CTBwait[0];
    CTBwait.shift();
    CTBwait.push(tmp);

    $("#w0").children("img").attr("src",CTBwait[0]);
    $("#w1").children("img").attr("src",CTBwait[1]);
    $("#w2").children("img").attr("src",CTBwait[2]);
    $("#w3").children("img").attr("src",CTBwait[3]);
    $("#w4").children("img").attr("src",CTBwait[4]);
    $("#w5").children("img").attr("src",CTBwait[5]);
    $("#w6").children("img").attr("src",CTBwait[6]);
    $("#w7").children("img").attr("src",CTBwait[7]);
    $("#w8").children("img").attr("src",CTBwait[8]);
    $("#w9").children("img").attr("src",CTBwait[9]);

    $("#CTBicon").animate({
        opacity: "1"
    }, 400)

    switch(CTBwait[0]){
        case CTB_p1:turn ="#p1"; break;
        case CTB_p2:turn ="#p2"; break;
        case CTB_p3:turn ="#p3"; break;
        case CTB_e1:turn ="#e1"; break;
        case CTB_e2:turn ="#e2"; break;
        case CTB_e3:turn ="#e3"; break;
    }
    switch (turn) {
        case "#p1": activeactor = actor1; if (sta_p1 == 0){turnnext();} break;
        case "#p2": activeactor = actor2; if (sta_p2 == 0){turnnext();} break;
        case "#p3": activeactor = actor3; if (sta_p3 == 0){turnnext();} break;
        case "#e1": activeactor = enemy1; if (sta_e1 == 0){turnnext();} else{eatack();} break;
        case "#e2": activeactor = enemy2; if (sta_e2 == 0){turnnext();} else{eatack();} break;
        case "#e3": activeactor = enemy3; if (sta_e3 == 0){turnnext();} else{eatack();} break;
    }

    var select = "#HPbox_"+turn.slice(1);

    $(select).animate({
        borderColor: "rgb(255, 254, 210)"
    }, 0)

    

}
