

//  Fullscreen Button Javascript
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


// Mute Button Javascript

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

// Start Page Javascript

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


// Lobby Javascript

// Player-Highlight

let previousSelectedOption = 0;
function getPlayerCount() {
  let selectedOption = parseInt(document.getElementById("player-container").value);
  if (selectedOption !== previousSelectedOption) {
    unhighlightAllPlayers();
  }
  if (selectedOption === 1) {
    highlightPlayerOne();
  } else if (selectedOption === 2) {
    highlightPlayerOne();
    highlightPlayerTwo();
  } else if (selectedOption === 3) {
    highlightPlayerOne();
    highlightPlayerTwo();
    highlightPlayerThree();
  } else if (selectedOption === 4) {
    highlightPlayerOne();
    highlightPlayerTwo();
    highlightPlayerThree();
    highlightPlayerFour();
  }
  previousSelectedOption = selectedOption;
}
function highlightPlayerOne() {
  document.getElementById("playerone").style.boxShadow = "0 0 20px yellow";
}
function highlightPlayerTwo() {
  document.getElementById("playertwo").style.boxShadow = "0 0 20px blue";
}
function highlightPlayerThree() {
  document.getElementById("playerthree").style.boxShadow = "0 0 20px red";
}
function highlightPlayerFour() {
  document.getElementById("playerfour").style.boxShadow = "0 0 20px green";
}
function unhighlightAllPlayers() {
  document.getElementById("playerone").style.boxShadow = "none";
  document.getElementById("playertwo").style.boxShadow = "none";
  document.getElementById("playerthree").style.boxShadow = "none";
  document.getElementById("playerfour").style.boxShadow = "none";
}

// Player-Map Verification

function setMatchPlayers(count){
  console.log(count)
}


let maps = document.querySelectorAll('.one-third');
let confirmButton = document.getElementById('confirmMatchButton')
let playerCount = document.getElementById('player-container')
let mapType;



maps.forEach(map => {
  map.addEventListener('click', function() {
    maps.forEach(mp => mp.classList.remove('java-one-third'));
    map.classList.add('java-one-third');
    mapType = map.id;
  });
});




function confirmMatch(){
  if (playerCount.value == 0){
    console.log('Nope, not good enough')
  } else{
    if(mapType == undefined){
      console.log('nope')
    } else{
      window.localStorage.setItem('playerCount',playerCount.value)
      window.localStorage.setItem('mapType',mapType)
      window.location.href = "index.html";
    }
  }
}

// let playerCountFinal = window.localStorage.getItem('playerCount')
// let mapTypeFinal = window.localStorage.getItem('mapType')
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰






// Game Code

function gameSetUp(){
  let players = window.localStorage.getItem('playerCount')
  let map = window.localStorage.getItem('mapType')


  console.log(players)
  console.log(map)

  setMatchMap(map)
}


function setUpMapOne(){
  document.getElementById("bodyone").style.cssText='background-image: url(images/backgroundBoardOne.png);';
  console.log('map1')
}

function setUpMapTwo(){
  document.getElementById("bodyone").style.cssText='background-image: url(images/background_flow.gif);';
console.log('map2')
}

function setUpMapThree(){
  document.getElementById("bodyone").style.cssText='background-image: url(images/top-view-skyscrapers-big-city-night-stock-great-116948797.jpg);';
console.log('map3')
}

function setMatchMap(mapTypeFinal){
  let condOne = mapTypeFinal === 'mapOne';
  let condTwo = mapTypeFinal === 'mapTwo';
  let condThree = mapTypeFinal === 'mapThree';

  if (condOne === true){
    setUpMapOne();
  } else if (condTwo === true){
    setUpMapTwo();
  } else if (condThree === true){
    setUpMapThree();
  } else{
    setUpMapOne();
  }
}




let board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43]

let pos = 0;

function pieceUpdate(newPosition){
  var gamePiece = document.createElement('div'); 
  gamePiece.style.backgroundColor = "red";
  gamePiece.style.height = "80%";
  gamePiece.style.width = "80%";
  document.getElementById(`${board[pos]}`).appendChild(gamePiece);
  return pos;
}



//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

function overlay(){
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

}

function removeOverlay(){
  const overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.remove();
  }
}

