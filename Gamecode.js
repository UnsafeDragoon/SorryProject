


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
  if (map.id = mapOne){
    console.log('1');
  } else if (map.id = mapTwo){
    console.log('2');
  } else if (map.id = mapThree){
    console.log('3');
  } else{
    console.log('skip')
  }
}


// let board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]