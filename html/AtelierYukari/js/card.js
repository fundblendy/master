// �J�[�h���@[0]�J�[�h�摜 [1]���O [2]���� [3]���ʂP [4]���ʂQ�@[5]���ʂR
var card_1 = ["./img/Card/Axe.ico", "�o�g���A�N�X","�����_���P�̂Ƀ_���[�W","�Œ�_���[�W [10]","�ǉ��_���[�W [1~2]",""]


//�@�J�[�h�f�b�L�R�D�@2�����z��
var card_deck = [card_1];
card_deck.shift();
for (var i = 1; i <= 30; i++){
    card_deck.push(JSON.parse(localStorage.getItem("card"+i)));
}


// �J�[�h�����z�u
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






// �J�[�h�h���[����
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