function closePopup(){
  const cardPopups = document.getElementsByClassName("cardpopup");
Array.from(cardPopups).forEach((popup) => {
  popup.style.visibility = "hidden";
})
removeOverlay()
closeglow()
}
function closeglow(){
  document.getElementById("greenglow1").style.visibility = "hidden";
  document.getElementById("greenglow2").style.visibility = "hidden";
  document.getElementById("greenglow3").style.visibility = "hidden";
  document.getElementById("greenglow4").style.visibility = "hidden";

  document.getElementById("redglow1").style.visibility = "hidden";
  document.getElementById("redglow2").style.visibility = "hidden";
  document.getElementById("redglow3").style.visibility = "hidden";
  document.getElementById("redglow4").style.visibility = "hidden";

  document.getElementById("yellowglow1").style.visibility = "hidden";
  document.getElementById("yellowglow2").style.visibility = "hidden";
  document.getElementById("yellowglow3").style.visibility = "hidden";
  document.getElementById("yellowglow4").style.visibility = "hidden";

  document.getElementById("blueglow1").style.visibility = "hidden";
  document.getElementById("blueglow2").style.visibility = "hidden";
  document.getElementById("blueglow3").style.visibility = "hidden";
  document.getElementById("blueglow4").style.visibility = "hidden";

}

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰



function card1(){
  document.getElementById("cardOne").style.visibility = "visible";

}
function card2(){
  document.getElementById("cardTwo").style.visibility = "visible";

}
function card3(){
  document.getElementById("cardThree").style.visibility = "visible";

}
function card4(){
  console.log('Displaying fourth card')
  document.getElementById("cardFour").style.visibility = "visible";
}

function card5(){
  console.log('Displaying fourth card')
  document.getElementById("cardFive").style.visibility = "visible";
}


function card7(){
  console.log('Displaying fourth card')
  document.getElementById("cardSeven").style.visibility = "visible";
}

function card8(){
  console.log('Displaying fourth card')
  document.getElementById("cardEight").style.visibility = "visible";
}


function card10(){
  console.log('Displaying fourth card')
  document.getElementById("cardEight").style.visibility = "visible";
}

function card11(){
  console.log('Displaying fourth card')
  document.getElementById("cardEight").style.visibility = "visible";
}



function card12(){
  console.log('Displaying fourth card')
  document.getElementById("cardEight").style.visibility = "visible";
}

function sorryCard (){
  console.log('Displaying fourth card')
  document.getElementById("sorryCard").style.visibility = "visible";
}




//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


// Card Drawing 

let players = ['green', 'blue', 'red', 'yellow']
let turn = 0;

function drawCard() {
  let currentPlayer = players[turn];
  turn++;
  if(turn == players.length) {
     turn = 0;
  }

  console.log(currentPlayer)

  overlay()
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  console.log(Math.floor(Math.random() * cards.length))
  random = Math.floor(Math.random() * cards.length);

  if (random === 0){
    card1()
  } else if (random === 1){
    card2()
  } else if (random === 2){
    card3()
  } else if (random === 3){
    card4()
  } else if (random === 4){
    card5()
  } else if (random === 5){
    card7()
  } else if (random === 6){
    card8()
  } else if (random === 7){
    card10()
  } else if (random === 8){
    card11()
  } else if (random === 9){
    card12()
  } else if (random == 10){
    sorryCard()
  }

  if (currentPlayer === 'green'){
    greenglow()
  }

  
  if (currentPlayer === 'blue'){
    blueglow()
  }

  
  if (currentPlayer === 'red'){
    redglow()
  }

  
  if (currentPlayer === 'yellow'){
    yellowglow()
  }
}

function greenglow(){
  console.log("Displaying green glow")
  document.getElementById("greenglow1").style.visibility = "visible";
  document.getElementById("greenglow2").style.visibility = "visible";
  document.getElementById("greenglow3").style.visibility = "visible";
  document.getElementById("greenglow4").style.visibility = "visible";

}



function redglow(){
  console.log("Displaying red glow")
  document.getElementById("redglow1").style.visibility = "visible";
  document.getElementById("redglow2").style.visibility = "visible";
  document.getElementById("redglow3").style.visibility = "visible";
  document.getElementById("redglow4").style.visibility = "visible";

}

function yellowglow(){
  console.log("Displaying yellow glow")
  document.getElementById("yellowglow1").style.visibility = "visible";
  document.getElementById("yellowglow2").style.visibility = "visible";
  document.getElementById("yellowglow3").style.visibility = "visible";
  document.getElementById("yellowglow4").style.visibility = "visible";

}

function blueglow(){
  console.log("Displaying blue glow")
  document.getElementById("blueglow1").style.visibility = "visible";
  document.getElementById("blueglow2").style.visibility = "visible";
  document.getElementById("blueglow3").style.visibility = "visible";
  document.getElementById("blueglow4").style.visibility = "visible";

}


