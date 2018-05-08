var anime;
var actor1 = "yukari";
var actor2 = "akane";
var actor3 = "aoi";
var enemy1 = "";
var enemy2 = "";
var enemy3 = "";
var turn = "#p1";
var activeactor;

$(function(){
    turninit();
    anime = setInterval(changeImg, 200);//ŠÔŠu
    i = 10;
    function changeImg(){
        $("#p1").children("img").attr("src","./img/SV/"+ actor1 +"_" + i + ".png");
        $("#p2").children("img").attr("src","./img/SV/"+ actor2 +"_" + i + ".png");
        $("#p3").children("img").attr("src","./img/SV/"+ actor3 +"_" + i + ".png");
        if(i <= 11){
            i++;
        }
        else{
            i = 10;
        }
    }
});

function atack1(no){
    clearInterval(anime);

    $(function(){
        var count = setInterval(act1, 200);//ŠÔŠu
        var pos = $("#card"+no).css("marginLeft");
        i = 19;
        $(turn).animate({
            left: "63%" 
        }, 600)
        $("#card"+no).animate({
            marginTop: "-=250px", 
            marginLeft: "430px"
        }, 300)
        actoratk();
        function act1(){
            $(turn).children("img").attr("src","./img/SV/"+ activeactor +"_" + i + ".png");
            if(i <= 22){
                i++;
            }
            else{
                i = 10;
                $(turn).animate({
                    left: "68%" 
                }, 400)
                $("#card"+no).animate({
                    marginTop: "-=550px", 
                    opacity: "0"
                }, 500)
                $("#card"+no).animate({
                    marginTop: "250px", 
                    marginLeft: pos,
                    opacity: "0"
                }, 0)
                $("#card"+no).animate({
                    opacity: "1"
                }, 300)
                clearInterval(count);
                turnnext();
                anime = setInterval(changeImg, 200);//ŠÔŠu
                function changeImg(){
                    if (sta_p1 != 0){$("#p1").children("img").attr("src","./img/SV/"+ actor1 +"_" + i + ".png");}
                    if (sta_p2 != 0){$("#p2").children("img").attr("src","./img/SV/"+ actor2 +"_" + i + ".png");}
                    if (sta_p3 != 0){$("#p3").children("img").attr("src","./img/SV/"+ actor3 +"_" + i + ".png");}
                    if(i <= 11){
                        i++;
                    }
                    else{
                        i = 10;
                    }
                }
            }
        }
    });
}

function eatack(no){

    var i = 0;

    $(turn).animate({
        left: "32%" 
    }, 400)
    $(turn).animate({
        left: "32%" 
    }, 400)
    enemyatk();
    $(turn).animate({
        left: "25%" 
    }, 400)

    setTimeout(function(){
        turnnext();
    }, 1200);
}