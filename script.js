const questions = [
    {
        question : "What does HTML stand for?",
        answers:[
            { text: "HyperText Markup Language",correct:true },
            { text: "High-Level Text Management Language",correct:false },
            { text: "Hyperlink and Text Markup Language",correct:false },
            { text: "HyperTransfer Markup Language",correct:false },

        ]
    },
    {
        question : " What is the FullForm of CSS in web development?",
        answers:[
            { text: "Client-Side Scripting",correct:false },
            { text: "Cascading Style Sheets",correct:true },
            { text: "Common Style Sheet",correct:false },
            { text: "Computer Style System",correct:false },

        ]
    },
    {
        question : " In Python, what is the function used for getting user input from the console?",
        answers:[
            { text: "input()",correct:true },
            { text: "read()",correct:false},
            { text: "get_user_input()",correct:false },
            { text: "console.input()",correct:false },

        ]  
    },
    {
        question : "Which programming language is known for its use in data science and machine learning?",
        answers:[
            { text: "Javascript",correct:false },
            { text: "Java",correct:false },
            { text: "Python",correct:true },
            { text: "c++",correct:false },

        ]  
    },
    {
        question : " Which sorting algorithm has an average time complexity of O(n log n)?",
        answers:[
            { text: "Bubble Sort",correct:false },
            { text: "Insertion Sort",correct:false },
            { text: "Quick Sort",correct:true},
            { text: "Selection Sort",correct:false },

        ]  
    },
    {
        question : "What is the purpose of the 'try' and 'except' blocks in Python?",
        answers:[
            { text: "Loop control",correct:false },
            { text: "Variable assignment",correct:false },
            { text: "File input/output",correct:false},
            { text: "Exception handling",correct:true },

        ]  
    },
    {
        question : " What is the difference between HTTP and HTTPS?",
        answers:[
            { text: "HTTP is faster than HTTPS",correct:false },
            { text: " HTTPS is more secure as it uses encryption",correct:true},
            { text: "They are the same protocol",correct:false},
            { text: " HTTP is used for static content, and HTTPS for dynamic content",correct:false },

        ]  
    },
    {
        question : "What does SQL stand for?",
        answers:[
            { text: "Structured Query Language",correct:true },
            { text: "Server Quality Language",correct:false },
            { text: "System Query Language",correct:false},
            { text: "Standardized Query Language",correct:false },

        ]  
    },
    {
        question : "How do you create a new branch in Git?",
        answers:[
            { text: " git branch new-branch",correct:false},
            { text: " git checkout -b new-branch",correct:true },
            { text: " git create new-branch",correct:false},
            { text: " git branch -create new-branch",correct:false },

        ]  
    },
    {
        question : "How do you view the commit history in Git?",
        answers:[
            { text: "git log",correct:true },
            { text: "git history",correct:false },
            { text: "git show",correct:false},
            { text: "git status",correct:false },

        ]  
    },
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}



function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";  
}
 function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart Quiz";
    nextButton.style.display = "block";
 }



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})




startQuiz();