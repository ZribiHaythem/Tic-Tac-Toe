// &#10060


var counter = 1;
var play = ['X','O']


$( "td" ).on( "click", function() {
    if(counter % 2 === 0){
        $( this )[0].innerHTML = play[1];
        counter ++;
    } 
    else {
        $( this )[0].innerHTML = play[0];
        counter ++;
    }
  });

  