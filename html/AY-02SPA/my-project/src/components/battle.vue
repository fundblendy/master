<template>
  <div class ="main">

    <div class ="bg">
      <img id="bgA" src="./img/BG/SampleA.png" alt=""/>
      <img id="bgB" src="./img/BG/SampleB.png" alt=""/>
    </div>

      <div id="p1"><img src="" alt=""/></div>
      <div id="p2"><img src="" alt=""/></div>
      <div id="p3"><img src="" alt=""/></div>

      <div id="e1"><img src="" alt=""/></div>
      <div id="e2"><img src="" alt=""/></div>
      <div id="e3"><img src="" alt=""/></div>

      <div class="battlehud">

          <div id="card1" onclick="atack1(1)">
              <div class="iconbox" id="icon1"><img class= "icon"  src=""/></div>
              <p class="cardname" id="card1name" >バトルアクス</p>
              <p class="cardname" id="card1main" >ランダム単体にダメージ</p>
              <p class="line" >~効果~</p>
              <p class="cardsub" id="card1sub1" >固定ダメージ[10]</p>
              <p class="cardsub" id="card1sub2" >追加ダメージ[+1~2]</p>
              <p class="cardsub" id="card1sub3" ></p>
          </div>

          <div id="card2" onclick="atack1(2)">
              <div class="iconbox" id="icon2"><img class= "icon"  src=""/></div>
              <p class="cardname" id="card2name" >ヒーリングポーション</p>
              <p class="cardname" id="card2main" >ランダム単体を回復</p>
              <p class="line" >~効果~</p>
              <p class="cardsub" id="card2sub1" >固定回復[10]</p>
              <p class="cardsub" id="card2sub2" >追加回復[+1~5]</p>
              <p class="cardsub" id="card2sub3" ></p>
          </div>

          <div id="card3" onclick="atack1(3)">
              <div class="iconbox" id="icon3"><img class= "icon"  src=""/></div>
              <p class="cardname" id="card3name" >ライトニングボルト</p>
              <p class="cardname" id="card3main" >敵全体にダメージ</p>
              <p class="line" >~効果~</p>
              <p class="cardsub" id="card3sub1" >固定ダメージ[5]</p>
              <p class="cardsub" id="card3sub2" ></p>
              <p class="cardsub" id="card3sub3" ></p>
          </div>

          <div id="card4" onclick="atack1(4)">
              <div class="iconbox" id="icon4"><img class= "icon"  src=""/></div>
              <p class="cardname" id="card4name" >レアポーション</p>
              <p class="cardname" id="card4main" >味方全体を回復</p>
              <p class="line" >~効果~</p>
              <p class="cardsub" id="card4sub1" >固定回復[2]</p>
              <p class="cardsub" id="card4sub2" >追加回復[+1~4]</p>
              <p class="cardsub" id="card4sub3" ></p>
          </div>

          <div id="card5" onclick="atack1(5)">
              <div class="iconbox" id="icon5"><img class= "icon"  src=""/></div>
              <p class="cardname" id="card5name" >アイアンソード</p>
              <p class="cardname" id="card5main" >敵[1]にダメージ</p>
              <p class="line" >~効果~</p>
              <p class="cardsub" id="card5sub1" >固定ダメージ[6]</p>
              <p class="cardsub" id="card5sub2" >追加ダメージ[+1~5]</p>
              <p class="cardsub" id="card5sub3" ></p>
          </div>


      </div>

      <div class="CTBhud">
          <div class="Bigsquare" id="w0">
              <p class="skill">-CTB SYSTEM-</p>
              <p id="skill">現在のターン</p>
              <img class="Act" id="CTBicon" src=""/>
          </div>
          <div class="square" id="w1"><img class="wait" id="CTBicon" src=""/></div>
          <div class="square" id="w2"><img class="wait" id="CTBicon" src=""/></div>
          <div class="square" id="w3"><img class="wait" id="CTBicon" src=""/></div>
          <div class="square" id="w4"><img class="wait" id="CTBicon" src=""/></div>
          <div class="square" id="w5"><img class="wait" id="CTBicon" src=""/></div>
          <div class="square" id="w6"><img class="wait" id="CTBicon" src=""/></div>
          <div class="square" id="w7"><img class="wait" id="CTBicon" src=""/></div>
          <div class="square" id="w8"><img class="wait" id="CTBicon" src=""/></div>
          <div class="square" id="w9"><img class="wait" id="CTBicon" src=""/></div>
      </div>


      <div class="StatusA">
          <div id="HPbox_p1">
              <p class="Statustext" id="Actor1">ゆかりさん</p>
              <p class="Statustext" id="HP_1">HP 28/28</p>
              <p class="Statustext2" id="Damage_1"></p>
          </div>
          <div id="HPbox_p2">
              <p class="Statustext" id="Actor2">あかねさん</p>
              <p class="Statustext" id="HP_2">HP 35/35</p>
              <p class="Statustext2" id="Damage_2"></p>
          </div>
          <div id="HPbox_p3">
              <p class="Statustext" id="Actor3">あおいさん</p>
              <p class="Statustext" id="HP_3">HP 31/31</p>
              <p class="Statustext2" id="Damage_3"></p>
          </div>
      </div>

      <div class="StatusB">
          <div id="HPbox_e1">
              <p class="Statustext" id="Enemy1">アンブレラバット</p>
              <p class="Statustext" id="EHP_1">HP 30/30</p>
              <p class="Statustext2" id="EDamage_1"></p>
          </div>
          <div id="HPbox_e2">
              <p class="Statustext" id="Enemy2">グリーンキャタピラ</p>
              <p class="Statustext" id="EHP_2">HP 20/20</p>
              <p class="Statustext2" id="EDamage_2"></p>
          </div>
          <div id="HPbox_e3">
              <p class="Statustext" id="Enemy3">グラスゴースト</p>
              <p class="Statustext" id="EHP_3"></p>
              <p class="Statustext2" id="EDamage_3"></p>
          </div>
      </div>

      <div id="battle_result">
          <p id="result_1">~回廊の森~</p>
          <p id="result_2">階層 1/15</p>
          <p id="result_3"></p>
      </div>

  </div>
