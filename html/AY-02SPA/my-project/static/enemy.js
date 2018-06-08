function edamagecore(){
    switch (CTBwait[0]){

        case "./static/img/Enemy/s_bat.png":
            damage = Math.floor( Math.random() * 7 ) + 5;
        break;

        case "./static/img/Enemy/s_caterpillar.png":
        damage = Math.floor( Math.random() * 5 ) + 7;
        break;

        case "./static/img/Enemy/s_ghost.png":
        damage = Math.floor( Math.random() * 8 ) + 7;
        break;

        case "./static/img/Enemy/s_maitake.png":
        damage = Math.floor( Math.random() * 7 ) + 7;
        break;

        case "./static/img/Enemy/s_mandragora.png":
        damage = Math.floor( Math.random() * 7 ) + 7;
        break;

        case "./static/img/Enemy/s_lobo.png":
        damage = Math.floor( Math.random() * 8 ) + 8;
        break;

        case "./static/img/Enemy/s_golem.png":
        damage = Math.floor( Math.random() * 8 ) + 10;
        break;

    }
}