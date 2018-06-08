// カード情報　[0]カード画像 [1]名前 [2]説明 [3]効果１ [4]効果２　[5]効果３
var card_1 = ["./img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""]


//　カードデッキ山札　2次元配列
var card_deck = [card_1];
card_deck.shift();
for (var i = 1; i <= 30; i++){
    card_deck.push(JSON.parse(localStorage.getItem("card"+i)));
}


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