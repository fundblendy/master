//////////////////////////////////////////////////
////////�@�{�̏����@Chrono.js      ////////////////
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
    SUIKA = 3;
    CHERRY = 3;
    BELL2 = 13; //�{�[�i�X���x��


    var setting = Math.floor( Math.random() * 5 ) + 1 ;

    if (setting == 1){
        //�ʏ펞�`�F���[���I�m��
        CH1 = 2;
        //ART���`�F���[���I�m��
        CH2 = 2;

        //�ʏ펞�X�C�J���I�m��
        SU1 = 3;
        //ART���X�C�J���I�m��
        SU2 = 3;

        //�ʏ펞���`�F���I�m��
        RCH1 = 22;
        //ART�����`�F���I�m��
        RCH2 = 22;

        //�ʏ펞���X�C�J���I�m��
        RSU1 = 30;
        //ART�����X�C�J���I�m��
        RSU2 = 30;

        //�ʏ펞���i�`�F���[���I�m��
        CCH1 = 100;
        //ART�����i�`�F���[���I�m��
        CCH2 = 100;
    }
    if (setting == 2){
        //�ʏ펞�`�F���[���I�m��
        CH1 = 2;
        //ART���`�F���[���I�m��
        CH2 = 2;

        //�ʏ펞�X�C�J���I�m��
        SU1 = 3;
        //ART���X�C�J���I�m��
        SU2 = 3;

        //�ʏ펞���`�F���I�m��
        RCH1 = 25;
        //ART�����`�F���I�m��
        RCH2 = 25;

        //�ʏ펞���X�C�J���I�m��
        RSU1 = 33;
        //ART�����X�C�J���I�m��
        RSU2 = 33;

        //�ʏ펞���i�`�F���[���I�m��
        CCH1 = 100;
        //ART�����i�`�F���[���I�m��
        CCH2 = 100;
    }
    if (setting == 3){
        //�ʏ펞�`�F���[���I�m��
        CH1 = 2;
        //ART���`�F���[���I�m��
        CH2 = 2;

        //�ʏ펞�X�C�J���I�m��
        SU1 = 3;
        //ART���X�C�J���I�m��
        SU2 = 3;

        //�ʏ펞���`�F���I�m��
        RCH1 = 28;
        //ART�����`�F���I�m��
        RCH2 = 28;

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
        CH1 = 3;
        //ART���`�F���[���I�m��
        CH2 = 3;

        //�ʏ펞�X�C�J���I�m��
        SU1 = 4;
        //ART���X�C�J���I�m��
        SU2 = 4;

        //�ʏ펞���`�F���I�m��
        RCH1 = 30;
        //ART�����`�F���I�m��
        RCH2 = 30;

        //�ʏ펞���X�C�J���I�m��
        RSU1 = 40;
        //ART�����X�C�J���I�m��
        RSU2 = 40;

        //�ʏ펞���i�`�F���[���I�m��
        CCH1 = 100;
        //ART�����i�`�F���[���I�m��
        CCH2 = 100;
    }
    if (setting == 5){
        //�ʏ펞�`�F���[���I�m��
        CH1 = 3;
        //ART���`�F���[���I�m��
        CH2 = 3;

        //�ʏ펞�X�C�J���I�m��
        SU1 = 4;
        //ART���X�C�J���I�m��
        SU2 = 4;

        //�ʏ펞���`�F���I�m��
        RCH1 = 33;
        //ART�����`�F���I�m��
        RCH2 = 33;

        //�ʏ펞���X�C�J���I�m��
        RSU1 = 40;
        //ART�����X�C�J���I�m��
        RSU2 = 40;

        //�ʏ펞���i�`�F���[���I�m��
        CCH1 = 100;
        //ART�����i�`�F���[���I�m��
        CCH2 = 100;
    }
    if (setting == 6){
        //�ʏ펞�`�F���[���I�m��
        CH1 = 3;
        //ART���`�F���[���I�m��
        CH2 = 3;

        //�ʏ펞�X�C�J���I�m��
        SU1 = 5;
        //ART���X�C�J���I�m��
        SU2 = 5;

        //�ʏ펞���`�F���I�m��
        RCH1 = 33;
        //ART�����`�F���I�m��
        RCH2 = 33;

        //�ʏ펞���X�C�J���I�m��
        RSU1 = 44;
        //ART�����X�C�J���I�m��
        RSU2 = 44;

        //�ʏ펞���i�`�F���[���I�m��
        CCH1 = 98;
        //ART�����i�`�F���[���I�m��
        CCH2 = 98;
    }