function closeglow(){
  document.getElementById("greenglow1").style.visibility = "hidden";
  document.getElementById("greenglow2").style.visibility = "hidden";
  document.getElementById("greenglow3").style.visibility = "hidden";
  document.getElementById("greenglow4").style.visibility = "hidden";

  document.getElementById("redglow1").style.visibility = "hidden";
  document.getElementById("redglow2").style.visibility = "hidden";
  document.getElementById("redglow3").style.visibility = "hidden";
  document.getElementById("redglow4").style.visibility = "hidden";

  document.getElementById("yellowglow1").style.visibility = "hidden";
  document.getElementById("yellowglow2").style.visibility = "hidden";
  document.getElementById("yellowglow3").style.visibility = "hidden";
  document.getElementById("yellowglow4").style.visibility = "hidden";

  document.getElementById("blueglow1").style.visibility = "hidden";
  document.getElementById("blueglow2").style.visibility = "hidden";
  document.getElementById("blueglow3").style.visibility = "hidden";
  document.getElementById("blueglow4").style.visibility = "hidden";

}




//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

// Movement Functions

function moveForwardOne (){
  console.log('Move forward one')
  closePopup()
  // let currentMove = 1
  pieceUpdate(1)
  }

function startAPawn(){
  console.log('Start A pawn')
  closePopup()
  pieceUpdate(1)
}


function moveForwardTwo (){
  console.log('Move forward two')
  closePopup()
  pieceUpdate(1)
}

function moveForwardThree (){
  console.log('Move forward three')
  closePopup()
  pieceUpdate(1)
}

function moveBackwardThree (){
  console.log('Move backward three')
  closePopup()
  pieceUpdate(1)
}

function moveForwardFive (){
  console.log('Move forward three')
  closePopup()
  pieceUpdate(1)
}

function moveForwardSeven (){
  console.log('Move forward three')
  closePopup()
  pieceUpdate(1)
}

function splitSeven (){
  console.log('Move forward three')
  closePopup()
  pieceUpdate(1)
}

function moveForwardEight (){
  console.log('Move forward three')
  closePopup()
  pieceUpdate(1)
}

function moveForwardTwelve (){
  console.log('Move forward three')
  closePopup()
  pieceUpdate(1)
}

function moveForwardOne (){
  console.log('Move forward three')
  closePopup()
  pieceUpdate(1)
}

function moveForwardTen (){
  console.log('Move forward ten')
  closePopup()
  pieceUpdate(1)
}

function moveForwardFour (){
  console.log('Move forward three')
  closePopup()
  pieceUpdate(1)
}


function pawns(){
  console.log('Move forward three')
  closePopup()
  pieceUpdate(1)
}

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

// Coin System
let blueCoins = {
  coins: 0
};

let greenCoins = {
  coins: 0
};

let redCoins = {
  coins: 0
};

let yellowCoins = {
  coins: 0
};

