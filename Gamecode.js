// start enter fullscreen
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

// lobby setting up code

let previousSelectedOption = 0;

function getPlayerCount() {
  let selectedOption = parseInt(document.getElementById("player-container").value);

  // Unhighlight all boxes when selected option is changed
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


let board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]

class colorPiecep1qsazxx {

}

// const pickUpCard = document.getElementById('draw-card');

function show() {
    const cards = document.getElementById('taking');
    cards.classList.add('active');
}

function dontShow() {
    const gone = document.getElementById('taking')
    gone.classList.remove('active')
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


// 3 map level stylings

function setUpMapOne(){
  console.log('map1')
  
}

function setUpMapTwo(){
  console.log('map2')
}

function setUpMapThree(){
  console.log('map3')
}

// let playerCount = document.getElementById('player-container').value

function confirmMatch(){
  if (playerCount.value == 0){
    console.log('Nope, not good enough')
  } else{
    if(mapType == undefined){
      console.log('nope')
    } else{
      setMatchPlayers(playerCount.value);
      setMatchMap();
      window.location.href = "index.html";
    }
    // setMatchPlayers(playerCount.value)
  }
}

function setMatchPlayers(count){
  console.log(count)
}

function setMatchMap(){
  // if (playerCount.value == 'undefined' ){
  //   console.log('eror')
  // } else{
  //   console.log('ss')
  // }
  if (mapType === 'mapOne'){
    setUpMapOne();
  } else if (mapType == 'mapTwo'){
    setUpMapTwo();
  } else if (mapType == 'mapThree'){
    setUpMapThree();
  } else{
    console.log('map not selected')
  }
}


