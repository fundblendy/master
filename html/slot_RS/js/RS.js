//////////////////////////////////////////////////
////////�@�{�̏����@RS.js      ////////////////
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
    BELL = 9;
    SUIKA = 7;
    CHERRY = 3;
    BELL2 = 9; //�{�[�i�X���x��


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
        Bonuspot(3);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        Bonuspot(4);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        Bonuspot(30);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot(35);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot2(100);
    }



}


/////////////////////////////
//�@AT�����I
////////////////////////////

function RTpot(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    
    
    mycoin -= BET;
    payout = 0;
    gamecount += 1;
    


    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;

    if (a >= 0 && a <=500){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 501 && a <=850){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
        Bonuspot3(1);
    }
    if (a >= 851 && a <=950){
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
        Bonuspot3(25);
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
//�@��悹�]�[�����I
////////////////////////////

function SRTpot(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    
    gamecount += 1;
    mycoin -= BET;
    payout = 0;


    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("pay").innerHTML=payout;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("gamecountB").innerHTML=BBgamecount;

    if (a >= 0 && a <=400){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 401 && a <=500){
        document.getElementById("debug").innerHTML="SP���v���C";
        flag = "SP���v���C";
        RTgame += 10;
        Bonuspot3(1);
    }
    if (a >= 501 && a <=950){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="�`�F���[";
        flag = "�`�F���[";
        RTgame += 15;
        Bonuspot3(5);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        RTgame += 15;
        Bonuspot3(5);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        RTgame += 30;
        Bonuspot3(50);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        RTgame += 40;
        Bonuspot3(50);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        RTgame += 100;
        Bonuspot3(100);
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
        
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        
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
        
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="�X�C�J";
        flag = "�X�C�J";
        
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="���`�F���[";
        flag = "���`�F���[";
        
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        
    }
}

/////////////////////////////
//�@�{�[�i�X�m�莞���I
////////////////////////////

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


/////////////////////////////
//�@�{�[�i�X���@�q�𒊑I
////////////////////////////

function Bonusmode(){

    var a = Math.floor( Math.random() * 1000 ) ;
    
    mycoin -= BET;
    gamecount += 1;
    payout = 0;
    Bget += 1;
    

    document.getElementById("coin").innerHTML=mycoin;
    document.getElementById("gamecountA").innerHTML=gamecount;
    document.getElementById("pay").innerHTML=payout;

    if (a >= 0 && a <=500){
        document.getElementById("debug").innerHTML="���v���C";
        flag = "���v���C";
    }
    if (a >= 501 && a <=850){
        document.getElementById("debug").innerHTML="�x��";
        flag = "�x��";
        Bonuspot3(1);
    }
    if (a >= 851 && a <=950){
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
        Bonuspot3(40);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="���`�����X";
        flag = "���`�����X";
        Bonuspot3(40);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="�m��`�F���[";
        flag = "�m��`�F���[";
        Bonuspot3(100);
    }

    Bgame -= 1;

    if (Bgame == 0){

        if(SRTgame >= 1){

            document.getElementById("sound-SP2").play();
            potmode = 6;
            BBgamecount = 0;
            Bget = 0;
            RTgame += SRTgame;
            RTgame += 20;
            MAXRTgame = RTgame;

        }

        else{
 
            potmode = 0;
            BBgamecount = 0;
            Bget = 0;
            if (RTgame > 0){

                potmode = 3;
                BBgamecount = 0;
                Bget = 0;
                MAXRTgame = RTgame;
            }
            else {

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
function Bonuspot(i){

    var a = Math.floor( Math.random() * 100 ) ;
    if (a <= i){
        potmode = 1;
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
