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
// set variables for the timer
var countDownInterval = null;


let time = 60;
const countdownEl = document.getElementById('countdown');
countdownEl.innerHTML = "01:00";


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 1 ? "0" + seconds : seconds;
    countdownEl.innerHTML = `0${minutes}:${seconds}`;
    time--;
    console.log(time)
    if (time === -1) {
        // document.querySelector("0");
        clearInterval(countDownInterval);
        console.log('did i fire')
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
            document.querySelector(".main-body").style.backgroundColor = "green";

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "red";
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
            document.querySelector(".main-body").style.backgroundColor = "green";

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "red";
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
            document.querySelector(".main-body").style.backgroundColor = "green";

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "red";
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
            document.querySelector(".main-body").style.backgroundColor = "green";

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "red";
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
            document.querySelector(".main-body").style.backgroundColor = "green";

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "red";
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
            document.querySelector(".main-body").style.backgroundColor = "green";

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "red";
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
            document.querySelector(".main-body").style.backgroundColor = "green";

        } else {
            //incorrect answer causes the main-body page to turn red
            document.querySelector(".main-body").style.backgroundColor = "red";
        }
        resultsPage.classList.remove("hidden")
    }
}

// Need function to increment correct answers



// Need function to decrement incorrect answers


//

startBtn.addEventListener("click", startQuiz)
captureListOfAnswers[0].addEventListener("click", makingAChoice);
captureListOfAnswers[1].addEventListener("click", makingAChoice2);
captureListOfAnswers[2].addEventListener("click", makingAChoice3);
captureListOfAnswers[3].addEventListener("click", makingAChoice4);
captureListOfAnswers[4].addEventListener("click", makingAChoice5);
captureListOfAnswers[5].addEventListener("click", makingAChoice6);
captureListOfAnswers[6].addEventListener("click", makingAChoice7);
