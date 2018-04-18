//////////////////////////////////////////////////
////////　演出処理　act.js      ////////////////
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
    //
    var serif = "";
    var face = "";


//---------------------------------------------//
/////////////////////////////////////////////////

//セリフ　通常A
function act1(){
    var a = Math.floor( Math.random() * 99 ) + 1;

    if (a >= 1 && a <=70){
        serif = "";
    }
    if (a == 71){
        face = "./img/yukari1.png";
        serif = "通常時は50G周期で「錬金チャレンジ」抽選を行います";
    }
    if (a == 72){
        face = "./img/yukari0.png";
        serif = "(もっとたくさん勉強して、もっと強くならないと・・・)";
    }
    if (a == 73){
        face = "./img/yukari6.png";
        serif = "この世界には私たちの知らないことが、まだまだたくさんあります！";
    }
    if (a == 74){
        face = "./img/yukari5.png";
        serif = "美味しい紅茶を買ってきたんです！一緒に飲みませんか？";
    }
    if (a == 75){
        face = "./img/yukari4.png";
        serif = "そんなに急いだら転んでしまいますよ？";
    }
    if (a == 76){
        face = "./img/yukari1.png";
        serif = "通常時は１G毎に左のG数カウンタが１ずつ減少します";
    }
    if (a == 77){
        face = "./img/aoi0.png";
        serif = "「錬金ボーナス中」もゲーム数カウンタには要注目・・・？";
    }
    if (a == 78){
        face = "./img/aoi1.png";
        serif = "お姉ちゃん・・・そんなところに上って大丈夫？";
    }
    if (a == 79){
        face = "./img/aoi1.png";
        serif = "お腹すいたなぁ・・・少し休憩しない？";
    }
    if (a == 80){
        face = "./img/aoi2.png";
        serif = "なんだか眠たくなってきちゃった・・・";
    }
    if (a == 81){
        face = "./img/akane0.png";
        serif = "ボーナス終了後は必ず「錬金チャンス」に突入するで！";
    }
    if (a == 82){
        face = "./img/akane7.png";
        serif = "きっとこれから、楽しいことがたくさん待ってる！";
    }
    if (a == 83){
        face = "./img/akane3.png";
        serif = "・・・こっちや！こっちの道が合ってる！・・・気がする！";
    }
    if (a == 84){
        face = "./img/yukari6.png";
        serif = "BARが揃うと凄いことが起こるらしいです！";
    }
    if (a == 85){
        face = "./img/yukari3.png";
        serif = "ここは・・・いったい・・・？";
    }
    if (a == 86){
        face = "./img/yukari4.png";
        serif = "だ、大丈夫ですよ！きっとなんとかなります！・・・たぶん";
    }
    if (a == 87){
        face = "./img/aoi0.png";
        serif = "いい天気・・・！今日は絶好のお出かけ日和だね！お姉ちゃん！";
    }
    if (a == 88){
        face = "./img/akane3.png";
        serif = "「錬金ボーナス」中は一気にG数カウンタが減ることもあるらしいで！";
    }
    if (a == 89){
        face = "./img/akane4.png";
        serif = "ｚｚｚ・・・";
    }
    if (a == 90){
        face = "./img/akane0.png";
        serif = "よしっ！準備おっけー！出発進行や！";
    }
    if (a >= 91 && a <=93){
        if (flag != "ハズレ"){
            face = "./img/akane3.png";
            serif ="これは・・・"+flag+"や！"
        }
    }
    if (a >= 94 && a <=97){
        if (flag != "ハズレ"){
            face = "./img/aoi2.png";
            serif ="・・・"+flag+"の予感！"
        }
    }
    if (a >= 98 && a <=100){
        if (flag != "ハズレ"){
            face = "./img/yukari2.png";
            serif ="この反応は・・・"+flag+"ですね"
        }
    }

    

    if (serif != ""){
        document.getElementById("sound-serif").play();
        document.getElementById("face").src=face;
        document.getElementById("says").innerHTML=serif;
        serif = ""
        document.getElementById("balloon").style.opacity=1;
    }

}

//セリフ　レア役
function act2(){
    var a = Math.floor( Math.random() * 99 ) + 1;

    if (a >= 1 && a <=30){
        serif = "";
    }

    if (a >= 31 && a <=40){
        face = "./img/akane3.png";
        serif ="チャンスやで！"
    }
    if (a >= 41 && a <=50){
        face = "./img/yukari1.png";
        serif ="チャンスです！"
    }
    if (a >= 51 && a <=60){
        face = "./img/aoi3.png";
        serif ="チャンスだよ！"
    }

    if (a >= 61 && a <=75){
        if (flag != "ハズレ"){
            face = "./img/akane3.png";
            serif ="これは・・・"+flag+"や！"
        }
    }
    if (a >= 76 && a <=90){
        if (flag != "ハズレ"){
            face = "./img/aoi2.png";
            serif ="・・・"+flag+"の予感！"
        }
    }
    if (a >= 91 && a <=100){
        if (flag != "ハズレ"){
            face = "./img/yukari2.png";
            serif ="この反応は・・・"+flag+"ですね"
        }
    }

    

    if (serif != ""){
        document.getElementById("sound-serif").play();
        document.getElementById("face").src=face;
        document.getElementById("says").innerHTML=serif;
        serif = ""
        document.getElementById("balloon").style.opacity=1;
    }

}

