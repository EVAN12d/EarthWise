
const allQuestions = [
    [
        {
            question: "What should you prepare before an earthquake?",
            options: [
                "An emergency supply kit",
                "Only a mobile phone",
                "Heavy furniture",
                "Nothing"
            ],
            answer: 0
        },
        {
            question: "Why should heavy furniture be secured?",
            options: [
                "To make it look better",
                "To prevent it from falling",
                "To save electricity",
                "To make more space"
            ],
            answer: 1
        },
        {
            question: "Why should families make an emergency plan?",
            options: [
                "To predict earthquakes",
                "To stop earthquakes",
                "To know what to do during emergencies",
                "To prevent aftershocks"
            ],
            answer: 2
        }
    ],

    [
        {
            question: "What should you do when an earthquake starts indoors?",
            options: [
                "Run outside immediately",
                "Drop, Cover, and Hold On",
                "Use the elevator",
                "Stand near a window"
            ],
            answer: 1
        },
        {
            question: "What should you avoid during an earthquake?",
            options: [
                "Protecting your head",
                "Staying away from windows",
                "Taking cover under a sturdy table",
                "Using an elevator"
            ],
            answer: 3
        },
        {
            question: "What should you do if you are outdoors during an earthquake?",
            options: [
                "Move to an open area",
                "Stand near buildings",
                "Run under a bridge",
                "Stand near power lines"
            ],
            answer: 0
        }
    ],

    [
        {
            question: "What should you check after an earthquake?",
            options: [
                "Social media likes",
                "Injuries and nearby hazards",
                "Your school homework",
                "The weather forecast only"
            ],
            answer: 1
        },
        {
            question: "Why should you be careful after an earthquake?",
            options: [
                "Because earthquakes stop forever",
                "Because buildings become stronger",
                "Because aftershocks may occur",
                "Because the weather changes"
            ],
            answer: 2
        },
        {
            question: "What should you do if a building is badly damaged?",
            options: [
                "Enter to collect belongings",
                "Stay inside",
                "Use the elevator",
                "Stay away and follow official instructions"
            ],
            answer: 3
        }
    ],

    [
        {
            question: "What causes most earthquakes?",
            options: [
                "Heavy rainfall",
                "Movement of tectonic plates",
                "Strong winds",
                "Ocean waves"
            ],
            answer: 1
        },
        {
            question: "What happens when tectonic plates suddenly slip along a fault?",
            options: [
                "Energy is released",
                "Rainfall increases",
                "The Moon changes position",
                "All volcanoes erupt"
            ],
            answer: 0
        },
        {
            question: "What is a tectonic plate?",
            options: [
                "A type of earthquake warning",
                "A layer of the atmosphere",
                "A large moving section of Earth's lithosphere",
                "A type of ocean wave"
            ],
            answer: 2
        }
    ],

    [
        {
            question: "What do seismic waves carry?",
            options: [
                "Water",
                "Air",
                "Sunlight",
                "Energy"
            ],
            answer: 3
        },
        {
            question: "Which seismic waves usually travel the fastest?",
            options: [
                "P-waves",
                "S-waves",
                "Surface waves",
                "Ocean waves"
            ],
            answer: 0
        },
        {
            question: "Which instrument records seismic waves?",
            options: [
                "Thermometer",
                "Seismograph",
                "Barometer",
                "Rain gauge"
            ],
            answer: 1
        }
    ],

    [
        {
            question: "What can earthquakes cause on Earth's surface?",
            options: [
                "Rainbows",
                "Snowfall",
                "Ground cracks",
                "Cloud formation"
            ],
            answer: 2
        },
        {
            question: "What may happen to unstable slopes during an earthquake?",
            options: [
                "Landslides",
                "Tornadoes",
                "Droughts",
                "Heatwaves"
            ],
            answer: 0
        },
        {
            question: "What is soil liquefaction?",
            options: [
                "Soil turning into rock",
                "Soil becoming completely dry",
                "Soil becoming hotter",
                "Water-saturated soil temporarily losing strength during shaking"
            ],
            answer: 3
        }
    ],

    [
        {
            question: "Which major active fault runs through Myanmar?",
            options: [
                "San Andreas Fault",
                "Sagaing Fault",
                "Alpine Fault",
                "North Anatolian Fault"
            ],
            answer: 1
        },
        {
            question: "What type of fault is the Sagaing Fault mainly?",
            options: [
                "Normal fault",
                "Reverse fault",
                "Strike-slip fault",
                "Thrust fault"
            ],
            answer: 2
        },
        {
            question: "Why is the Sagaing Fault important to earthquake studies?",
            options: [
                "It is an active fault that can produce strong earthquakes",
                "It prevents all earthquakes in Myanmar",
                "It controls Myanmar's rainfall",
                "It is located on the Moon"
            ],
            answer: 0
        }
    ],

    [
        {
            question: "What is an earthquake's epicenter?",
            options: [
                "The deepest part of the ocean",
                "The center of a tectonic plate",
                "The location of a volcano",
                "The point on Earth's surface directly above the focus"
            ],
            answer: 3
        },
        {
            question: "What is the focus of an earthquake?",
            options: [
                "The nearest city",
                "The point inside Earth where the earthquake begins",
                "The highest mountain",
                "The place where rain falls"
            ],
            answer: 1
        },
        {
            question: "How can scientists locate an earthquake's epicenter?",
            options: [
                "By measuring rainfall",
                "By observing clouds",
                "By comparing seismic wave arrival times at stations",
                "By measuring air temperature"
            ],
            answer: 2
        }
    ],

    [
        {
            question: "Which location generally has greater earthquake hazard?",
            options: [
                "An area near an active fault",
                "An area with many trees",
                "An area with frequent rainfall",
                "An area with low temperatures"
            ],
            answer: 0
        },
        {
            question: "Which building is generally safer during earthquake shaking?",
            options: [
                "A building with weak foundations",
                "A building with damaged columns",
                "A building with poor construction",
                "A building designed to resist earthquakes"
            ],
            answer: 3
        },
        {
            question: "How can communities reduce earthquake risks?",
            options: [
                "By ignoring safety guidelines",
                "By improving building safety and emergency preparedness",
                "By removing all emergency supplies",
                "By avoiding earthquake drills"
            ],
            answer: 1
        }
    ]
];



