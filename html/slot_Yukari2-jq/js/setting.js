//1�R�}�̏c�̒���px
KOMA = 72;

//�@�𐬗��㏈��
function getcoin(){
    switch(flg){
        case "�n�Y��A":vm.get = 0; break;
        case "�n�Y��B":vm.get = 0; break;
        case "�n�Y��C":vm.get = 0; break;
        case "���v���C":vm.get = 3; break;
        case "�x��A":vm.get = 7; break;
        case "�x��B":vm.get = 15; break;
        case "�x��C":vm.get = 8; break;
        case "�`�F���[A":vm.get = 1; break;
        case "�`�F���[B":vm.get = 1; break;
        case "�`�F���[C":vm.get = 1; break;
        case "�X�C�JA":vm.get = 5; break;
        case "�X�C�JB":vm.get = 5; break;
        case "�`�����X��A":vm.get = 0; break;
        case "�`�����X��B":vm.get = 0; break;
        case "�`�����X��C":vm.get = 0; break;
        case "�ԂV":vm.get = 3; break;
        case "�ԂV�t�F�C�N":vm.get = 3; break;
        case "�V":vm.get = 3; break;
    }
    // ���ʕ����o��
    vm.coin += vm.get;

    // 7���������f
    if(r1move[1][1] =="�ԂV"&&r2move[1][1] =="�ԂV"&&r3move[1][1] =="�ԂV"){
        dp.bonuscount = 0;
        nextmode = 2;
        displaychangebonus();
    }
    
    //�@�{�[�i�X������
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

    // CZ������
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

        // RT������
        if(RTcount >= 1){
            RTcount -= 1;
            nextmode = 3;
            if (RTcount == 0){
                displaychange(1);
                nextmode = 0;
            }
        }
}