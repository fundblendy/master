//////////////////////////////////////////////////
////////�@�{�̏����@yukariA.js      ////////////////
//////////////////////////////////////////////////

/////////////////////////////////////////////////
//  ����
/////////////////////////////////////////////////
    //�q����{�[�i�X�m�����͂����Őݒ肵�܂��B

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

    var setting = Math.floor( Math.random() * 5 ) + 1 ;

    if (setting == 1){
        //�ʏ펞�`�F���[���I�m��
        CH1 = 4;
        //ART���`�F���[���I�m��
        CH2 = 4;

        //�ʏ펞�X�C�J���I�m��
        SU1 = 5;
        //ART���X�C�J���I�m��
        SU2 = 5;

        //�ʏ펞���`�F���I�m��
        RCH1 = 33;
        //ART�����`�F���I�m��
        RCH2 = 33;

        //�ʏ펞���X�C�J���I�m��
        RSU1 = 33;
        //ART�����X�C�J���I�m��
        RSU2 = 33;

        //�ʏ펞���i�`�F���[���I�m��
        CCH1 = 100;
        //ART�����i�`�F���[���I�m��
        CCH2 = 100;
    }
    if (setting == 2){
        //�ʏ펞�`�F���[���I�m��
        CH1 = 5;
        //ART���`�F���[���I�m��
        CH2 = 5;

        //�ʏ펞�X�C�J���I�m��
        SU1 = 5;
        //ART���X�C�J���I�m��
        SU2 = 5;

        //�ʏ펞���`�F���I�m��
        RCH1 = 33;
        //ART�����`�F���I�m��
        RCH2 = 35;

        //�ʏ펞���X�C�J���I�m��
        RSU1 = 33;
        //ART�����X�C�J���I�m��
        RSU2 = 35;

        //�ʏ펞���i�`�F���[���I�m��
        CCH1 = 100;
        //ART�����i�`�F���[���I�m��
        CCH2 = 100;
    }
    if (setting == 3){
        //�ʏ펞�`�F���[���I�m��
        CH1 = 5;
        //ART���`�F���[���I�m��
        CH2 = 5;

        //�ʏ펞�X�C�J���I�m��
        SU1 = 6;
        //ART���X�C�J���I�m��
        SU2 = 6;

        //�ʏ펞���`�F���I�m��
        RCH1 = 35;
        //ART�����`�F���I�m��
        RCH2 = 35;

        //�ʏ펞���X�C�J���I�m��
        RSU1 = 35;
        //ART�����X�C�J���I�m��
        RSU2 = 35;

        //�ʏ펞���i�`�F���[���I�m��
        CCH1 = 100;
        //ART�����i�`�F���[���I�m��
        CCH2 = 100;
    }
    if (setting == 4){
        //�ʏ펞�`�F���[���I�m��
        CH1 = 5;
        //ART���`�F���[���I�m��
        CH2 = 5;

        //�ʏ펞�X�C�J���I�m��
        SU1 = 6;
        //ART���X�C�J���I�m��
        SU2 = 6;

        //�ʏ펞���`�F���I�m��
        RCH1 = 37;
        //ART�����`�F���I�m��
        RCH2 = 37;

        //�ʏ펞���X�C�J���I�m��
        RSU1 = 37;
        //ART�����X�C�J���I�m��
        RSU2 = 37;

        //�ʏ펞���i�`�F���[���I�m��
        CCH1 = 100;
        //ART�����i�`�F���[���I�m��
        CCH2 = 100;
    }
    if (setting == 5){
        //�ʏ펞�`�F���[���I�m��
        CH1 = 6;
        //ART���`�F���[���I�m��
        CH2 = 5;

        //�ʏ펞�X�C�J���I�m��
        SU1 = 6;
        //ART���X�C�J���I�m��
        SU2 = 6;

        //�ʏ펞���`�F���I�m��
        RCH1 = 39;
        //ART�����`�F���I�m��
        RCH2 = 39;

        //�ʏ펞���X�C�J���I�m��
        RSU1 = 39;
        //ART�����X�C�J���I�m��
        RSU2 = 39;

        //�ʏ펞���i�`�F���[���I�m��
        CCH1 = 100;
        //ART�����i�`�F���[���I�m��
        CCH2 = 100;
    }
    if (setting == 6){
        //�ʏ펞�`�F���[���I�m��
        CH1 = 6;
        //ART���`�F���[���I�m��
        CH2 = 7;

        //�ʏ펞�X�C�J���I�m��
        SU1 = 6;
        //ART���X�C�J���I�m��
        SU2 = 7;

        //�ʏ펞���`�F���I�m��
        RCH1 = 42;
        //ART�����`�F���I�m��
        RCH2 = 39;

        //�ʏ펞���X�C�J���I�m��
        RSU1 = 43;
        //ART�����X�C�J���I�m��
        RSU2 = 40;

        //�ʏ펞���i�`�F���[���I�m��
        CCH1 = 100;
        //ART�����i�`�F���[���I�m��
        CCH2 = 100;
    }


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
    var SRTgame = 0; //SRT�Q�[����        
    var MaxRTgame = 0; //�ő�RT�Q�[����


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
    
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;


    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;

    if (a >= 0 && a <=730){
        document.getElementById("debug").innerHTML="�n�Y��";
        flag = "�n�Y��";
    }
    if (a >= 731 && a <=880){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 881 && a <=950){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        Bonuspot(CH1);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot(SU1);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot(RCH1);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot(RSU1);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot2(CCH1);
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

    if (a >= 0 && a <=800){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 801 && a <=850){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
        Bonuspot2(2);
    }
    if (a >= 851 && a <=950){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        Bonuspot(CH2);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot(SU2);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot(RCH2);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot(RSU2);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot2(CCH2);
    }

    RTgame -= 1;

    if (RTgame == 0){

        if(SBGMflg == 1){
            document.getElementById("sound-Bonus2").pause();
            document.getElementById("sound-Bonus2").currentTime = 0;
        SBGMflg = 0;
        BGMflg = 0;
        }
        else{
            document.getElementById("sound-Bonus").pause();
            document.getElementById("sound-Bonus").currentTime = 0;
            BGMflg = 0;
        }

    
        potmode = 0;
    }

}

