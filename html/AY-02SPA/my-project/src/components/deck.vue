<template>
    <div class ="deck_main">
      <div class = "deck_title">アイテムデッキ編成</div>

        <div class="deck_top">

            <div id="d_card1" onclick="card_select(0)">
                <div class="iconbox" id="icon1"><img class= "icon"  src=""/></div>
                <p class="cardname" id="card1name" >アイアンソード</p>
                <p class="cardname" id="card1main" >敵単体にダメージ</p>
                <p class="line" >~効果~</p>
                <p class="cardsub" id="card1sub1" ></p>
                <p class="cardsub" id="card1sub2" ></p>
                <p class="cardsub" id="card1sub3" ></p>
            </div>

            <div id="d_card2" onclick="card_select(1)">
                <div class="iconbox" id="icon2"><img class= "icon"  src=""/></div>
                <p class="cardname" id="card2name" ></p>
                <p class="cardname" id="card2main" ></p>
                <p class="line" >~効果~</p>
                <p class="cardsub" id="card2sub1" ></p>
                <p class="cardsub" id="card2sub2" ></p>
                <p class="cardsub" id="card2sub3" ></p>
            </div>

            <div id="d_card3" onclick="card_select(2)">
                <div class="iconbox" id="icon3"><img class= "icon"  src=""/></div>
                <p class="cardname" id="card3name" ></p>
                <p class="cardname" id="card3main" ></p>
                <p class="line" >~効果~</p>
                <p class="cardsub" id="card3sub1" ></p>
                <p class="cardsub" id="card3sub2" ></p>
                <p class="cardsub" id="card3sub3" ></p>
            </div>

            <div id="d_card4" onclick="card_select(3)">
                <div class="iconbox" id="icon4"><img class= "icon"  src=""/></div>
                <p class="cardname" id="card4name" ></p>
                <p class="cardname" id="card4main" ></p>
                <p class="line" >~効果~</p>
                <p class="cardsub" id="card4sub1" ></p>
                <p class="cardsub" id="card4sub2" ></p>
                <p class="cardsub" id="card4sub3" ></p>
            </div>

            <div id="d_card5" onclick="card_select(4)">
                <div class="iconbox" id="icon5"><img class= "icon"  src=""/></div>
                <p class="cardname" id="card5name" ></p>
                <p class="cardname" id="card5main" ></p>
                <p class="line" >~効果~</p>
                <p class="cardsub" id="card5sub1" ></p>
                <p class="cardsub" id="card5sub2" ></p>
                <p class="cardsub" id="card5sub3" ></p>
            </div>

            <div id="d_card6" onclick="card_select(5)">
                <div class="iconbox" id="icon6"><img class= "icon"  src=""/></div>
                <p class="cardname" id="card6name" ></p>
                <p class="cardname" id="card6main" ></p>
                <p class="line" >~効果~</p>
                <p class="cardsub" id="card6sub1" ></p>
                <p class="cardsub" id="card6sub2" ></p>
                <p class="cardsub" id="card6sub3" ></p>
            </div>

            <div id="d_card7" onclick="card_select(6)">
                <div class="iconbox" id="icon7"><img class= "icon"  src=""/></div>
                <p class="cardname" id="card7name" ></p>
                <p class="cardname" id="card7main" ></p>
                <p class="line" >~効果~</p>
                <p class="cardsub" id="card7sub1" ></p>
                <p class="cardsub" id="card7sub2" ></p>
                <p class="cardsub" id="card7sub3" ></p>
            </div>

            <div id="d_card8" onclick="card_select(7)">
                <div class="iconbox" id="icon8"><img class= "icon"  src=""/></div>
                <p class="cardname" id="card8name" ></p>
                <p class="cardname" id="card8main" ></p>
                <p class="line" >~効果~</p>
                <p class="cardsub" id="card8sub1" ></p>
                <p class="cardsub" id="card8sub2" ></p>
                <p class="cardsub" id="card8sub3" ></p>
            </div>

            <div id="d_card9" onclick="card_select(8)">
                <div class="iconbox" id="icon9"><img class= "icon"  src=""/></div>
                <p class="cardname" id="card9name" ></p>
                <p class="cardname" id="card9main" ></p>
                <p class="line" >~効果~</p>
                <p class="cardsub" id="card9sub1" ></p>
                <p class="cardsub" id="card9sub2" ></p>
                <p class="cardsub" id="card9sub3" ></p>
            </div>

            <div id="d_card10" onclick="card_select(9)">
                <div class="iconbox" id="icon10"><img class= "icon"  src=""/></div>
                <p class="cardname" id="card10name" ></p>
                <p class="cardname" id="card10main" ></p>
                <p class="line" >~効果~</p>
                <p class="cardsub" id="card10sub1" ></p>
                <p class="cardsub" id="card10sub2" ></p>
                <p class="cardsub" id="card10sub3" ></p>
            </div>

            <div id="d_cardselect">
                    <div class="iconbox" id="iconse"><img class= "icon"  src=""/></div>
                    <p class="cardname" id="cardsename" >アイアンソード</p>
                    <p class="cardname" id="cardsemain" >敵[1]にダメージ</p>
                    <p class="line" >~効果~</p>
                    <p class="cardsub" id="cardsesub1" >固定ダメージ[6]</p>
                    <p class="cardsub" id="cardsesub2" >追加ダメージ[+1~5]</p>
                    <p class="cardsub" id="cardsesub3" ></p>
            </div>

            <div id="d_button1" onclick="deck_button(1)">No.1～No.10</div>
            <div id="d_button2" onclick="deck_button(2)">No.11～No.20</div>
            <div id="d_button3" onclick="deck_button(3)">No.21～No.30</div>

            <div id="d_button4" onclick="deck_button(4)">交換</div>
            <div id="d_button5" ><router-link to="/">戻る</router-link></div>

            <div class="maincard"></div>
            <div class="subcard">交換するカード</div>
            <select id="subcard"></select>

        </div>

        

    </div>
