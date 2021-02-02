// &#10060


var counter = 1;

var play = ['X', 'O']
var player1 = play[0];
var player2 = play[1];

$(".button1").click(function () {
    counter = 1
});

$(".button2").click(function () {
    counter = 2
});

$("td").on("click", function () {
    if (!$(this)[0].innerHTML) {
        if (counter % 2 !== 0) {

            $(this)[0].innerHTML = player1;
            counter++;
        }
        else {

            $(this)[0].innerHTML = player2;
            counter++;
        }
    }
});

