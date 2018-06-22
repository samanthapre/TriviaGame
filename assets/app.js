function Question(text, choices, answer) {
    this.text=text;
    this.choices = choices;
    this.answer = answer;
    
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;

} 


//controller
function Quiz (questions) {
    this.score =0;
    this.quesions = quesions;
    this.questionIndex =0;

}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions(this.questionIndex);

}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;

}

 Quiz.prototype.guess = function(answer) {
     this.questionIndex++ ;

    if (this.getQuestionIndex().correctAnswer(answer) ) {
        this.score++;


    }


function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex() .text;

        //show choices
        var choice = quiz.getQuestionIndex().choices;
        for(var i=0; i< choices.length; i++ ) {
            var element = document.getElementById("choices"  + i);
            element.innerHTML = choices[i];
            guesses("btn" + i,choices [i]);


        }
    }
}

function guess(id, guesses) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess) ;
        populate();

    }
}

function showProgress(){
    var currentQuestionNumbers = quiz.question + 1;
    var element = documentHTML = "question " + currentQuestionNumbers + "of "  + quiz.quesions.length;

}


function showScores(){
    var gameOverHtml = "<h1> Result </h1>";
    gameOverhtml += "<h2 id='score'> your scores: + quiz.score + </h2>";
    var element =document.getElementById("quiz");
    element.innerHTML = gameOverhtml;


}
var questions = [{
    question: "Which tech mogul provided funding and became a co-founder of Pixar?",
	answerList: ["Steve Jobs", "Bill Gates", "Peter Thiel", "Mark Zuckerberg"],
	answer: 0
},{
    question: "He won the NBA MVP the past two years.",
    answerList: ["Stephen Curry", "Jimmy Butler", "Shabazz Muhammed", "Karl Anthony-Towns"],
    answer: 0
},{
    question: "Pixar was originally a division of which studio?",
	answerList: ["Dreamworks", "Industrial Light & Magic", "Disney", "Lucasfilm"],
    answer: 3
},{  
    question: "Who voiced Sadness in 'Inside Out'?",
	answerList: ["Amy Poehler", "Phyllis Smith", "Mindy Kaling", "Phyllis Vance"],
    answer: 1

}];


var quiz = new Quiz(questions);

populate();
 }
