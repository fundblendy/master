//////////////////////////////////////////////////
////////　本体処理　mode.js      ////////////////
//////////////////////////////////////////////////

/////////////////////////////////////////////////
//  説明
/////////////////////////////////////////////////
    //モード管理

//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	定数
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	グローバル変数
/////////////////////////////////////////////////
    //RTモード
    var RTmode ="リセット";
    var RTmodesub ="通常A";


//---------------------------------------------//
/////////////////////////////////////////////////

function RTmodechange(){

    var a = Math.floor( Math.random() * 99 ) + 1;

    
    if (RTmode == "リセット"){
        if (a >= 1 && a <=50){
            RTmodesub = "通常A";
        }
        if (a >= 51 && a <=75){
            RTmodesub = "通常B";
        }
        if (a >= 76 && a <=90){
            RTmodesub = "通常C";
        }
        if (a >= 91 && a <=95){
            RTmodesub = "天国準備A";
        }
        if (a >= 96 && a <=100){
            RTmodesub = "天国A";
        }
    }

    if (RTmode == "通常A"){
        if (a >= 1 && a <=100){
            RTmodesub = "通常B";
        }
    }

    if (RTmode == "通常B"){
        if (a >= 1 && a <=20){
            RTmodesub = "通常B";
        }
        if (a >= 21 && a <=100){
            RTmodesub = "通常C";
        }
    }

    if (RTmode == "通常C"){
        if (a >= 1 && a <=20){
            RTmodesub = "通常C";
        }
        if (a >= 21 && a <=100){
            RTmodesub = "天国準備A";
        }
    }

    if (RTmode == "天国準備A"){
        if (a >= 1 && a <=50){
            RTmodesub = "天国準備B";
        }
        if (a >= 51 && a <=100){
            RTmodesub = "天国A";
        }
    }

    if (RTmode == "天国準備B"){
        if (a >= 1 && a <=25){
            RTmodesub = "天国A";
        }
        if (a >= 26 && a <=50){
            RTmodesub = "天国B";
        }
        if (a >= 51 && a <=100){
            RTmodesub = "超天国B";
        }
    }

    if (RTmode == "天国A"){
        if (a >= 1 && a <=25){
            RTmodesub = "通常A";
        }
        if (a >= 26 && a <=50){
            RTmodesub = "通常B";
        }
        if (a >= 51 && a <=100){
            RTmodesub = "天国B";
        }
    }

    if (RTmode == "天国B"){
        if (a >= 1 && a <=40){
            RTmodesub = "天国A";
        }
        if (a >= 41 && a <=80){
            RTmodesub = "天国B";
        }
        if (a >= 81 && a <=100){
            RTmodesub = "超天国A";
        }
    }

    if (RTmode == "超天国A"){
        if (a >= 1 && a <=25){
            RTmodesub = "天国A";
        }
        if (a >= 26 && a <=50){
            RTmodesub = "天国A";
        }
        if (a >= 51 && a <=100){
            RTmodesub = "超天国A";
        }
    }

    if (RTmode == "超天国B"){
        if (a >= 1 && a <=10){
            RTmodesub = "天国A";
        }
        if (a >= 11 && a <=20){
            RTmodesub = "天国B";
        }
        if (a >= 21 && a <=100){
            RTmodesub = "超天国B";
        }
    }

    RTmode = RTmodesub;

}

function RTmodecount(){

    var a = Math.floor( Math.random() * 99 ) + 1 ;


    if (RTmode == "通常A"){
        if (a >= 1 && a <=50){
            countpot2 = 200;
        }
        if (a >= 51 && a <=100){
            countpot2 = 350;
        }
    }

    if (RTmode == "通常B"){
        if (a >= 1 && a <=25){
            countpot2 = 500;
        }
        if (a >= 26 && a <=50){
            countpot2 = 300;
        }
        if (a >= 51 && a <=100){
            countpot2 = 350;
        }
    }

    if (RTmode == "通常C"){
        if (a >= 1 && a <=25){
            countpot2 = 250;
        }
        if (a >= 26 && a <=50){
            countpot2 = 300;
        }
        if (a >= 51 && a <=100){
            countpot2 = 350;
        }
    }

        if (RTmode == "天国準備A"){
        if (a >= 1 && a <=25){
            countpot2 = 200;
        }
        if (a >= 26 && a <=50){
            countpot2 = 250;
        }
        if (a >= 51 && a <=75){
            countpot2 = 300;
        }
        if (a >= 76 && a <=100){
            countpot2 = 350;
        }
    }

    if (RTmode == "天国準備B"){
        if (a >= 1 && a <=25){
            countpot2 = 500;
        }
        if (a >= 26 && a <=50){
            countpot2 = 500;
        }
        if (a >= 51 && a <=100){
            countpot2 = 777;
        }
    }

    if (RTmode == "天国A"){
        if (a >= 1 && a <=25){
            countpot2 = 77;
        }
        if (a >= 26 && a <=50){
            countpot2 = 77;
        }
        if (a >= 51 && a <=100){
            countpot2 = 100;
        }
    }

    if (RTmode == "天国B"){
        if (a >= 1 && a <=40){
            countpot2 = 77;
        }
        if (a >= 41 && a <=80){
            countpot2 = 77;
        }
        if (a >= 81 && a <=100){
            countpot2 = 100;
        }
    }

    if (RTmode == "超天国A"){
        if (a >= 1 && a <=25){
            countpot2 = 20;
        }
        if (a >= 26 && a <=50){
            countpot2 = 30;
        }
        if (a >= 51 && a <=100){
            countpot2 = 50;
        }
    }

    if (RTmode == "超天国B"){
        if (a >= 1 && a <=10){
            countpot2 = 20;
        }
        if (a >= 11 && a <=20){
            countpot2 = 30;
        }
        if (a >= 21 && a <=100){
            countpot2 = 50;
        }
    }
}