</template>

<script>
export default{

  mounted: function () {
    initdeck();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media screen and (min-width: 499px) {
  .deck_main{
    position: relative;
    text-align: center;
    background-color: lemonchiffon;
    color:black;
    width:640px;
    height: 600px;
  }

  .deck_title{
      text-align: center;
      font-size:15px;
  }

  .deck_top{
    position: absolute;
    top:0px;
    height: 110px;
    z-index:200;
    color:whitesmoke;
    font-size: 10px;
  }

  #d_card1{
    position: absolute;
    margin-left: 0px;
    margin-top: 25px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card1:hover{
      border-color: rgb(250, 157, 121);
      border-width: 3px;
      border-style: solid; 
  }

  #d_card2{
    position: absolute;
    margin-left: 130px;
    margin-top: 25px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card2:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card3{
    position: absolute;
    margin-left: 260px;
    margin-top: 25px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card3:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card4{
    position: absolute;
    margin-left: 390px;
    margin-top: 25px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card4:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card5{
    position: absolute;
    margin-left: 520px;
    margin-top: 25px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card5:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card6{
    position: absolute;
    margin-left: 0px;
    margin-top: 190px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card6:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card7{
    position: absolute;
    margin-left: 130px;
    margin-top: 190px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card7:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card8{
    position: absolute;
    margin-left: 260px;
    margin-top: 190px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card8:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card9{
    position: absolute;
    margin-left: 390px;
    margin-top: 190px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card9:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card10{
    position: absolute;
    margin-left: 520px;
    margin-top: 190px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card10:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_button1{
    position: absolute;
    margin-left: 25px;
    margin-top: 350px;
    width: 180px;
    height: 30px;
    background: rgb(46, 63, 40);
    font-size: 20px;
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
  }

  #d_button2{
    position: absolute;
    margin-left: 225px;
    margin-top: 350px;
    width: 180px;
    height: 30px;
    background: rgb(46, 63, 40);
    font-size: 20px;
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
  }

  #d_button3{
    position: absolute;
    margin-left: 425px;
    margin-top: 350px;
    width: 180px;
    height: 30px;
    background: rgb(46, 63, 40);
    font-size: 20px;
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
  }

  #d_button4{
    position: absolute;
    margin-left: 220px;
    margin-top: 500px;
    width: 170px;
    height: 50px;
    background: rgb(73, 114, 124);
    font-size: 20px;
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
  }

  #d_button5{
    position: absolute;
    margin-left: 420px;
    margin-top: 500px;
    width: 170px;
    height: 50px;
    background: rgb(255, 231, 125);
    font-size: 20px;
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
  }

  #d_cardselect{
    position: absolute;
    margin-left: 38px;
    margin-top: 400px;
    width: 110px;
    height: 150px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
    z-index:102;
  }

  #subcard{
    position: absolute;
    margin-left: 210px;
    margin-top: 430px;
    width: 400px;
    z-index:102;
  }

  .subcard{
    position: absolute;
    margin-left: 200px;
    margin-top: 400px;
    width: 420px;
    height: 70px;
    background-color: lightgreen;
    font-size: 15px;
    color: black;
    z-index:101;
  }

  .maincard{
    position: absolute;
    margin-left: 20px;
    margin-top: 390px;
    width: 150px;
    height: 180px;
    background-color: lightcoral;
    font-size: 20px;
    color: black;
    z-index:101;
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
      display: inline-block;
      margin: 0px;
      color: rgb(176, 255, 202);
  }
}
@media screen and (max-width: 499px) {
    .deck_main{
    position: relative;
    text-align: center;
    background-color: lemonchiffon;
    color:black;
    width:320px;
    height: 300px;
  }

  .deck_title{
      text-align: center;
      font-size:7px;
  }

  .deck_top{
    position: absolute;
    top:0px;
    height: 55px;
    z-index:200;
    color:whitesmoke;
    font-size: 5px;
  }

  #d_card1{
    position: absolute;
    margin-left: 0px;
    margin-top: 15px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card1:hover{
      border-color: rgb(250, 157, 121);
      border-width: 3px;
      border-style: solid; 
  }

  #d_card2{
    position: absolute;
    margin-left: 65px;
    margin-top: 15px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card2:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card3{
    position: absolute;
    margin-left: 130px;
    margin-top: 15px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card3:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card4{
    position: absolute;
    margin-left: 195px;
    margin-top: 15px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card4:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card5{
    position: absolute;
    margin-left: 260px;
    margin-top: 15px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card5:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card6{
    position: absolute;
    margin-left: 0px;
    margin-top: 100px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card6:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card7{
    position: absolute;
    margin-left: 65px;
    margin-top: 100px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card7:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card8{
    position: absolute;
    margin-left: 130px;
    margin-top: 100px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card8:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card9{
    position: absolute;
    margin-left: 195px;
    margin-top: 100px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card9:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_card10{
    position: absolute;
    margin-left: 260px;
    margin-top: 100px;
    width: 55px;
    height: 75px;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }
  #d_card10:hover{
    border-color: rgb(250, 157, 121);
    border-width: 3px;
    border-style: solid; 
  }

  #d_button1{
    position: absolute;
    margin-left: 10px;
    margin-top: 185px;
    width: 90px;
    height: 15px;
    background: rgb(46, 63, 40);
    font-size: 10px;
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
  }

  #d_button2{
    position: absolute;
    margin-left: 115px;
    margin-top: 185px;
    width: 90px;
    height: 15px;
    background: rgb(46, 63, 40);
    font-size: 10px;
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
  }

  #d_button3{
    position: absolute;
    margin-left: 220px;
    margin-top: 185px;
    width: 90px;
    height: 15px;
    background: rgb(46, 63, 40);
    font-size: 10px;
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
  }

  #d_button4{
    position: absolute;
    margin-left: 110px;
    margin-top: 265px;
    width: 85px;
    height: 20px;
    background: rgb(73, 114, 124);
    font-size: 10px;
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
  }

  #d_button5{
    position: absolute;
    margin-left: 220px;
    margin-top: 265px;
    width: 85px;
    height: 20px;
    background: rgb(255, 231, 125);
    font-size: 10px;
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
  }

  #d_cardselect{
    position: absolute;
    margin-left: 15px;
    margin-top: 215px;
    width: 55px;
    height: 75px;
    z-index: 102;
    background: rgb(66, 35, 0);
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid; 
    float:left;
  }

  #subcard{
    position: absolute;
    margin-left: 100px;
    margin-top: 225px;
    width: 200px;
    font-size:6px;
    z-index:102;
  }

  .subcard{
    position: absolute;
    margin-left: 90px;
    margin-top: 210px;
    width: 220px;
    height: 40px;
    background-color: lightgreen;
    font-size: 7px;
    color: black;
    z-index:101;
  }

  .maincard{
    position: absolute;
    margin-left: 10px;
    margin-top: 210px;
    width: 70px;
    height: 90px;
    background-color: lightcoral;
    font-size: 20px;
    color: black;
    z-index:101;
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
      display: inline-block;
      margin: 0px;
      color: rgb(176, 255, 202);
  }

}
</style>
