// カード情報　[0]カード画像 [1]名前 [2]説明 [3]効果１ [4]効果２　[5]効果３
var card_1 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_2 = ["./img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_3 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""];
var card_4 = ["./img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [2]","追加回復 [1~5]",""];
var card_5 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [8]","追加ダメージ [1~5]",""];
var card_6 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","追加ダメージ [1~5]",""];
var card_7 = ["./img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_8 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]",""];
var card_9 = ["./img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [11]","追加回復 [1~5]",""];
var card_10 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [7]","",""];
var card_11 = ["./img/Card/sword.ico", "アイアンソード","敵単体[3]にダメージ","固定ダメージ [8]","追加ダメージ [1~7]",""];
var card_12 = ["./img/Card/ele_earth.ico", "アースクエイク","敵単体[2]にダメージ","固定ダメージ [1]","追加ダメージ [1~12]",""];
var card_13 = ["./img/Card/Potion_2.ico", "ランダムポーションS","味方単体[1]を回復","固定回復 [15]","追加回復 [1~10]",""];
var card_14 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]","追加ダメージ [1~3]"];
var card_15 = ["./img/Card/Art of Chemistry.ico", "アートオブアルケミスト","味方全体を回復","固定回復 [15]","追加回復 [1~10]",""];
var card_16 = ["./img/Card/Coin.ico", "フォーチュンコイン","行動順を全てシャッフル","","",""];
var card_17 = ["./img/Card/Fire Staff.ico", "ブレスオブインパクト","ランダム単体にダメージ","固定ダメージ [12]","追加ダメージ [1~5]",""];
var card_18 = ["./img/Card/sword.ico", "アイアンソード","敵単体[2]にダメージ","固定ダメージ [5]","追加ダメージ [1~8]",""];
var card_19 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [8]","追加ダメージ [1~5]",""];
var card_20 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","追加ダメージ [1~5]",""];
var card_21 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""];
var card_22 = ["./img/Card/ele_earth.ico", "アースクエイク","敵単体[2]にダメージ","固定ダメージ [1]","追加ダメージ [1~12]",""];
var card_23 = ["./img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_24 = ["./img/Card/Potion_2.ico", "ランダムポーションS","味方単体[1]を回復","固定回復 [15]","追加回復 [1~10]",""];
var card_25 = ["./img/Card/ele_earth.ico", "アースクエイク","敵単体[2]にダメージ","固定ダメージ [1]","追加ダメージ [1~12]",""];
var card_26 = ["./img/Card/sword.ico", "アイアンソード","敵単体[2]にダメージ","固定ダメージ [5]","追加ダメージ [1~8]",""];
var card_27 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_28 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_29 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [8]","追加ダメージ [1~5]",""];
var card_30 = ["./img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [4]","追加回復 [1~6]",""];
var card_31 = ["./img/Card/Art of Chemistry.ico", "ハイレアポーション","味方全体を回復","固定回復 [8]","追加回復 [1~6]",""];




//　カードデッキ山札　2次元配列
var card_deck = [card_1,card_2,card_3,card_4,card_5,card_6,card_7,card_8,card_9,card_10,card_11,card_12,card_13,card_14,card_15,card_16,card_17,card_18,card_19,card_20,card_21,card_22,card_23,card_24,card_25,card_26,card_27,card_28,card_29,card_30,card_31];
var d_flag = 0;

function deck_button(no){

    switch(no){
        case 1:card_place(1); d_flag = 1; break;
        case 2:card_place(2); d_flag = 2; break;
        case 3:card_place(3); d_flag = 3; break;
    }

}

// カード1~10まで配置
function card_place(no){

    card_deck.length = 0;

    for (var i = 1 + (no-1)*10 ; i <= no*10; i++){
        card_deck.push(JSON.parse(localStorage.getItem("card"+i)));
    }

    for (var card = 1 ; card <= 10; card++){
        $("#icon"+card).children("img").attr("src",card_deck[0][0]);
        $("#card"+card+"name").html(card_deck[0][1]);
        $("#card"+card+"main").html(card_deck[0][2]);
        $("#card"+card+"sub1").html(card_deck[0][3]);
        $("#card"+card+"sub2").html(card_deck[0][4]);
        $("#card"+card+"sub3").html(card_deck[0][5]);

        var tmp = card_deck[0]
        card_deck.shift();
        card_deck.push(tmp);
    }

}

function card_select(no){

    $("#iconse").children("img").attr("src",card_deck[no][0]);
    $("#cardsename").html(card_deck[no][1]);
    $("#cardsemain").html(card_deck[no][2]);
    $("#cardsesub1").html(card_deck[no][3]);
    $("#cardsesub2").html(card_deck[no][4]);
    $("#cardsesub3").html(card_deck[no][5]);

}




