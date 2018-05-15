// カード情報　[0]カード画像 [1]名前 [2]説明 [3]効果１ [4]効果２　[5]効果３
var card_1 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_2 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_3 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_4 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_5 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_6 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]",""];
var card_7 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]",""];
var card_8 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]",""];
var card_9 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]",""];
var card_10 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]",""];
var card_11 = ["./img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_12 = ["./img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_13 = ["./img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_14 = ["./img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_15 = ["./img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_16 = ["./img/Card/sword.ico", "アイアンソード","敵単体[2]にダメージ","固定ダメージ [5]","追加ダメージ [1~8]",""];
var card_17 = ["./img/Card/sword.ico", "アイアンソード","敵単体[2]にダメージ","固定ダメージ [5]","追加ダメージ [1~8]",""];
var card_18 = ["./img/Card/sword.ico", "アイアンソード","敵単体[2]にダメージ","固定ダメージ [5]","追加ダメージ [1~8]",""];
var card_19 = ["./img/Card/sword.ico", "アイアンソード","敵単体[3]にダメージ","固定ダメージ [8]","追加ダメージ [1~5]",""];
var card_20 = ["./img/Card/sword.ico", "アイアンソード","敵単体[3]にダメージ","固定ダメージ [8]","追加ダメージ [1~5]",""];
var card_21 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""];
var card_22 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""];
var card_23 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""];
var card_24 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""];
var card_25 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""];
var card_26 = ["./img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [3]","追加回復 [1~6]",""];
var card_27 = ["./img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [3]","追加回復 [1~6]",""];
var card_28 = ["./img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [3]","追加回復 [1~6]",""];
var card_29 = ["./img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [3]","追加回復 [1~6]",""];
var card_30 = ["./img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [3]","追加回復 [1~6]",""];
var card_31 = ["./img/Card/Art of Chemistry.ico", "ハイレアポーション","味方全体を回復","固定回復 [8]","追加回復 [1~8]",""];


//　カードデッキ山札　2次元配列
var card_deck = [card_1,card_2,card_3,card_4,card_5,card_6,card_7,card_8,card_9,card_10,card_11,card_12,card_13,card_14,card_15,card_16,card_17,card_18,card_19,card_20,card_21,card_22,card_23,card_24,card_25,card_26,card_27,card_28,card_29,card_30,card_31];


$(function(){

    var f = localStorage.getItem("first");

    if(f != 1){

    
        for (var i = 1 ; i <= 31; i++){
            localStorage.setItem("card"+i, JSON.stringify(card_deck[0]));
            card_deck.shift();
            localStorage.setItem("cardcount",31);
            localStorage.setItem("first",1)
        }
        localStorage.setItem("ticket",5);
        localStorage.setItem("yukariHP",28);
        localStorage.setItem("akaneHP",35);
        localStorage.setItem("aoiHP",31);

    }
    
    var count = localStorage.getItem("cardcount")

    for (var n = 31 ; n <= count; n++){

        var sub = JSON.parse(localStorage.getItem("card"+n));
        var text = sub[1]+" | "+sub[2]+":"+sub[3]+":"+sub[4];":"+sub[5];
        $('#subcard').append($('<option>').html(text).val("card"+n));

    }

});


function h_button(i){
    var link;
    switch (i) {
        case 1: link = "./gacha.html"; break;
        //case 2: link = ".html"; break;
        //case 3: link = "../slot_YukariA/index.html"; break;
        case 4: link = "./deck.html"; break;
        case 5: link = "./battle.html"; break;
    }
    location.href = link;
}