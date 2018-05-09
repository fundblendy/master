function edamagecore(){
    switch (CTBwait[0]){

        case "./img/Enemy/s_bat.png":
            damage = Math.floor( Math.random() * 7 ) + 5;
        break;

        case "./img/Enemy/s_caterpillar.png":
        damage = Math.floor( Math.random() * 5 ) + 10;
        break;

    }
}