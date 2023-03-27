

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

function setMatchMap(){

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


function setUpMapOne(){
    document.getElementById("bodyone").style.cssText='background-image: url(images/backgroundBoardOne.png);';
 
}

function setUpMapTwo(){
  console.log('map2')
}

function setUpMapThree(){
  console.log('map3')
}


function confirmMatch(){
  if (playerCount.value == 0){
    console.log('Nope, not good enough')
  } else{
    if(mapType == undefined){
      console.log('nope')
    } else{
      window.localStorage.setItem('playerCount', playerCount.value)
      window.localStorage.setItem('mapType', mapType)
      // console.log(playerCount.value)
      // console.log(mapType)
      window.location.href = "index.html";
    }
  }
}
//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

// Game Code


// function pieceUpdate(newPosition){
//   var gamePiece = document.createElement('div'); 
//   gamePiece.style.backgroundColor = "red";
//   gamePiece.style.height = "80%";
//   gamePiece.style.width = "80%";
//   document.getElementById(`${board[pos]+4}`).appendChild(gamePiece);
//   return pos;
// }


function gameSetUp(){
  let players = window.localStorage.getItem('playerCount')
  let map = window.localStorage.getItem('mapType')
  console.log(players)
  console.log(map)

  setMatchMap(map)
  getNextPlayerColor()
  
}
music.volume = '.5'

function setUpMapOne(){
  document.getElementById("bodyone").style.cssText='background-image: url(images/backgroundBoardOne.png);';
  let music =document.getElementById('music')
  music.src="audio/Smoove Groove.mp3"
  const elements = document.querySelectorAll('.normal');
  // for (let i = 0; i < elements.length; i++) {
  //   elements[i].style.backgroundImage = 'url(images/red-blood-cell-count.jpg';
  // }
  music.play()
  console.log('map1')
}

function setUpMapTwo(){
  document.getElementById("bodyone").style.cssText='background-image: url(images/mc.png);';
  let music =document.getElementById('music')
  music.src="audio/Mice_On_Venus.mp3"
  const elements = document.querySelectorAll('.normal');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundImage = 'url(images/iron-block.png';
  }
  let eventElements = document.querySelectorAll('.event')
  for (let i = 0; i < eventElements.length; i++) {
    eventElements[i].style.backgroundImage = 'url(images/event-space.png),url(images/gold-block.png)';
  }
  let shopIcons = document.querySelectorAll('.shop-space img')
  for (let i = 0; i < shopIcons.length; i++) {
    shopIcons[i].src = 'images/villager.png';
    shopIcons[i].style.width = '80%';

  }
  let arrowSpaces = document.querySelectorAll('.diretional-arrows')
  for (let i = 0; i < arrowSpaces.length; i++) {
    arrowSpaces[i].style.backgroundImage = 'url(images/left-arrow-svgrepo-com.svg), url(images/iron-block.png)';
  }
  let storeSpaces = document.querySelectorAll('.store-space')
  for (let i = 0; i < storeSpaces.length; i++) {
    storeSpaces[i].style.backgroundImage = 'url(images/emerald.png), url(images/iron-block.png)';
  }

  // document.getElementById('gameBoard').style.backgroundImage = 'url('images/doom-pit.jpg')'




  music.play()
  console.log('map2')
}

function setUpMapThree(){
  document.getElementById("bodyone").style.cssText='background-image: url(images/doom.jpg);';
  let music =document.getElementById('music')
  music.src="audio/watermarked_Bobo_Renthlei_Follow_My_Heart_instrumental_2_26.mp3"
  const elements = document.querySelectorAll('.normal');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundImage = 'url(images/y7fiwdoy02wl.png';
  }
  let eventElements = document.querySelectorAll('.event')
  for (let i = 0; i < eventElements.length; i++) {
    eventElements[i].style.backgroundColor = 'maroon';
  }
  let shopIcons = document.querySelectorAll('.shop-space img')
  for (let i = 0; i < shopIcons.length; i++) {
    shopIcons[i].src = 'images/crate-doom.png';
  }
  let arrowSpaces = document.querySelectorAll('.diretional-arrows')
  for (let i = 0; i < arrowSpaces.length; i++) {
    arrowSpaces[i].style.backgroundImage = 'url(images/left-arrow-svgrepo-com.svg), url(images/y7fiwdoy02wl.png)';
  }
  let storeSpaces = document.querySelectorAll('.store-space')
  for (let i = 0; i < storeSpaces.length; i++) {
    storeSpaces[i].style.backgroundImage = 'url(images/glowing-sigil.png), url(images/y7fiwdoy02wl.png)';
  }
  music.play()
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



 //▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰





let board = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43']

let redPieces = [15,15,15];
let bluePieces =[37,37,37];
let yellowPieces =[26,26,26];
let greenPieces =[4,4,4];

let redItem = 'none';
let blueItem = 'none';
let greenItem = 'none';
let yellowItem = 'none';





// let redStart = 3;
// let blueStart =3;
// let yellowStart =3;
// let greenStart =3;

const home = {
  redHome: 0,
  blueHome: 0,
  yellowHome: 0,
  greenHome: 0
};

let messageSFX = new Audio('audio/button-124476.mp3')
let textBox = document.getElementById('gameMessages')


// let playerPosition = 10;
// const space = document.getElementById(playerPosition.toString());


// const handler = {
//   set(target, property, value) {
//     const oldValue = target[property];
//     target[property] = value;
//     if (value === 3) {
//       console.log(`${property} has a value of 3`);
//       playerWin(property, value);
//     }
//     return true;
//   }
// };

// const proxy = new Proxy(home, handler);

// function playerWin(property, value) {
//   console.log(`${property} has won because they reached ${value} pawns first! End Game`);
// }






