
var currentIndex = 0;

var timeLeft = 75;
var timeEl = document.getElementById("time");
function startTimer() {
    setInterval(function () {
        timeEl.textContent = timeLeft;
        timeLeft--;
    }, 1000)
};

function answerClick(event) {
    var clickAnswer = event.target.textContent;

    var correctAnswer = questions[currentIndex].correct;

    if (clickAnswer == correctAnswer) {
        alert("correct")
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
}

