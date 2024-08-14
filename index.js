const startGame = document.getElementById("startGame");
const response = document.getElementById("response");
const buttonsContainer = document.getElementById("buttonsContainer");
const btns = document.querySelectorAll(".btn");
const playAgain = document.getElementById("playAgain");
const guessText = document.getElementById('guessText')

let Answer;

startGame.addEventListener("click", () => {
    startGame.style.display = "none";
    generateOptions();
});

function generateOptions() {
    Answer = Math.floor(Math.random() * 100 + 1);
    let options = [Answer];

    while (options.length < 4) {
        let randomNum = Math.floor(Math.random() * 100 + 1);
        if (!options.includes(randomNum)) {
            options.push(randomNum);
        }
    }

    options = options.sort(() => Math.random() - 0.5);

    btns.forEach((btn, index) => {
        btn.textContent = options[index];
        btn.style.display = "inline";
    });
}

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const guessedNumber = e.target.textContent;
        response.classList.add("alert");
        if (guessedNumber === Answer.toString()) {
            response.textContent = "Hurray! Correct Guess.";
            guessText.style.display = "none";
            response.style.color = "green";
            endGame();
        } else {
            response.textContent = "Oops! Try Again.";
            response.style.color = "red";

        }
    });
});

function endGame() {
    btns.forEach((btn) => btn.style.display = "none");
    playAgain.style.display = "inline";
}

playAgain.addEventListener("click", () => {
    response.textContent = "";
    playAgain.style.display = "none";
    generateOptions();
});