//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	�O���[�o���ϐ�
/////////////////////////////////////////////////
    //���[�h�֘A
    var potmode = 0; //���I���[�h
    var potmodesub = 0; //���I���[�h

    //�Q�[�����֘A
    var Bgame = 0; //�{�[�i�X�Q�[���@�c��Q�[����
    var Bget = 0; //�{�[�i�X�l������
    var RTgame = 0; //RT�Q�[���@�c��Q�[����
    var SRTgame = 0; //SRT�Q�[����        
    var MaxRTgame = 0; //�ő�RT�Q�[����
    var CZgame = 0;
    var CZpoint = 0;
    var Rpoint = 0;
    var uwanose = 0;
    var Ricon = 7;
    var SPstock = 0;
    var getcoin = 0;
    var getgame = 0;
    var bcgflg = 1;
    var countpot = 50;
    var CRTgame = 0;
    var countpot2 = 0;
    var uwanose2 = 0;


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

    bonusgamen2();

    
    if (bcgflg != 1){
    document.getElementById("bgvid1").src="./img/bcg.mp4";
    bcgflg = 1;
    }
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;
    countpot -=1;
    
    getcoin = 0;
    getgame = 0;

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;
    document.getElementById("gensan").innerHTML="";


    document.getElementById("totalgame1").innerHTML="";
    document.getElementById("totalgame2").innerHTML="";
    document.getElementById("totalcoin1").innerHTML="";
    document.getElementById("totalcoin2").innerHTML="";
    document.getElementById("countpot").innerHTML=countpot;


    if (a >= 0 && a <=700){
        document.getElementById("debug").innerHTML="�n�Y��";
        flag = "�n�Y��";
        act1();
    }
    if (a >= 701 && a <=720){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
        Rpoint += 1;
        act2();
    }
    if (a >= 721 && a <=880){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
        act1();
    }
    if (a >= 881 && a <=950){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
        act1();
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        Bonuspot3(CH1);
        Rpoint += 1;
        act2();
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot3(SU1);
        Rpoint += 1;
        act2();
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot3(RCH1);
        Rpoint += 2;
        act3();
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot3(RSU1);
        Rpoint += 2;
        act3();
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot3(CCH1);
    }




}


/////////////////////////////
//�@RT�����I
////////////////////////////

function RTpot(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    if (bcgflg != 3){
        document.getElementById("bgvid1").src="./img/bcg3.mp4";
        bcgflg = 3;
    }
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;
    countpot2 -= 1;

    getcoin -= 3;
    getgame += 1;

    document.getElementById("totalgame1").innerHTML="TOTAL";
    document.getElementById("totalgame2").innerHTML=getgame+" G";
    document.getElementById("totalcoin1").innerHTML="GET";
    document.getElementById("totalcoin2").innerHTML=getcoin;
    document.getElementById("countpot").innerHTML=countpot2;







    document.getElementById("getcoin").innerHTML="LAST "+RTgame+" ��";
    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;

    if (a >= 0 && a <=600){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
        act4();
    }
    if (a >= 601 && a <=900){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
        act4();
    }
    if (a >= 901 && a <=950){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
        uwanose2 = 10;
        act2();
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        Bonuspot3(CH2);
        uwanosepot(10);
        uwanose2 = 5;
        act2();
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot3(SU2);
        uwanosepot(10);
        uwanose2 = 5;
        act2();
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot3(RCH2);
        uwanosepot(30);
        uwanose2 = 15;
        act3();
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot3(RSU2);
        uwanosepot(30);
        uwanose2 = 20;
        act3();
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot3(CCH2);
        uwanosepot(200);
        act3();
    }


    if (RTgame == 0){

        if(SRTgame >= 1){

            document.getElementById("sound-SP2").play();
            potmode = 6;
            BBgamecount = 0;
            Bget = 0;
            RTgame += SRTgame;
            MAXRTgame = RTgame;

        }

        else{
 
  

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
            RTmode ="���Z�b�g";

            icon.fill(0);
            
         }     
            

    }

}

