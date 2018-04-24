////////////////////////////////////////////////
//Å@ñï®ââèo
////////////////////////////////////////////////

function yakumonodown(){
    var time = -400;
    var down;
    var target = document.getElementById("logo");


    function down1(){
        time += 15;
        target.style.top = time+"px";
    }

    down = setInterval(down1,6);

    setTimeout(function(){
        clearInterval(down);
        document.getElementById("sound-logoSP").play();
    }, 145);

}

function yakumonoup(){
    var time = -40;
    var down;
    var target = document.getElementById("logo");


    function up1(){
        time -= 2;
        target.style.top = time+"px";
    }

    up = setInterval(up1,6);

    setTimeout(function(){
        clearInterval(up);
    }, 1000);

}


function yakumonoaction1(){
    var time = -400;
    var down;
    var up;
    var target = document.getElementById("logo");


    function down1(){
        time += 10;
        target.style.top = time+"px";
    }

    function up1(){
        time -= 10;
        target.style.top = time+"px";
    }

    down = setInterval(down1,7);
    setTimeout(function(){
        clearInterval(down);
        up = setInterval(up1,7);
        document.getElementById("sound-logo1").play();
    }, 100);
    setTimeout(function(){
        clearInterval(up);
        down = setInterval(down1,7);
    }, 200);
    setTimeout(function(){
        clearInterval(down);
        up = setInterval(up1,7);
        document.getElementById("sound-logo2").play();
    }, 300);
    setTimeout(function(){
        clearInterval(up);
    }, 400);

}

function yakumonoaction2(){
    var time = -400;
    var down;
    var up;
    var target = document.getElementById("logo");


    function down1(){
        time += 15;
        target.style.top = time+"px";
    }

    function up1(){
        time -= 15;
        target.style.top = time+"px";
    }

    down = setInterval(down1,7);
    setTimeout(function(){
        clearInterval(down);
        up = setInterval(up1,7);
        document.getElementById("sound-logo1").play();
    }, 100);
    setTimeout(function(){
        clearInterval(up);
        down = setInterval(down1,7);
        
    }, 200);
    setTimeout(function(){
        clearInterval(down);
        up = setInterval(up1,7);
        document.getElementById("sound-logo2").play();
    }, 300);
    setTimeout(function(){
        clearInterval(up);
        down = setInterval(down1,7);
        
    }, 400);
    setTimeout(function(){
        clearInterval(down);
        up = setInterval(up1,7);
        document.getElementById("sound-logo3").play();
    }, 500);
    setTimeout(function(){
        clearInterval(up);
        
    }, 600);

}

function yakumonoaction3(){
    var time = -400;
    var down;
    var up;
    var target = document.getElementById("logo");


    function down1(){
        time += 10;
        target.style.top = time+"px";
    }

    function up1(){
        time -= 10;
        target.style.top = time+"px";
    }

    down = setInterval(down1,8);
    setTimeout(function(){
        clearInterval(down);
        up = setInterval(up1,8);
        document.getElementById("sound-logo1").play();
    }, 200);
    setTimeout(function(){
        clearInterval(up);
        down = setInterval(down1,8);  
    }, 400);
    setTimeout(function(){
        clearInterval(down);
        up = setInterval(up1,8);
        document.getElementById("sound-logo2").play();
    }, 600);
    setTimeout(function(){
        clearInterval(up);
    }, 800);


}
