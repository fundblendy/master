
var ticket = localStorage.getItem("ticket");

$(function(){

    $("#ticket").html("�����`�P�b�g�@"+ticket+"���i�`�P�b�g5���ŉ񂹂܂��j");

});



function gacha(){
    
    if(ticket <= 4){return;}

    $("#g_card1").animate({
        marginTop: "200px", 
        marginLeft: "408px",
        opacity: "0"
    }, 0)
    $("#g_card2").animate({
        marginTop: "200px", 
        marginLeft: "408px",
        opacity: "0"
    }, 0)
    $("#g_card3").animate({
        marginTop: "200px", 
        marginLeft: "408px",
        opacity: "0"
    }, 0)
    $("#g_card4").animate({
        marginTop: "200px", 
        marginLeft: "408px",
        opacity: "0"
    }, 0)
    $("#g_card5").animate({
        marginTop: "200px", 
        marginLeft: "408px",
        opacity: "0"
    }, 0)

    var count = localStorage.getItem("cardcount");
    
    ticket -= 5;
    $("#ticket").html("�����`�P�b�g�@"+ticket+"���i�`�P�b�g5���ŉ񂹂܂��j");
    localStorage.setItem("ticket",ticket);

    var gacha_1 = ["./img/Card/Axe.ico", "�o�g���A�N�X","�����_���P�̂Ƀ_���[�W","�Œ�_���[�W [10]","",""]
    var gacha_2 = ["./img/Card/Axe.ico", "�o�g���A�N�X","�����_���P�̂Ƀ_���[�W","�Œ�_���[�W [10]","",""]
    var gacha_3 = ["./img/Card/Axe.ico", "�o�g���A�N�X","�����_���P�̂Ƀ_���[�W","�Œ�_���[�W [10]","",""]
    var gacha_4 = ["./img/Card/Axe.ico", "�o�g���A�N�X","�����_���P�̂Ƀ_���[�W","�Œ�_���[�W [10]","",""]
    var gacha_5 = ["./img/Card/Axe.ico", "�o�g���A�N�X","�����_���P�̂Ƀ_���[�W","�Œ�_���[�W [10]","",""]

    var gacha =[gacha_1, gacha_2, gacha_3, gacha_4, gacha_5]

    for (var i = 0 ; i <=4 ; i++ ){
        //�J�[�h���
        var a = Math.floor(Math.random() * 100)+1;
        var b =  Math.floor(Math.random() * 5)+1;
        var c =  Math.floor(Math.random() * 3)+1;

        if (a >= 1 && a <= 10){
            gacha[i][0] = "./img/Card/Axe.ico";
            gacha[i][1] = "�o�g���A�N�X";
            gacha[i][2] = "�����_���P�̂Ƀ_���[�W";
            gacha[i][3] = "�Œ�_���[�W ["+(7+b)+"]"
            gacha[i][4] = "�ǉ��_���[�W [1~"+(2+c)+"]"
        }
        if (a >= 11 && a <= 20){
            gacha[i][0] = "./img/Card/sword.ico";
            gacha[i][1] = "�A�C�A���\�[�h";
            gacha[i][2] = "�G�P��[1]�Ƀ_���[�W";
            gacha[i][3] = "�Œ�_���[�W ["+(5+b)+"]"
            gacha[i][4] = "�ǉ��_���[�W [1~"+(2+c)+"]"
        }
        if (a >= 21 && a <= 30){
            gacha[i][0] = "./img/Card/sword.ico";
            gacha[i][1] = "�A�C�A���\�[�h";
            gacha[i][2] = "�G�P��[2]�Ƀ_���[�W";
            gacha[i][3] = "�Œ�_���[�W ["+(5+b)+"]"
            gacha[i][4] = "�ǉ��_���[�W [1~"+(2+c)+"]"
        }
        if (a >= 31 && a <= 40){
            gacha[i][0] = "./img/Card/sword.ico";
            gacha[i][1] = "�A�C�A���\�[�h";
            gacha[i][2] = "�G�P��[3]�Ƀ_���[�W";
            gacha[i][3] = "�Œ�_���[�W ["+(5+b)+"]"
            gacha[i][4] = "�ǉ��_���[�W [1~"+(2+c)+"]"
        }
        if (a >= 41 && a <= 50){
            gacha[i][0] = "./img/Card/ele_thunder.ico";
            gacha[i][1] = "���C�g�j���O�{���g";
            gacha[i][2] = "�G�S�̂Ƀ_���[�W";
            gacha[i][3] = "�Œ�_���[�W ["+(5+c)+"]"
            gacha[i][4] = "�ǉ��_���[�W [1~"+(2+c)+"]"
        }
        if (a >= 51 && a <= 60){
            gacha[i][0] = "./img/Card/Potion.ico";
            gacha[i][1] = "�m�[�}���|�[�V����";
            gacha[i][2] = "�g�p�҂���";
            gacha[i][3] = "�Œ�� ["+(10+c)+"]"
            gacha[i][4] = "�ǉ��� [1~"+(2+c)+"]"
        }
        if (a >= 61 && a <= 70){
            gacha[i][0] = "./img/Card/Art of Chemistry.ico";
            gacha[i][1] = "���A�|�[�V����";
            gacha[i][2] = "�����S�̂���";
            gacha[i][3] = "�Œ�� ["+b+"]"
            gacha[i][4] = "�ǉ��� [1~"+(2+c)+"]"
        }
        if (a >= 71 && a <= 80){
            gacha[i][0] = "./img/Card/ele_fire.ico";
            gacha[i][1] = "�t�@�C�A�{���g";
            gacha[i][2] = "�G�P��[2]�Ƀ_���[�W";
            gacha[i][3] = "�Œ�_���[�W ["+(10+c)+"]"
            gacha[i][4] = "�ǉ��_���[�W [1~"+(4+c)+"]"
        }
        if (a >= 81 && a <= 90){
            gacha[i][0] = "./img/Card/potion_2.ico";
            gacha[i][1] = "�����_���|�[�V����S";
            gacha[i][2] = "�����_���P�̂���";
            gacha[i][3] = "�Œ�� ["+(15+c)+"]"
            gacha[i][4] = "�ǉ��� [1~"+(2+c)+"]"
        }
        if (a >= 91 && a <= 92){
            gacha[i][0] = "./img/Card/ele_wind.ico";
            gacha[i][1] = "�e���E�B���h";
            gacha[i][2] = "�G�S�̂Ƀ_���[�W";
            gacha[i][3] = "�Œ�_���[�W ["+(7+c)+"]"
            gacha[i][4] = "�ǉ��_���[�W [1~"+(3+c)+"]"
        }
        if (a >= 93 && a <= 94){
            gacha[i][0] = "./img/Card/ele_water.ico";
            gacha[i][1] = "�A�N�A�X�p�C�N";
            gacha[i][2] = "�G�P��[1]�Ƀ_���[�W";
            gacha[i][3] = "�Œ�_���[�W ["+(10+c)+"]"
            gacha[i][4] = "�ǉ��_���[�W [1~"+(7+c)+"]"
        }
        if (a >= 95 && a <= 96){
            gacha[i][0] = "./img/Card/ele_ice.ico";
            gacha[i][1] = "�A�C�X�t�H�[��";
            gacha[i][2] = "�G�P��[3]�Ƀ_���[�W";
            gacha[i][3] = "�Œ�_���[�W ["+(10+c)+"]"
            gacha[i][4] = "�ǉ��_���[�W [1~"+(7+c)+"]"
        }
        if (a >= 97 && a <= 98){
            gacha[i][0] = "./img/Card/ele_earth.ico";
            gacha[i][1] = "�^�C�^���N�G�C�N";
            gacha[i][2] = "�G�S�̂Ƀ_���[�W";
            gacha[i][3] = "�Œ�_���[�W [1]"
            gacha[i][4] = "�ǉ��_���[�W [1~"+(9+b+c)+"]"
        }
        if (a >= 99 && a <= 100){
            gacha[i][0] = "./img/Card/Potion.ico";
            gacha[i][1] = "�m�[�}���|�[�V����EX";
            gacha[i][2] = "�g�p�҂���";
            gacha[i][3] = "�Œ�� ["+(20+c)+"]"
            gacha[i][4] = "�ǉ��� [1~"+(7+b+c)+"]"
        }

        var d = parseFloat(count) + 1;
        count = d;
        localStorage.setItem("cardcount",count);
        localStorage.setItem("card"+count, JSON.stringify(gacha[i]));

        var card = i + 1;
        $("#icon"+card).children("img").attr("src",gacha[i][0]);
        $("#card"+card+"name").html(gacha[i][1]);
        $("#card"+card+"main").html(gacha[i][2]);
        $("#card"+card+"sub1").html(gacha[i][3]);
        $("#card"+card+"sub2").html(gacha[i][4]);
        $("#card"+card+"sub3").html(gacha[i][5]);

        var pos = (i*200) + 8;"px";

        $("#g_card"+card).animate({
            marginTop: "+=200px", 
            marginLeft: pos,
            opacity: "1"
        }, 500)

    }




    
}
