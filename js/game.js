class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.shapes = [
      {
        material: "gold",
        color: "yellow",
        shape: "ring",
        extras: "diamond",
        img: "Images/golden-ring-with-diamond-in-game-upscaled.png",
      },
      {
        material: "silver",
        color: "grey",
        shape: "earring",
        extras: "pearl",
        img: "Images/silver-earrings-with-pearls-upscaled.png",
      },
      {
        material: "copper",
        color: "orange",
        shape: "necklace",
        extras: "ruby",
        img: "Images/necklace-made-of-copper-colour-orange-with-a-rub-upscaled.png",
      },
      {
        material: "wood",
        color: "brown",
        shape: "bracelet",
        extras: "emerald",
        img: "Images/bracelet-made-out-of-wood-with-an-emerald-on-it-in.jpg",
      },
    ];
    this.currentShape = {};
    this.radioOptions = document.querySelectorAll(
      "#choices-container [type='radio']"
    );
  }

  start() {
    console.log(this.radioOptions);
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.currentShape = this.shapes[0];
    const img = document.createElement("img");
    img.src = this.currentShape.img;
    document.getElementById("shapes-container").appendChild(img);
    this.gameLoop();
  }

  gameLoop() {
    console.log("in the game loop");
    if (this.gameIsOver) {
      return;
    }
    // this.update();
  }
}

// const Ring = {
//   material: "gold",
//   color: "yellow",
//   shape: "ring",
//   extras: "diamond",
//   img: "https://static.vecteezy.com/system/resources/previews/019/907/060/original/wedding-ring-graphic-clipart-design-free-png.png",
// };
// const Earring = {
//   material: "silver",
//   color: "grey",
//   shape: "earring",
//   extras: "pearl",
// };
// const Necklace = {
//   material: "copper",
//   color: "orange",
//   shape: "necklace",
//   extras: "ruby",
// };
// const Bracelet = {
//   material: "wood",
//   color: "brown",
//   shape: "bracelet",
//   extras: "emerald",
// };

const userChoices = [];

function captureUserChoices() {
  const material = document.querySelector(
    'input[name="material"]:checked'
  ).value;
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
    this.score += 10;
  } else {
    this.lives--;
  }
}
