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
};

//On Click function needed
