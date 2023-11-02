window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const forgeButton = document.getElementById("forge-button");

  let game = new Game();

  forgeButton.addEventListener("click", function () {
    game.handleForge();
  });

  startButton.addEventListener("click", function () {
    game.start();
  });

  restartButton.addEventListener("click", function () {
    location.reload();
  });

  game.radioOptions.forEach((option) => {
    option.addEventListener("input", (event) => {
      game.fillUserChoice(event.target.name, event.target.value);
      console.log(game.userChoices);
    });
  });
};
