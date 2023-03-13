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
    const orCards = ["Move-starting-piece", "Move-back-once", "Split-forward-between-2-pawns", "Move-back-3-times", "SORRY", "take 2 cards", "start all over", "win5", "Take someones turn"]
  
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
  cO === "Move starting piece" ? (entity = "Move;") : (entity = " or " + cO)
  
  const card = document.createElement("div");
  card.classList.add("card", cO);
  card.innerHTML = 
  '<span class="card-cardValue-orCard top">' + cValue + entity + '</span>' +
  '<span class="card-orCard">' + entity + '</span>' + 
  '<span class="card-cardValue-orCard bot">' + cValue + entity + '</span>';
  document.body.appendChild(card);
  }
  const playCards = deckBuilder();
  randomCard(playCards);
  
  
  // End of randomizer ^^
  
  
  function getRandomImage() {
    let randomCard = new Array("images/card1.png");
  
    randomCard[0] = ("images")
  }


function getRandomImage() {
    let randomCard = new Array("images/card1.png");
  
    randomCard[0] = ("images")
  }
  

  // Body background overlay 

  