//  (5,13)
function updatePiece(oldPosition,newPosition) {
  
// let arrays = [redPieces, bluePieces, yellowPieces, greenPieces];

  if (currentColorTurn == 'green'){
    greenPieces[Number(pawnNum.id.match(/\d+/)[0])] = newPosition;
  }else if (currentColorTurn == 'blue'){
    bluePieces[Number(pawnNum.id.match(/\d+/)[0])] = newPosition;
  }else if (currentColorTurn == 'red'){
    redPieces[Number(pawnNum.id.match(/\d+/)[0])] = newPosition;
  }else if (currentColorTurn == 'yellow'){
    yellowPieces[Number(pawnNum.id.match(/\d+/)[0])] = newPosition;
  }


  // let allPieces = redPieces.concat(bluePieces, yellowPieces, greenPieces);

  // for (let i = 0; i < allPieces.length; i++) {
  //   let currentItem = allPieces[i];
  //   for (let j = i + 1; j < allPieces.length; j++) {
  //     let compareItem = allPieces[j];
  //     if (currentItem === compareItem) {
  //       let index1 = i;
  //       let index2 = j;
  //       let sameArray = false;
  //       for (let k = 0; k < 4; k++) {
  //         if (index1 < k * 3 + 3 && index2 < k * 3 + 3 && index1 >= k * 3 && index2 >= k * 3) {
  //           sameArray = true;
  //           break;
  //         }
  //       }
  //       if (sameArray) {
  //         console.log(allPieces)
  //         // console.log(`Found a match in the same array  at index ${i} and ${j}`);
          
  //         console.log(newPosition)
  //         if (newPosition === currentItem || newPosition === compareItem){
  //           console.log('The same array has been detected')
  //           newPosition += 1;
  //         }
  //       } else {
  //         let redArr = [ allPieces[0],allPieces[1],allPieces[2]]
  //         let blueArr = [ allPieces[3],allPieces[4],allPieces[5]]
  //         let yellowArr = [ allPieces[6],allPieces[7],allPieces[8]]
  //         let greenArr = [ allPieces[9],allPieces[10],allPieces[11]]
  //         console.log('start')
  //         console.log(greenArr)
  //         console.log(greenPieces)
  //         console.log('end')
  //         console.log(blueArr)
  //         console.log(redArr)
  //         console.log(yellowArr)
  //         console.log(allPieces)
  //         console.log(`Found a match between different arrays at index ${i} and ${j}`);
  //         if (0<=i<=4){
  //           console.log('greenarray')
  //          }
  //         else if (3<=i<=8){
  //           console.log('greenarray')
  //         } else if (0<=i<=4){
  //           console.log('greenarray')
  //         } else if (0<=i<=4){
  //           console.log('greenarray')
  //         }



          
  //       }
  //     }
  //   }
  // }


let arrays = [redPieces, bluePieces, yellowPieces, greenPieces];

for (let i = 0; i < arrays.length; i++) {
  let currentArray = arrays[i];
  for (let j = 0; j < currentArray.length; j++) {
    let currentItem = currentArray[j];
    for (let k = 0; k < currentArray.length; k++) {
      if (k !== j) {
        let compareItem = currentArray[k];
        if (currentItem === compareItem) {
          console.log(`Found a match within ${arrays[i]} array at index ${j} and ${k}`);
          if (newPosition === currentItem || newPosition === compareItem){
            console.log('The same array has been detected')
            newPosition += 1;
}
          // perform action for matched items within same array
        }
        for (let l = i + 1; l < arrays.length; l++) {
          let compareArray = arrays[l];
          for (let m = 0; m < compareArray.length; m++) {
            let compareItem = compareArray[m];
            if (currentItem === compareItem) {
              console.log(`Found a match between ${arrays[i]} and ${arrays[l]} at index ${j} and ${m}`);
              console.log((arrays[l])[m])
            








              // perform action for matched items between different arrays
              if (newPosition === currentItem || newPosition === compareItem){
                          console.log('The same array has been detected')
                          newPosition += 1;
                          // let replacedPieceArr;
                          // let replacerPieceArr;
                          // let x; 
                          // let y;
                          // if(arrays[l] === greenPieces){
                          //   replacedPieceArr = greenPieces
                          //   x = 4
            
                          // } else if(arrays[l] === bluePieces){
                          //   replacedPieceArr = greenPieces
                          //   x = 37
                          // } else if(arrays[l] === redPieces){
                          //   replacedPieceArr = greenPieces
                          //   x = 26
                          // } else if(arrays[l] === yellowPieces){
                          //   replacedPieceArr = greenPieces
                          //   x = 15
                          // }
                          // if(arrays[i] === greenPieces){
                          //   replacerPieceArr = greenPieces
                          //   y = 4
                          // } else if(arrays[i] === bluePieces){
                          //   replacerPieceArr = greenPieces
                          //   y = 37
                          // } else if(arrays[i] === redPieces){
                          //   replacerPieceArr = greenPieces
                          //   y = 26
                          // } else if(arrays[i] === yellowPieces){
                          //   replacerPieceArr = greenPieces
                          //   y = 15
                          // }
                          // console.log('Replaced array is '+replacedPieceArr)
                          // console.log('value of x is '+x)
                          // console.log('Replaced array is '+replacerPieceArr)
                          // console.log('value of x is '+y)
            
              }
              if(newPosition === (arrays[i])[j]){
                console.log((arrays[i]))
                console.log(newPosition)
                // compareArray[m] = 0
                // currentArray[k] = 600
                if (currentArray === greenPieces){
                  console.log('greenp'+m)
                } else if (currentArray === bluePieces){
                  console.log('bluep'+m)
                } else if (currentArray === redPieces){
                  console.log('redp'+m)
                } else if (currentArray === yellowPieces){
                  console.log('yellowp'+m)
                }
                newPosition+=1
                
              }
            }
          }
        }
      }
    }
  }
}



  
  if (currentColorTurn == 'green'){
    greenPieces[Number(pawnNum.id.match(/\d+/)[0])] = newPosition;
  }else if (currentColorTurn == 'blue'){
    bluePieces[Number(pawnNum.id.match(/\d+/)[0])] = newPosition;
  }else if (currentColorTurn == 'red'){
    redPieces[Number(pawnNum.id.match(/\d+/)[0])] = newPosition;
  }else if (currentColorTurn == 'yellow'){
    yellowPieces[Number(pawnNum.id.match(/\d+/)[0])] = newPosition;
  }
  let pos = document.getElementById(board[newPosition]);
  let oldpos = document.getElementById(board[oldPosition])
  if(oldpos.hasChildNodes()===true){
    for (let i = oldpos.children.length - 1; i >= 0; i--) {
      oldpos.children[i].remove();
    }
  }
  
  // checkForHome(oldPosition,newPosition)

  var gamePiece = document.createElement('div'); 
  gamePiece.classList.add(String(currentColorTurn)+'-pawn');
  gamePiece.classList.add('pawn');
  gamePiece.setAttribute('id', pawnNum.id);
  gamePiece.style.backgroundColor = String(currentColorTurn);
  gamePiece.style.height = "80%";
  gamePiece.style.width = "80%";
  gamePiece.style.borderRadius= '25px';
  gamePiece.style.border= '2px solid black';
  

  // checkForHome(oldPosition,newPosition)
  if (checkForHome(oldPosition,newPosition)!=undefined){
    return
  } 




  pos.appendChild(gamePiece);
  if (newPosition === 0 || newPosition === 6 || newPosition === 11 || newPosition === 17 || newPosition === 22 || newPosition === 28 || newPosition === 33 || newPosition === 39){
    eventspacepopup()
  } else if(newPosition === 1 || newPosition === 2 || newPosition === 3 || newPosition === 12 || newPosition === 13 || newPosition === 14 || newPosition === 23 || newPosition === 24 || newPosition === 25 || newPosition === 34 || newPosition === 35 || newPosition === 36) {
    store()
  } else{
    if (cardDraws === 0){
      getNextPlayerColor()
      cardDraws = 1;
    }
    playerMove = 0;
  }
  // if (cardDraws === 0){
  //   getNextPlayerColor()
  //   cardDraws = 1;
  // }
  // playerMove = 0;
}


