//////////////////////////////////////////////////
////////�@�z�[�������@hole.js      ////////////////
//////////////////////////////////////////////////

/////////////////////////////////////////////////
//  �o�[�W��������
/////////////////////////////////////////////////
    //

//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	�萔
/////////////////////////////////////////////////
    //


//---------------------------------------------//
/////////////////////////////////////////////////

/////////////////////////////////////////////////
//	�O���[�o���ϐ�
/////////////////////////////////////////////////


//---------------------------------------------//
/////////////////////////////////////////////////


//---------------------------------------------------------------//
//                                                               //
//---------------------------------------------------------------//

function jump(i){
    var link;
    switch (i) {
        case 1: link = "../slot_Raityo/index.html"; break;
        case 2: link = "../slot_RS/index.html"; break;
        case 3: link = "../slot_YukariA/index.html"; break;
        case 4: link = "../slot_Chrono/index.html"; break;
        case 5: link = "../slot_Yukari2/index.html"; break;
    }
    location.href = link;
}

function lvdown(){

    mycoin = storage.getItem('mycoin');
    Lv = storage.getItem('Lv');
    Lv = parseInt(Lv);
    mycoin = parseInt(mycoin);

    if (Lv > 1){
        mycoin = 0;
        storage.setItem('mycoin', mycoin);
        Lv -= 1;
        alert ("�����R�C����0�Ƀ��Z�b�g����܂����B���x����1������܂��� "+(Lv+1)+" �� "+Lv);
    } else{
        mycoin = 0;
        storage.setItem('mycoin', mycoin);
        alert ("�����R�C����0�Ƀ��Z�b�g����܂����B");
    }

    storage.setItem('Lv', Lv);
    storage.setItem('mycoin', mycoin);
    document.getElementById("coin").innerHTML = mycoin;
    document.getElementById("pay").innerHTML = Lv;

}