//セリフ　強レア
function act3(){
    var a = Math.floor( Math.random() * 99 ) + 1;

    if (a >= 1 && a <=30){
        face = "./img/yukari1.png";
        serif ="チャンスです！"
    }

    if (a >= 31 && a <=40){
        face = "./img/akane3.png";
        serif ="大チャンスやで！"
    }
    if (a >= 41 && a <=50){
        face = "./img/yukari2.png";
        serif ="大チャンスです！"
    }
    if (a >= 51 && a <=60){
        face = "./img/aoi3.png";
        serif ="大チャンスだよ！"
    }

    if (a >= 61 && a <=75){
        if (flag != "ハズレ"){
            face = "./img/akane3.png";
            serif ="これは・・・"+flag+"や！"
        }
    }
    if (a >= 76 && a <=90){
        if (flag != "ハズレ"){
            face = "./img/aoi2.png";
            serif ="・・・"+flag+"の予感！"
        }
    }
    if (a >= 91 && a <=100){
        if (flag != "ハズレ"){
            face = "./img/yukari2.png";
            serif ="この反応は・・・"+flag+"ですね"
        }
    }


    if (serif != ""){
        document.getElementById("sound-serif").play();
        document.getElementById("face").src=face;
        document.getElementById("says").innerHTML=serif;
        serif = ""
        document.getElementById("balloon").style.opacity=1;
    }

}

//セリフ　ART中
function act4(){
    var a = Math.floor( Math.random() * 99 ) + 1;

    if (a >= 1 && a <=70){
        serif = "";
    }
    if (a == 71){
        face = "./img/yukari1.png";
        serif = "「錬金ボーナス」は差枚数管理型のARTです";
    }
    if (a == 72){
        face = "./img/yukari0.png";
        serif = "「錬金ボーナス」中はレア子役で上乗せ抽選をします！";
    }
    if (a == 73){
        face = "./img/yukari6.png";
        serif = "綺麗・・・";
    }
    if (a == 74){
        face = "./img/yukari5.png";
        serif = "私たちの力を合わせれば、どこまででもいけます！";
    }
    if (a == 75){
        face = "./img/yukari4.png";
        serif = "ART中は「ゲーム数カウンタ」を０にするのを目標に頑張りましょう";
    }
    if (a == 76){
        face = "./img/yukari1.png";
        serif = "ART中も１G毎に左のG数カウンタが１ずつ減少します";
    }
    if (a == 77){
        face = "./img/aoi0.png";
        serif = "「錬金ボーナス中」もゲーム数カウンタには要注目・・・？";
    }
    if (a == 78){
        face = "./img/aoi1.png";
        serif = "あわわわ・・・ちょっと不安になってきたよ";
    }
    if (a == 79){
        face = "./img/aoi1.png";
        serif = "これが海の中の世界・・・";
    }
    if (a == 80){
        face = "./img/aoi2.png";
        serif = "この調子で頑張ろう！";
    }
    if (a == 81){
        face = "./img/akane0.png";
        serif = "ART中でもボーナス終了後は必ず「錬金チャンス」に突入するで！";
    }
    if (a == 82){
        face = "./img/akane7.png";
        serif = "きっとこれから、楽しいことがたくさん待ってる！";
    }
    if (a == 83){
        face = "./img/akane3.png";
        serif = "セブンラッシュ・・・？なんやそれ？";
    }
    if (a == 84){
        face = "./img/yukari6.png";
        serif = "BARが揃うと凄いことが起こるらしいです！";
    }
    if (a == 85){
        face = "./img/yukari3.png";
        serif = "「錬金ボーナス」には複数のモードが存在するらしいです";
    }
    if (a == 86){
        face = "./img/yukari4.png";
        serif = "ゲーム数カウンタの初期値はモードを示唆しているらしいです！";
    }
    if (a == 87){
        face = "./img/aoi0.png";
        serif = "よし！頑張ろう！";
    }
    if (a == 88){
        face = "./img/akane3.png";
        serif = "「錬金ボーナス」中は一気にG数カウンタが減ることもあるらしいで！";
    }
    if (a == 89){
        face = "./img/akane4.png";
        serif = "レア役でゲーム数カウンタを一気に減らそう！";
    }
    if (a == 90){
        face = "./img/akane0.png";
        serif = "「BIGBONUS」はどんなときでも抽選してるらしいで！";
    }
    if (a >= 91 && a <=93){
        if (flag != "ハズレ"){
            face = "./img/akane3.png";
            serif ="これは・・・"+flag+"や！"
        }
    }
    if (a >= 94 && a <=97){
        if (flag != "ハズレ"){
            face = "./img/aoi2.png";
            serif ="・・・"+flag+"の予感！"
        }
    }
    if (a >= 98 && a <=100){
        if (flag != "ハズレ"){
            face = "./img/yukari2.png";
            serif ="この反応は・・・"+flag+"ですね"
        }
    }

    

    if (serif != ""){
        document.getElementById("sound-serif").play();
        document.getElementById("face").src=face;
        document.getElementById("says").innerHTML=serif;
        serif = ""
        document.getElementById("balloon").style.opacity=1;
    }

}

//セリフ　CZ確定
function act5(){

    if (Rpoint >= 5 && Rpoint <= 6){
        face = "./img/yukari1.png";
        serif ="「錬金チャレンジ」確定です！頑張っていきましょう！"
    }
    if (Rpoint >= 7 && Rpoint <= 9){
        face = "./img/aoi6.png";
        serif ="「錬金チャレンジ」だよ！お姉ちゃん、起きて！"
    }
    if (Rpoint >= 10){
        face = "./img/akane3.png";
        serif ="よし！「錬金チャレンジ」や！これはもらったな！"
    }


    if (serif != ""){
        document.getElementById("sound-serif").play();
        document.getElementById("face").src=face;
        document.getElementById("says").innerHTML=serif;
        serif = ""
        document.getElementById("balloon").style.opacity=1;
    }

}