/////////////////////////////
//�@SRT�����I
////////////////////////////

function SRTpot(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;


    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;

    if (a >= 0 && a <=800){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 501 && a <=850){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
        RTgame += 10;
        Bonuspot2(1);
    }
    if (a >= 851 && a <=950){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        RTgame += 10;
        Bonuspot2(3);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        RTgame += 10;
        Bonuspot2(3);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        RTgame += 30;
        Bonuspot2(33);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        RTgame += 40;
        Bonuspot2(40);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        RTgame += 100;
        Bonuspot2(100);
    }

    SRTgame -= 1;

    if (SRTgame == 0){
        
        document.getElementById("sound-RT").play();
        MaxRTgame = RTgame;
        potmode = 3;

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


function Bonuskakutei2(){

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
        document.getElementById("debug").innerHTML="��BB";
        flag = "��BB";
    }
    if (a >= 251 && a <=500){
        document.getElementById("debug").innerHTML="��BB";
        flag = "��BB";
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
    Bget += 15;
    

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;

    if (a >= 0 && a <=1000){
        document.getElementById("debug").innerHTML="BB�x��";
        flag = "BB�x��";
    }

    Bgame -= 1;

    if (Bgame == 0){

        if(RTgame >= 30){

            document.getElementById("sound-RT").play();
            potmode = 3;
            BBgamecount = 0;
            Bget = 0;
            RTgame += 10;
            MAXRTgame = RTgame;

        }

        else{
 
            document.getElementById("sound-RT").play();
            potmode = 3;
            BBgamecount = 0;
            Bget = 0;
            RTgame = 30;
            MAXRTgame = RTgame;

        }


    }
}


function Bonusmode2(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    payout = 0;
    Bget += 15;
    

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;

    if (a >= 0 && a <=1000){
        document.getElementById("debug").innerHTML="BB�x��";
        flag = "BB�x��";
    }

    Bgame -= 1;

    if (Bgame == 0){

        if (RTgame >= 30){

            potmode = 6;
            BBgamecount = 0;
            Bget = 0;
            RTgame += 30;
            SRTgame = 10;
            MAXRTgame = RTgame;
            document.getElementById("sound-SP2").play();

        }
        else{

            potmode = 6;
            BBgamecount = 0;
            Bget = 0;
            RTgame = 50;
            SRTgame = 10;
            MAXRTgame = RTgame;
            document.getElementById("sound-SP2").play();

        }

    }
}

////////////////////////////////////////////////////////////
//  �{�[�i�X���I
////////////////////////////////////////////////////////////
function Bonuspot(i){

    var a = Math.floor( Math.random() * 99 )+1 ;
    if (a <= i){
        potmode = 1;
    }
    else{
        
    }

}

function Bonuspot2(i){

    var a = Math.floor( Math.random() * 99 )+1 ;
    if (a <= i){
        potmode = 4;
    }
    else{
        
    }

}
