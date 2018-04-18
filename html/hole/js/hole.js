//////////////////////////////////////////////////
////////　ホール処理　hole.js      ////////////////
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


//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	グローバル変数
/////////////////////////////////////////////////


//---------------------------------------------//
/////////////////////////////////////////////////


//---------------------------------------------------------------//
//                                                               //
//---------------------------------------------------------------//

function jump(i){
    var link;
    switch (i) {
        case 1: link = "../slot_Raityo/index.html"; break;
        case 2: link = "../slot_RS/index.html"; break;
        case 3: link = "../slot_YukariA/index.html"; break;
        case 4: link = "../slot_Chrono/index.html"; break;
        case 5: link = "../slot_Yukari2/index.html"; break;
    }
    location.href = link;
}

function lvdown(){

    mycoin = storage.getItem('mycoin');
    Lv = storage.getItem('Lv');
    Lv = parseInt(Lv);
    mycoin = parseInt(mycoin);

    if (Lv > 1){
        mycoin = 0;
        storage.setItem('mycoin', mycoin);
        Lv -= 1;
        alert ("所持コインが0にリセットされました。レベルが1下がりました "+(Lv+1)+" → "+Lv);
    } else{
        mycoin = 0;
        storage.setItem('mycoin', mycoin);
        alert ("所持コインが0にリセットされました。");
    }

    storage.setItem('Lv', Lv);
    storage.setItem('mycoin', mycoin);
    document.getElementById("coin").innerHTML = mycoin;
    document.getElementById("pay").innerHTML = Lv;

}



