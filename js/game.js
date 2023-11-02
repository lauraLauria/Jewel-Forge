class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.lives = 3;
    this.score = 0;
    this.livesElement = document.getElementById("lives");
    this.scoreElement = document.getElementById("score");
    this.gameIsOver = false;
    this.shapes = [
      {
        material: "gold",
        color: "yellow",
        shape: "ring",
        extras: "diamond",
        img: "/Images/ring.png",
      },
      {
        material: "silver",
        color: "grey",
        shape: "earring",
        extras: "pearl",
        img: "/Images/earrings.png",
      },
      {
        material: "copper",
        color: "orange",
        shape: "necklace",
        extras: "ruby",
        img: "/Images/necklace.png",
      },
      {
        material: "wood",
        color: "brown",
        shape: "bracelet",
        extras: "emerald",
        img: "/Images/bracelet.png",
      },
    ];
    this.currentShape = {};
    this.userChoices = {};
    this.radioOptions = document.querySelectorAll(
      "#choices-container [type='radio']"
    );
  }

  toNextLevel() {
    this.currentShape = {};
    const randomIndex = Math.floor(Math.random() * this.shapes.length);
    this.currentShape = this.shapes[randomIndex];
    document.getElementById("current-choice-image").src = this.currentShape.img;
  }

  fillUserChoice(name, value) {
    this.userChoices[name] = value;
  }

  handleForge() {
    for (const key in this.currentShape) {
      if (key === "img") {
        continue;
      }
      if (this.currentShape[key] !== this.userChoices[key]) {
        console.log("wrong choice");
        this.lives--;
        this.livesElement.innerHTML = this.lives;
        this.toNextLevel();
        return;
      }
    }
    this.score = this.score + 10;
    this.scoreElement.innerHTML = this.score;
    console.log("right choice");
    this.toNextLevel();
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    const randomIndex = Math.floor(Math.random() * this.shapes.length);
    this.currentShape = this.shapes[randomIndex];
    this.shapes.splice(randomIndex, 1);
    const img = document.createElement("img");
    img.id = "current-choice-image";
    img.src = this.currentShape.img;
    document.getElementById("shapes-container").appendChild(img);
    this.gameLoop();
  }

  gameLoop() {
    console.log("in the game loop");
    if (this.gameIsOver) {
      return;
    }
  }
}
