//////////////////////////////////////////////////
////////　初期化処理　init.js      ////////////////
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

        //所持コイン
        var mycoin;

        //ゲーム数カウンタ
        var gamecount;
        //ボーナス間ゲーム数カウンタ
        var BBgamecount;

        //ローカルストレージを設定
        var storage = localStorage;
//---------------------------------------------//
/////////////////////////////////////////////////


//---------------------------------------------------------------//
//                                                               //
//---------------------------------------------------------------//


    mycoin = storage.getItem('mycoin');

    if (mycoin == null ){
        storage.setItem('mycoin', '500');
        mycoin = storage.getItem('mycoin');
    }

    

    document.getElementById("coin").innerHTML = mycoin;



