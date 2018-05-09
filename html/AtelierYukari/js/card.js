// カード情報　[0]カード画像 [1]名前 [2]説明 [3]効果１ [4]効果２　[5]効果３
var card_1 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""]
var card_2 = ["./img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""]
var card_3 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""]
var card_4 = ["./img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [2]","追加回復 [1~5]",""]
var card_5 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [8]","追加ダメージ [1~5]",""]
var card_6 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","追加ダメージ [1~5]",""]
var card_7 = ["./img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""]
var card_8 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]",""]
var card_9 = ["./img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [11]","追加回復 [1~5]",""]
var card_10 = ["./img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [7]","",""]
var card_11 = ["./img/Card/sword.ico", "アイアンソード","敵単体[3]にダメージ","固定ダメージ [8]","追加ダメージ [1~7]",""]
var card_12 = ["./img/Card/ele_earth.ico", "アースクエイク","敵単体[2]にダメージ","固定ダメージ [1]","追加ダメージ [1~12]",""]
var card_13 = ["./img/Card/Potion_2.ico", "ランダムポーションS","味方単体[1]を回復","固定回復 [15]","追加回復 [1~10]",""]
var card_14 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]","追加ダメージ [1~3]"]
var card_15 = ["./img/Card/Art of Chemistry.ico", "アートオブアルケミスト","味方全体を回復","固定回復 [15]","追加回復 [1~10]",""]
var card_16 = ["./img/Card/Coin.ico", "フォーチュンコイン","行動順を全てシャッフル","","",""]
var card_17 = ["./img/Card/Fire Staff.ico", "ブレスオブインパクト","ランダム単体にダメージ","固定ダメージ [12]","追加ダメージ [1~5]",""]
var card_18 = ["./img/Card/sword.ico", "アイアンソード","敵単体[2]にダメージ","固定ダメージ [5]","追加ダメージ [1~8]",""]
var card_19 = ["./img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [8]","追加ダメージ [1~5]",""]
var card_20 = ["./img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [6]","追加回復 [1~6]",""]


//　カードデッキ山札　2次元配列
var card_deck = [card_1,card_2,card_3,card_4,card_5,card_6,card_7,card_8,card_9,card_10,card_11,card_12,card_13,card_14,card_15,card_16,card_17,card_18,card_19,card_20]


// カード初期配置
function initdraw(){

    shuffle(card_deck);

    for (var card = 1 ; card <= 5; card++){
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






// カードドロー処理
function draw(card){

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