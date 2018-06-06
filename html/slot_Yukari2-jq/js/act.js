
//âtèªâÊñ èâä˙âª
function displayinit(){
    var dpdef = $("<img class='dp01'>").attr("src","./img/bg-01a.png").attr("style","z-index:900; position:absolute; transform-origin:0px 0px; transform:scale(0.8); top:-100px;");
    var dpdef2 = $("<img class='dp01'>").attr("src","./img/bg-01b.png").attr("style","z-index:901; position:absolute; transform-origin:0px 0px; transform:scale(0.8); top:-100px;");
    var dpdef3 = $("<img id='logo'>").attr("src","./img/logo.png").attr("style","z-index:950; position:absolute; transform:scale(0.8); top:-50px; left:50px; opacity:0;");
    var dpno1 = $("<div id='no1'>").attr("style","z-index:902; position:absolute; top:70px; left:230px; color:navy; font-family:Monotype Corsiva; -webkit-text-stroke: 2px #fff; font-size:180px; opacity:0;").text(1);
    var dpno2 = $("<div id='no2'>").attr("style","z-index:902; position:absolute; top:70px; left:380px; color:navy; font-family:Monotype Corsiva; -webkit-text-stroke: 2px #fff; font-size:180px; opacity:0;").text(1);
    var dpno3 = $("<div id='no3'>").attr("style","z-index:902; position:absolute; top:70px; left:530px; color:navy; font-family:Monotype Corsiva; -webkit-text-stroke: 2px #fff; font-size:180px; opacity:0;").text(1);
    $('.display').append(dpdef);
    $('.display').append(dpdef2);
    $('.display').append(dpdef3);
    $('.display').append(dpno1);
    $('.display').append(dpno2);
    $('.display').append(dpno3);
    $("#logo").animate({
        opacity: 1
    }, 500).animate({
        opacity: 0
    }, 2000)
    $("#no1").animate({opacity: 1}, 3500)
    $("#no2").animate({opacity: 1}, 3500)
    $("#no3").animate({opacity: 1}, 3500)
}

//âtèªîwåiïœçX
function displaychange(no){
    $(".dp01").remove();
    $("#logo").remove();
    var dpdef = $("<img class='dp01'>").attr("src","./img/bg-0"+no+"a.png").attr("style","z-index:900; position:absolute; transform-origin:0px 0px; transform:scale(0.8); top:-100px;");
    var dpdef2 = $("<img class='dp01'>").attr("src","./img/bg-0"+no+"b.png").attr("style","z-index:901; position:absolute; transform-origin:0px 0px; transform:scale(0.8); top:-100px;");
    $('.display').append(dpdef);
    $('.display').append(dpdef2);
    $("#no1").animate({opacity: 1}, 500)
    $("#no2").animate({opacity: 1}, 500)
    $("#no3").animate({opacity: 1}, 500)
}

//âtèªîwåiïœçX(É{Å[ÉiÉX)
function displaychangebonus(){
    $(".dp01").remove();
    $("#logo").remove();
    var dpdef = $("<img class='dp01'>").attr("src","./img/bg-05a.png").attr("style","z-index:900; position:absolute; transform-origin:0px 0px; transform:scale(0.8); top:-100px;");
    var dpdef3 = $("<img id='logo'>").attr("src","./img/Atelier Bonus.png").attr("style","z-index:950; position:absolute; transform:scale(0.2); top:-368px; left:-377px; opacity:1;");
    $('.display').append(dpdef);
    $('.display').append(dpdef3);
    $("#no1").animate({opacity: 0}, 500)
    $("#no2").animate({opacity: 0}, 500)
    $("#no3").animate({opacity: 0}, 500)
}

//âtèªîwåiïœçX(ÉuÉâÉbÉN)
function displaychangeblack(){
    $(".dp01").remove();
    $("#logo").remove();
    $("#no1").animate({opacity: 1}, 500)
    $("#no2").animate({opacity: 1}, 500)
    $("#no3").animate({opacity: 1}, 500)
}

var no1pot = 1;
var no2pot = 1;
var no3pot = 1;

function nopotall(){
    nopot1();
    nopot2();
    nopot3();
}

