//////////////////////////////////////////////////
////////�@�{�̏����@yukariA.js      ////////////////
//////////////////////////////////////////////////

/////////////////////////////////////////////////
//  �o�[�W��������
/////////////////////////////////////////////////
    //

//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	�萔
/////////////////////////////////////////////////
    //�����
    BET = 3;

    //�q�𕥂��o������
    NON = 0;
    RP = 3;
    BELL = 8;
    SUIKA = 7;
    CHERRY = 3;
    BELL2 = 15; //�{�[�i�X���x��


//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	�O���[�o���ϐ�
/////////////////////////////////////////////////
    //���[�h�֘A
    var potmode = 0; //���I���[�h

    //�Q�[�����֘A
    var Bgame = 0; //�{�[�i�X�Q�[���@�c��Q�[����
    var Bget = 0; //�{�[�i�X�l������
    var RTgame = 0; //RT�Q�[���@�c��Q�[����


//---------------------------------------------//
/////////////////////////////////////////////////


//---------------------------------------------------------------//
//                                                               //
//---------------------------------------------------------------//

/////////////////////////////
//�@�ʏ펞���I
////////////////////////////

function Nomalpot(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    a = 995
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;


    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;

    if (a >= 0 && a <=700){
        document.getElementById("debug").innerHTML="�n�Y��";
        flag = "�n�Y��";
    }
    if (a >= 701 && a <=850){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 851 && a <=950){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        Bonuspot(10);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot(10);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot(33);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot(50);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot(100);
    }



}


/////////////////////////////
//�@RT�����I
////////////////////////////

function RTpot(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;


    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;

    if (a >= 0 && a <=700){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 701 && a <=850){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 851 && a <=950){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        Bonuspot(10);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot(10);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot(33);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot(50);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot(100);
    }

    RTgame -= 1;

    if (RTgame == 0){

        document.getElementById("sound-Bonus").pause();
        document.getElementById("sound-Bonus").currentTime = 0;
    
        potmode = 0;
    }




}




/////////////////////////////
//�@�{�[�i�X�m�莞���I
////////////////////////////

function Bonuskakutei(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;


    if (a >= 0 && a <=250){
        document.getElementById("debug").innerHTML="RB";
        flag = "RB";
    }
    if (a >= 251 && a <=500){
        document.getElementById("debug").innerHTML="BB";
        flag = "BB";
    }
    if (a >= 501 && a <=800){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 801 && a <=950){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        Bonuspot(10);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot(10);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot(33);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot(50);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot(100);
    }
}


/////////////////////////////
//�@�{�[�i�X���@�q�𒊑I
////////////////////////////

function Bonusmode(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    payout = 0;
    

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;

    if (a >= 0 && a <=1000){
        document.getElementById("debug").innerHTML="BB�x��";
        flag = "BB�x��";
    }

    Bgame -= 1;

    if (Bgame == 0){

        document.getElementById("sound-RT").play();
        potmode = 3;
        BBgamecount =0;
        RTgame = 30

    }
}

////////////////////////////////////////////////////////////
//  �{�[�i�X���I
////////////////////////////////////////////////////////////
function Bonuspot(i){

    var a = Math.floor( Math.random() * 100 ) ;
    if (a <= i){
        potmode = 1;
    }
    else{
        
    }

}