</template>

<script>
export default{

  mounted: function () {
        
    nextbattle(1);
    initdraw();
    anime = setInterval(changeImg, 200);//間隔
    i = 10;
    function changeImg(){
        $("#p1").children("img").attr("src","./static/img/SV/"+ actor1 +"_" + i + ".png");
        $("#p2").children("img").attr("src","./static/img/SV/"+ actor2 +"_" + i + ".png");
        $("#p3").children("img").attr("src","./static/img/SV/"+ actor3 +"_" + i + ".png");
        if(i <= 11){
            i++;
        }
        else{
            i = 10;
        }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media screen and (min-width: 499px) {
  .main{
    position: absolute;
    text-align: center;
    top: 112px;
    width:640px;
    height: 720px;
    max-width: 100%;
    background: black;
  }

  #battle_result{
    position: absolute;
    width: 640px;
    top: 200px;
    height: 150px;
    text-align: center;
    z-index: 1000;
    background-color: rgb(0, 0, 0);
    opacity:0;
      color:rgb(255, 255, 255);
    font-size: 20px;
      object-fit: cover;
  }

  .StatusA{
    position: absolute;
      top: 170px;
      left: 490px;
    width: 100px;
    height: 50%;
      z-index:250;
  }

  #HPbox_p1{
      display: block;
      text-align: center;
    width: 120px;
    height: 60px;
      background: rgb(0, 0, 0);
      border-color: rgb(44, 21, 0);
      border-width: 3px;
      border-style: solid; 
      margin:15px;
  }
  #HPbox_p2{
      display: block;
      text-align: center;
    width: 120px;
    height: 60px;
      background: rgb(0, 0, 0);
      border-color: rgb(44, 21, 0);
      border-width: 3px;
      border-style: solid; 
      margin:15px;
  }
  #HPbox_p3{
      display: block;
      text-align: center;
    width: 120px;
    height: 60px;
      background: rgb(0, 0, 0);
      border-color: rgb(44, 21, 0);
      border-width: 3px;
      border-style: solid; 
      margin:15px;
  }

  #HPbox_e1{
      display: block;
      text-align: center;
    width: 180px;
    height: 60px;
      background: rgb(0, 0, 0);
      border-color: rgb(44, 21, 0);
      border-width: 3px;
      border-style: solid; 
      margin:15px;
  }
  #HPbox_e2{
      display: block;
      text-align: center;
    width: 180px;
    height: 60px;
      background: rgb(0, 0, 0);
      border-color: rgb(44, 21, 0);
      border-width: 3px;
      border-style: solid; 
      margin:15px;
  }
  #HPbox_e3{
      display: block;
      text-align: center;
    width: 180px;
    height: 60px;
      background: rgb(0, 0, 0);
      border-color: rgb(44, 21, 0);
      border-width: 3px;
      border-style: solid; 
      margin:15px;
  }

  .Statustext{
      color:white;
      margin: 1px;
      font-size: 12px;
  }

  .Statustext2{
      margin-top: -5px;
      font-size: 30px;
  }

  .StatusB{
    position: absolute;
      top: 170px;
      left: 0%;
    width: 20%;
    height: 50%;
      z-index:250;
  }
  #p1{
    position: absolute;
    top: 200px;
    left: 430px;
    z-index:100;
  }
  #p2{
    position: absolute;
    top: 270px;
    left: 430px;
    z-index:100;
  }
  #p3{
    position: absolute;
    top: 340px;
    left: 430px;
    z-index:100;
  }

  #e1{
    position: absolute;
    top: 150px;
    left: 200px;
    z-index:100;
  }

  #e2{
    position: absolute;
    top: 220px;
    left: 200px;
    z-index:100;
  }

  #e3{
    position: absolute;
    top: 290px;
    left: 200px;
    z-index:100;
  }

  .battlehud{
    position: absolute;
    top: 450px;
    width: 100%;
    height: 200px;
      z-index:200;
      color:whitesmoke;
      font-size: 10px;
      object-fit: cover;
  }

  #card1{
    position: absolute;
    margin-left: 0%;
    margin-top: 25px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #card1:hover{
      border-color: rgb(250, 157, 121);
      border-width: 3px;
      border-style: solid; 
  }

  #card2{
    position: absolute;
    margin-left: 20%;
    margin-top: 25px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #card2:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #card3{
    position: absolute;
    margin-left: 40%;
    margin-top: 25px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #card3:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #card4{
    position: absolute;
    margin-left: 60%;
    margin-top: 25px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #card4:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #card5{
    position: absolute;
    margin-left: 80%;
    margin-top: 25px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #card5:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  .CTBhud{
    position: absolute;
    top: 0;
    width: 640px;
    height: 20%;
    z-index:250;
    vertical-align: top;
  }


  .square {
    display: inline-block;
    width: 40px;
    height: 60px;
      background: rgb(150, 96, 46);
      border-color: rgb(44, 21, 0);
      border-width: 3px;
      border-style: solid; 
      vertical-align: top;
  }

  .Bigsquare {
    display: inline-block;
    width: 100px;
    height: 120px;
      background: rgb(230, 151, 78);
      border-color: rgb(146, 78, 0);
      border-width: 3px;
      border-style: solid; 
      vertical-align: top;
      font-size: 13px;
  }

  .Act {
      width: 100px;
      height: 100px;
      zoom:75%;
      object-fit: cover;
  }

  .wait{
      width: 50px;
      height: 70px;
      zoom:75%;
      object-fit: cover;
  }

  .skill{
      margin:1px;
      color: rgb(0, 58, 68)
  }

  #skill{
      margin:1px;
      color: rgb(0, 58, 68)
  }
    .iconbox{
    display: inline-block;
    width: 108px;
    height: 40px;
    top:1px;
    background: rgb(44, 24, 0);
    border-color: rgb(0, 0, 0);
    border-width: 1px;
    border-style: solid; 
    vertical-align: top;
    object-fit: cover;
  }

  .cardname{
      display: inline-block;
      margin: 0px;
  }

  .icon{
      width: 110px;
      height: 80px;
      zoom:50%;
      object-fit: cover;
  }

  .line{
      display: inline-block;
      margin: 1px;
      height: 1px;
      width: 110px;
      color:rgb(176, 255, 202);
  }

  .cardsub{
      display: block;
      margin: 0px;
      color: rgb(176, 255, 202);
  }
}

