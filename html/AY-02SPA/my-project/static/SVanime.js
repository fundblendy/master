var anime;
var actor1 = "yukari";
var actor2 = "akane";
var actor3 = "aoi";
var enemy1 = "";
var enemy2 = "";
var enemy3 = "";
var turn = "#p1";
var activeactor;
var keyflag = 1;


function atack1(card){
    
    //アニメーション中の操作ロック
    if (keyflag == 1){
        if (CTBwait[0] == CTB_p1 || CTBwait[0] == CTB_p2 || CTBwait[0] == CTB_p3){
            setTimeout(function(){
                keyflag = 0;
            }, 1000);
        } return;}
    keyflag = 1;

    //次回プレイヤーターンの場合、1.8秒後に操作ロック解除
    if (CTBwait[1] == CTB_p1 || CTBwait[1] == CTB_p2 || CTBwait[1] == CTB_p3){
        setTimeout(function(){
            keyflag = 0;
        }, 1800);
    }


    clearInterval(anime);

    $(function(){
        var count = setInterval(act1, 200);//間隔
        var pos = $("#card"+card).css("marginLeft");
        i = 19;
        $(turn).animate({
            left: "63%" 
        }, 600)
        $("#card"+card).animate({
            marginTop: "-40%", 
            marginLeft: "50%"
        }, 300)
        damagecore(card);

        function act1(){
            $(turn).children("img").attr("src","./static/img/SV/"+ activeactor +"_" + i + ".png");
            if(i <= 22){
                i++;
            }
            else{
                i = 10;
                $(turn).animate({
                    left: "68%" 
                }, 400)
                $("#card"+card).animate({
                    marginTop: "-=550px", 
                    opacity: "0"
                }, 500)
                $("#card"+card).animate({
                    marginTop: "25px", 
                    marginLeft: pos,
                    opacity: "0"
                }, 0)
                draw(card);
                $("#card"+card).animate({
                    opacity: "1"
                }, 300)
                clearInterval(count);
                turnnext();
                anime = setInterval(changeImg, 200);//間隔
                function changeImg(){
                    if (sta_p1 != 0){$("#p1").children("img").attr("src","./static/img/SV/"+ actor1 +"_" + i + ".png");}
                    if (sta_p2 != 0){$("#p2").children("img").attr("src","./static/img/SV/"+ actor2 +"_" + i + ".png");}
                    if (sta_p3 != 0){$("#p3").children("img").attr("src","./static/img/SV/"+ actor3 +"_" + i + ".png");}
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

    keyflag = 1;

    if (CTBwait[1] == CTB_p1 || CTBwait[1] == CTB_p2 || CTBwait[1] == CTB_p3){
        setTimeout(function(){
            keyflag = 0;
        }, 1800);
    }

    var i = 0;

    $(turn).animate({
        left: "32%" 
    }, 400)
    $(turn).animate({
        left: "32%" 
    }, 400)
    enemyatk();
    $(turn).animate({
        left: "200px" 
    }, 400)

    setTimeout(function(){
        turnnext();
    }, 1200);
}