//////////////////////////////////////////////////
////////�@�{�̏����@Raityo.js      ////////////////
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
    BELL = 7;
    SUIKA = 5;
    CHERRY = 3;
    BELL2 = 15; //�{�[�i�X���x��


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

    if (a >= 0 && a <=680){
        document.getElementById("debug").innerHTML="�n�Y��";
        flag = "�n�Y��";
        
    }
    if (a >= 681 && a <=700){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
        CZpot(15);
        CZpoint = 5;
    }
    if (a >= 701 && a <=880){
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
        CZpot(20);
        CZpoint = 7;
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        CZpot(20);
        CZpoint = 7;
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        CZpot(60);
        CZpoint = 15;
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        CZpot(70);
        CZpoint = 15;
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot2(100);
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
    

    document.getElementById("getcoin").innerHTML="LAST "+RTgame+"G";
    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;

    if (a >= 0 && a <=100){
        document.getElementById("debug").innerHTML="�n�Y��";
        flag = "�n�Y��";
    }
    if (a >= 101 && a <=800){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 801 && a <=850){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
        Bonuspot3(1);
    }
    if (a >= 881 && a <=950){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        Bonuspot3(7);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot3(7);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot3(40);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot3(50);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot3(100);
    }

    RTgame -= 1;

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
                
            }     
            

    }

}

/////////////////////////////
//�@SRT���I
////////////////////////////

function SRTpot(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    
    gamecount += 1;
    mycoin -= BET;
    payout = 0;
    BBgamecount += 1;


    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;

    if (a >= 0 && a <=600){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 601 && a <=850){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
        Bonuspot3(1);
    }
    if (a >= 881 && a <=950){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        Bonuspot3(10);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot3(10);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot3(50);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot3(50);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot3(100);
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

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;


    if (a >= 0 && a <=5){
        document.getElementById("debug").innerHTML="����BB";
        flag = "����BB";
        document.getElementById("sound-CZ").pause();
        document.getElementById("sound-CZ").currentTime = 0;
    }
    if (a >= 6 && a <=300){
        document.getElementById("debug").innerHTML="�n�Y��";
        flag = "�n�Y��";
        
    }
    if (a >= 301 && a <=700){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
        CZpoint += 1;
    }
    if (a >= 701 && a <=800){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
        CZpoint += 5;
    }
    if (a >= 801 && a <=950){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
        CZpoint += 2;
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        CZpoint += 5;
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        CZpoint += 5;
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


    if (a >= 0 && a <=500){
        document.getElementById("debug").innerHTML="RB";
        flag = "RB";
    }

    if (a >= 501 && a <=900){
        document.getElementById("debug").innerHTML="BB";
        flag = "BB";
    }
    if (a >= 901 && a <=1000){
        document.getElementById("debug").innerHTML="��BB";
        flag = "��BB";
    }
    
}


/////////////////////////////
//�@�{�[�i�X���@�q�𒊑I
////////////////////////////

function Bonusmode(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    gamecount += 1;
    payout = 0;
    Bget += 1;
    
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
        Bget = 0;
        BBgamecount = 0;

        switch (Maxget){
            case 1: potmode = 0; break;
            case 2: potmode = 0; break;
            case 10: potmode = 3; RTgame = 30; break;
            case 20: potmode = 3; RTgame = 60; break;
            case 30: potmode = 6; break;

        }


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

    var a = Math.floor( Math.random() * 100 ) ;
    if (a <= i){
        potmode = 1;
        CZgame = 10;
        
    }
    else{
        
    }

}

function Bonuspot2(i){

    var a = Math.floor( Math.random() * 100 ) ;
    if (a <= i){
        potmode = 4;
    }
    else{
        
    }

}

function Bonuspot3(i){

    var a = Math.floor( Math.random() * 100 ) ;
    if (a <= i){
        potmode = 7;
    }
    else{
        
    }

}