@media screen and (max-width: 499px) {
  .main{
    position: absolute;
    text-align: center;
    top: 56px;
    width:320px;
    height: 360px;
    max-width: 100%;
    background: black;
  }

  #battle_result{
    position: absolute;
    width: 320px;
    top: 100px;
    height: 75px;
    text-align: center;
    z-index: 1000;
    background-color: rgb(0, 0, 0);
    opacity:0;
      color:rgb(255, 255, 255);
    font-size: 10px;
      object-fit: cover;
  }

  .StatusA{
    position: absolute;
      top: 85px;
      left: 245px;
    width: 50px;
    height: 50%;
      z-index:250;
  }

  #HPbox_p1{
      display: block;
      text-align: center;
    width: 60px;
    height: 30px;
      background: rgb(0, 0, 0);
      border-color: rgb(44, 21, 0);
      border-width: 2px;
      border-style: solid; 
      margin:7px;
  }
  #HPbox_p2{
      display: block;
      text-align: center;
    width: 60px;
    height: 30px;
      background: rgb(0, 0, 0);
      border-color: rgb(44, 21, 0);
      border-width: 2px;
      border-style: solid; 
      margin:7px;
  }
  #HPbox_p3{
      display: block;
      text-align: center;
    width: 60px;
    height: 30px;
      background: rgb(0, 0, 0);
      border-color: rgb(44, 21, 0);
      border-width: 2px;
      border-style: solid; 
      margin:7px;
  }

  #HPbox_e1{
      display: block;
      text-align: center;
    width: 90px;
    height: 30px;
      background: rgb(0, 0, 0);
      border-color: rgb(44, 21, 0);
      border-width: 2px;
      border-style: solid; 
      margin:7px;
  }
  #HPbox_e2{
      display: block;
      text-align: center;
    width: 90px;
    height: 30px;
      background: rgb(0, 0, 0);
      border-color: rgb(44, 21, 0);
      border-width: 2px;
      border-style: solid; 
      margin:7px;
  }
  #HPbox_e3{
      display: block;
      text-align: center;
    width: 90px;
    height: 30px;
      background: rgb(0, 0, 0);
      border-color: rgb(44, 21, 0);
      border-width: 2px;
      border-style: solid; 
      margin:7px;
  }

  .Statustext{
      color:white;
      margin: 1px;
      font-size: 7px;
  }

  .Statustext2{
      margin-top: -5px;
      font-size: 15px;
  }

  .StatusB{
    position: absolute;
      top: 85px;
      left: 0%;
    width: 20%;
    height: 50%;
      z-index:250;
  }
  #p1{
    position: absolute;
    top: 200px;
    left: 430px;
    z-index:100;
    zoom:50%;
  }
  #p2{
    position: absolute;
    top: 270px;
    left: 430px;
    z-index:100;
    zoom:50%;
  }
  #p3{
    position: absolute;
    top: 340px;
    left: 430px;
    z-index:100;
    zoom:50%;
  }

  #e1{
    position: absolute;
    top: 150px;
    left: 200px;
    z-index:100;
    zoom:50%;
  }

  #e2{
    position: absolute;
    top: 220px;
    left: 200px;
    z-index:100;
    zoom:50%;
  }

  #e3{
    position: absolute;
    top: 290px;
    left: 200px;
    z-index:100;
    zoom:50%;
  }

  .battlehud{
    position: absolute;
    top: 225px;
    width: 320px;
    height: 100px;
      z-index:200;
      color:whitesmoke;
      font-size: 5px;
      object-fit: cover;
  }

  #card1{
    position: absolute;
    margin-left: 0%;
    margin-top: 25px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 2px;
    border-style: solid; 
    float:left;
  }
  #card1:hover{
      border-color: rgb(250, 157, 121);
      border-width: 2px;
      border-style: solid; 
  }

  #card2{
    position: absolute;
    margin-left: 20%;
    margin-top: 25px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 2px;
    border-style: solid; 
    float:left;
  }
  #card2:hover{
    border-color: rgb(250, 157, 121);
    border-width: 2px;
    border-style: solid; 
  }

  #card3{
    position: absolute;
    margin-left: 40%;
    margin-top: 25px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #card3:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #card4{
    position: absolute;
    margin-left: 60%;
    margin-top: 25px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #card4:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #card5{
    position: absolute;
    margin-left: 80%;
    margin-top: 25px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #card5:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  .CTBhud{
    position: absolute;
    top: 0;
    width: 320px;
    height: 20%;
    z-index:250;
    vertical-align: top;
  }


  .square {
    display: inline-block;
    width: 20px;
    height: 30px;
      background: rgb(150, 96, 46);
      border-color: rgb(44, 21, 0);
      border-width: 3px;
      border-style: solid; 
      vertical-align: top;
  }

  .Bigsquare {
    display: inline-block;
    width: 50px;
    height: 75px;
      background: rgb(230, 151, 78);
      border-color: rgb(146, 78, 0);
      border-width: 3px;
      border-style: solid; 
      vertical-align: top;
      font-size: 7px;
  }

  .Act {
      width: 50px;
      height: 50px;
      zoom:75%;
      object-fit: cover;
  }

  .wait{
      width: 25px;
      height: 35px;
      zoom:75%;
      object-fit: cover;
  }

  .skill{
      margin:1px;
      color: rgb(0, 58, 68)
  }

  #skill{
      margin:1px;
      color: rgb(0, 58, 68)
  }
    .iconbox{
    display: inline-block;
    width: 54px;
    height: 20px;
    top:1px;
    background: rgb(44, 24, 0);
    border-color: rgb(0, 0, 0);
    border-width: 1px;
    border-style: solid; 
    vertical-align: top;
    object-fit: cover;
  }

  .cardname{
      display: inline-block;
      margin: 0px;
  }

  .icon{
      width: 55px;
      height: 40px;
      zoom:50%;
      object-fit: cover;
  }

  .line{
      display: inline-block;
      margin: 1px;
      height: 1px;
      width: 55px;
      color:rgb(176, 255, 202);
  }

  .cardsub{
      display: block;
      margin: 0px;
      color: rgb(176, 255, 202);
  }
}

</style>
