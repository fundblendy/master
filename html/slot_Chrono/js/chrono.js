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
    BELL = 13;
    SUIKA = 7;
    CHERRY = 3;
    BELL2 = 8; //�{�[�i�X���x��


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
    var CZgame = 10;
    var CZpoint = 10;
    var Rpoint = 0;
    var uwanose = 0;
    var Ricon = 7;


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

    
    
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    BBgamecount += 1;
    
    var iconname = "icon"+Ricon;


    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("RPicon").style.opacity="1";
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;
    document.getElementById(iconname).style.backgroundColor= "";
    Ricon += 1;
    if (Ricon == 8){
        Ricon = 1;
    }
    iconname = "icon"+Ricon;
    document.getElementById(iconname).style.backgroundColor="rgba(255,255,255,0.5)";

    if (a >= 0 && a <=650){
        document.getElementById("debug").innerHTML="�n�Y��";
        flag = "�n�Y��";
        
    }
    if (a >= 651 && a <=680){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
    }
    if (a >= 681 && a <=880){
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
        Bonuspot3(5);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot3(5);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot3(25);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot3(33);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot3(100);
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

    var iconname = "icon"+Ricon;
    
    document.getElementById("RPicon").style.opacity="1";
    document.getElementById(iconname).style.backgroundColor= "";
    Ricon += 1;
    if (Ricon == 8){
        Ricon = 1;
    }
    iconname = "icon"+Ricon;
    document.getElementById(iconname).style.backgroundColor="rgba(255,255,255,0.5)";





    document.getElementById("getcoin").innerHTML="LAST "+RTgame+"G";
    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;

    if (a >= 0 && a <=620){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 621 && a <=900){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
    }
    if (a >= 901 && a <=950){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
        
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        Bonuspot3(5);
        uwanosepot(5);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot3(5);
        uwanosepot(5);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot3(25);
        uwanosepot(25);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot3(33);
        uwanosepot(30);
        
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

    if (a >= 0 && a <=250){
        document.getElementById("debug").innerHTML="RB";
        flag = "RB";
    }
    if (a >= 251 && a <=300){
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

    document.getElementById("RPicon").style.opacity="0";
    document.getElementById("icon1").style.color= "black";
    document.getElementById("icon2").style.color= "black";
    document.getElementById("icon3").style.color= "black";
    document.getElementById("icon4").style.color= "black";
    document.getElementById("icon5").style.color= "black";
    document.getElementById("icon6").style.color= "black";
    document.getElementById("icon7").style.color= "black";
    icon.fill(0);

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;


    if (a >= 0 && a <=2){
        document.getElementById("debug").innerHTML="����BB";
        flag = "����BB";
        document.getElementById("sound-CZ").pause();
        document.getElementById("sound-CZ").currentTime = 0;
        RTgame += 100;
    }
    if (a >= 3 && a <=400){
        document.getElementById("debug").innerHTML="�n�Y��";
        flag = "�n�Y��";
        
    }
    if (a >= 401 && a <=700){
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
    
    mycoin -= BET;
    gamecount += 1;
    payout = 0;
    Bget += 1;
    
    document.getElementById("RPicon").style.opacity="0";
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

        if (RTgame >= 1){
            potmode = 3;
        } else{
            potmode = 0;
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
        potmode = 5;
    }
    else{
        
    }

}

function uwanosepot(i){

    uwanose = i ;

}
