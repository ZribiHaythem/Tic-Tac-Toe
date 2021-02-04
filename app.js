var counter = 1;

var play = ["X", "O"];
var player1 = play[0];
var player2 = play[1];

$(".button1").click(function () {
  counter = 1;
});

$(".button2").click(function () {
  counter = 2;
});

$("td").on("click", function () {
  if (!$(this)[0].innerHTML) {
    if (counter % 2 !== 0) {
      $(this)[0].innerHTML = player1;
      counter++;
    } else {
      $(this)[0].innerHTML = player2;
      counter++;
    }
  }
  console.log($('tr')[0].children[0].innerHTML)
//   checkWin();   
});

// var matrix = [ Array.from($('tr')[0].children).forEach(function (element) { 
//     element = element.innerHTML 
//  }), Array.from($('tr')[1].children).forEach(function (element) { 
//     element = element.innerHTML 
//  }), Array.from($('tr')[2].children).forEach(function (element) { 
//     element = element.innerHTML 
//  })]

//  function checkWin(){
//      var p = 'X' || 'O'
//     for (let i = 0; i <= 2; i++) {
//         if (matrix[i][0] === p &&
//           matrix[i][1] === p &&
//           matrix[i][2] === p) {
//           console.log( 'WON ' + p);
//         }
//         if (matrix[0][i] === p &&
//           matrix[1][i] === p &&
//           matrix[2][i] === p) {
//           console.log('WON ' + p);
//         }
    
//       if (matrix[0][0] === p &&
//         matrix[1][1] === p &&
//         matrix[2][2] === p) {
//         console.log ('WON ' + p);
//       }
//       if (matrix[0][2] === p &&
//         matrix[1][1] === p &&
//         matrix[2][0] === p) {
//         console.log ('WON ' + p);
//       }
//       if (counter >= 9) console.log("draw");
//     }
//  }