let quizNumber = Number(new URLSearchParams(window.location.search).get("quiz") || 0);

if (!Number.isInteger(quizNumber) || quizNumber < 0 || quizNumber > 8) {
    quizNumber = 0;
}
const questions = allQuestions[quizNumber];

let quizTitles = [
    "Safety Protocol > Before an earthquake",
    "Safety Protocol > During an earthquake",
    "Safety Protocol > After an earthquake",
    "Scientific Knowledge > Tectonic Plate Movements",
    "Scientific Knowledge > Seismic Waves",
    "Scientific Knowledge > Effects on Earth's Surface",
    "Geography > Myanmar Fault Lines",
    "Geography > Epicenters",
    "Geography > Earthquake Risk"
];

document.querySelector(".quiz-label").textContent = quizTitles[quizNumber];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];

function showQuestion() {
    selectedAnswer = null;

    document.getElementById("questionNumber").textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    document.getElementById("questionText").textContent =
        questions[currentQuestion].question;

    let optionsHTML = "";

    questions[currentQuestion].options.forEach(function(option, index) {
        optionsHTML += `
            <button class="answer-btn" onclick="checkAnswer(${index})">
                ${String.fromCharCode(65 + index)}. ${option}
            </button>
        `;
    });

    document.getElementById("answerOptions").innerHTML = optionsHTML;
    document.getElementById("nextBtn").disabled = true;

    if (currentQuestion === questions.length - 1) {
        document.getElementById("nextBtn").textContent = "View Results";
    } else {
        document.getElementById("nextBtn").textContent = "Next Question";
    }
}

function checkAnswer(index) {
    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = index;
    userAnswers.push(index);

    let correctAnswer = questions[currentQuestion].answer;
    let buttons = document.querySelectorAll(".answer-btn");

    if (index === correctAnswer) {
        score++;
        buttons[index].classList.add("correct");
    } else {
        buttons[index].classList.add("wrong");
        buttons[correctAnswer].classList.add("correct");
    }

    buttons.forEach(function(button) {
        button.disabled = true;
    });

    document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === null) {
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

let quizPoints = [200, 200, 200, 300, 300, 300, 350, 350, 350];
function showResults() {
    document.getElementById("questionPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";

    let earnedPoints = Math.round(score / questions.length * quizPoints[quizNumber]);
    let percentage = Math.round(score / questions.length * 100);

    saveQuizResult(earnedPoints, percentage);

    document.getElementById("finalScore").textContent =
        score + "/" + questions.length;

    document.getElementById("finalPoints").textContent = earnedPoints;

    if (score === questions.length) {
        document.getElementById("scoreMessage").textContent =
            "Good job! You got all the questions right.";
    } else {
        document.getElementById("scoreMessage").textContent =
            "You answered " + score + " out of " + questions.length + " questions correctly.";
    }

    let reviewHTML = "";

    questions.forEach(function(item, index) {
        let correct = userAnswers[index] === item.answer;

        reviewHTML += `
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#review${index}">
                        ${index + 1}. ${item.question}
                    </button>
                </h2>

                <div id="review${index}" class="accordion-collapse collapse"
                    data-bs-parent="#answerReview">
                    <div class="accordion-body">
                        <p>Your answer:
                            <span class="${correct ? 'text-success' : 'text-danger'}">
                                ${item.options[userAnswers[index]]}
                            </span>
                        </p>
                        <p>Correct answer:
                            <span class="text-success">
                                ${item.options[item.answer]}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById("answerReview").innerHTML = reviewHTML;
}

function saveQuizResult(earnedPoints, percentage) {
    let scores = JSON.parse(localStorage.getItem("scores") || "{}");
    let records = JSON.parse(localStorage.getItem("records") || "[]");

    let totalPoints = Number(localStorage.getItem("points")) || 0;
    let quizCount = Number(localStorage.getItem("quizCount")) || 0;

    totalPoints += earnedPoints;

    if (scores[quizNumber] === undefined) {
        quizCount++;
    }

    if (scores[quizNumber] === undefined || percentage > scores[quizNumber]) {
        scores[quizNumber] = percentage;
    }

    records.unshift({
        message: "Completed " + quizTitles[quizNumber] +
            " quiz (" + percentage + "%) and earned " + earnedPoints + " points",
        date: new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
        })
    });

    localStorage.setItem("points", totalPoints);
    localStorage.setItem("quizCount", quizCount);
    localStorage.setItem("scores", JSON.stringify(scores));
    localStorage.setItem("records", JSON.stringify(records));

    document.getElementById("pointsMessage").textContent =
        earnedPoints + " points added to your profile!";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = [];

    document.getElementById("resultPage").style.display = "none";
    document.getElementById("questionPage").style.display = "block";

    showQuestion();
}

showQuestion();
