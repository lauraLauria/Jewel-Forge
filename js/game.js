    class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/background_gamescreen.jpg"
      //"./images/car.png"
    //);
    this.height = 600;
    this.width = 500;
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
  }

start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameLoop();
  }

  gameLoop() {
    console.log("in the game loop");
    if (this.gameIsOver) {
      return;
    }
    this.update();
  }
}

const Ring = {
    material: 'gold',
    color: 'yellow',
    shape: 'ring',
    extras: 'diamond',
};
const Earring = {
  material: 'silver',
  color: 'grey',
  shape: 'earring',
  extras: 'pearl',
};
const Necklace = {
    material: 'copper',
    color: 'orange',
    shape: 'necklace',
    extras: 'ruby',
};
const Bracelet = {
    material: 'wood',
    color: 'brown',
    shape: 'bracelet',
    extras: 'emerald',
};


// Create an array to store user's choices
const userChoices = [];

// Function to capture user's choices from radio buttons
function captureUserChoices() {
    const material = document.querySelector('input[name="material"]:checked').value;
    const color = document.querySelector('input[name="color"]:checked').value;
    const shape = document.querySelector('input[name="shape"]:checked').value;
    const extras = document.querySelector('input[name="extras"]:checked').value;

    const userChoice = {
        material,
        color,
        shape,
        extras,
    };

    userChoices.push(userChoice);

    if (
        userChoice.material === Ring.material &&
        userChoice.color === Ring.color &&
        userChoice.shape === Ring.shape &&
        userChoice.extras === Ring.extras
    ) {
        console.log('User's choice matches the Ring object.');
    } else {
        console.log('User's choice does not match the Ring object.');
    }
