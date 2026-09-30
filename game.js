const nameInput = document.querySelector("#nameinput");
const numberInput = document.querySelector("#numberinput");
const startButton = document.querySelector("#startbutton");
const resetButton = document.querySelector("#resetbutton");
const results = document.querySelector("#results");

let round = 1;
let firrom =4;

function startGame() {
    const name = nameInput.value.trim();
    const number = Number(numberInput.value);

    if (name === "") {
        results.textContent = "Enter your name";
        return;
    }

    if (numberInput.value === "" || Number.isNaN(number)) {
        results.textContent = "Enter a valid number";
        return;
    }

    if (number <= 5) {
        results.textContent = "Number must be bigger than 5";
        return;
    }

    results.textContent = "Round " + round + ": Good job " + name;

    round++;

    numberInput.value = "";

    if (round > 3) {
        results.textContent += " Game finished!";
        startButton.disabled = true;
    }
}

function resetGame() {
    nameInput.value = "";
    numberInput.value = "";
    results.textContent = "";

    round = 1;

    startButton.disabled = false;
}

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);