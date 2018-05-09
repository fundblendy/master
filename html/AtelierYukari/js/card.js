// �J�[�h���@[0]�J�[�h�摜 [1]���O [2]���� [3]���ʂP [4]���ʂQ�@[5]���ʂR
var card_1 = ["./img/Card/Axe.ico", "�o�g���A�N�X","�����_���P�̂Ƀ_���[�W","�Œ�_���[�W [10]","�ǉ��_���[�W [1~2]",""]
var card_2 = ["./img/Card/Potion.ico", "�m�[�}���|�[�V����","�g�p�҂���","�Œ�� [10]","�ǉ��� [1~5]",""]
var card_3 = ["./img/Card/ele_thunder.ico", "���C�g�j���O�{���g","�G�S�̂Ƀ_���[�W","�Œ�_���[�W [5]","",""]
var card_4 = ["./img/Card/Art of Chemistry.ico", "���A�|�[�V����","�����S�̂���","�Œ�� [2]","�ǉ��� [1~5]",""]
var card_5 = ["./img/Card/sword.ico", "�A�C�A���\�[�h","�G�P��[1]�Ƀ_���[�W","�Œ�_���[�W [8]","�ǉ��_���[�W [1~5]",""]
var card_6 = ["./img/Card/ele_thunder.ico", "���C�g�j���O�{���g","�G�S�̂Ƀ_���[�W","�Œ�_���[�W [5]","�ǉ��_���[�W [1~5]",""]
var card_7 = ["./img/Card/Potion.ico", "�m�[�}���|�[�V����","�g�p�҂���","�Œ�� [10]","�ǉ��� [1~5]",""]
var card_8 = ["./img/Card/sword.ico", "�A�C�A���\�[�h","�G�P��[1]�Ƀ_���[�W","�Œ�_���[�W [6]","�ǉ��_���[�W [1~5]",""]
var card_9 = ["./img/Card/Potion.ico", "�m�[�}���|�[�V����","�g�p�҂���","�Œ�� [11]","�ǉ��� [1~5]",""]
var card_10 = ["./img/Card/ele_thunder.ico", "���C�g�j���O�{���g","�G�S�̂Ƀ_���[�W","�Œ�_���[�W [7]","",""]
var card_11 = ["./img/Card/sword.ico", "�A�C�A���\�[�h","�G�P��[3]�Ƀ_���[�W","�Œ�_���[�W [8]","�ǉ��_���[�W [1~7]",""]
var card_12 = ["./img/Card/ele_earth.ico", "�A�[�X�N�G�C�N","�G�P��[2]�Ƀ_���[�W","�Œ�_���[�W [1]","�ǉ��_���[�W [1~12]",""]
var card_13 = ["./img/Card/Potion_2.ico", "�����_���|�[�V����S","�����P��[1]����","�Œ�� [15]","�ǉ��� [1~10]",""]
var card_14 = ["./img/Card/sword.ico", "�A�C�A���\�[�h","�G�P��[1]�Ƀ_���[�W","�Œ�_���[�W [6]","�ǉ��_���[�W [1~5]","�ǉ��_���[�W [1~3]"]
var card_15 = ["./img/Card/Art of Chemistry.ico", "�A�[�g�I�u�A���P�~�X�g","�����S�̂���","�Œ�� [15]","�ǉ��� [1~10]",""]
var card_16 = ["./img/Card/Coin.ico", "�t�H�[�`�����R�C��","�s������S�ăV���b�t��","","",""]
var card_17 = ["./img/Card/Fire Staff.ico", "�u���X�I�u�C���p�N�g","�����_���P�̂Ƀ_���[�W","�Œ�_���[�W [12]","�ǉ��_���[�W [1~5]",""]
var card_18 = ["./img/Card/sword.ico", "�A�C�A���\�[�h","�G�P��[2]�Ƀ_���[�W","�Œ�_���[�W [5]","�ǉ��_���[�W [1~8]",""]
var card_19 = ["./img/Card/sword.ico", "�A�C�A���\�[�h","�G�P��[1]�Ƀ_���[�W","�Œ�_���[�W [8]","�ǉ��_���[�W [1~5]",""]
var card_20 = ["./img/Card/Art of Chemistry.ico", "���A�|�[�V����","�����S�̂���","�Œ�� [6]","�ǉ��� [1~6]",""]


//�@�J�[�h�f�b�L�R�D�@2�����z��
var card_deck = [card_1,card_2,card_3,card_4,card_5,card_6,card_7,card_8,card_9,card_10,card_11,card_12,card_13,card_14,card_15,card_16,card_17,card_18,card_19,card_20]


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