function checkForHome(oldPosition, newPosition){
  let homePosition;

  let placeToMoveTo;
  console.log('the new position is : ', newPosition) 
  console.log(oldPosition)
  if(currentColorTurn === 'green' && ((oldPosition>=35 && oldPosition<=43) || oldPosition<4) && newPosition >=4){
    homePosition = newPosition-3
  } else if(currentColorTurn === 'blue' && (oldPosition>=25 && oldPosition<37) && newPosition >=37){
    homePosition = newPosition-37
  } else if(currentColorTurn === 'red' && (oldPosition>=3 && oldPosition<15) && newPosition >=15){
    homePosition = newPosition-15
  } else if(currentColorTurn === 'yellow' && (oldPosition>=14 && oldPosition<26) && newPosition >=26){
    homePosition = newPosition-26
  } 
  if(homePosition > 0 && homePosition < 4){
    placeToMoveTo = String(currentColorTurn)+'HomeWalk'+String(homePosition)
    if (currentColorTurn==='green'){
      greenPieces[Number(pawnNum.id.match(/\d+/)[0])] = placeToMoveTo
    } else if(currentColorTurn ==='blue'){
      bluePieces[Number(pawnNum.id.match(/\d+/)[0])] = placeToMoveTo
    } else if(currentColorTurn ==='red'){
      redPieces[Number(pawnNum.id.match(/\d+/)[0])] = placeToMoveTo
    } else if(currentColorTurn ==='yellow'){
      yellowPieces[Number(pawnNum.id.match(/\d+/)[0])] = placeToMoveTo
    }
    console.log(placeToMoveTo)
    // greenPieces[Number(pawnNum.id.match(/\d+/)[0])] = placeToMoveTo
    var gamePiece = document.createElement('div'); 
    gamePiece.classList.add(String(currentColorTurn)+'-pawn');
    gamePiece.classList.add('pawn');
    gamePiece.setAttribute('id', pawnNum.id);
    gamePiece.style.backgroundColor = String(currentColorTurn);
    gamePiece.style.height = "80%";
    gamePiece.style.width = "80%";
    gamePiece.style.borderRadius= '25px';
    gamePiece.style.border= '2px solid black';
  
    let x = document.getElementById(placeToMoveTo)
    console.log(gamePiece)
    console.log(x)
    x.appendChild(gamePiece)
  } else if(homePosition > 3){
    console.log(homePosition)
    placeToMoveTo = String(currentColorTurn)+'Home'+String(Number(pawnNum.id.match(/\d+/)[0]))
    var gamePiece = document.createElement('div'); 
  gamePiece.classList.add(String(currentColorTurn)+'-pawn');
  gamePiece.classList.add('pawn');
  gamePiece.setAttribute('id', pawnNum.id);
  gamePiece.style.backgroundColor = String(currentColorTurn);
  gamePiece.style.height = "80%";
  gamePiece.style.width = "80%";
  gamePiece.style.borderRadius= '25px';
  gamePiece.style.border= '2px solid black';
  let x = document.getElementById(placeToMoveTo)
  x.appendChild(gamePiece)
  if (currentColorTurn==='green'){
    home.greenHome +=1
  } else if(currentColorTurn ==='blue'){
    home.blueHome +=1 
  } else if(currentColorTurn ==='red'){
   home.redHome +=1
  } else if(currentColorTurn ==='yellow'){
   home.yellowHome +=1
  }
  textBox.innerHTML = String(currentColorTurn)+' has gotten a pawn to their home!'
  } else{
    console.log('no home detected')
  }
  if (home.greenHome === 3){
    startConfetti()
    console.log('Winner!!!!!!!!!')
    document.getElementById('victory').style.visibility = 'visible'
    document.getElementById('victory').querySelector('h1').innerHTML = 'Green Is The Final Winner!'
    document.getElementById('victory').querySelector('h1').style.color = 'green'
    document.getElementById('victory').style.borderColor = 'green'
    let winSFX = new Audio('audio/piglevelwin2mp3-14800.mp3')
    winSFX.play()
    let cheerSFX = new Audio('audio/crowd-cheer-ii-6263.mp3')
    cheerSFX.play()
    return
  } else if (home.blueHome === 3){
    startConfetti()
    console.log('Winner!!!!!!!!!')
    document.getElementById('victory').style.visibility = 'visible'
    document.getElementById('victory').querySelector('h1').innerHTML = 'Blue Is The Final Winner!'
    document.getElementById('victory').querySelector('h1').style.color = 'blue'
    document.getElementById('victory').style.borderColor = 'blue'
    let winSFX = new Audio('audio/piglevelwin2mp3-14800.mp3')
    winSFX.play()
    let cheerSFX = new Audio('audio/crowd-cheer-ii-6263.mp3')
    cheerSFX.play()
    return
  } else if (home.redHome === 3){
    startConfetti()
    console.log('Winner!!!!!!!!!')
    document.getElementById('victory').style.visibility = 'visible'
    document.getElementById('victory').querySelector('h1').innerHTML = 'Red Is The Final Winner!'
    document.getElementById('victory').querySelector('h1').style.color = 'red'
    document.getElementById('victory').style.borderColor = 'red'
    let winSFX = new Audio('audio/piglevelwin2mp3-14800.mp3')
    winSFX.play()
    let cheerSFX = new Audio('audio/crowd-cheer-ii-6263.mp3')
    cheerSFX.play()
    return
  } else if (home.yellowHome === 3){
    startConfetti()
    console.log('Winner!!!!!!!!!')
    document.getElementById('victory').style.visibility = 'visible'
    document.getElementById('victory').querySelector('h1').innerHTML = 'Yellow Is The Final Winner!'
    document.getElementById('victory').querySelector('h1').style.color = 'yellow'
    document.getElementById('victory').style.borderColor = 'yellow'
    let winSFX = new Audio('audio/piglevelwin2mp3-14800.mp3')
    winSFX.play()
    let cheerSFX = new Audio('audio/crowd-cheer-ii-6263.mp3')
    cheerSFX.play()
    return
  } else {
    console.log('No player has Won Yet')
  }
  console.log(placeToMoveTo)
  
  return  placeToMoveTo
}


// TURN SYSTEM

const turnOrder = ["green", "blue", "red", "yellow"];
let currentTurn = 0;


let currentColorTurn;

function getNextPlayerColor() {
  const currentPlayerColor = turnOrder[currentTurn];
  currentTurn++;
  if (currentTurn >= turnOrder.length) {
    currentTurn = 0;
  }
  textBox.style.color = String(currentPlayerColor)
  textBox.innerHTML="It is "+String(currentPlayerColor)+"'s turn."

  
  
  document.getElementById('gameBoard').style.boxShadow = '0 0 60px ' +String(currentPlayerColor)

  if (currentPlayerColor == 'green'){
    console.log(currentPlayerColor)
    greenTurn();
    console.log('g')
  }else if (currentPlayerColor == 'blue'){
    console.log(currentPlayerColor)
    blueTurn();
    console.log('b')
  }else if (currentPlayerColor == 'red'){
    console.log(currentPlayerColor)
    redTurn();
    console.log('r')
  }else if (currentPlayerColor == 'yellow'){
    console.log(currentPlayerColor)
    yellowTurn();
    console.log('y')
  }
  currentColorTurn = currentPlayerColor;

  let pawnButton = document.getElementById('pawnButton')
  let itemButton = document.getElementById('itemButton')
  pawnButton.style.backgroundColor = String(currentColorTurn);
  itemButton.style.backgroundColor = String(currentColorTurn);
  selectPawnToMove()
  return currentColorTurn;

};


let pawnNum;

