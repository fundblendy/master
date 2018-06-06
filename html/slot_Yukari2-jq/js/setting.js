//1コマの縦の長さpx
KOMA = 72;

//　役成立後処理
function getcoin(){
    switch(flg){
        case "ハズレA":vm.get = 0; break;
        case "ハズレB":vm.get = 0; break;
        case "ハズレC":vm.get = 0; break;
        case "リプレイ":vm.get = 3; break;
        case "ベルA":vm.get = 7; break;
        case "ベルB":vm.get = 15; break;
        case "ベルC":vm.get = 8; break;
        case "チェリーA":vm.get = 1; break;
        case "チェリーB":vm.get = 1; break;
        case "チェリーC":vm.get = 1; break;
        case "スイカA":vm.get = 5; break;
        case "スイカB":vm.get = 5; break;
        case "チャンス目A":vm.get = 0; break;
        case "チャンス目B":vm.get = 0; break;
        case "チャンス目C":vm.get = 0; break;
        case "赤７":vm.get = 3; break;
        case "赤７フェイク":vm.get = 3; break;
        case "青７":vm.get = 3; break;
    }
    // 共通払い出し
    vm.coin += vm.get;

    // 7揃成立判断
    if(r1move[1][1] =="赤７"&&r2move[1][1] =="赤７"&&r3move[1][1] =="赤７"){
        dp.bonuscount = 0;
        nextmode = 2;
        displaychangebonus();
    }
    
    //　ボーナス中処理
    if(nextmode == 2){
        dp.bonuscount += vm.get;
    }
    var bonuscoin = dp.bonuscount;
    if(bonuscoin >= 258){
        nextmode = 0;
        dp.bonuscount = "";
        vm.count2 = 0;
        displaychangeblack()
        czcount =10;
    }

    // CZ中処理
    if(czcount >= 1){
        if (no3pot == 0){
            nextmode = 3;
            RTcount = 30;
            displaychange(4);
            czcount = 0;
            return;
        }
        czcount -= 1;
        if (czcount == 0){
            displaychange(1);
        }
    }

        // RT中処理
        if(RTcount >= 1){
            RTcount -= 1;
            nextmode = 3;
            if (RTcount == 0){
                displaychange(1);
                nextmode = 0;
            }
        }
}