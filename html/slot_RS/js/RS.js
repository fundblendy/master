//////////////////////////////////////////////////
////////　本体処理　RS.js      ////////////////
//////////////////////////////////////////////////

/////////////////////////////////////////////////
//  説明
/////////////////////////////////////////////////
    //子役やボーナス確率等はここで設定します。

//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	定数
/////////////////////////////////////////////////
    //消費枚数
    BET = 3;

    //子役払い出し枚数
    NON = 0;
    RP = 3;
    BELL = 9;
    SUIKA = 7;
    CHERRY = 3;
    BELL2 = 9; //ボーナス中ベル

    var setting = Math.floor( Math.random() * 5 ) + 1 ;

    if (setting == 1){
        //通常時チェリー当選確率
        CH1 = 3;
        //ART中チェリー当選確率
        CH2 = 5;

        //通常時スイカ当選確率
        SU1 = 4;
        //ART中スイカ当選確率
        SU2 = 5;

        //通常時強チェ当選確率
        RCH1 = 30;
        //ART中強チェ当選確率
        RCH2 = 25;

        //通常時強スイカ当選確率
        RSU1 = 35;
        //ART中強スイカ当選確率
        RSU2 = 25;

        //通常時中段チェリー当選確率
        CCH1 = 100;
        //ART中中段チェリー当選確率
        CCH2 = 100;
    }
    if (setting == 2){
        //通常時チェリー当選確率
        CH1 = 4;
        //ART中チェリー当選確率
        CH2 = 6;

        //通常時スイカ当選確率
        SU1 = 4;
        //ART中スイカ当選確率
        SU2 = 6;

        //通常時強チェ当選確率
        RCH1 = 32;
        //ART中強チェ当選確率
        RCH2 = 25;

        //通常時強スイカ当選確率
        RSU1 = 35;
        //ART中強スイカ当選確率
        RSU2 = 25;

        //通常時中段チェリー当選確率
        CCH1 = 100;
        //ART中中段チェリー当選確率
        CCH2 = 100;
    }
    if (setting == 3){
        //通常時チェリー当選確率
        CH1 = 4;
        //ART中チェリー当選確率
        CH2 = 6;

        //通常時スイカ当選確率
        SU1 = 4;
        //ART中スイカ当選確率
        SU2 = 6;

        //通常時強チェ当選確率
        RCH1 = 35;
        //ART中強チェ当選確率
        RCH2 = 28;

        //通常時強スイカ当選確率
        RSU1 = 37;
        //ART中強スイカ当選確率
        RSU2 = 28;

        //通常時中段チェリー当選確率
        CCH1 = 100;
        //ART中中段チェリー当選確率
        CCH2 = 100;
    }
    if (setting == 4){
        //通常時チェリー当選確率
        CH1 = 5;
        //ART中チェリー当選確率
        CH2 = 6;

        //通常時スイカ当選確率
        SU1 = 5;
        //ART中スイカ当選確率
        SU2 = 6;

        //通常時強チェ当選確率
        RCH1 = 35;
        //ART中強チェ当選確率
        RCH2 = 28;

        //通常時強スイカ当選確率
        RSU1 = 37;
        //ART中強スイカ当選確率
        RSU2 = 28;

        //通常時中段チェリー当選確率
        CCH1 = 100;
        //ART中中段チェリー当選確率
        CCH2 = 100;
    }
    if (setting == 5){
        //通常時チェリー当選確率
        CH1 = 5;
        //ART中チェリー当選確率
        CH2 = 6;

        //通常時スイカ当選確率
        SU1 = 5;
        //ART中スイカ当選確率
        SU2 = 6;

        //通常時強チェ当選確率
        RCH1 = 40;
        //ART中強チェ当選確率
        RCH2 = 30;

        //通常時強スイカ当選確率
        RSU1 = 40;
        //ART中強スイカ当選確率
        RSU2 = 30;

        //通常時中段チェリー当選確率
        CCH1 = 100;
        //ART中中段チェリー当選確率
        CCH2 = 100;
    }
    if (setting == 6){
        //通常時チェリー当選確率
        CH1 = 5;
        //ART中チェリー当選確率
        CH2 = 7;

        //通常時スイカ当選確率
        SU1 = 5;
        //ART中スイカ当選確率
        SU2 = 7;

        //通常時強チェ当選確率
        RCH1 = 42;
        //ART中強チェ当選確率
        RCH2 = 33;

        //通常時強スイカ当選確率
        RSU1 = 42;
        //ART中強スイカ当選確率
        RSU2 = 33;

        //通常時中段チェリー当選確率
        CCH1 = 100;
        //ART中中段チェリー当選確率
        CCH2 = 100;
    }


//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	グローバル変数
/////////////////////////////////////////////////
    //モード関連
    var potmode = 0; //抽選モード
    var potmodesub = 0; //抽選モード

    //ゲーム数関連
    var Bgame = 0; //ボーナスゲーム　残りゲーム数
    var Bget = 0; //ボーナス獲得枚数
    var RTgame = 0; //RTゲーム　残りゲーム数
    var SRTgame = 0; //SRTゲーム数        
    var MaxRTgame = 0; //最大RTゲーム数


//---------------------------------------------//
/////////////////////////////////////////////////


//---------------------------------------------------------------//
//                                                               //
//---------------------------------------------------------------//