function selectPawnToMove(){
  pawnNum = undefined;
  let Pawns = document.querySelectorAll('.'+currentColorTurn+'-pawn');
  let allPawns = document.querySelectorAll('.pawn');
  allPawns.forEach(pawn => {
    pawn.removeEventListener('click', pawnSelection);
  });
  Pawns.forEach(pawn => {
    pawn.addEventListener('click', pawnSelection);
  });
}

function pawnSelection() {
  let Pawns = document.querySelectorAll('.'+currentColorTurn+'-pawn');
  Pawns.forEach(mp => mp.classList.remove('java-one-third'));
  this.classList.add('java-one-third');
  pawnNum = this;
}


// let redPieces = [16,16,16];
// let bluePieces =[38,38,38];
// let yellowPieces =[27,27,27];
// let greenPieces =[5,5,5];



// Checking if the pawn is within the possition of the store down below and other information


function confirmPawnToMove(){
    if (playerMove!=0 && pawnNum != undefined){
      let pawnMoved = Number(pawnNum.id.match(/\d+/)[0])
      // let pawnPos = window[currentColorTurn]+'Pieces'
      let oldPos;
      if (currentColorTurn == 'green'){
        console.log(currentColorTurn)
        oldPos = greenPieces[pawnMoved];
        console.log(oldPos)
      }else if (currentColorTurn == 'blue'){
        console.log(currentColorTurn)
        oldPos = bluePieces[pawnMoved];
      }else if (currentColorTurn == 'red'){
        oldPos = redPieces[pawnMoved];
      }else if (currentColorTurn == 'yellow'){
        oldPos = yellowPieces[pawnMoved];
      }
      console.log('s')
      console.log(oldPos)
      console.log(playerMove)
      if(isNaN(oldPos)){
        if (oldPos === 'home'){
          messageSFX.play()
          textBox.innerHTML='You cannot move a pawn from inside your home!'
        }
        let homeValue = playerMove + Number(oldPos.match(/\d+/)[0])
        var gamePiece = document.createElement('div'); 
          gamePiece.classList.add(String(currentColorTurn)+'-pawn');
          gamePiece.classList.add('pawn');
          gamePiece.setAttribute('id', pawnNum.id);
          gamePiece.style.backgroundColor = String(currentColorTurn);
          gamePiece.style.height = "80%";
          gamePiece.style.width = "80%";
          gamePiece.style.borderRadius= '25px';
          gamePiece.style.border= '2px solid black';
        if(homeValue <= 3 && homeValue > 0){
          let placeToMoveTo = String(currentColorTurn)+'HomeWalk'+String(homeValue)
          console.log(placeToMoveTo)
          if (currentColorTurn==='green'){
            greenPieces[Number(pawnNum.id.match(/\d+/)[0])] = placeToMoveTo
          } else if(currentColorTurn ==='blue'){
            bluePieces[Number(pawnNum.id.match(/\d+/)[0])] = placeToMoveTo
          } else if(currentColorTurn ==='red'){
            redPieces[Number(pawnNum.id.match(/\d+/)[0])] = placeToMoveTo
          } else if(currentColorTurn ==='yellow'){
            yellowPieces[Number(pawnNum.id.match(/\d+/)[0])] = placeToMoveTo
          }
          let oldPosDiv = document.getElementById(String(oldPos))
          if(oldPosDiv.hasChildNodes()===true){
            for (let i = oldPosDiv.children.length - 1; i >= 0; i--) {
              oldPosDiv.children[i].remove();
            }
          }
          let x = document.getElementById(placeToMoveTo)
          x.appendChild(gamePiece)
        } else if(homeValue>3){
          let placeToMoveTo = String(currentColorTurn)+'Home'+String(Number(pawnNum.id.match(/\d+/)[0]))
          if (currentColorTurn==='green'){
            greenPieces[Number(pawnNum.id.match(/\d+/)[0])] = 'home'
          } else if(currentColorTurn ==='blue'){
            bluePieces[Number(pawnNum.id.match(/\d+/)[0])] = 'home'
          } else if(currentColorTurn ==='red'){
            redPieces[Number(pawnNum.id.match(/\d+/)[0])] = 'home'
          } else if(currentColorTurn ==='yellow'){
            yellowPieces[Number(pawnNum.id.match(/\d+/)[0])] = 'home'
          }
          let oldPosDiv = document.getElementById(String(oldPos))
          if(oldPosDiv.hasChildNodes()===true){
            for (let i = oldPosDiv.children.length - 1; i >= 0; i--) {
              oldPosDiv.children[i].remove();
            }
          }
          
          let x = document.getElementById(placeToMoveTo)
          x.appendChild(gamePiece)

          if (currentColorTurn==='green'){
            home.greenHome +=1
          } else if(currentColorTurn ==='blue'){
            home.blueHome +=1 
          } else if(currentColorTurn ==='red'){
           home.redHome +=1
          } else if(currentColorTurn ==='yellow'){
           home.yellowHome +=1
          }
          if (home.greenHome === 3){
            startConfetti()
            console.log('Winner!!!!!!!!!')
            document.getElementById('victory').style.visibility = 'visible'
            document.getElementById('victory').querySelector('h1').innerHTML = 'Green Is The Final Winner!'
            document.getElementById('victory').querySelector('h1').style.color = 'green'
            document.getElementById('victory').style.borderColor = 'green'
            let winSFX = new Audio('audio/piglevelwin2mp3-14800.mp3')
            winSFX.play()
            let cheerSFX = new Audio('audio/crowd-cheer-ii-6263.mp3')
            cheerSFX.play()
            return
          } else if (home.blueHome === 3){
            startConfetti()
            console.log('Winner!!!!!!!!!')
            document.getElementById('victory').style.visibility = 'visible'
            document.getElementById('victory').querySelector('h1').innerHTML = 'Blue Is The Final Winner!'
            document.getElementById('victory').querySelector('h1').style.color = 'blue'
            document.getElementById('victory').style.borderColor = 'blue'
            let winSFX = new Audio('audio/piglevelwin2mp3-14800.mp3')
            winSFX.play()
            let cheerSFX = new Audio('audio/crowd-cheer-ii-6263.mp3')
            cheerSFX.play()
            return
          } else if (home.redHome === 3){
            startConfetti()
            console.log('Winner!!!!!!!!!')
            document.getElementById('victory').style.visibility = 'visible'
            document.getElementById('victory').querySelector('h1').innerHTML = 'Red Is The Final Winner!'
            document.getElementById('victory').querySelector('h1').style.color = 'red'
            document.getElementById('victory').style.borderColor = 'red'
            let winSFX = new Audio('audio/piglevelwin2mp3-14800.mp3')
            winSFX.play()
            let cheerSFX = new Audio('audio/crowd-cheer-ii-6263.mp3')
            cheerSFX.play()
            return
          } else if (home.yellowHome === 3){
            startConfetti()
            console.log('Winner!!!!!!!!!')
            document.getElementById('victory').style.visibility = 'visible'
            document.getElementById('victory').querySelector('h1').innerHTML = 'Yellow Is The Final Winner!'
            document.getElementById('victory').querySelector('h1').style.color = 'yellow'
            document.getElementById('victory').style.borderColor = 'yellow'
            let winSFX = new Audio('audio/piglevelwin2mp3-14800.mp3')
            winSFX.play()
            let cheerSFX = new Audio('audio/crowd-cheer-ii-6263.mp3')
            cheerSFX.play()
            return
          } else {
            console.log('No player has Won Yet')
          }
          textBox.innerHTML = String(currentColorTurn)+' has gotten a pawn to their home!'
        
          if (cardDraws === 0){
            getNextPlayerColor()
            cardDraws = 1;
          }
          playerMove = 0;
        } else if (homeValue<0){
            if (currentColorTurn==='green'){
              greenHome 
            } else if(currentColorTurn ==='blue'){
              bluePieces[Number(pawnNum.id.match(/\d+/)[0])] = 'home'
            } else if(currentColorTurn ==='red'){
              redPieces[Number(pawnNum.id.match(/\d+/)[0])] = 'home'
            } else if(currentColorTurn ==='yellow'){
              yellowPieces[Number(pawnNum.id.match(/\d+/)[0])] = 'home'
            }
        }


        
        console.log('The current Pawns position is not a set number so it must be in the home walkway; ending turn')
        return
        getNextPlayerColor()
        return
      }

      let newPosition = oldPos + playerMove;
        if (newPosition<0){
          newPosition +=44;
        } else if (newPosition>43){
          newPosition -=44 ;
        }
        if(isNaN(greenPieces[Number(pawnNum.id.match(/\d+/)[0])])){
          console.log('HomeWalkway Dectected')
        }
        if (String(pawnNum.parentElement.id) === String(currentColorTurn)+'Start'+Number(pawnNum.id.match(/\d+/)[0])){
          pawnNum.remove();
        } else{
          console.log('turn end')
        }
        updatePiece(oldPos,newPosition)
        selectPawnToMove()
        // playerMove = 1
    } else if(playerMove!=0 && pawnNum === undefined){
      messageSFX.play()
      textBox.innerHTML='You need to select a pawn to move!'
    } else if(playerMove===0 && pawnNum != undefined && swapPawnTwo === undefined){
      textBox.innerHTML='You need to draw a card to move!'
      messageSFX.play()
    } else if(swapPawnTwo != undefined && pawnNum != undefined && swapColor != undefined){
      console.log('running swap places')
      if (!isNaN(pawnNum.parentElement.id)){
        let x;
        let y;
        let swapColorArr;
        let currColorArr;
        var gamePieceOne = document.createElement('div'); 
          gamePieceOne.style.backgroundColor = String(currentColorTurn);
          gamePieceOne.classList.add(String(currentColorTurn)+'-pawn');
          gamePieceOne.classList.add('pawn');
          gamePieceOne.setAttribute('id', pawnNum.id);
          gamePieceOne.style.height = "80%";
          gamePieceOne.style.width = "80%";
          gamePieceOne.style.borderRadius= '25px';
          gamePieceOne.style.border= '2px solid black';
        var gamePieceTwo = document.createElement('div'); 
          gamePieceTwo.classList.add('pawn');
          gamePieceTwo.style.height = "80%";
          gamePieceTwo.style.width = "80%";
          gamePieceTwo.style.borderRadius= '25px';
          gamePieceTwo.style.border= '2px solid black';
        if(swapColor === 'green'){
          x = greenPieces[swapPawnTwo]
          swapColorArr = greenPieces
          gamePieceTwo.classList.add('green-pawn');
          gamePieceTwo.setAttribute('id', 'greenp'+String(swapPawnTwo));
          gamePieceTwo.style.backgroundColor = 'green';
        } else if(swapColor === 'blue'){
          x = bluePieces[swapPawnTwo]
          swapColorArr = bluePieces
          gamePieceTwo.classList.add('blue-pawn');
          gamePieceTwo.setAttribute('id', 'bluep'+String(swapPawnTwo));
          gamePieceTwo.style.backgroundColor = 'blue';
        } else if(swapColor === 'red'){
          x = redPieces[swapPawnTwo]
          swapColorArr = redPieces
          gamePieceTwo.classList.add('red-pawn');
          gamePieceTwo.setAttribute('id', 'redp'+String(swapPawnTwo));
          gamePieceTwo.style.backgroundColor = 'red';
        } else if(swapColor === 'yellow'){
          x = yellowPieces[swapPawnTwo]
          swapColorArr = yellowPieces
          gamePieceTwo.classList.add('yellow-pawn');
          gamePieceTwo.setAttribute('id', 'yellowp'+String(swapPawnTwo));
          gamePieceTwo.style.backgroundColor = 'yellow';
        }
        if (currentColorTurn==='green'){
          y = greenPieces[Number(pawnNum.id.match(/\d+/)[0])] 
          currColorArr = greenPieces
        } else if(currentColorTurn ==='blue'){
          y = bluePieces[Number(pawnNum.id.match(/\d+/)[0])] 
          currColorArr = bluePieces
        } else if(currentColorTurn ==='red'){
          y = redPieces[Number(pawnNum.id.match(/\d+/)[0])] 
          currColorArr = redPieces
        } else if(currentColorTurn ==='yellow'){
          y = yellowPieces[Number(pawnNum.id.match(/\d+/)[0])]
          currColorArr = yellowPieces
        }
        let oppSpace = document.getElementById(String(x))
        let ownSpace = document.getElementById(String(y))
        if(ownSpace.hasChildNodes()===true){
          for (let i = ownSpace.children.length - 1; i >= 0; i--) {
            ownSpace.children[i].remove();
          }
        }
        if(oppSpace.hasChildNodes()===true){
          for (let i = oppSpace.children.length - 1; i >= 0; i--) {
            oppSpace.children[i].remove();
          }
        }
        currColorArr[Number(pawnNum.id.match(/\d+/)[0])] = x
        swapColorArr[swapPawnTwo] = y
        console.log('value of opp pawn '+x)
        console.log('value of curr pawn '+y)
        document.getElementById(String(currColorArr[Number(pawnNum.id.match(/\d+/)[0])])).appendChild(gamePieceOne)
        document.getElementById(String(swapColorArr[swapPawnTwo])).appendChild(gamePieceTwo)
        if (cardDraws === 0){
          getNextPlayerColor()
          cardDraws = 1;
        }
        playerMove = 0;
        return




      } else{
        messageSFX.play()
        textBox.innerHTML= 'Wrong pawn selected. Please select a pawn currently in play.'
      }
    } else {
      messageSFX.play()
      textBox.innerHTML='You need to select a pawn and draw a card to move!'
    }

  
    }
    



