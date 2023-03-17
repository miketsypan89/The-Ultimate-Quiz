// function to start the quiz and the timer
// set variables for the quiz
var startBtn = document.querySelector(".start-quiz-btn");
var welcomePage = document.querySelector(".welcome-page");
var challenge1 = document.querySelector("#challenge1")
var challenge2 = document.querySelector("#challenge2")
var challenge3 = document.querySelector("#challenge3")
var challenge4 = document.querySelector("#challenge4")
var challenge5 = document.querySelector("#challenge5")
var challenge6 = document.querySelector("#challenge6")
var challenge7 = document.querySelector("#challenge7")
var resultsPage = document.querySelector(".results-page")
var option = document.querySelector(".option");
var captureListOfAnswers = document.querySelector(".list-of-answers");

// set variables for the timer
const startingMinutes = 1;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');
countdownEl.innerHTML = "01:00";

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 1 ? "0" + seconds : seconds;
    countdownEl.innerHTML = `0${minutes}:${seconds}`;
    time--;
}

function startQuiz() {
    // fire off the timer
    setInterval(updateCountdown, 1000);
    // hide the welcome page
    welcomePage.classList.add("hidden")
    // display challenge1
    challenge1.classList.remove("hidden")
}



function makingAChoice(event) {
    var btnClicked = event.target;
    if (btnClicked.matches("button")) {
        challenge1.classList.add("hidden")
        if (btnClicked.classList.contains("correct")) {
            document.querySelector(".main-body").background.color = "green";
        } else {
            challenge2.classList.remove("hidden")
        }
    }
    // hide the challenge1
    // challenge1.classList.add("hidden")
    // // display challenge2
    // challenge2.classList.remove("hidden")

}

startBtn.addEventListener("click", startQuiz)
captureListOfAnswers.addEventListener("click", makingAChoice);





// function 

