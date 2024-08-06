const questions = [
    {
        question: "Which HTML tag is used to define a paragraph?",
        options: ["&lt;p&gt;", "&lt;paragraph&gt;", "&lt;para&gt;", "&lt;par&gt;"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"],
        correct: 0
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlinking Text Marking Language"],
        correct: 0
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "id", "styles"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define a table header?",
        options: ["&lt;th&gt;", "&lt;tr&gt;", "&lt;td&gt;", "&lt;thead&gt;"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to embed an image?",
        options: ["&lt;img&gt;", "&lt;image&gt;", "&lt;pic&gt;", "&lt;src&gt;"],
        correct: 0
    },
    {
        question: "Which HTML attribute is used to provide an alternate text for an image?",
        options: ["alt", "src", "title", "longdesc"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define a list item?",
        options: ["&lt;li&gt;", "&lt;item&gt;", "&lt;ul&gt;", "&lt;list&gt;"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define emphasized text?",
        options: ["&lt;em&gt;", "&lt;i&gt;", "&lt;italic&gt;", "&lt;strong&gt;"],
        correct: 0
    },
    {
        question: "Which HTML attribute is used to define a unique identifier for an element?",
        options: ["id", "class", "name", "key"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define a division or a section?",
        options: ["&lt;div&gt;", "&lt;section&gt;", "&lt;span&gt;", "&lt;container&gt;"],
        correct: 0
    },
    {
        question: "Which HTML attribute is used to specify a web address for a hyperlink?",
        options: ["href", "link", "url", "src"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define a table row?",
        options: ["&lt;tr&gt;", "&lt;td&gt;", "&lt;th&gt;", "&lt;table&gt;"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define a line break?",
        options: ["&lt;br&gt;", "&lt;lb&gt;", "&lt;break&gt;", "&lt;newline&gt;"],
        correct: 0
    },
    {
        question: "Which HTML attribute is used to define the character encoding?",
        options: ["charset", "encoding", "char", "code"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define bold text?",
        options: ["&lt;b&gt;", "&lt;strong&gt;", "&lt;bold&gt;", "&lt;em&gt;"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define the document's body?",
        options: ["&lt;body&gt;", "&lt;html&gt;", "&lt;head&gt;", "&lt;section&gt;"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define a form?",
        options: ["&lt;form&gt;", "&lt;input&gt;", "&lt;submit&gt;", "&lt;action&gt;"],
        correct: 0
    },
    {
        question: "Which HTML tag is used to define a title for the document?",
        options: ["&lt;title&gt;", "&lt;head&gt;", "&lt;header&gt;", "&lt;h1&gt;"],
        correct: 0
    }
];

let currentQuestion = 0;
let selectedOptions = Array(questions.length).fill(-1);
let userName = '';

function startQuiz() {
    console.log('Start Quiz button clicked');
    userName = document.getElementById('userNameInput').value;
    console.log('User name:', userName);
    if (userName.trim() === '') {
        alert('Please enter your name to start the quiz.');
        return;
    }
    document.querySelector('.start-container').style.display = 'none';
    document.querySelector('.quiz-container').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const quizContainer = document.getElementById('quiz');
    const question = questions[currentQuestion];
    quizContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <ul class="options">
            ${question.options.map((option, index) => `<li class="${selectedOptions[currentQuestion] === index ? 'selected' : ''}" onclick="selectOption(${index})">${option}</li>`).join('')}
        </ul>
    `;

    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').style.display = currentQuestion === questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submitBtn').style.display = currentQuestion === questions.length - 1 ? 'inline-block' : 'none';
}

function selectOption(index) {
    selectedOptions[currentQuestion] = index;
    loadQuestion();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function showResults() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (selectedOptions[i] === questions[i].correct) {
            score++;
        }
    }
    const percentage = (score / questions.length) * 100;
    let feedback = '';
    if (percentage < 50) {
        feedback = 'Very Bad. Try Again!';
    } else if (percentage >= 50 && percentage < 75) {
        feedback = 'Average. Keep Improving!';
    } else {
        feedback = 'Very Good. Congratulations!';
        generateCertificate();
    }

    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.navigation-buttons').style.display = 'none';
    document.getElementById('resultCertificateContainer').style.display = 'block';
    document.getElementById('results').innerHTML = `
        <p>Your Score: ${score}/${questions.length}</p>
        <p>${feedback}</p>
    `;
}

function generateCertificate() {
    const userNameElement = document.getElementById('userName');
    const currentDateElement = document.getElementById('currentDate');
    userNameElement.textContent = userName;
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    currentDateElement.textContent = `${day} ${month} ${year}`;

    document.getElementById('certificateContainer').style.display = 'block';
}

function downloadCertificate() {
    const certificateElement = document.getElementById('certificate');
    html2canvas(certificateElement).then(canvas => {
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}
