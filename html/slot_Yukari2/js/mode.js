//////////////////////////////////////////////////
////////�@�{�̏����@mode.js      ////////////////
//////////////////////////////////////////////////

/////////////////////////////////////////////////
//  ����
/////////////////////////////////////////////////
    //���[�h�Ǘ�

//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	�萔
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	�O���[�o���ϐ�
/////////////////////////////////////////////////
    //RT���[�h
    var RTmode ="���Z�b�g";
    var RTmodesub ="�ʏ�A";


//---------------------------------------------//
/////////////////////////////////////////////////

function RTmodechange(){

    var a = Math.floor( Math.random() * 99 ) + 1;

    
    if (RTmode == "���Z�b�g"){
        if (a >= 1 && a <=50){
            RTmodesub = "�ʏ�A";
        }
        if (a >= 51 && a <=75){
            RTmodesub = "�ʏ�B";
        }
        if (a >= 76 && a <=90){
            RTmodesub = "�ʏ�C";
        }
        if (a >= 91 && a <=95){
            RTmodesub = "�V������A";
        }
        if (a >= 96 && a <=100){
            RTmodesub = "�V��A";
        }
    }

    if (RTmode == "�ʏ�A"){
        if (a >= 1 && a <=100){
            RTmodesub = "�ʏ�B";
        }
    }

    if (RTmode == "�ʏ�B"){
        if (a >= 1 && a <=20){
            RTmodesub = "�ʏ�B";
        }
        if (a >= 21 && a <=100){
            RTmodesub = "�ʏ�C";
        }
    }

    if (RTmode == "�ʏ�C"){
        if (a >= 1 && a <=20){
            RTmodesub = "�ʏ�C";
        }
        if (a >= 21 && a <=100){
            RTmodesub = "�V������A";
        }
    }

    if (RTmode == "�V������A"){
        if (a >= 1 && a <=50){
            RTmodesub = "�V������B";
        }
        if (a >= 51 && a <=100){
            RTmodesub = "�V��A";
        }
    }

    if (RTmode == "�V������B"){
        if (a >= 1 && a <=25){
            RTmodesub = "�V��A";
        }
        if (a >= 26 && a <=50){
            RTmodesub = "�V��B";
        }
        if (a >= 51 && a <=100){
            RTmodesub = "���V��B";
        }
    }

    if (RTmode == "�V��A"){
        if (a >= 1 && a <=25){
            RTmodesub = "�ʏ�A";
        }
        if (a >= 26 && a <=50){
            RTmodesub = "�ʏ�B";
        }
        if (a >= 51 && a <=100){
            RTmodesub = "�V��B";
        }
    }

    if (RTmode == "�V��B"){
        if (a >= 1 && a <=40){
            RTmodesub = "�V��A";
        }
        if (a >= 41 && a <=80){
            RTmodesub = "�V��B";
        }
        if (a >= 81 && a <=100){
            RTmodesub = "���V��A";
        }
    }

    if (RTmode == "���V��A"){
        if (a >= 1 && a <=25){
            RTmodesub = "�V��A";
        }
        if (a >= 26 && a <=50){
            RTmodesub = "�V��A";
        }
        if (a >= 51 && a <=100){
            RTmodesub = "���V��A";
        }
    }

    if (RTmode == "���V��B"){
        if (a >= 1 && a <=10){
            RTmodesub = "�V��A";
        }
        if (a >= 11 && a <=20){
            RTmodesub = "�V��B";
        }
        if (a >= 21 && a <=100){
            RTmodesub = "���V��B";
        }
    }

    RTmode = RTmodesub;

}

function RTmodecount(){

    var a = Math.floor( Math.random() * 99 ) + 1 ;


    if (RTmode == "�ʏ�A"){
        if (a >= 1 && a <=50){
            countpot2 = 200;
        }
        if (a >= 51 && a <=100){
            countpot2 = 350;
        }
    }

    if (RTmode == "�ʏ�B"){
        if (a >= 1 && a <=25){
            countpot2 = 500;
        }
        if (a >= 26 && a <=50){
            countpot2 = 300;
        }
        if (a >= 51 && a <=100){
            countpot2 = 350;
        }
    }

    if (RTmode == "�ʏ�C"){
        if (a >= 1 && a <=25){
            countpot2 = 250;
        }
        if (a >= 26 && a <=50){
            countpot2 = 300;
        }
        if (a >= 51 && a <=100){
            countpot2 = 350;
        }
    }

        if (RTmode == "�V������A"){
        if (a >= 1 && a <=25){
            countpot2 = 200;
        }
        if (a >= 26 && a <=50){
            countpot2 = 250;
        }
        if (a >= 51 && a <=75){
            countpot2 = 300;
        }
        if (a >= 76 && a <=100){
            countpot2 = 350;
        }
    }

    if (RTmode == "�V������B"){
        if (a >= 1 && a <=25){
            countpot2 = 500;
        }
        if (a >= 26 && a <=50){
            countpot2 = 500;
        }
        if (a >= 51 && a <=100){
            countpot2 = 777;
        }
    }

    if (RTmode == "�V��A"){
        if (a >= 1 && a <=25){
            countpot2 = 77;
        }
        if (a >= 26 && a <=50){
            countpot2 = 77;
        }
        if (a >= 51 && a <=100){
            countpot2 = 100;
        }
    }

    if (RTmode == "�V��B"){
        if (a >= 1 && a <=40){
            countpot2 = 77;
        }
        if (a >= 41 && a <=80){
            countpot2 = 77;
        }
        if (a >= 81 && a <=100){
            countpot2 = 100;
        }
    }

    if (RTmode == "���V��A"){
        if (a >= 1 && a <=25){
            countpot2 = 20;
        }
        if (a >= 26 && a <=50){
            countpot2 = 30;
        }
        if (a >= 51 && a <=100){
            countpot2 = 50;
        }
    }

    if (RTmode == "���V��B"){
        if (a >= 1 && a <=10){
            countpot2 = 20;
        }
        if (a >= 11 && a <=20){
            countpot2 = 30;
        }
        if (a >= 21 && a <=100){
            countpot2 = 50;
        }
    }
}