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
        var gamecount = 0;
        //ボーナス間ゲーム数カウンタ
        var BBgamecount = 0;



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


    //　読み込み完了時の処理
    window.onload=function(){
        document.getElementById("color").style.opacity = 0;
        keyflag = 0;
        }

