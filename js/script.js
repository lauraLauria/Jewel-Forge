window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game = new Game();
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", function () {
    restartGame();
    console.log("restart");
  });
  function startGame() {
    console.log("start game");
    game.start();
  }
  function restartGame() {
    location.reload();
  }
  game.radioOptions.forEach((option) => {
    option.addEventListener("input", (event) => {
      console.log(game.currentShape);
      console.log(event.target.name);
      console.log(event.target.value);
    });
  });
};
