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


var questions = [
    {
        questionText: "What programming language is used to style a webpage?",
        choices: ["Option 1","css", "Option3", "Option4"],
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

for (var i = 0; i < questions.length; i++) {
    // get the question
    var question = questions[i];
    // get the question text and do something with it, put it on document
    question.questionText;
}questionText()




// // Counter in local storage
// var counter = document.querySelector("#counter");
// var addButton = document.querySelector("#add");
// var subtractButton = document.querySelector("#subtract");

// var count = localStorage.getItem("count");

// counter.textContent = count;

// addButton.addEventListener("click", function() {
//   count++;
//   counter.textContent = count;

//   localStorage.setItem("count", count);
// });

// subtractButton.addEventListener("click", function() {
//   count--;
//   counter.textContent = count;

//   localStorage.setItem("count", count);
// });

// // testing
// var h1 = document.createElement("h1");
// var h1Text = document.createTextNode("Hello Kitty");
// h1.appendChild(h1Text);
// document.body.appendChild(h1);