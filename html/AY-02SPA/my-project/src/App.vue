<template>
  <div id="app">
      <div id="stats"><p>錬金レベル</p><p>Lv {{ Lv }}</p></div>
      <div id="stats"><p>所持金</p><p>{{ gold }} G</p></div>
      <div id="stats"><p>名声</p><p>{{ rp }} pt</p></div>
      <div id="stats"><p>借金</p><p>{{ loan }} G</p></div>
      <div id="stats"><p>期限まで</p><p>{{ days }} Days</p></div>
      <div class ="home_main">

        <div class="buttonlist">
            <div id="h_button1" onclick="button(1)">錬金ガチャ</div>
            <div id="h_button1" onclick="button(2)">調合</div>
            <div id="h_button1" onclick="button(3)">鍛冶</div>
            <div id="h_button1" ><router-link to="/deck">デッキ編成</router-link></div>
            <div id="h_button1" onclick="button(5)">ステータス</div>
            <div id="h_button1" onclick="button(6)">ワールドマップ</div>
            <div id="h_button1" ><router-link to="battle">テストバトル</router-link></div>
        </div>
      </div>
    <router-view/>
  </div>
</template>

<script>
export default{
  name:"app",
    data() {
      return{
      Lv: 1,
      gold: 0,
      rp: 0,
      loan: 2000,
      days: 30
    }
  }

}


</script>

<style>

a { 
  text-decoration:none;
  display: block;
}
a:link { color : #000000; }
a:visited { color : #000000; }

@media screen and (max-width: 499px) {
  body{
    width:320px;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  #app{
      height: 80px;
      width: 320px;
      background: #000000;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 8px;
      color:seashell;
  }

  #stats{
      display: inline-block;
      margin-left: 1px;
      height: 50px;
      width: 60px;
      background: #141018;
      text-align: center;
  }

  #bgA{
    position: absolute;
    width:320px;
    left: 0px;
    z-index:1;
  }

  #bgB{
    position: absolute;
    width:320px;
    left: 0px;
    z-index:2;
  }
}

@media screen and (min-width: 499px) {
  body{
    width:640px;
    margin-left: auto;
    margin-right: auto;
  }

  #app{
      height: 100px;
      width: 640px;
      background: #000000;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      color:seashell;
  }

  #stats{
      display: inline-block;
      margin-left: 2px;
      height: 100px;
      width: 120px;
      background: #141018;
      text-align: center;
  }

  #bgA{
    position: absolute;
    width:640px;
    left: 0px;
    z-index:1;
  }

  #bgB{
    position: absolute;
    width:640px;
    left: 0px;
    z-index:2;
  }
}

@media screen and (max-width: 499px) {
  .home_main{
    position: relative;
    text-align: center;
    background-color: black;
    color:black;
    width:320px;
    height: 80px;
    max-width: 100%;
  }

  .bg{
    position: relative;
    background-color: black;
    color:black;
    width:320px;
    height: 300px;
  }

  .buttonlist{
      position: relative;
      top:0px;
      height: 80px;
      width: 320px;
      background: #000000;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
  }

  #h_button1{
    display: inline-block;
    margin-top: 3px;
    width: 70px;
    height: 20px;
    padding-top:6px;
    background: rgb(197, 184, 158);
    font-size: 10px;
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid;
  }
}

@media screen and (min-width: 499px) {
  .home_main{
    position: relative;
    text-align: center;
    background-color: black;
    color:black;
    width:640px;
    height: 120px;
    max-width: 100%;
  }

  .bg{
    position: relative;
    background-color: black;
    color:black;
    width:640px;
    height: 600px;
  }

  .buttonlist{
      position: relative;
      top:0px;
      height: 120px;
      width: 640px;
      background: #000000;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
  }

  #h_button1{
    display: inline-block;
    margin-top: 8px;
    width: 140px;
    height: 30px;
    padding-top:7px;
    background: rgb(197, 184, 158);
    font-size: 20px;
    border-color: rgb(26, 14, 0);
    border-width: 3px;
    border-style: solid;
  }
}
</style>