function nopot1() {
    switch (no1pot){
        case 0:$("#no1").css("color","indigo");break;
        case 1:$("#no1").css("color","green");break;
        case 2:$("#no1").css("color","navy");break;
        case 3:$("#no1").css("color","green");break;
        case 4:$("#no1").css("color","navy");break;
        case 5:$("#no1").css("color","green");break;
        case 6:$("#no1").css("color","navy");break;
        case 7:$("#no1").css("color","red");break;
        case 8:$("#no1").css("color","navy");break;
        case 9:$("#no1").css("color","green");break;
    }
    $("#no1").text(no1pot);
    no1pot +=1;
    if (no1pot == 10){no1pot = 0};

    if (keyflag <= 1){
        setTimeout("nopot1()", 50);//ÉAÉjÉÅÅ[ÉVÉáÉìÇåJÇËï‘Ç∑ä‘äu
    } else{
        nokettei1();
    }
}
function nopot2() {
    switch (no2pot){
        case 0:$("#no2").css("color","indigo");break;
        case 1:$("#no2").css("color","green");break;
        case 2:$("#no2").css("color","navy");break;
        case 3:$("#no2").css("color","green");break;
        case 4:$("#no2").css("color","navy");break;
        case 5:$("#no2").css("color","green");break;
        case 6:$("#no2").css("color","navy");break;
        case 7:$("#no2").css("color","red");break;
        case 8:$("#no2").css("color","navy");break;
        case 9:$("#no2").css("color","green");break;
    }
    $("#no2").text(no2pot);
    no2pot +=1;
    if (no2pot == 10){no2pot = 0};

    if (keyflag <= 2){
        setTimeout("nopot2()", 50);//ÉAÉjÉÅÅ[ÉVÉáÉìÇåJÇËï‘Ç∑ä‘äu
    } else{
        nokettei2();
    }
}
function nopot3() {
    switch (no3pot){
        case 0:$("#no3").css("color","indigo");break;
        case 1:$("#no3").css("color","green");break;
        case 2:$("#no3").css("color","navy");break;
        case 3:$("#no3").css("color","green");break;
        case 4:$("#no3").css("color","navy");break;
        case 5:$("#no3").css("color","green");break;
        case 6:$("#no3").css("color","navy");break;
        case 7:$("#no3").css("color","red");break;
        case 8:$("#no3").css("color","navy");break;
        case 9:$("#no3").css("color","green");break;
    }
    $("#no3").text(no3pot);
    no3pot +=1;
    if (no3pot == 10){no3pot = 0};

    if (keyflag <= 3){
        setTimeout("nopot3()", 50);//ÉAÉjÉÅÅ[ÉVÉáÉìÇåJÇËï‘Ç∑ä‘äu
    } else{
        nokettei3();
    }
}

function nokettei1(){
    if(nopotflg >= 1    && nopotflg <=1000) {no1pot = 2;}
    if(nopotflg >= 1000 && nopotflg <=2000) {no1pot = 1;}
    if(nopotflg >= 2001 && nopotflg <=3000) {no1pot = 4;}
    if(nopotflg >= 3001 && nopotflg <=4000) {no1pot = 3;}
    if(nopotflg >= 4001 && nopotflg <=5000) {no1pot = 6;}
    if(nopotflg >= 5001 && nopotflg <=6000) {no1pot = 5;}
    if(nopotflg >= 6001 && nopotflg <=7500) {no1pot = 8;}
    if(nopotflg >= 7501 && nopotflg <=8000) {no1pot = 2;}
    if(nopotflg >= 8001 && nopotflg <=8500) {no1pot = 4;}
    if(nopotflg >= 8501 && nopotflg <=9000) {no1pot = 6;}
    if(nopotflg >= 9001 && nopotflg <=9500) {no1pot = 8;}
    if(nopotflg >= 9501 && nopotflg <=9700) {no1pot = 1;}
    if(nopotflg >= 9701 && nopotflg <=9800) {no1pot = 3;}
    if(nopotflg >= 9801 && nopotflg <=9900) {no1pot = 5;}
    if(nopotflg >= 9901 && nopotflg <=10000){no1pot = 9;}
    if(nopotflg == 10001){no1pot = 1;}
    if(nopotflg == 10002){no1pot = 3;}
    if(nopotflg == 10003){no1pot = 7;}
    if(nopotflg == 10004){no1pot = 5;}
    if(nopotflg == 10005){no1pot = 9;}
    if (czcount >= 1){
        if(nopotflg >= 1    && nopotflg <=1000) {no1pot = 0;}
        if(nopotflg >= 1000 && nopotflg <=2000) {no1pot = 1;}
        if(nopotflg >= 2001 && nopotflg <=3000) {no1pot = 4;}
        if(nopotflg >= 3001 && nopotflg <=4000) {no1pot = 3;}
        if(nopotflg >= 4001 && nopotflg <=5000) {no1pot = 6;}
        if(nopotflg >= 5001 && nopotflg <=6000) {no1pot = 5;}
        if(nopotflg >= 6001 && nopotflg <=7500) {no1pot = 8;}
        if(nopotflg >= 7501 && nopotflg <=8000) {no1pot = 2;}
        if(nopotflg >= 8001 && nopotflg <=8500) {no1pot = 4;}
        if(nopotflg >= 8501 && nopotflg <=9000) {no1pot = 6;}
        if(nopotflg >= 9001 && nopotflg <=9500) {no1pot = 8;}
        if(nopotflg >= 9501 && nopotflg <=9700) {no1pot = 1;}
        if(nopotflg >= 9701 && nopotflg <=9800) {no1pot = 3;}
        if(nopotflg >= 9801 && nopotflg <=9900) {no1pot = 5;}
        if(nopotflg >= 9901 && nopotflg <=10000){no1pot = 9;}
    }
    switch (no1pot){
        case 0:$("#no1").css("color","indigo");break;
        case 1:$("#no1").css("color","green");break;
        case 2:$("#no1").css("color","navy");break;
        case 3:$("#no1").css("color","green");break;
        case 4:$("#no1").css("color","navy");break;
        case 5:$("#no1").css("color","green");break;
        case 6:$("#no1").css("color","navy");break;
        case 7:$("#no1").css("color","red");break;
        case 8:$("#no1").css("color","navy");break;
        case 9:$("#no1").css("color","green");break;
    }
    $("#no1").text(no1pot);
}