/////////////////////////////
//�@SRT���I
////////////////////////////

function SRTpot(){

    var a = Math.floor( Math.random() * 1000 ) ;

    if (bcgflg != 4){
        document.getElementById("bgvid1").src="./img/bcg4.mp4";
        bcgflg = 4;
    }
    
    
    gamecount += 1;
    mycoin -= BET;
    payout = 0;
    BBgamecount += 1;



    getcoin -= 3;


    document.getElementById("totalcoin1").innerHTML="GET";
    document.getElementById("totalcoin2").innerHTML=getcoin;

    document.getElementById("getcoin").innerHTML="LAST "+SRTgame+" G  ||  TOTAL "+RTgame+" ��";
    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;

    if (a >= 0 && a <=270){
        document.getElementById("debug").innerHTML="RB";
        flag = "RB";
    }
    if (a >= 271 && a <=300){
        document.getElementById("debug").innerHTML="BB";
        flag = "BB";
    }
    if (a >= 301 && a <=650){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 651 && a <=990){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
    }
    if (a >= 991 && a <=1000){
        document.getElementById("debug").innerHTML="��BB";
        flag = "��BB";
    }

    SRTgame -= 1;

    if (SRTgame == 0){
        
        potmode = 3;

    }

}

function CRTpot(){

    var a = Math.floor( Math.random() * 1000 ) ;


    if (bcgflg != 5){
        document.getElementById("bgvid1").src="./img/bcg5.mp4";
        bcgflg = 5;
    }
    
    gamecount += 1;
    mycoin -= BET;
    payout = 0;
    BBgamecount += 1;



    getcoin -= 3;


    document.getElementById("totalcoin1").innerHTML="GET";
    document.getElementById("totalcoin2").innerHTML=getcoin;

    document.getElementById("getcoin").innerHTML="LAST "+CRTgame+" G  ||  TOTAL "+RTgame+" ��";
    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;

    if (a >= 0 && a <=1){
        document.getElementById("debug").innerHTML="����BB";
        flag = "����BB";
    }

    if (a >= 2 && a <=600){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 601 && a <=900){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
        uwanose = 5;
    }
    if (a >= 901 && a <=950){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
        uwanose = 10;
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        Bonuspot3(CH2);
        uwanose = 15;
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot3(SU2);
        uwanose=15;
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot3(RCH2);
        uwanose=50;
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot3(RSU2);
        uwanose=50;
        
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot3(CCH2);
        uwanosepot(200);
    }

    CRTgame -= 1;

    if (CRTgame == 0){
        
        potmode = 3;

    }

}


/////////////////////////////
//�@CZ���I
////////////////////////////

function CZ1(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;
    CZgame -= 1;
    getcoin = 0;

    if (bcgflg != 7){
        document.getElementById("bgvid1").src="./img/bcg7.mp4";
        bcgflg = 7;
    }



    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;


    if (a >= 0 && a <=1){
        document.getElementById("debug").innerHTML="����BB";
        flag = "����BB";
        document.getElementById("sound-CZ").pause();
        document.getElementById("sound-CZ").currentTime = 0;
        RTgame += 100;
    }
    if (a >= 2 && a <=670){
        document.getElementById("debug").innerHTML="�n�Y��";
        flag = "�n�Y��";
        
    }
    if (a >= 671 && a <=750){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
        CZpoint += 1;
    }
    if (a >= 751 && a <=850){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
        CZpoint += 4;
    }
    if (a >= 851 && a <=950){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
        CZpoint += 2;
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        CZpoint += 4;
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        CZpoint += 4;
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        CZpoint += 30;
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        CZpoint += 35;
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        CZpoint += 100;
    }

}


