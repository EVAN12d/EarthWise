var categories = [
    {
        name: "Myanmar Earthquake History",
        video: "earthquake_history.mp4",
        questions: [
            {
                question: "Which major fault is responsible for many significant earthquakes in Myanmar?",
                options: [
                    "Sagaing Fault",
                    "San Andreas Fault",
                    "Alpine Fault",
                    "Great Rift Valley"
                ],
                answer: 0,
                explanation: "The Sagaing Fault is a major active fault that runs through central Myanmar."
            },
            {
                question: "What type of plate movement mainly occurs along the Sagaing Fault?",
                options: [
                    "The plates move apart",
                    "The plates slide horizontally past each other",
                    "One plate sinks beneath another",
                    "The plates stop moving completely"
                ],
                answer: 1,
                explanation: "The Sagaing Fault is mainly a strike-slip fault, where blocks of the Earth's crust slide past one another."
            },
            {
                question: "Why is Myanmar vulnerable to earthquakes?",
                options: [
                    "It is surrounded by deserts",
                    "It has no mountains",
                    "It lies near active tectonic plate boundaries and faults",
                    "It experiences heavy rain every day"
                ],
                answer: 2,
                explanation: "Myanmar's tectonic setting and active faults make several areas vulnerable to earthquakes."
            },
            {
                question: "Which of these can be a consequence of a strong earthquake?",
                options: [
                    "Buildings becoming earthquake-proof automatically",
                    "Roads and buildings being damaged",
                    "All rivers disappearing",
                    "Weather stopping permanently"
                ],
                answer: 1,
                explanation: "Strong ground shaking can damage buildings, roads, bridges, and other infrastructure."
            },
            {
                question: "What is an important lesson from past earthquakes?",
                options: [
                    "Earthquakes can always be predicted exactly",
                    "Only people near mountains need to prepare",
                    "Preparedness and safer buildings can reduce risks",
                    "Emergency plans are unnecessary"
                ],
                answer: 2,
                explanation: "Learning from past events helps communities improve building safety and emergency preparedness."
            }
        ]
    },
    {
        name: "Understanding Earthquakes",
        video: "understanding_earthquake.mp4",
        questions: [
            {
                question: "What causes most earthquakes?",
                options: [
                    "Movement along faults in the Earth's crust",
                    "Changes in the clouds",
                    "Ocean tides alone",
                    "The Earth's rotation stopping"
                ],
                answer: 0,
                explanation: "Most earthquakes occur when stress causes rocks to slip along faults, releasing stored energy."
            },
            {
                question: "What is the point inside the Earth where an earthquake begins called?",
                options: [
                    "The epicentre",
                    "The focus",
                    "The mantle",
                    "The crater"
                ],
                answer: 1,
                explanation: "The focus, also called the hypocentre, is where the earthquake starts underground."
            },
            {
                question: "What is the epicentre of an earthquake?",
                options: [
                    "The deepest part of the mantle",
                    "The end of a fault",
                    "The point on the Earth's surface directly above the focus",
                    "The place where all aftershocks stop"
                ],
                answer: 2,
                explanation: "The epicentre is the surface location directly above the earthquake's focus."
            },
            {
                question: "What do seismometers help scientists do?",
                options: [
                    "Measure and record ground motion",
                    "Stop tectonic plates moving",
                    "Prevent every aftershock",
                    "Predict the exact date of every earthquake"
                ],
                answer: 0,
                explanation: "Seismometers record ground movements and help scientists study earthquakes."
            },
            {
                question: "What is the difference between magnitude and intensity?",
                options: [
                    "They mean exactly the same thing",
                    "Magnitude measures earthquake size; intensity describes shaking and effects at a location",
                    "Intensity measures rainfall only",
                    "Magnitude measures building height"
                ],
                answer: 1,
                explanation: "Magnitude describes the earthquake's size, while intensity describes how strongly it is felt and its effects in a particular place."
            }
        ]
    },
    {
        name: "Earthquake Safety Challenge",
        video: "safety.mp4",
        questions: [
            {
                question: "What should you do during earthquake shaking if you are indoors?",
                options: [
                    "Run towards the windows",
                    "Use the elevator",
                    "Drop, Cover, and Hold On",
                    "Stand beside a glass cabinet"
                ],
                answer: 2,
                explanation: "Drop, Cover, and Hold On helps protect you from falling objects and debris."
            },
            {
                question: "Where is a safer place to take cover indoors?",
                options: [
                    "Under a sturdy table or desk",
                    "Beside a large window",
                    "Under a hanging light",
                    "Inside an elevator"
                ],
                answer: 0,
                explanation: "If possible, get under sturdy furniture, cover your head and neck, and hold on until shaking stops."
            },
            {
                question: "What should you do if you are outside during an earthquake?",
                options: [
                    "Stand beside a building",
                    "Move to an open area away from buildings and power lines",
                    "Run beneath a bridge",
                    "Stand next to a streetlight"
                ],
                answer: 1,
                explanation: "If you can move safely, get to an open area away from structures and overhead hazards."
            },
            {
                question: "Why should you prepare an emergency kit?",
                options: [
                    "To make your bag heavier",
                    "To replace every emergency service",
                    "To avoid following safety instructions",
                    "To have essential supplies available during an emergency"
                ],
                answer: 3,
                explanation: "An emergency kit can contain water, food, a flashlight, a first-aid kit, and other essential supplies."
            },
            {
                question: "What should you do after the shaking stops?",
                options: [
                    "Immediately use a damaged elevator",
                    "Ignore official warnings",
                    "Check for hazards, follow emergency instructions, and be ready for aftershocks",
                    "Return to a damaged building without checking its safety"
                ],
                answer: 2,
                explanation: "Stay alert for aftershocks, avoid damaged structures, and follow instructions from local authorities."
            }
        ]
    }
];

