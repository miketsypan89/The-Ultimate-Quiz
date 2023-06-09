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
var captureListOfAnswers = document.querySelectorAll(".list-of-answers");
console.log(captureListOfAnswers)
var secondsScored = document.querySelector(".seconds-scored");
var secondsLeftInTimer = document.querySelector(".countdown")


// set variables for the timer
var countDownInterval = null;
let time = 59;
const countdownEl = document.getElementById('countdown');
countdownEl.innerHTML = "01:00";

const highScoreInitials = localStorage.getItem('highestScoreInitials')
const highScoreTime = localStorage.getItem('highestScoreTime')

document.querySelector('.user-init').innerText = highScoreInitials;
document.querySelector('.user-time').innerText = highScoreTime;



function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 1 ? "0" + seconds : seconds;
    countdownEl.innerHTML = `0${minutes}:${seconds}`;
    time--;
    if (time < 0) {
        clearInterval(countDownInterval);
        console.log('counter stopped')
    }
}

function startQuiz() {
    // fire off the timer
    countDownInterval = setInterval(updateCountdown, 1000);
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
            //correct answer causes the main-body page to turn green
            document.querySelector(".main-body").style.backgroundColor = "#4ec864";
            count++;
            correctCounter.innerHTML = count;

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "#c14444";
            time = time - 7;

        }
        challenge2.classList.remove("hidden")
    }
}

function makingAChoice2(event) {
    var btnClicked = event.target;
    if (btnClicked.matches("button")) {
        challenge2.classList.add("hidden")
        if (btnClicked.classList.contains("correct")) {
            //correct answer causes the main-body page to turn green
            document.querySelector(".main-body").style.backgroundColor = "#4ec864";
            count++;
            correctCounter.innerHTML = count;

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "#c14444";
            time = time - 7;
        }
        challenge3.classList.remove("hidden")
    }
}

function makingAChoice3(event) {
    var btnClicked = event.target;
    if (btnClicked.matches("button")) {
        challenge3.classList.add("hidden")
        if (btnClicked.classList.contains("correct")) {
            //correct answer causes the main-body page to turn green
            document.querySelector(".main-body").style.backgroundColor = "#4ec864";
            count++;
            correctCounter.innerHTML = count;

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "#c14444";
            time = time - 7;
        }
        challenge4.classList.remove("hidden")
    }
}

function makingAChoice4(event) {
    var btnClicked = event.target;
    if (btnClicked.matches("button")) {
        challenge4.classList.add("hidden")
        if (btnClicked.classList.contains("correct")) {
            //correct answer causes the main-body page to turn green
            document.querySelector(".main-body").style.backgroundColor = "#4ec864";
            count++;
            correctCounter.innerHTML = count;

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "#c14444";
            time = time - 7;
        }
        challenge5.classList.remove("hidden")
    }
}

function makingAChoice5(event) {
    var btnClicked = event.target;
    if (btnClicked.matches("button")) {
        challenge5.classList.add("hidden")
        if (btnClicked.classList.contains("correct")) {
            //correct answer causes the main-body page to turn green
            document.querySelector(".main-body").style.backgroundColor = "#4ec864";
            count++;
            correctCounter.innerHTML = count;

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "#c14444";
            time = time - 7;
        }
        challenge6.classList.remove("hidden")
    }
}

function makingAChoice6(event) {
    var btnClicked = event.target;
    if (btnClicked.matches("button")) {
        challenge6.classList.add("hidden")
        if (btnClicked.classList.contains("correct")) {
            //correct answer causes the main-body page to turn green
            document.querySelector(".main-body").style.backgroundColor = "#4ec864";
            count++;
            correctCounter.innerHTML = count;

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "#c14444";
            time = time - 7;
        }
        challenge7.classList.remove("hidden")
    }
}

function makingAChoice7(event) {
    var btnClicked = event.target;
    if (btnClicked.matches("button")) {
        challenge7.classList.add("hidden")
        if (btnClicked.classList.contains("correct")) {
            //correct answer causes the main-body page to turn green
            document.querySelector(".main-body").style.backgroundColor = "#4ec864";
            count++;
            correctCounter.innerHTML = count;

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "#c14444";
            time = time - 7;
        }
        if (count === 7) {
            verdict1.classList.remove("hidden");
        } else {
            verdict2.classList.remove("hidden");
        }
        resultsPage.classList.remove("hidden")
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 1 ? "0" + seconds : seconds;
        countdownEl.innerHTML = `0${minutes}:${seconds}`;
        clearInterval(countDownInterval);
        secondsScored.innerHTML = time;
    }
}

let verdict1 = document.getElementById("verdict1");
let verdict2 = document.getElementById("verdict2");

// using local storage to set TIME REMAINING to <aside> when user submits their initials
function setIntials() {
    const initialsEntered = document.querySelector('.user-init-input').value;
    // var add1Second = time;

    localStorage.setItem('highestScoreInitials', initialsEntered)
    localStorage.setItem('highestScoreTime', "00:" + time)

    document.querySelector('.user-init').innerText = initialsEntered;
    document.querySelector('.user-time').innerText = "00:" + time;

}


// Get the HTML element you want to remove the class from

// Increment the correct answers to the scoreboard
// declaring vars for the correct answers
var correctAnswer1 = document.getElementById("incrementBtn1");
var correctAnswer2 = document.getElementById("incrementBtn2");
var correctAnswer3 = document.getElementById("incrementBtn3");
var correctAnswer4 = document.getElementById("incrementBtn4");
var correctAnswer5 = document.getElementById("incrementBtn5");
var correctAnswer6 = document.getElementById("incrementBtn6");
var correctAnswer7 = document.getElementById("incrementBtn7");
var correctCounter = document.getElementById("correct-counter");

var count = 0;


// On the results page, I need the "00" seconds to equate to the seconds left in the timer when the quiz was over

startBtn.addEventListener("click", startQuiz)
captureListOfAnswers[0].addEventListener("click", makingAChoice);
captureListOfAnswers[1].addEventListener("click", makingAChoice2);
captureListOfAnswers[2].addEventListener("click", makingAChoice3);
captureListOfAnswers[3].addEventListener("click", makingAChoice4);
captureListOfAnswers[4].addEventListener("click", makingAChoice5);
captureListOfAnswers[5].addEventListener("click", makingAChoice6);
captureListOfAnswers[6].addEventListener("click", makingAChoice7);
document.querySelector('.submit-init-btn').addEventListener('click', setIntials)