function greenTurn(){

  
}
function blueTurn(){
  
}
function redTurn(){

}
function yellowTurn(){

}



function useItemColorCheck(){
  if (currentColorTurn == 'green' && greenItem != 'none'){
    itemTypeCheck('green')
  } else if (currentColorTurn == 'blue' && blueItem != 'none'){
    itemTypeCheck('blue')
  } else if (currentColorTurn == 'red' && redItem != 'none'){
    itemTypeCheck('red')
  } else if (currentColorTurn === 'yellow' && yellowItem != 'none'){
    console.log('neat item')



    itemTypeCheck('yellow')

  } else{
    messageSFX.play()
    textBox.innerHTML='You do not have any items to use'
  }
}


function itemTypeCheck(){
  // List and check player inventory for type of item and run its function
}

//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰


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
  document.getElementById("cardFour").style.visibility = "visible";
}
function card5(){
  document.getElementById("cardFive").style.visibility = "visible";
}
function card7(){
  document.getElementById("cardSeven").style.visibility = "visible";
}
function card8(){
  document.getElementById("cardEight").style.visibility = "visible";
}
function card10(){
  document.getElementById("cardTen").style.visibility = "visible";
}
function card11(){
    document.getElementById("cardEleven").style.visibility = "visible";
}
function card12(){
    document.getElementById("cardTwelve").style.visibility = "visible";
}
function sorryCard (){
    document.getElementById("sorryCard").style.visibility = "visible";
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


// Card Drawing 
// let players = ['green', 'blue', 'red', 'yellow']
// let turn = 0;

let cardDraws = 1;

function checkDraw(){
  if (cardDraws>0){
    cardDraws-=1
    drawCard()
  }
}


function drawCard() {
  selectPawnToMove()
  console.log(currentColorTurn)
  overlay()
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let random = new Uint32Array(1);
  window.crypto.getRandomValues(random);
  random = random[0] % cards.length;
console.log(random)
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

  if (currentColorTurn === 'green'){
    greenglow()
  }

  
  if (currentColorTurn === 'blue'){
    blueglow()
  }

  
  if (currentColorTurn === 'red'){
    redglow()
  }

  
  if (currentColorTurn === 'yellow'){
    yellowglow()
  }
}


//▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

// Movement Functions

let playerMove = 0;

function moveForwardOne (){
  console.log('Move forward one')
  closePopup()
  return playerMove = 1;
  }
function moveForwardTwo (){
  console.log('Move forward two')
  closePopup()
  return playerMove = 2;
}

function moveForwardThree (){
  console.log('Move forward three')
  closePopup()
  return playerMove = 3;
}

function moveBackwardThree (){
  console.log('Move backward three')
  closePopup()
  return playerMove = -3;
}

function moveBackwardFour (){
  console.log('Move backward four')
  closePopup()
  return playerMove = -4;
}

function moveForwardFive (){
  console.log('Move forward three')
  closePopup()
  return playerMove = 5;
}

function moveForwardSeven (){
  console.log('Move forward three')
  closePopup()
  return playerMove = 7;
}

function splitSeven (){
  console.log('Move forward three')
  closePopup()
}

function moveForwardEight (){
  console.log('Move forward three')
  closePopup()
  return playerMove = 8;
}

function moveForwardTwelve (){
  console.log('Move forward three')
  closePopup()
  return playerMove = 12;
}



function moveForwardTen (){
  console.log('Move forward ten')
  closePopup()
  return playerMove = 10;
}

function moveForwardFour (){
  console.log('Move forward three')
  closePopup()
  return playerMove = 4;
}

function moveForwardEleven(){
  closePopup()
  return playerMove = 11
}


let swapPawnOne;
let swapPawnTwo;
let swapColor;
function swapPawn(){
  closePopup()
  let piece = currentColorTurn +'p'
  if (isNaN(document.getElementById(piece+'0').parentElement.id) && isNaN(document.getElementById(piece+'1').parentElement.id) && isNaN(document.getElementById(piece+'2').parentElement.id)){
    messageSFX.play()
    textBox.innerHTML = 'You do not have any pawns in play, so you move 11 instead.'
    playerMove = 11;
    return
  }
  let arrays = [greenPieces, bluePieces, redPieces,yellowPieces];
  let randomOne;
  let randomTwo;
  function drawPlayer(){
    randomOne = new Uint32Array(1);
    randomTwo = new Uint32Array(1);

    let playerColors = [1, 2, 3,4];
    
    window.crypto.getRandomValues(randomOne);
    randomOne = randomOne[0] % playerColors.length;

    let playerPieces = [1, 2, 3];
    window.crypto.getRandomValues(randomTwo);
    randomTwo = randomTwo[0] % playerPieces.length;

    console.log(arrays[randomOne])
    console.log(arrays[randomOne][randomTwo])
  }
let timeOut = 0;
const maxTimeOut = 50;
const intervalTime = 100;

const timer = setInterval(() => {
  timeOut++;
  if (timeOut >= maxTimeOut) {
    clearInterval(timer);
    console.log('Timeout reached');
    messageSFX.play()
    textBox.innerHTML = 'Too bad. No available pawns to move, so you move 11'
    playerMove = 11;
    return;
  }
  textBox.innerHTML = 'Searching For a pawn to swap with. Attempt ['+String(timeOut)+' of 50]'
  drawPlayer();
  if ((arrays[randomOne] === greenPieces) && currentColorTurn === 'green') {
    console.log('Green go away');
  } else if ((arrays[randomOne] === bluePieces) && currentColorTurn === 'blue') {
    console.log('Blue go away');
  } else if ((arrays[randomOne] === redPieces) && currentColorTurn === 'red') {
    console.log('Red go away');
  } else if ((arrays[randomOne] === yellowPieces) && currentColorTurn === 'yellow') {
    console.log('Yellow go away');
  } else {
    if (arrays[randomOne] === greenPieces) {
      if (!isNaN(document.getElementById('greenp'+String(randomTwo)).parentElement.id)){
        console.log('Match Found')
        messageSFX.play()
        textBox.innerHTML = 'Pawn target found. Select pawn to swap with green at space '+arrays[randomOne][randomTwo]
        swapPawnTwo = [randomTwo]
        swapColor = 'green'
        clearInterval(timer);
      }
    } else if (arrays[randomOne] === bluePieces) {
      if (!isNaN(document.getElementById('bluep'+String(randomTwo)).parentElement.id)){
        console.log('Match Found')
        messageSFX.play()
        textBox.innerHTML = 'Pawn target found. Select pawn to swap with blue at space '+arrays[randomOne][randomTwo]
        swapPawnTwo = [randomTwo]
        swapColor = 'blue'
        clearInterval(timer);
      }
    } else if (arrays[randomOne] === redPieces) {
      if (!isNaN(document.getElementById('redp'+String(randomTwo)).parentElement.id)){
        console.log('Match Found')
        messageSFX.play()
        textBox.innerHTML = 'Pawn target found. Select pawn to swap with red at space '+arrays[randomOne][randomTwo]
        swapPawnTwo = [randomTwo]
        swapColor = 'red'
        clearInterval(timer);
      }
    } else if (arrays[randomOne] === yellowPieces) {
      if (!isNaN(document.getElementById('yellowp'+String(randomTwo)).parentElement.id)){
        console.log('Match Found')
        messageSFX.play()
        textBox.innerHTML = 'Pawn target found. Select pawn to swap with yellow at space '+arrays[randomOne][randomTwo]
        swapPawnTwo = [randomTwo]
        swapColor = 'yellow'
        clearInterval(timer);

      }
    }


  }
}, intervalTime);
}



function sorry(){
  closePopup()

}

function pass(){
  closePopup()
  addCoin(String(currentColorTurn))
  getNextPlayerColor()
  cardDraws = 1;
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

        document.getElementById("cs11")
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

addCoin('blue')
addCoin('red')
addCoin('yellow')
addCoin('green')




// store system







const item1 = document.getElementById('#1')
const item01 = document.querySelector('.itemslot1')
const item2 = document.getElementById('#2');
const item02 = document.querySelector('.itemslot2')
const item3 = document.getElementById('#3');
const item03 = document.querySelector('.itemslot3')
const item4 = document.getElementById('#4');
const item04 = document.querySelector('.itemslot4')
const item5 = document.getElementById('#5');
const item05 = document.querySelector('.itemslot5')
const item6 = document.getElementById('#6');
const item06 = document.querySelector('.itemslot6')
const holder = document.getElementById('holder1')
const holderBlue = document.getElementById('holder2')
const holderRed = document.getElementById('holder3')
const holderYellow = document.getElementById('holder4')

const ITEM = document.querySelectorAll('.itemslot');


const shop = document.getElementById('storepage')
const shopLocation1 = document.getElementById('2');
const shopLocation2 = document.getElementById('35');
const shopLocation3 = document.getElementById('24');
const shopLocation4 = document.getElementById('13');
const shopPos = [shopLocation1, shopLocation2, shopLocation3, shopLocation4]


item01.addEventListener('click', () =>{
  item01 == holder;
  holder.innerHTML = item01
  
})

function store() {
  if (currentColorTurn === 'green' && greenCoins.coins > 0){
    shop.classList.add('active')
    overlay()
  } else if(currentColorTurn === 'blue' && blueCoins.coins > 0){
    shop.classList.add('active')
    overlay()
  } else if(currentColorTurn === 'red' && redCoins.coins > 0){
    shop.classList.add('active')
    overlay()
  } else if(currentColorTurn === 'yellow' && yellowCoins.coins > 0){
    shop.classList.add('active')
    overlay()
  } else {
    messageSFX.play()
    textBox.innerHTML = 'You do not have enough coins to use the shop, '+String(currentColorTurn)+'.'
    if (cardDraws === 0){
      getNextPlayerColor()
      cardDraws = 1;
    }
    playerMove = 0;
  }
    // shop.classList.add('active')
    // overlay()
}

function removeStore() {
  shop.classList.remove('active')
  if (cardDraws === 0){
    getNextPlayerColor()
    cardDraws = 1;
  }
  playerMove = 0;
}
 let money = 0; 
// function addItem () {
//   if item1 = holder1
// }


// store()


item1.addEventListener('click', () => {
  removeOverlay()
  removeStore()
  removecoinevent()
  console.log('hello')
})

item2.addEventListener('click', () => {
  removeOverlay()
  removeStore()
  removecoinevent()
  console.log('rock')
})

item3.addEventListener('click', () => {
  money = greenCoins
  if(greenCoins >= money) {
  removeOverlay()
  removeStore()
  removecoinevent()
  removecoinevent()
  }
  
  console.log('walnut')
})

item4.addEventListener('click', () => {
  removeOverlay()
  removeStore()
  removecoinevent()
  removecoinevent()
  console.log('cat')
})

item5.addEventListener('click', () => {
  money = greenCoins || blueCoins || redCoins || yellowCoins;
  if (greenCoins == money) {
     removeOverlay()
  removeStore()
  
  removecoinevent()
  removecoinevent()
  removecoinevent()
  removecoinevent()
  console.log('buff')
  }
})

item6.addEventListener('click', () => {
  removeOverlay()
  removeStore()
  removecoinevent()
  removecoinevent()
  removecoinevent()
  console.log('ball')
})




function removeCoin(player) {
  switch (player) {
    case 'blue':
      if (blueCoins.coins <= 4 && blueCoins.coins > 0) {
        blueCoins.coins--;
        console.log(`Blue player has ${blueCoins.coins} coins.`);
      } else if (blueCoins.coins === 0){
        messageSFX.play()
        textBox.innerHTML = 'Blue cannot lose anymore coins'
      }
      if (blueCoins.coins === 0){
        document.getElementById("cs1").style = "default"
        document.getElementById("cs2").style = "default"
        document.getElementById("cs3").style = "default"
        document.getElementById("cs4").style = "default"
      }

      if (blueCoins.coins === 1){
        document.getElementById("cs1").style.backgroundColor="yellow"
        document.getElementById("cs1").style.opacity="100%"

        document.getElementById("cs2").style = "default"
        document.getElementById("cs3").style = "default"
        document.getElementById("cs4").style = "default"
      }

      if (blueCoins.coins === 2){
        document.getElementById("cs1").style.backgroundColor="yellow"
        document.getElementById("cs1").style.opacity="100%"

        document.getElementById("cs2").style.backgroundColor="yellow"
        document.getElementById("cs2").style.opacity="100%"

        document.getElementById("cs3").style = "default"
        document.getElementById("cs4").style = "default"
      }

      if (blueCoins.coins === 3){
        document.getElementById("cs1").style.backgroundColor="yellow"
        document.getElementById("cs1").style.opacity="100%"

        document.getElementById("cs2").style.backgroundColor="yellow"
        document.getElementById("cs2").style.opacity="100%"

        document.getElementById("cs3").style.backgroundColor="yellow"
        document.getElementById("cs3").style.opacity="100%"

        document.getElementById("cs4").style = "default"




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
      if (greenCoins.coins <= 4 && greenCoins.coins > 0) {
        greenCoins.coins--;
        console.log(`Green player has ${greenCoins.coins} coins.`);
      } else if (greenCoins.coins === 0){
        messageSFX.play()
        textBox.innerHTML = 'Green cannot lose anymore coins'
      }

      if (greenCoins.coins === 0){
        document.getElementById("cs9").style = "default"
        document.getElementById("cs10").style = "default"
        document.getElementById("cs11").style = "default"
        document.getElementById("cs12").style = "default"
      }

      if (greenCoins.coins === 1){
        document.getElementById("cs9").style.backgroundColor="yellow"
        document.getElementById("cs9").style.opacity="100%"
      
        document.getElementById("cs10").style ="default"
        document.getElementById("cs11").style ="default"
        document.getElementById("cs12").style ="default"


      
      
      }

      if (greenCoins.coins === 2){
        document.getElementById("cs9").style.backgroundColor="yellow"
        document.getElementById("cs9").style.opacity="100%"

        document.getElementById("cs10").style.backgroundColor="yellow"
        document.getElementById("cs10").style.opacity="100%"

        document.getElementById("cs11").style ="default"
        document.getElementById("cs12").style ="default"
      }

      if (greenCoins.coins === 3){
        document.getElementById("cs9").style.backgroundColor="yellow"
        document.getElementById("cs9").style.opacity="100%"

        document.getElementById("cs10").style.backgroundColor="yellow"
        document.getElementById("cs10").style.opacity="100%"

        document.getElementById("cs11").style.backgroundColor="yellow"
        document.getElementById("cs11").style.opacity="100%"

        document.getElementById("cs12").style ="default"





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
      if (redCoins.coins <= 4 && redCoins.coins > 0) {
        redCoins.coins--;
        console.log(`Red player has ${redCoins.coins} coins.`);
      } else if (redCoins.coins === 0){
        messageSFX.play()
        textBox.innerHTML = 'Red cannot lose anymore coins'
      }

      
      if (redCoins.coins === 0){
        document.getElementById("cs5").style = "default"
        document.getElementById("cs6").style = "default"
        document.getElementById("cs7").style = "default"
        document.getElementById("cs8").style = "default"
      }


      if (redCoins.coins === 1){
        document.getElementById("cs5").style.backgroundColor="yellow"
        document.getElementById("cs5").style.opacity="100%"

        document.getElementById("cs6").style = "default"
        document.getElementById("cs7").style = "default"
        document.getElementById("cs8").style = "default"


      }

      if (redCoins.coins === 2){
        document.getElementById("cs5").style.backgroundColor="yellow"
        document.getElementById("cs5").style.opacity="100%"

        document.getElementById("cs6").style.backgroundColor="yellow"
        document.getElementById("cs6").style.opacity="100%"
        document.getElementById("cs7").style = "default"
        document.getElementById("cs8").style = "default"
      }

      if (redCoins.coins === 3){
        document.getElementById("cs5").style.backgroundColor="yellow"
        document.getElementById("cs5").style.opacity="100%"

        document.getElementById("cs6").style.backgroundColor="yellow"
        document.getElementById("cs6").style.opacity="100%"

        document.getElementById("cs7").style.backgroundColor="yellow"
        document.getElementById("cs7").style.opacity="100%"

        document.getElementById("cs8").style = "default"





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
      if (yellowCoins.coins <= 4 && yellowCoins.coins > 0) {
        yellowCoins.coins--;
        console.log(`Yellow player has ${yellowCoins.coins} coins.`);
      } else if (yellowCoins.coins === 0){
        messageSFX.play()
        textBox.innerHTML = 'Yellow cannot lose anymore coins'
      }

      if (yellowCoins.coins === 0){
        document.getElementById("cs13").style = "default"
        document.getElementById("cs14").style = "default"
        document.getElementById("cs15").style = "default"
        document.getElementById("cs16").style = "default"
      }
      
      if (yellowCoins.coins === 1){
        document.getElementById("cs13").style.backgroundColor="yellow"
        document.getElementById("cs13").style.opacity="100%"

        document.getElementById("cs14").style = "default"
        document.getElementById("cs15").style = "default"
        document.getElementById("cs16").style = "default"


      }

      if (yellowCoins.coins === 2){
        document.getElementById("cs13").style.backgroundColor="yellow"
        document.getElementById("cs13").style.opacity="100%"

        document.getElementById("cs14").style.backgroundColor="yellow"
        document.getElementById("cs14").style.opacity="100%"

        document.getElementById("cs15").style = "default"
        document.getElementById("cs16").style = "default"      }

      if (yellowCoins.coins === 3){
        document.getElementById("cs13").style.backgroundColor="yellow"
        document.getElementById("cs13").style.opacity="100%"

        document.getElementById("cs14").style.backgroundColor="yellow"
        document.getElementById("cs14").style.opacity="100%"

        document.getElementById("cs15").style.backgroundColor="yellow"
        document.getElementById("cs15").style.opacity="100%"

        document.getElementById("cs16").style = "default"




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


addCoin('green')
removeCoin('green')



// Event Spaces


  

function black(){
  const overlay2 = document.createElement("div");
  overlay2.classList.add("overlay2");
  document.body.appendChild(overlay2);

}



function eventspacepopup() {
  textBox.innerHTML=String(currentColorTurn)+' has triggered an event space!'
  let yaySFX = new Audio('audio/cele.mp3')
  yaySFX.play()
  black();
  document.getElementById('bruh').style.boxShadow = '0 0 60px ' +String(currentColorTurn)
  let capsystem = currentColorTurn.charAt(0).toUpperCase() + currentColorTurn.slice(1);
  let eventtext = document.getElementById('eventspacepopuptext').innerHTML = String(capsystem) + " has landed on an eventspace!";
  document.getElementById('eventspacepopuptext').style.color = String(currentColorTurn);
  document.getElementById('eventspacepopup').style.visibility = 'visible';
  document.getElementById('slotmachine').style.visibility = 'visible';
  document.getElementById('bruh').style.visibility = 'visible';

  startConfetti();
  myLoop()

}



function getcoinevent(){
  if (currentColorTurn == 'green'){
    addCoin('green')
  }else if (currentColorTurn == 'blue'){
    addCoin('blue')
  }else if (currentColorTurn == 'red'){ 
    addCoin('red')
  }else if (currentColorTurn == 'yellow'){
    addCoin('yellow')
  }
  delayFunction()
  
}

function delayFunction() {
  setTimeout(function() {
    if (cardDraws === 0){
      getNextPlayerColor()
      cardDraws = 1;
    }
    playerMove = 0;
  }, 1000);
}

function removecoinevent(){
  if (currentColorTurn == 'green'){
    removeCoin('green')
  }else if (currentColorTurn == 'blue'){
    removeCoin('blue')
  }else if (currentColorTurn == 'red'){ 
    removeCoin('red')
  }else if (currentColorTurn == 'yellow'){
    removeCoin('yellow')
  }
  delayFunction();
}




function myLoop() {
  let rollSFX = new Audio("audio/jingle.mp3");
  rollSFX.play();
  for (let i = 0; i < 300; i++) {
    setTimeout(function() {
      
      let images = [1, 2];
      let randomimage = new Uint32Array(1);
      window.crypto.getRandomValues(randomimage);
      randomimage = randomimage[0] % images.length;
      console.log(randomimage)
    
      if (randomimage === 1){
        document.getElementById('slotmachine').style.backgroundImage = "url('events/currency-coin-cartoon-png.webp')"
      }

      if (randomimage === 0){
        document.getElementById('slotmachine').style.backgroundImage = "url('events/redcoin.webp')"
      }
      if (i === 299){
        rollSFX.pause();
        randomevent();
        setTimeout(function() {
          closeeventpopup();
        }, 2000); 
      }
    }, i * 10); 

    function randomevent(){
      let events = [1, 2];
      let randomevent = new Uint32Array(1);
      window.crypto.getRandomValues(randomevent);
      randomevent = randomevent[0] % events.length;
      console.log(randomevent)
    
      if (randomevent === 0){
        console.log('You lost a coin!')
        document.getElementById('eventspacepopuptext').innerHTML = "You lost a coin"
        removecoinevent()
      }
    
      if (randomevent === 1){
        console.log('You got a coin!')
        document.getElementById('eventspacepopuptext').innerHTML = "You got a coin"
        document.getElementById('eventspacepopuptext').style.marginLeft = "50"
        getcoinevent()
      }
    
    if (randomevent === 0){
      document.getElementById('slotmachine').style.backgroundImage = "url('events/redcoin.webp')"

      console.log('You lost a coin!')
    removecoinevent()
    return randomevent
  }

  if (randomevent === 1){
    document.getElementById('slotmachine').style.backgroundImage = "url('events/currency-coin-cartoon-png.webp')"
    console.log('You got a coin!')
    getcoinevent()
   return randomevent

  }
  }

}
  
}



function closeeventpopup() {
  stopConfetti(); 
  document.getElementById('bruh').style.visibility = 'hidden';
  document.getElementById('eventspacepopup').style.visibility = 'hidden';
  document.getElementById('slotmachine').style.visibility = 'hidden';
  const overlay2 = document.querySelector(".overlay2");
  if (overlay2) {
    overlay2.parentNode.removeChild(overlay2);
  }
}

function testing(){
  document.getElementById('bruh').style.animation = "shake 30s";
}