var descriptions = [
    "Explore important earthquakes in Myanmar's history and learn how they affected communities.",
    "Discover how earthquakes happen, how scientists study them, and what makes communities vulnerable.",
    "Challenge yourself with earthquake safety questions and learn how to protect yourself during an emergency."
];

var currentCategory = 0;
var currentQuestion = 0;
var score = 0;
var answered = false;

function updateCategory() {
    var quiz = categories[currentCategory];

    document.getElementById("videoTitle").textContent = quiz.name;

    document.getElementById("videoDescription").textContent =
        descriptions[currentCategory];

    document.getElementById("quizIntroText").textContent =
        "Ready to explore " + quiz.name.toLowerCase() +
        "? Answer five multiple-choice questions and see how much you know.";

    var video = document.getElementById("quizVideo");

    video.pause();
    video.src = quiz.video;
    video.load();

    document.getElementById("quizIntro").style.display = "block";
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("resultScreen").style.display = "none";

    currentQuestion = 0;
    score = 0;
    answered = false;
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;

    document.getElementById("quizIntro").style.display = "none";
    document.getElementById("resultScreen").style.display = "none";
    document.getElementById("quizContent").style.display = "block";

    showQuestion();
}

function showQuestion() {
    var quiz = categories[currentCategory];
    var question = quiz.questions[currentQuestion];

    document.getElementById("quizContent").style.display = "block";
    document.getElementById("resultScreen").style.display = "none";

    document.getElementById("questionCount").textContent =
        "Question " + (currentQuestion + 1) +
        " of " + quiz.questions.length;

    document.getElementById("progressFill").style.width =
        ((currentQuestion + 1) / quiz.questions.length * 100) + "%";

    document.getElementById("questionText").textContent =
        question.question;

    var feedback = document.getElementById("feedback");
    feedback.className = "feedback";
    feedback.textContent = "";

    var nextBtn = document.getElementById("nextBtn");
    nextBtn.style.display = "none";
    nextBtn.innerHTML = 'Next Question <i class="bi bi-arrow-right"></i>';

    var answerArea = document.getElementById("answerOptions");
    answerArea.innerHTML = "";

    answered = false;

    for (var i = 0; i < question.options.length; i++) {
        var button = document.createElement("button");

        button.type = "button";
        button.className = "answer-btn";
        button.textContent =
            String.fromCharCode(65 + i) + ". " + question.options[i];

        button.onclick = function () {
            checkAnswer(this);
        };

        answerArea.appendChild(button);
    }
}

function checkAnswer(selectedButton) {
    if (answered) {
        return;
    }

    answered = true;

    var quiz = categories[currentCategory];
    var question = quiz.questions[currentQuestion];
    var buttons = document.querySelectorAll(".answer-btn");

    var selectedIndex = Array.from(buttons).indexOf(selectedButton);
    var feedback = document.getElementById("feedback");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;

        if (i === question.answer) {
            buttons[i].classList.add("correct");
        }
    }

    if (selectedIndex === question.answer) {
        score++;

        feedback.className = "feedback show success";
        feedback.textContent = "Correct! " + question.explanation;
    } else {
        selectedButton.classList.add("wrong");

        feedback.className = "feedback show error";
        feedback.textContent =
            "Not quite! The correct answer is " +
            question.options[question.answer] + ". " +
            question.explanation;
    }

    var nextBtn = document.getElementById("nextBtn");

    if (currentQuestion === quiz.questions.length - 1) {
        nextBtn.innerHTML =
            'See My Results <i class="bi bi-arrow-right"></i>';
    } else {
        nextBtn.innerHTML =
            'Next Question <i class="bi bi-arrow-right"></i>';
    }

    nextBtn.style.display = "inline-block";
}

function nextQuestion() {
    if (!answered) {
        return;
    }

    var quiz = categories[currentCategory];

    if (currentQuestion < quiz.questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quizContent").style.display = "none";
    document.getElementById("resultScreen").style.display = "block";

    document.getElementById("scoreText").textContent =
        "You scored " + score + " out of " +
        categories[currentCategory].questions.length +
        "! Great work exploring earthquake awareness.";
}

function changeCategory(index, button) {
    currentCategory = index;

    var buttons = document.querySelectorAll(".category-btn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    button.classList.add("active");

    updateCategory();
}

function restartQuiz() {
    startQuiz();
}

updateCategory();
