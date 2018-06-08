// カード情報　[0]カード画像 [1]名前 [2]説明 [3]効果１ [4]効果２　[5]効果３
var card_1 = ["./static/img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_2 = ["./static/img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_3 = ["./static/img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_4 = ["./static/img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_5 = ["./static/img/Card/Axe.ico", "バトルアクス","ランダム単体にダメージ","固定ダメージ [10]","追加ダメージ [1~2]",""];
var card_6 = ["./static/img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]",""];
var card_7 = ["./static/img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]",""];
var card_8 = ["./static/img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]",""];
var card_9 = ["./static/img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]",""];
var card_10 = ["./static/img/Card/sword.ico", "アイアンソード","敵単体[1]にダメージ","固定ダメージ [6]","追加ダメージ [1~5]",""];
var card_11 = ["./static/img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_12 = ["./static/img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_13 = ["./static/img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_14 = ["./static/img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_15 = ["./static/img/Card/Potion.ico", "ノーマルポーション","使用者を回復","固定回復 [10]","追加回復 [1~5]",""];
var card_16 = ["./static/img/Card/sword.ico", "アイアンソード","敵単体[2]にダメージ","固定ダメージ [5]","追加ダメージ [1~8]",""];
var card_17 = ["./static/img/Card/sword.ico", "アイアンソード","敵単体[2]にダメージ","固定ダメージ [5]","追加ダメージ [1~8]",""];
var card_18 = ["./static/img/Card/sword.ico", "アイアンソード","敵単体[2]にダメージ","固定ダメージ [5]","追加ダメージ [1~8]",""];
var card_19 = ["./static/img/Card/sword.ico", "アイアンソード","敵単体[3]にダメージ","固定ダメージ [8]","追加ダメージ [1~5]",""];
var card_20 = ["./static/img/Card/sword.ico", "アイアンソード","敵単体[3]にダメージ","固定ダメージ [8]","追加ダメージ [1~5]",""];
var card_21 = ["./static/img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""];
var card_22 = ["./static/img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""];
var card_23 = ["./static/img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""];
var card_24 = ["./static/img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""];
var card_25 = ["./static/img/Card/ele_thunder.ico", "ライトニングボルト","敵全体にダメージ","固定ダメージ [5]","",""];
var card_26 = ["./static/img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [3]","追加回復 [1~6]",""];
var card_27 = ["./static/img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [3]","追加回復 [1~6]",""];
var card_28 = ["./static/img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [3]","追加回復 [1~6]",""];
var card_29 = ["./static/img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [3]","追加回復 [1~6]",""];
var card_30 = ["./static/img/Card/Art of Chemistry.ico", "レアポーション","味方全体を回復","固定回復 [3]","追加回復 [1~6]",""];
var card_31 = ["./static/img/Card/Art of Chemistry.ico", "ハイレアポーション","味方全体を回復","固定回復 [8]","追加回復 [1~8]",""];


//　カードデッキ山札　2次元配列
var card_deck = [card_1,card_2,card_3,card_4,card_5,card_6,card_7,card_8,card_9,card_10,card_11,card_12,card_13,card_14,card_15,card_16,card_17,card_18,card_19,card_20,card_21,card_22,card_23,card_24,card_25,card_26,card_27,card_28,card_29,card_30,card_31];
var d_flag = 0;
var card_tmp;
var card_no = 0;

function deck_button(no){

    switch(no){
        case 1:card_place(1); d_flag = 0; break;
        case 2:card_place(2); d_flag = 1; break;
        case 3:card_place(3); d_flag = 2; break;
        case 4:card_change(); break;
        case 5:location.href = "./home.html"; break;
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

    card_select(card_no);

}

function card_select(no){

    $("#iconse").children("img").attr("src",card_deck[no][0]);
    $("#cardsename").html(card_deck[no][1]);
    $("#cardsemain").html(card_deck[no][2]);
    $("#cardsesub1").html(card_deck[no][3]);
    $("#cardsesub2").html(card_deck[no][4]);
    $("#cardsesub3").html(card_deck[no][5]);

    card_tmp = card_deck[no];
    card_no = no;


}

function card_change(){

    var card_main_tmp = "card"+(d_flag*10+(card_no+1)); //選択したデッキカード番号

    var val = $('#subcard').val();　//選択したサブカード番号
    var card_sub_tmp = JSON.parse(localStorage.getItem(val));

    localStorage.setItem(card_main_tmp, JSON.stringify(card_sub_tmp));
    localStorage.setItem(val, JSON.stringify(card_tmp));

    card_place(d_flag+1);
    card_select(card_no);

    $('#subcard').children().remove();


    var count = localStorage.getItem("cardcount")
    for (var n = 31 ; n <= count; n++){

        var sub = JSON.parse(localStorage.getItem("card"+n));
        var text = sub[1]+" | "+sub[2]+":"+sub[3]+":"+sub[4];":"+sub[5];
        $('#subcard').append($('<option>').html(text).val("card"+n));

    }

}







