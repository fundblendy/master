    
    
function reelact1(){
    CZpoint += Math.floor( Math.random() * 5 ) ;
    if (CZpoint >= 0 && CZpoint <= 20){
        color1 = document.getElementById("white")
    }
    if (CZpoint >= 21 && CZpoint <= 40){
        color1 = document.getElementById("blue")
    }
    if (CZpoint >= 41 && CZpoint <= 1000){
        color1 = document.getElementById("green")
    }

    var cmd = setInterval(colormode,1500)

    keyflag = 8;
    setTimeout(function(){
        flashreset();
        kaiten4 = setInterval (reelgyakukaiten,10);
        document.getElementById("sound-SE1").play();
        document.getElementById("mode").innerHTML="";
        document.getElementById("getcoin").innerHTML="";
    }, 1200);

    setTimeout(function(){

        CZpoint += Math.floor( Math.random() * 5 ) ;
        color1.style.opacity = 0;
        if (CZpoint >= 0 && CZpoint <= 21){
            color1 = document.getElementById("white")
        }
        if (CZpoint >= 20 && CZpoint <= 40){
            color1 = document.getElementById("blue")
        }
        if (CZpoint >= 41 && CZpoint <= 60){
            color1 = document.getElementById("green")
        }
        if (CZpoint >= 61 && CZpoint <= 1000){
            color1 = document.getElementById("red")
        }

        var i = reeloffset(reeltop1);
        clearInterval(kaiten4);
    
        var target1 = document.getElementById("reel1"); //対象要素をIDで指定
        var reel1;
        reel1 = i + "px";
        target1.style.top = reel1;
        flash7();
    }, 3000);

    setTimeout(function(){
        CZpoint += Math.floor( Math.random() * 5 ) ;
        color1.style.opacity = 0;
        if (CZpoint >= 0 && CZpoint <= 21){
            color1 = document.getElementById("white")
        }
        if (CZpoint >= 20 && CZpoint <= 40){
            color1 = document.getElementById("blue")
        }
        if (CZpoint >= 41 && CZpoint <= 60){
            color1 = document.getElementById("green")
        }
        if (CZpoint >= 61 && CZpoint <= 1000){
            color1 = document.getElementById("red")
        }

        kaiten1 = setInterval (reel1kaiten,1); 
        document.getElementById("sound-SE2").play();
        flashreset();
        flash7();
    }, 5000);

    setTimeout(function(){
        CZpoint += Math.floor( Math.random() * 5 ) ;
        color1.style.opacity = 0;
        if (CZpoint >= 0 && CZpoint <= 21){
            color1 = document.getElementById("white")
        }
        if (CZpoint >= 20 && CZpoint <= 40){
            color1 = document.getElementById("blue")
        }
        if (CZpoint >= 41 && CZpoint <= 60){
            color1 = document.getElementById("green")
        }
        if (CZpoint >= 61 && CZpoint <= 1000){
            color1 = document.getElementById("red")
        }
        kaiten2 = setInterval (reel2kaiten,1); 
        document.getElementById("sound-SE2").play();
        flashreset();
        flash7();
    }, 6000);

    setTimeout(function(){
        CZpoint += Math.floor( Math.random() * 5 ) ;
        color1.style.opacity = 0;
        if (CZpoint >= 0 && CZpoint <= 21){
            color1 = document.getElementById("white")
        }
        if (CZpoint >= 20 && CZpoint <= 40){
            color1 = document.getElementById("blue")
        }
        if (CZpoint >= 41 && CZpoint <= 60){
            color1 = document.getElementById("green")
        }
        if (CZpoint >= 61 && CZpoint <= 99){
            color1 = document.getElementById("red")
        }
        if (CZpoint >= 100 && CZpoint <= 1000){
            
        }
        kaiten3 = setInterval (reel3kaiten,1); 
        document.getElementById("sound-SE2").play();
        flashreset();
        flash7();
    }, 7000);

    setTimeout(function(){

        CZpoint += Math.floor( Math.random() * 15 ) ;
        color1.style.opacity = 0;
        if (CZpoint >= 0 && CZpoint <= 21){
            color1 = document.getElementById("white")
        }
        if (CZpoint >= 20 && CZpoint <= 40){
            color1 = document.getElementById("blue")
        }
        if (CZpoint >= 41 && CZpoint <= 60){
            color1 = document.getElementById("green")
        }
        if (CZpoint >= 61 && CZpoint <= 99){
            color1 = document.getElementById("red")
        }
        if (CZpoint >= 100 && CZpoint <= 1000){
            
        }
        if (CZpoint >= 0 && CZpoint <= 30){
            reeltop1 = 300; 
            
        }
        if (CZpoint >= 31 && CZpoint <= 50){
            reeltop1 = 300; 
            
        }
        if (CZpoint >= 51 && CZpoint <= 70){
            reeltop1 = 300; 
            
        }
        if (CZpoint >= 71 && CZpoint <= 99){
            reeltop1 = 300; 
            
        }
        if (CZpoint >= 100 && CZpoint <= 1000){
            reeltop1 = 300; 
            
        }

        var i = reeloffset(reeltop1);
        clearInterval(kaiten1);
    
        var target1 = document.getElementById("reel1"); //対象要素をIDで指定
        var reel1;
        reel1 = i + "px";
        target1.style.top = reel1;
        document.getElementById("sound-777").play();

    }, 10000);

    setTimeout(function(){
        
        CZpoint += Math.floor( Math.random() * 15 ) ;
        color1.style.opacity = 0;
        if (CZpoint >= 0 && CZpoint <= 30){
            reeltop1 = 300; 
            document.getElementById("sound-RT").play();
            flag = "SB";
        }
        if (CZpoint >= 31 && CZpoint <= 50){
            reeltop1 = 300; 
            document.getElementById("sound-RT").play();
            flag = "MB";
        }
        if (CZpoint >= 51 && CZpoint <= 70){
            reeltop1 = 300; 
            document.getElementById("sound-RT").play();
            flag = "RB";
            
        }
        if (CZpoint >= 71 && CZpoint <= 99){
            reeltop1 = 300; 
            document.getElementById("sound-RT").play();
            flag = "BB";
            
        }
        if (CZpoint >= 100 && CZpoint <= 1000){
            reeltop1 = -1105; 
            document.getElementById("sound-SP2").play();
            color1 = document.getElementById("rainbow")
            flag = "青BB";
        }

        var i = reeloffset(reeltop1);
        clearInterval(kaiten2);
    
        var target2 = document.getElementById("reel2"); //対象要素をIDで指定
        var reel2;
        reel2 = i + "px";
        target2.style.top = reel2;
        

    }, 12000);

    setTimeout(function(){
        
        flashreset();

        if (CZpoint >= 0 && CZpoint <= 30){
            reeltop3 = -655; 
            flash7();
        }
        if (CZpoint >= 31 && CZpoint <= 50){
            reeltop3 = -440; 
            flash7();
        }
        if (CZpoint >= 51 && CZpoint <= 70){
            reeltop3 = 230; 
            document.getElementById("bgvid1").src="./img/bcg2.mp4";
            yakumonodown();
            
            RTmodechange();
            RTmodecount();
            flash7();
        }
        if (CZpoint >= 71 && CZpoint <= 99){
            reeltop3 = 300; 
            document.getElementById("bgvid1").src="./img/bcg2.mp4";
            yakumonodown();
            
            RTmodechange();
            RTmodecount();
            flash7();
        }
        if (CZpoint >= 100 && CZpoint <= 1000){
            reeltop3 = 140; 
            document.getElementById("bgvid1").src="./img/bcg2.mp4";
            yakumonodown();
            RTmode = "天国A";
            RTmodecount();
            flash8();
            uwanose = 200;
        }

        var i = reeloffset(reeltop3);
        clearInterval(kaiten3);
        clearInterval(cmd);
        color1.style.opacity = 0;

        var target3 = document.getElementById("reel3"); //対象要素をIDで指定
        var reel3;
        reel3 = i + "px";
        target3.style.top = reel3;
        payout1();
        document.getElementById("sound-CZ").pause();
        document.getElementById("sound-CZ").currentTime = 0;
    }, 16000);

    setTimeout(function(){
        
        if(CZpoint >=51 ){
            yakumonoup();
        }

        CZpoint = 0;
        keyflag = 0;
        document.getElementById("btn1").style.background = "#fdc689";
        document.getElementById("btn2").style.background = "#ff3535";
        document.getElementById("btn3").style.background = "#ff3535";
        document.getElementById("btn4").style.background = "#ff3535";

        clearInterval(cmd);
        Rpoint = 0;


        

    }, 20000);
}