/////////////////////////////
//�@�{�[�i�X�m�莞���I
////////////////////////////

function Bonuskakutei1(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;


    if (a >= 0 && a <=1000){
        document.getElementById("debug").innerHTML="SB";
        flag = "SB";
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


    if (a >= 0 && a <=1000){
        document.getElementById("debug").innerHTML="MB";
        flag = "MB";
    }
    
}

function Bonuskakutei3(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;


    if (a >= 0 && a <=1000){
        document.getElementById("debug").innerHTML="����BB";
        flag = "����BB";
        
    }
    
}

function Bonuskakutei4(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;


    if (a >= 0 && a <=1000){
        document.getElementById("debug").innerHTML="RB";
        flag = "RB";
    }
    
}

function Bonuskakutei5(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;


    if (a >= 0 && a <=1000){
        document.getElementById("debug").innerHTML="BB";
        flag = "BB";
    }
    
}

function Bonuskakutei6(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;


    if (a >= 0 && a <=1000){
        document.getElementById("debug").innerHTML="��BB";
        flag = "��BB";
    }
    
}

function Bonuskakutei7(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;


    if (a >= 0 && a <=1000){
        document.getElementById("debug").innerHTML="��BB";
        flag = "��BB";
    }
    
}


/////////////////////////////
//�@�{�[�i�X���@�q�𒊑I
////////////////////////////

function Bonusmode(){

    var a = Math.floor( Math.random() * 1000 ) ;

    if (bcgflg != 5){
        document.getElementById("bgvid1").src="./img/bcg5.mp4";
        bcgflg = 5;
    }
    
    mycoin -= BET;
    gamecount += 1;
    payout = 0;
    

    getcoin -= 3;

    document.getElementById("totalcoin1").innerHTML="GET";
    document.getElementById("totalcoin2").innerHTML=getcoin;
    

    document.getElementById("getcoin").innerHTML=" "+Bget+"/"+Maxget;
    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("pay").innerHTML=payout;


    if (a >= 0 && a <=1000){
        document.getElementById("debug").innerHTML="BB�x��";
        flag = "BB�x��";
    }



    Bgame -= 1;

    if (Bgame == 0){
        if (RTgame == 0){
            RTmodechange();
            RTmodecount();
        }
        Bget = 0;
        BBgamecount = 0;
        CRTgame = 10;
        uwanose = 5;
        potmode = 8;



    }
}


function Bonusmode2(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    gamecount += 1;
    payout = 0;
    Bget += 15;
    

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("gamecountA").innerHTML=gamecount;
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
            SRTgame += 10;
            MAXRTgame = RTgame;
            document.getElementById("sound-SP2").play();

        }
        else{

            potmode = 6;
            BBgamecount = 0;
            Bget = 0;
            RTgame += 30;
            SRTgame += 10;
            MAXRTgame = RTgame;
            document.getElementById("sound-SP2").play();

        }

    }
}

////////////////////////////////////////////////////////////
//  �{�[�i�X���I
////////////////////////////////////////////////////////////
function CZpot(i){

    var a = Math.floor( Math.random() * 99 ) + 1 ;
    if (a <= i){
        potmode = 1;
        CZgame = 10;
        
    }
    else{
        
    }

}

function Bonuspot2(i){

    var a = Math.floor( Math.random() * 99 ) + 1 ;
    if (a <= i){
        potmode = 4;
    }
    else{
        
    }

}

function Bonuspot3(i){

    var a = Math.floor( Math.random() * 99 ) + 1 ;
    if (a <= i){
        potmode = 5;
    }
    else{
        
    }

}

function uwanosepot(i){
    
    var a = Math.floor( Math.random() * 29 ) + 1 ;
    if (a <= i){
        uwanose = i ;
    }
}
