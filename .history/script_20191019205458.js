// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var btn3 = document.getElementById("btn3");
// var btn4 = document.getElementById("btn4");
var currQuestionDiv = document.getElementById("question");
var answersDiv = document.getElementById("answers");

var questions = [
    {
        questionText: "What programming language is used to style a webpage?",
        choices: ["HTML", "css", "Javascript", "C++"],
        answer: "css"
    },
    {
        questionText: "Which one is a DOM element?",
        choices: ["Attribute", "String", "addEventListener", "Number"],
        answer: "addEventListener"
    },
    {
        questionText: "Which is a DOM attribute?",
        choices: ["value", "onClick", "Children", "Class"],
        answer: "value"
    },
    {
        questionText: "What is the standard markup language for web pages?",
        choices: ["Python", "JAVA", "C++", "HTML"],
        answer: "HTML"
    },
    {
        questionText: "What is the first child of an HTML element?",
        choices: ["Option 1", "Option 2", "Option3", "parameters"],
        answer: "Head"
    }
];


 
var counter = 0;
var questIndex = 0;
var seconds
var timerInterval;

function startTimer(){
    clearInterval(timerInterval);
    seconds = 0;
    timerInterval = setInterval(function(){
        console.log(seconds, timerInterval);
        seconds++;
        // if(seconds ===){
        //     clearInterval(timerInterval);
        //     questIndex++;
            if(questIndex > questions.length){
                clearInterval(timerInterval);
                questionText();
            }
        }
    , 1000);
    
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
        questIndex++;
        counter = counter + 1;
        alert ("yay, you've got  "  + counter+"/ 5" + "right!");
        
        questionText();
      
    } else {
        alert("Incorrect!")
        questIndex++; 
        questionText();
    }
   
}

questionText() 






