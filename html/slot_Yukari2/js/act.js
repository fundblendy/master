//////////////////////////////////////////////////
////////�@���o�����@act.js      ////////////////
//////////////////////////////////////////////////

/////////////////////////////////////////////////
//  ����
/////////////////////////////////////////////////
    //���[�h�Ǘ�

//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	�萔
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	�O���[�o���ϐ�
/////////////////////////////////////////////////
    //
    var serif = "";
    var face = "";


//---------------------------------------------//
/////////////////////////////////////////////////

//�Z���t�@�ʏ�A
function act1(){
    var a = Math.floor( Math.random() * 99 ) + 1;

    if (a >= 1 && a <=70){
        serif = "";
    }
    if (a == 71){
        face = "./img/yukari1.png";
        serif = "�ʏ펞��50G�����Łu�B���`�������W�v���I���s���܂�";
    }
    if (a == 72){
        face = "./img/yukari0.png";
        serif = "(�����Ƃ�������׋����āA�����Ƌ����Ȃ�Ȃ��ƁE�E�E)";
    }
    if (a == 73){
        face = "./img/yukari6.png";
        serif = "���̐��E�ɂ͎������̒m��Ȃ����Ƃ��A�܂��܂��������񂠂�܂��I";
    }
    if (a == 74){
        face = "./img/yukari5.png";
        serif = "���������g���𔃂��Ă�����ł��I�ꏏ�Ɉ��݂܂��񂩁H";
    }
    if (a == 75){
        face = "./img/yukari4.png";
        serif = "����Ȃɋ}������]��ł��܂��܂���H";
    }
    if (a == 76){
        face = "./img/yukari1.png";
        serif = "�ʏ펞�͂PG���ɍ���G���J�E���^���P���������܂�";
    }
    if (a == 77){
        face = "./img/aoi0.png";
        serif = "�u�B���{�[�i�X���v���Q�[�����J�E���^�ɂ͗v���ځE�E�E�H";
    }
    if (a == 78){
        face = "./img/aoi1.png";
        serif = "���o�����E�E�E����ȂƂ���ɏ���đ��v�H";
    }
    if (a == 79){
        face = "./img/aoi1.png";
        serif = "�����������Ȃ��E�E�E�����x�e���Ȃ��H";
    }
    if (a == 80){
        face = "./img/aoi2.png";
        serif = "�Ȃ񂾂��������Ȃ��Ă���������E�E�E";
    }
    if (a == 81){
        face = "./img/akane0.png";
        serif = "�{�[�i�X�I����͕K���u�B���`�����X�v�ɓ˓�����ŁI";
    }
    if (a == 82){
        face = "./img/akane7.png";
        serif = "�����Ƃ��ꂩ��A�y�������Ƃ���������҂��Ă�I";
    }
    if (a == 83){
        face = "./img/akane3.png";
        serif = "�E�E�E��������I�������̓��������Ă�I�E�E�E�C������I";
    }
    if (a == 84){
        face = "./img/yukari6.png";
        serif = "BAR�������Ɛ������Ƃ��N����炵���ł��I";
    }
    if (a == 85){
        face = "./img/yukari3.png";
        serif = "�����́E�E�E���������E�E�E�H";
    }
    if (a == 86){
        face = "./img/yukari4.png";
        serif = "���A���v�ł���I�����ƂȂ�Ƃ��Ȃ�܂��I�E�E�E���Ԃ�";
    }
    if (a == 87){
        face = "./img/aoi0.png";
        serif = "�����V�C�E�E�E�I�����͐�D�̂��o�������a���ˁI���o�����I";
    }
    if (a == 88){
        face = "./img/akane3.png";
        serif = "�u�B���{�[�i�X�v���͈�C��G���J�E���^�����邱�Ƃ�����炵���ŁI";
    }
    if (a == 89){
        face = "./img/akane4.png";
        serif = "�������E�E�E";
    }
    if (a == 90){
        face = "./img/akane0.png";
        serif = "�悵���I�����������[�I�o���i�s��I";
    }
    if (a >= 91 && a <=93){
        if (flag != "�n�Y��"){
            face = "./img/akane3.png";
            serif ="����́E�E�E"+flag+"��I"
        }
    }
    if (a >= 94 && a <=97){
        if (flag != "�n�Y��"){
            face = "./img/aoi2.png";
            serif ="�E�E�E"+flag+"�̗\���I"
        }
    }
    if (a >= 98 && a <=100){
        if (flag != "�n�Y��"){
            face = "./img/yukari2.png";
            serif ="���̔����́E�E�E"+flag+"�ł���"
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

//�Z���t�@���A��
function act2(){
    var a = Math.floor( Math.random() * 99 ) + 1;

    if (a >= 1 && a <=30){
        serif = "";
    }

    if (a >= 31 && a <=40){
        face = "./img/akane3.png";
        serif ="�`�����X��ŁI"
    }
    if (a >= 41 && a <=50){
        face = "./img/yukari1.png";
        serif ="�`�����X�ł��I"
    }
    if (a >= 51 && a <=60){
        face = "./img/aoi3.png";
        serif ="�`�����X����I"
    }

    if (a >= 61 && a <=75){
        if (flag != "�n�Y��"){
            face = "./img/akane3.png";
            serif ="����́E�E�E"+flag+"��I"
        }
    }
    if (a >= 76 && a <=90){
        if (flag != "�n�Y��"){
            face = "./img/aoi2.png";
            serif ="�E�E�E"+flag+"�̗\���I"
        }
    }
    if (a >= 91 && a <=100){
        if (flag != "�n�Y��"){
            face = "./img/yukari2.png";
            serif ="���̔����́E�E�E"+flag+"�ł���"
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

//�Z���t�@�����A
function act3(){
    var a = Math.floor( Math.random() * 99 ) + 1;

    if (a >= 1 && a <=30){
        face = "./img/yukari1.png";
        serif ="�`�����X�ł��I"
    }

    if (a >= 31 && a <=40){
        face = "./img/akane3.png";
        serif ="��`�����X��ŁI"
    }
    if (a >= 41 && a <=50){
        face = "./img/yukari2.png";
        serif ="��`�����X�ł��I"
    }
    if (a >= 51 && a <=60){
        face = "./img/aoi3.png";
        serif ="��`�����X����I"
    }

    if (a >= 61 && a <=75){
        if (flag != "�n�Y��"){
            face = "./img/akane3.png";
            serif ="����́E�E�E"+flag+"��I"
        }
    }
    if (a >= 76 && a <=90){
        if (flag != "�n�Y��"){
            face = "./img/aoi2.png";
            serif ="�E�E�E"+flag+"�̗\���I"
        }
    }
    if (a >= 91 && a <=100){
        if (flag != "�n�Y��"){
            face = "./img/yukari2.png";
            serif ="���̔����́E�E�E"+flag+"�ł���"
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

//�Z���t�@ART��
function act4(){
    var a = Math.floor( Math.random() * 99 ) + 1;

    if (a >= 1 && a <=70){
        serif = "";
    }
    if (a == 71){
        face = "./img/yukari1.png";
        serif = "�u�B���{�[�i�X�v�͍������Ǘ��^��ART�ł�";
    }
    if (a == 72){
        face = "./img/yukari0.png";
        serif = "�u�B���{�[�i�X�v���̓��A�q���ŏ�悹���I�����܂��I";
    }
    if (a == 73){
        face = "./img/yukari6.png";
        serif = "�Y��E�E�E";
    }
    if (a == 74){
        face = "./img/yukari5.png";
        serif = "�������̗͂����킹��΁A�ǂ��܂łł������܂��I";
    }
    if (a == 75){
        face = "./img/yukari4.png";
        serif = "ART���́u�Q�[�����J�E���^�v���O�ɂ���̂�ڕW�Ɋ撣��܂��傤";
    }
    if (a == 76){
        face = "./img/yukari1.png";
        serif = "ART�����PG���ɍ���G���J�E���^���P���������܂�";
    }
    if (a == 77){
        face = "./img/aoi0.png";
        serif = "�u�B���{�[�i�X���v���Q�[�����J�E���^�ɂ͗v���ځE�E�E�H";
    }
    if (a == 78){
        face = "./img/aoi1.png";
        serif = "������E�E�E������ƕs���ɂȂ��Ă�����";
    }
    if (a == 79){
        face = "./img/aoi1.png";
        serif = "���ꂪ�C�̒��̐��E�E�E�E";
    }
    if (a == 80){
        face = "./img/aoi2.png";
        serif = "���̒��q�Ŋ撣�낤�I";
    }
    if (a == 81){
        face = "./img/akane0.png";
        serif = "ART���ł��{�[�i�X�I����͕K���u�B���`�����X�v�ɓ˓�����ŁI";
    }
    if (a == 82){
        face = "./img/akane7.png";
        serif = "�����Ƃ��ꂩ��A�y�������Ƃ���������҂��Ă�I";
    }
    if (a == 83){
        face = "./img/akane3.png";
        serif = "�Z�u�����b�V���E�E�E�H�Ȃ�₻��H";
    }
    if (a == 84){
        face = "./img/yukari6.png";
        serif = "BAR�������Ɛ������Ƃ��N����炵���ł��I";
    }
    if (a == 85){
        face = "./img/yukari3.png";
        serif = "�u�B���{�[�i�X�v�ɂ͕����̃��[�h�����݂���炵���ł�";
    }
    if (a == 86){
        face = "./img/yukari4.png";
        serif = "�Q�[�����J�E���^�̏����l�̓��[�h���������Ă���炵���ł��I";
    }
    if (a == 87){
        face = "./img/aoi0.png";
        serif = "�悵�I�撣�낤�I";
    }
    if (a == 88){
        face = "./img/akane3.png";
        serif = "�u�B���{�[�i�X�v���͈�C��G���J�E���^�����邱�Ƃ�����炵���ŁI";
    }
    if (a == 89){
        face = "./img/akane4.png";
        serif = "���A���ŃQ�[�����J�E���^����C�Ɍ��炻���I";
    }
    if (a == 90){
        face = "./img/akane0.png";
        serif = "�uBIGBONUS�v�͂ǂ�ȂƂ��ł����I���Ă�炵���ŁI";
    }
    if (a >= 91 && a <=93){
        if (flag != "�n�Y��"){
            face = "./img/akane3.png";
            serif ="����́E�E�E"+flag+"��I"
        }
    }
    if (a >= 94 && a <=97){
        if (flag != "�n�Y��"){
            face = "./img/aoi2.png";
            serif ="�E�E�E"+flag+"�̗\���I"
        }
    }
    if (a >= 98 && a <=100){
        if (flag != "�n�Y��"){
            face = "./img/yukari2.png";
            serif ="���̔����́E�E�E"+flag+"�ł���"
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

//�Z���t�@CZ�m��
function act5(){

    if (Rpoint >= 5 && Rpoint <= 6){
        face = "./img/yukari1.png";
        serif ="�u�B���`�������W�v�m��ł��I�撣���Ă����܂��傤�I"
    }
    if (Rpoint >= 7 && Rpoint <= 9){
        face = "./img/aoi6.png";
        serif ="�u�B���`�������W�v����I���o�����A�N���āI"
    }
    if (Rpoint >= 10){
        face = "./img/akane3.png";
        serif ="�悵�I�u�B���`�������W�v��I����͂�������ȁI"
    }


    if (serif != ""){
        document.getElementById("sound-serif").play();
        document.getElementById("face").src=face;
        document.getElementById("says").innerHTML=serif;
        serif = ""
        document.getElementById("balloon").style.opacity=1;
    }

}