function addCoin(player) {
  switch (player) {
    case 'blue':
      if (blueCoins.coins < 4) {
        blueCoins.coins++;
        console.log(`Blue player has ${blueCoins.coins} coins.`);
      }

      if (blueCoins.coins === 1){
        document.getElementById("cs1").style.backgroundColor="yellow"
        document.getElementById("cs1").style.opacity="100%"
      }

      if (blueCoins.coins === 2){
        document.getElementById("cs1").style.backgroundColor="yellow"
        document.getElementById("cs1").style.opacity="100%"

        document.getElementById("cs2").style.backgroundColor="yellow"
        document.getElementById("cs2").style.opacity="100%"
      }

      if (blueCoins.coins === 3){
        document.getElementById("cs1").style.backgroundColor="yellow"
        document.getElementById("cs1").style.opacity="100%"

        document.getElementById("cs2").style.backgroundColor="yellow"
        document.getElementById("cs2").style.opacity="100%"

        document.getElementById("cs3").style.backgroundColor="yellow"
        document.getElementById("cs3").style.opacity="100%"




      }
      if (blueCoins.coins === 4){
        document.getElementById("cs1").style.backgroundColor="yellow"
        document.getElementById("cs1").style.opacity="100%"

        document.getElementById("cs2").style.backgroundColor="yellow"
        document.getElementById("cs2").style.opacity="100%"

        document.getElementById("cs3").style.backgroundColor="yellow"
        document.getElementById("cs3").style.opacity="100%"


        document.getElementById("cs4").style.backgroundColor="yellow"
        document.getElementById("cs4").style.opacity="100%"






      }

      break;
    case 'green':
      if (greenCoins.coins < 4) {
        greenCoins.coins++;
        console.log(`Green player has ${greenCoins.coins} coins.`);
      }


      if (greenCoins.coins === 1){
        document.getElementById("cs9").style.backgroundColor="yellow"
        document.getElementById("cs9").style.opacity="100%"
      }

      if (greenCoins.coins === 2){
        document.getElementById("cs9").style.backgroundColor="yellow"
        document.getElementById("cs9").style.opacity="100%"

        document.getElementById("cs10").style.backgroundColor="yellow"
        document.getElementById("cs10").style.opacity="100%"
      }

      if (greenCoins.coins === 3){
        document.getElementById("cs9").style.backgroundColor="yellow"
        document.getElementById("cs9").style.opacity="100%"

        document.getElementById("cs10").style.backgroundColor="yellow"
        document.getElementById("cs10").style.opacity="100%"

        document.getElementById("cs11").style.backgroundColor="yellow"
        document.getElementById("cs11").style.opacity="100%"




      }
      if (greenCoins.coins === 4){
        document.getElementById("cs9").style.backgroundColor="yellow"
        document.getElementById("cs9").style.opacity="100%"

        document.getElementById("cs10").style.backgroundColor="yellow"
        document.getElementById("cs10").style.opacity="100%"

        document.getElementById("cs11").style.backgroundColor="yellow"
        document.getElementById("cs11").style.opacity="100%"


        document.getElementById("cs12").style.backgroundColor="yellow"
        document.getElementById("cs12").style.opacity="100%"
      }
      break;
    case 'red':
      if (redCoins.coins < 4) {
        redCoins.coins++;
        console.log(`Red player has ${redCoins.coins} coins.`);
      }


      if (redCoins.coins === 1){
        document.getElementById("cs5").style.backgroundColor="yellow"
        document.getElementById("cs5").style.opacity="100%"
      }

      if (redCoins.coins === 2){
        document.getElementById("cs5").style.backgroundColor="yellow"
        document.getElementById("cs5").style.opacity="100%"

        document.getElementById("cs6").style.backgroundColor="yellow"
        document.getElementById("cs6").style.opacity="100%"
      }

      if (redCoins.coins === 3){
        document.getElementById("cs5").style.backgroundColor="yellow"
        document.getElementById("cs5").style.opacity="100%"

        document.getElementById("cs6").style.backgroundColor="yellow"
        document.getElementById("cs6").style.opacity="100%"

        document.getElementById("cs7").style.backgroundColor="yellow"
        document.getElementById("cs7").style.opacity="100%"




      }
      if (redCoins.coins === 4){
        document.getElementById("cs5").style.backgroundColor="yellow"
        document.getElementById("cs5").style.opacity="100%"

        document.getElementById("cs6").style.backgroundColor="yellow"
        document.getElementById("cs6").style.opacity="100%"

        document.getElementById("cs7").style.backgroundColor="yellow"
        document.getElementById("cs7").style.opacity="100%"


        document.getElementById("cs8").style.backgroundColor="yellow"
        document.getElementById("cs8").style.opacity="100%"




      }






      break;
    case 'yellow':
      if (yellowCoins.coins < 4) {
        yellowCoins.coins++;
        console.log(`Yellow player has ${yellowCoins.coins} coins.`);
      }

      
      if (yellowCoins.coins === 1){
        document.getElementById("cs13").style.backgroundColor="yellow"
        document.getElementById("cs13").style.opacity="100%"
      }

      if (yellowCoins.coins === 2){
        document.getElementById("cs13").style.backgroundColor="yellow"
        document.getElementById("cs13").style.opacity="100%"

        document.getElementById("cs14").style.backgroundColor="yellow"
        document.getElementById("cs14").style.opacity="100%"
      }

      if (yellowCoins.coins === 3){
        document.getElementById("cs13").style.backgroundColor="yellow"
        document.getElementById("cs13").style.opacity="100%"

        document.getElementById("cs14").style.backgroundColor="yellow"
        document.getElementById("cs14").style.opacity="100%"

        document.getElementById("cs15").style.backgroundColor="yellow"
        document.getElementById("cs15").style.opacity="100%"




      }
      if (yellowCoins.coins === 4){
        document.getElementById("cs13").style.backgroundColor="yellow"
        document.getElementById("cs13").style.opacity="100%"

        document.getElementById("cs14").style.backgroundColor="yellow"
        document.getElementById("cs14").style.opacity="100%"

        document.getElementById("cs15").style.backgroundColor="yellow"
        document.getElementById("cs15").style.opacity="100%"


        document.getElementById("cs16").style.backgroundColor="yellow"
        document.getElementById("cs16").style.opacity="100%"
      }
      break;
    default:
      break;
  }
}

// addCoin('blue')
// addCoin('red')
// addCoin('yellow')
// addCoin('green')
