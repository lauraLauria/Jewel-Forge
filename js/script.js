window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const forgeButton = document.getElementById("forge-button");
  const lives = document.getElementById("lives");
  let game = new Game();

  forgeButton.addEventListener("click", function () {
    game.handleForge();
  });

  startButton.addEventListener("click", function () {
    console.log("start");
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
      game.fillUserChoice(event.target.name, event.target.value);
      console.log(game.userChoices);
    });
  });
};
