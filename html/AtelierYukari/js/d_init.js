

$(function(){
    
    
    
    for (var i = 1 ; i <= 30; i++){
        localStorage.setItem("card"+i, JSON.stringify(card_deck[0]));
        card_deck.shift();
    }


    var sub = JSON.parse(localStorage.getItem("card"+31));
    var text = sub[1]+" | "+sub[2]+":"+sub[3]+":"+sub[4];":"+sub[5];

    $('#subcard').append($('<option>').html(text).val(31));

    card_place(1);
    card_select(0);

});