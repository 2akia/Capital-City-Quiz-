
var currentIndex = 0;

var timeLeft = 75;
var timeEl = document.getElementById("time");

function startTimer() {
    var timerInterval = setInterval(function () {
        timeEl.textContent = timeLeft;
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000)
};

function endGame() {
    clearInterval(timerInterval);
    timeLeft = Math.max(timeLeft, 0);
    timeEl.textContent = timeLeft;

    var questionContainer = document.getElementById("questions");
    questionContainer.classList.add("hide");
    var endScreen = document.getElementById("end-screen");
    endScreen.classList.remove("hide");

    var finalScoreE1 = document.getElementById("final - score");
    finalScoreE1.textContent = score;

    var submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", saveScore);
}

function answerClick(event) {
    var clickAnswer = event.target.textContent;

    var correctAnswer = questions[currentIndex].correct;

    if (clickAnswer == correctAnswer) {
        alert ("correct")
    } else {
        alert("wrong")
    }

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        displayQuestion();
    } else {
        var questionContainer = document.getElementById("questions");
        questionContainer.classList.add("hide");
        var endScreen = document.getElementById("end-screen");
        endScreen.classList.remove("hide");

    }
};

function displayQuestion() {
    var QuestionTitle = document.getElementById("question-title");
    QuestionTitle.textContent = questions[currentIndex].questionText;
    var btnOne = document.createElement("button");
    var btnTwo = document.createElement("button");
    var btnThree = document.createElement("button");
    var btnFour = document.createElement("button");

    btnOne.textContent = questions[currentIndex].answer[0];
    btnTwo.textContent = questions[currentIndex].answer[1];
    btnThree.textContent = questions[currentIndex].answer[2];
    btnFour.textContent = questions[currentIndex].answer[3];

    btnOne.addEventListener("click", answerClick);
    btnTwo.addEventListener("click", answerClick);
    btnThree.addEventListener("click", answerClick);
    btnFour.addEventListener("click", answerClick);


    var choices = document.getElementById("choices");
    choices.innerHTML = "";
    choices.append(btnOne, btnTwo, btnThree, btnFour);
};

var startbtn = document.getElementById("start");
startbtn.addEventListener("click", function () {
    var questionContainer = document.getElementById("questions");
    questionContainer.classList.remove("hide");
    var startScreen = document.getElementById("start-screen");
    startScreen.classList.add("hide");
    startTimer();
    displayQuestion();
});


