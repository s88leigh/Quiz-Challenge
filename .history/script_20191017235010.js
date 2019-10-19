document.getElementById("btn1").addEventListener("click" ,function(){
    alert("Correct");
});
document.getElementById("btn2").addEventListener("click" ,function(){
    alert("Correct");
});
document.getElementById("btn3").addEventListener("click" ,function(){
    alert("Correct");
});
document.getElementById("btn4").addEventListener("click" ,function(){
    alert("Correct");
});

var question = 
    ["What programming language is used to style a webpage?"] "answer: css"
    ["Which one is a DOM element?"] "answer: addEventListener"
    ["Which is a DOM attribute?"] "answer: value"
    []
var questions = [
    {
        questionText: "What programming language is used to style a webpage?",
        choices: ["Option 1","Option 2", "Option3", "Option4"],
        answer: ""

    },
    {
        questionText: "What programming language is used to style a webpage?",
        choices: ["Option 1", "Option 2", "Option3", "Option4"],
        answer: " "       
    }
    
        questionText: "What programming language is used to style a webpage?",
        choices: ["Option 1", "Option 2", "Option3", "Option4"],
        answer: " "   
       
}
        questionText: "What programming language is used to style a webpage?",
        choices: ["Option 1", "Option 2", "Option3", "Option4"],
        answer: " "   
   
}
];
for (var i = 0; i < questions.length; i++) {
    // get the question
    var question = questions[i];
    // get the question text and do something with it, put it on document
    question.questionText;
}questionText


var h1 = document.createElement("h1");
var h1Text = document.createTextNode("Hello Kitty");
h1.appendChild(h1Text);

document.body.appendChild(h1);

