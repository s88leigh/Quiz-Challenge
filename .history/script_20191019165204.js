// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var btn3 = document.getElementById("btn3");
// var btn4 = document.getElementById("btn4");
var currQuestionDiv = document.getElementById("question");
var answersDiv = document.getElementById("answers");

var questions = [
    {
        questionText: "What programming language is used to style a webpage?",
        choices: ["Option 1", "css", "Option3", "Option4"],
        answer: "css"
    },
    {
        questionText: "Which one is a DOM element?",
        choices: ["Option 1", "Option 2", "addEventListener", "Option4"],
        answer: "addEventListener"
    },
    {
        questionText: "Which is a DOM attribute?",
        choices: ["value", "Option 2", "Option3", "Option4"],
        answer: "value"
    },
    {
        questionText: "What are the inputs of a function called?",
        choices: ["Option 1", "Option 2", "Option3", "parameters"],
        answer: "parameters"
    },
    {
        questionText: "What is the output of a function called?",
        choices: ["Option 1", "Option 2", "Option3", "parameters"],
        answer: "return"
    }
];
 

var questIndex = 0;
var seconds
var timerInterval;

function startTimer(){
    clearInterval(timerInterval);
    seconds = 10;
    timerInterval = setInterval(function(){
        console.log(seconds, timerInterval);
        seconds--;
        if(seconds === 0){
            clearInterval(timerInterval);
            questIndex++;
            if(questIndex > questions.length){
                questionText();
            }
        }
    }, 1000);
    
}
function questionText() {
    startTimer();
 
    var currentQuestion = questions[questIndex];
    currQuestionDiv.innerText = currentQuestion.questionText;

    answersDiv.innerHTML = "";
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var button = document.createElement("button");
        var newline = document.createElement("br");
        button.innerText = currentQuestion.choices[i];
        button.onclick = clickButton;
        button.setAttribute("value", currentQuestion.choices[i])

        answersDiv.appendChild(button)
        answersDiv.appendChild(newline)
    }
};

function clickButton() {
    var choice = this.value;

    if(choice === questions[questIndex].answer){
        alert("Correct");
        questionText();
      
    } else {
        alert("Incorrect. Try again!")
         questIndex++;
        // for( var i=0; i < choice.length; i++);
    }
   
}
questionText()
// for (var i = 0; i < questions.length; i++) {
//     // get the question
//     var question = questions[i];
//     // get the question text and do something with it, put it on document
//     question.questionText;
// }

// questionText()




