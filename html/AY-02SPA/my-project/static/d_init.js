

    function initdeck(){

        var f = localStorage.getItem("first");

        if(f != 1){

        
            for (var i = 1 ; i <= 31; i++){
                localStorage.setItem("card"+i, JSON.stringify(card_deck[0]));
                card_deck.shift();
                localStorage.setItem("cardcount",31);
                localStorage.setItem("first",1)
            }
        }

        var count = localStorage.getItem("cardcount")

        for (var n = 31 ; n <= count; n++){

            var sub = JSON.parse(localStorage.getItem("card"+n));
            var text = sub[1]+" | "+sub[2]+":"+sub[3]+":"+sub[4];":"+sub[5];
            $('#subcard').append($('<option>').html(text).val("card"+n));

        }

        
        card_place(1);
        card_select(0);
    }