/////////////////////////////
//　通常時抽選
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
        document.getElementById("debug").innerHTML="ハズレ";
        flag = "ハズレ";
    }
    if (a >= 731 && a <=880){
        document.getElementById("debug").innerHTML="リプレイ";
        flag = "リプレイ";
    }
    if (a >= 881 && a <=950){
        document.getElementById("debug").innerHTML="ベル";
        flag = "ベル";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="チェリー";
        flag = "チェリー";
        Bonuspot(CH1);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="スイカ";
        flag = "スイカ";
        Bonuspot(SU1);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="強チェリー";
        flag = "強チェリー";
        Bonuspot(RCH1);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="強チャンス";
        flag = "強チャンス";
        Bonuspot(RSU1);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="確定チェリー";
        flag = "確定チェリー";
        Bonuspot2(CCH1);
    }



}


/////////////////////////////
//　AT中抽選
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
        document.getElementById("debug").innerHTML="リプレイ";
        flag = "リプレイ";
    }
    if (a >= 501 && a <=850){
        document.getElementById("debug").innerHTML="ベル";
        flag = "ベル";
        Bonuspot3(1);
    }
    if (a >= 851 && a <=950){
        document.getElementById("debug").innerHTML="ベル";
        flag = "ベル";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="チェリー";
        flag = "チェリー";
        Bonuspot3(CH2);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="スイカ";
        flag = "スイカ";
        Bonuspot3(SU2);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="強チェリー";
        flag = "強チェリー";
        Bonuspot3(RCH2);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="強チャンス";
        flag = "強チャンス";
        Bonuspot3(RCH2);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="確定チェリー";
        flag = "確定チェリー";
        Bonuspot3(CCH2);
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
//　上乗せゾーン抽選
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
        document.getElementById("debug").innerHTML="リプレイ";
        flag = "リプレイ";
    }
    if (a >= 401 && a <=500){
        document.getElementById("debug").innerHTML="SPリプレイ";
        flag = "SPリプレイ";
        RTgame += 10;
        Bonuspot3(1);
    }
    if (a >= 501 && a <=950){
        document.getElementById("debug").innerHTML="ベル";
        flag = "ベル";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="チェリー";
        flag = "チェリー";
        RTgame += 15;
        Bonuspot3(5);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="スイカ";
        flag = "スイカ";
        RTgame += 15;
        Bonuspot3(5);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="強チェリー";
        flag = "強チェリー";
        RTgame += 30;
        Bonuspot3(50);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="強チャンス";
        flag = "強チャンス";
        RTgame += 40;
        Bonuspot3(50);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="確定チェリー";
        flag = "確定チェリー";
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
//　ボーナス確定時抽選
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
        document.getElementById("debug").innerHTML="リプレイ";
        flag = "リプレイ";
    }
    if (a >= 801 && a <=950){
        document.getElementById("debug").innerHTML="ベル";
        flag = "ベル";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="チェリー";
        flag = "チェリー";
        
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="スイカ";
        flag = "スイカ";
        
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="強チェリー";
        flag = "強チェリー";
        
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="強チャンス";
        flag = "強チャンス";
        
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="確定チェリー";
        flag = "確定チェリー";
        
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
        document.getElementById("debug").innerHTML="青BB";
        flag = "青BB";
    }
    if (a >= 251 && a <=500){
        document.getElementById("debug").innerHTML="青BB";
        flag = "青BB";
    }
    if (a >= 501 && a <=800){
        document.getElementById("debug").innerHTML="リプレイ";
        flag = "リプレイ";
    }
    if (a >= 801 && a <=950){
        document.getElementById("debug").innerHTML="ベル";
        flag = "ベル";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="チェリー";
        flag = "チェリー";
        
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="スイカ";
        flag = "スイカ";
        
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="強チェリー";
        flag = "強チェリー";
        
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="強チャンス";
        flag = "強チャンス";
        
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="確定チェリー";
        flag = "確定チェリー";
        
    }
}

/////////////////////////////
//　ボーナス確定時抽選
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
        document.getElementById("debug").innerHTML="特殊BB";
        flag = "特殊BB";
    }
    
}


/////////////////////////////
//　ボーナス中　子役抽選
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
        document.getElementById("debug").innerHTML="リプレイ";
        flag = "リプレイ";
    }
    if (a >= 501 && a <=850){
        document.getElementById("debug").innerHTML="ベル";
        flag = "ベル";
        Bonuspot3(1);
    }
    if (a >= 851 && a <=950){
        document.getElementById("debug").innerHTML="ベル";
        flag = "ベル";
    }
    if (a >= 951 && a <=970){
        document.getElementById("debug").innerHTML="チェリー";
        flag = "チェリー";
        Bonuspot3(10);
    }
    if (a >= 971 && a <=990){
        document.getElementById("debug").innerHTML="スイカ";
        flag = "スイカ";
        Bonuspot3(10);
    }
    if (a >= 991 && a <=995){
        document.getElementById("debug").innerHTML="強チェリー";
        flag = "強チェリー";
        Bonuspot3(40);
    }
    if (a >= 995 && a <=999){
        document.getElementById("debug").innerHTML="強チャンス";
        flag = "強チャンス";
        Bonuspot3(40);
    }
    if (a == 1000){
        document.getElementById("debug").innerHTML="確定チェリー";
        flag = "確定チェリー";
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
        document.getElementById("debug").innerHTML="BBベル";
        flag = "BBベル";
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
//  ボーナス抽選
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

function Bonuspot3(i){

    var a = Math.floor( Math.random() * 99 )+1 ;
    if (a <= i){
        potmode = 7;
    }
    else{
        
    }

}