function nokettei2(){
    if(nopotflg >= 1    && nopotflg <=2000) {no2pot = 4;}
    if(nopotflg >= 2001 && nopotflg <=4000) {no2pot = 6;}
    if(nopotflg >= 4001 && nopotflg <=6000) {no2pot = 8;}
    if(nopotflg >= 6001 && nopotflg <=7500) {no2pot = 2;}
    if(nopotflg >= 7501 && nopotflg <=8000) {no2pot = 2;}
    if(nopotflg >= 8001 && nopotflg <=8500) {no2pot = 4;}
    if(nopotflg >= 8501 && nopotflg <=9000) {no2pot = 6;}
    if(nopotflg >= 9001 && nopotflg <=9500) {no2pot = 8;}
    if(nopotflg >= 9501 && nopotflg <=9700) {no2pot = 1;}
    if(nopotflg >= 9701 && nopotflg <=9800) {no2pot = 3;}
    if(nopotflg >= 9801 && nopotflg <=9900) {no2pot = 5;}
    if(nopotflg >= 9901 && nopotflg <=10000){no2pot = 9;}
    if(nopotflg == 10001){no2pot = 1;}
    if(nopotflg == 10002){no2pot = 3;}
    if(nopotflg == 10003){no2pot = 7;}
    if(nopotflg == 10004){no2pot = 3;}
    if(nopotflg == 10005){no2pot = 3;}
    if (czcount >= 1){
        if(nopotflg >= 1    && nopotflg <=800) {no2pot = 0;}
    }
    switch (no2pot){
        case 0:$("#no2").css("color","indigo");break;
        case 1:$("#no2").css("color","green");break;
        case 2:$("#no2").css("color","navy");break;
        case 3:$("#no2").css("color","green");break;
        case 4:$("#no2").css("color","navy");break;
        case 5:$("#no2").css("color","green");break;
        case 6:$("#no2").css("color","navy");break;
        case 7:$("#no2").css("color","red");break;
        case 8:$("#no2").css("color","navy");break;
        case 9:$("#no2").css("color","green");break;
    }
    $("#no2").text(no2pot);
}

function nokettei3(){
    if(nopotflg >= 1    && nopotflg <=2000) {no3pot = 4;}
    if(nopotflg >= 2001 && nopotflg <=4000) {no3pot = 6;}
    if(nopotflg >= 4001 && nopotflg <=6000) {no3pot = 8;}
    if(nopotflg >= 6001 && nopotflg <=7500) {no3pot = 2;}
    if(nopotflg >= 7501 && nopotflg <=8000) {no3pot = 2;}
    if(nopotflg >= 8001 && nopotflg <=8500) {no3pot = 4;}
    if(nopotflg >= 8501 && nopotflg <=9000) {no3pot = 6;}
    if(nopotflg >= 9001 && nopotflg <=9500) {no3pot = 8;}
    if(nopotflg >= 9501 && nopotflg <=9700) {no3pot = 1;}
    if(nopotflg >= 9701 && nopotflg <=9800) {no3pot = 3;}
    if(nopotflg >= 9801 && nopotflg <=9900) {no3pot = 5;}
    if(nopotflg >= 9901 && nopotflg <=10000){no3pot = 9;}
    if(nopotflg == 10001){no3pot = 1;}
    if(nopotflg == 10002){no3pot = 3;}
    if(nopotflg == 10003){no3pot = 7;}
    if(nopotflg == 10004){no3pot = 3;}
    if(nopotflg == 10005){no3pot = 3;}
    if (czcount >= 1){
        if(nopotflg >= 1    && nopotflg <=500) {no3pot = 0;}
    }
    switch (no3pot){
        case 0:$("#no3").css("color","indigo");break;
        case 1:$("#no3").css("color","green");break;
        case 2:$("#no3").css("color","navy");break;
        case 3:$("#no3").css("color","green");break;
        case 4:$("#no3").css("color","navy");break;
        case 5:$("#no3").css("color","green");break;
        case 6:$("#no3").css("color","navy");break;
        case 7:$("#no3").css("color","red");break;
        case 8:$("#no3").css("color","navy");break;
        case 9:$("#no3").css("color","green");break;
    }
    $("#no3").text(no3pot);
}