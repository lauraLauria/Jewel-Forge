class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.score = 0;
    this.scoreElement = document.getElementById("score")
    this.livesElement = document.getElementById("lives");
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
    this.userChoices = {};
    this.radioOptions = document.querySelectorAll(
      "#choices-container [type='radio']"
    );
  }

  fillUserChoice(name, value) {
    this.userChoices[name] = value;
  }

  handleForge() {
    console.log(this.currentShape, this.userChoices);
    for (const key in this.currentShape) {
      if (key === "img") {
        continue;
      }
      if (this.currentShape[key] !== this.userChoices[key]) {
        console.log("wrong choice");
        this.lives --
        this.livesElement.innerHTML = this.lives;
        return;
      }
    }
    this.score = this.score + 10;
    this.scoreElement.innerHTML = this.score;
    console.log("right choice");
  }

  userChoice() {
    if (
      this.currentShape.material &&
      this.currentShape.color &&
      this.currentShape.shape &&
      this.currentShape.extras
    ) {
      const userChoice = this.shapes.find(
        (shape) =>
          shape.material === this.currentShape.material &&
          shape.color === this.currentShape.color &&
          shape.shape === this.currentShape.shape &&
          shape.extras === this.currentShape.extras
      );

      if (userChoice) {
        this.score += 10;
      } else {
        console.log("wrong");
        this.lives--;
        document.getElementById("lives").innerText = this.lives;

        if (this.lives <= 0) {
          this.endGame();
        }
      }
    }
  }

  start() {
    // console.log(this.radioOptions);
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

const userChoices = [];

// selectColor(color) {

// }

// selectShape(shape) {
//   console.log(shape);
//   const userChoice = {
//     shape,
//   };
//   userChoices.push(userChoice);
// }

function captureUserChoices() {
  const material = document.querySelector(
    'input[name="material"]:checked'
  ).value;
  const color = document.querySelector('input[name="color"]:checked').value;
  const shape = document.querySelector('input[name="shape"]:checked').value;
  const extras = document.querySelector('input[name="extras"]:checked').value;

  console.log("color", color);
  console.log("shape", shape);
  console.log("material", material);
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

// get the client value from script js. assign to variable
// get the value from the object you alreadzy have
// compare them
// this.shape[0].material this is your object
// let userChoice2 =event.target.name
// and compare them
