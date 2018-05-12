var memory = {};
//memory.numOfCards = 12;
memory.start = function() {
  memory.newboard();
}
//I put all of my pictures (cards) in an array
const cardsArray = [{
    'name': 'burger',
    'img': './images/burger.jpg',
  },
  {
    'name': 'icecream',
    'img': './images/icecream.jpg',
  },
  {
    'name': 'pizza',
    'img': './images/pizza.jpg',
  },
  {
    'name': 'cookies',
    'img': './images/cookies.jpg',
  },
  {
    'name': 'donuts',
    'img': './images/donuts.jpg',
  },
  {
    'name': 'fries',
    'img': './images/fries.jpg',
  },
];

var gameGrid = cardsArray.concat(cardsArray); // make the images twice with concat (concat the array with itself so its double)
gameGrid.sort(() => 0.5 - Math.random()); // mixing the array to display the cards randomly


var firstGuess = ''; //stores the firt guess
var secondGuess = ''; // stores the second guess
var count = 0; // initializing the couter, to just select 2 cards to be shown
var previousTarget = null; // to don't be able to click on an item twice and recieve a match
var delay = 1000; // delay for the cards to be hide again

//trying to put a win alert at the end of the game
//var counter;
//var number;

var game = document.getElementById('game'); //getting the element of the div game
var grid = document.createElement('section'); // creation of a section with class of grid

grid.setAttribute('class', 'grid');
game.appendChild(grid); // I append the grid to the game (that is in the HTML)

memory.newboard = function() { // creating a new board

  gameGrid.forEach(item => { // for each itm in the array with the images
    var card = document.createElement('div'); //creation of the div
    card.classList.add('card'); // I apply a card class to the div
    card.dataset.name = item.name;

    var front = document.createElement('div'); // create the front of card
    front.classList.add('front');

    var back = document.createElement('div'); // create the back of card
    back.classList.add('back');
    back.style.backgroundImage = `url(${item.img})`; // put a background to all the images (cards)

    grid.appendChild(card); // append the card to the grid
    card.appendChild(front);
    card.appendChild(back);
  });
}

var match = () => { // cheching the matching elements
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}

var resetGuesses = () => { // to reset the guesses
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function(event) { // a function for an event. Each time there is a click an event happend

  var clicked = event.target; // click on the item
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) { // if we have shown less than two cards
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name; //here is the first guess
      //console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else { // here is the second guess
      secondGuess = clicked.parentNode.dataset.name;
      //console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }
    if (firstGuess && secondGuess) {

      if (firstGuess === secondGuess) { // if the first and second guess are a match
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay); // here we reset the guesses
    }

// trying to put an alert at the end of the game
    // setTimeout (function () {
    //   counter = counter +2;
    //   if (counter === number) {
    //     alert("win");
    //   }
    // }, 1200);
    //
    // }

    previousTarget = clicked; //to dont have a match by clicking twice on the same card
  }

});

memory.reset = function() { //implementing the reset button
  document.getElementById("game").innerHTML = "";
}
