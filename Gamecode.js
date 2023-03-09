


let maps = document.querySelectorAll('.one-third');

maps.forEach(map => {
  map.addEventListener('click', function() {
    maps.forEach(mp => mp.classList.remove('java-one-third'));
    map.classList.add('java-one-third');
    let mapType = map.id
  });
});

// let playerCount = document.getElementById('player-container').value

function confirmMatch(){
  if (map.id == mapOne){
    console.log('1');
  } else if (map.id == mapTwo){
    console.log('2');
  } else if (map.id == mapThree){
    console.log('3');
  } else{
    console.log('skip')
  }
}

// Code for clicking deck of cards
function show() {
  const cards = document.getElementById('taking');
  cards.classList.add('active');
}

function dontShow() {
  const gone = document.getElementById('taking')
  gone.classList.remove('active')
}

// End of click deck to show cards ^^


// Tries creating randomizer when clicking on deck
function deckBuilder() {
  const cardValues = ["Move 1", "Move 2", "Move 3", "Move 4", "Move 5", "Move 7", "Move 8", "Move 10", "Sorry Card!"]
  const orCards = ["Move-starting-piece", "Move-back-once", "Split-forward-between-2-pawns", "Move-back-3-times"]

  const playCards = [];
  for (let o = 0; o < orCards.length; o++) {
    for (let c = 0; c <+ cardValues.length; c++) {
      const cardValue = cardValues[o];
      const orCard = orCards[c];
      playCards.push({ cardValue, orCard });
    } 
  }
  return playCards;
}

function randomCard(playCards) {
const random = Math.floor(Math.random() * 36);
const cValue = playCards[random].cardValue;
const cO = playCards[random].orCard;

let entity; 
cO === "Move starting piece" ? (entity = "Move;") : (entity = " or " + cO.toLowerCase())

const card = document.createElement("div");
card.classList.add("card", cO.toLowerCase());
card.innerHTML = 
'<span class="card-cardValue-orCard top">' + cValue + entity + '</span>' +
'<span class="card-orCard">' + entity + '</span>' + 
'<span class="card-cardValue-orCard bot">' + cValue + entity + '</span>';
document.body.appendChild(card);
}
const playCards = deckBuilder();
randomCard(playCards);

// End of randomizer ^^

// let board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]