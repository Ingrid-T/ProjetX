
var questionNumber = document.querySelector(".question-number");
var questionQuiz = document.querySelector(".question-quiz");
var reponseContainer = document.querySelector(".reponse-container");
var compteurQuestion = 0;
var allquestions = [];
var allchoix = [];

function tableauQuestion () {
	var totalQuestion = quiz.length;
	for(index =0; index<totalQuestion; index++){
		allquestions.push(quiz[index])
	}
}

function newQuestion(){
	questionNumber.innerHTML = "Question n°" + (compteurQuestion + 1);
	var totalQuestion = quiz.length;
	for(index =0; index<totalQuestion; index++){
	questionQuiz.innerHTML = quiz[index].question;

	compteurQuestion++
	}
}
	

function next(){
	if(compteurQuestion === quiz.length){
		console.log("FINI")
	}else{
		newQuestion();
	}
}

window.onload = function(){
	tableauQuestion();
	newQuestion();
}