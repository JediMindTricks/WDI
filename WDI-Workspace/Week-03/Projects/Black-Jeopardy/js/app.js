// ********TIMER*********

// As a user I want to have a timer that counts down from one minute to 
// 0 and will display alert letting you know time is up and will display 
// the score
//*******************************

// Create var for the start button
var $start = $('.start');
// Create var for the score
var score = 0;
var timer;
// Create global Var for currentPlayer
var currentPlayer = 0;
// Keep track of which question we are on
var currentQuestion = 0;

// Create countdown function
function countdown() {
	// Check if button was pressed

	// Turn string into a number for timer
	var num = Number($('#seconds').text())

	if (num > 0) {
		num = num - 1;
		// Print number to console
		console.log(num + ' Seconds Left');
		$('#seconds').text(num);
	} else if (num == 0) {
		console.log('Game Over');
		// cancel the countdown function
        clearInterval(timer);
		// Alert player that game is over
        alert('Game Over! Times Up! Your Score: ' + score);
        // Resets the timer
        $('#seconds').text('30');
        // Checks current player
        if (currentPlayer == 0) {
        	// If player 1 set score and reset timer
        	$('#points').text('0');
        	$('#playerOne').text(score)
        	// changes questions to restart
        	currentQuestion = 0;
        	// Clears score variable
        	score = 0;
        	// Update player info
        	currentPlayer++
        } else if (currentPlayer == 1) {
        	$('#playerTwo').text(score);
        }
	}
}


// Callback function to call countdown
function start() {
	timer = setInterval(countdown, 1000);
}

// Place event listener on start btn
$('.start').on('click', start);

// As a user I want to keep track of the number of questions I got right

// ********QUESTIONS*********
// As a user I want to see the question displayed and 
// update after each question was answered
//*************************



var questionsArray = ["What time was Usher in his drop-top cruising the streets?", 
				 "How can you unbreak Toni Braxton's heart?",
				 "If Shai ever falls in love again, what will he be sure of?",
				 "How much was Erykah Badu born under water with?",
				 "Why can't R.L. and Deborah Cox be friends",
				 "What should you do to prove to Destiny's Child that you ain't running game?",
				 "What should you do if you want Fantasia?",
				 "What was T-Pain tryna buy that girl?",
				 "Where was Mary J. Blige going?",
				 "What wern't you supposed to bring to the dancery?",
				 "How long did Tevin Campbell wanna talk?",
				 "Without his girl, what was Sisqo's life?"];

var answers = ["7 o'clock on the dot", 
			   "Say you love her again.",
			   "That the lady is a friend",
			   "3 dollars and 6 dimes!",
			   "Cause they're still in love.",
			   "Say 'Baby, I love you.'",
			   "Don't talk to her!",
			   "A Drank.",
			   "Down.",
			   "Hateration",
			   "For a minute.",
			   "Incomplete!" ]

var quiz = {answer0: "7 o'clock on the dot",
				 answer1: "Say you love her again.",
				 answer2: "That the lady is a friend",
				 answer3: "3 dollars and 6 dimes!",
				 answer4: "Cause they're still in love.",
				 answer5: "Say 'Baby, I love you.'",
				 answer6: "Don't talk to her!",
				 answer7: "A Drank.",
				 answer8: "Down.",
				 answer9: "Hateration",
				 answer11: "For a minute.",
				 answer12: "Incomplete!"
				}

// Create function that will insert the first question on start button clicked

function displayQuestion() {
	// Set the question rectangle to have a question inside
	$('.questions').text(questionsArray[currentQuestion])
}

$('.start').on('click', displayQuestion);

// As a user I want to click an answer and if the answer 
// is correct or wrong I want an alert to come on screen 
// then refresh the question and answers. Will also update 
// score with each answer

$('.start').on('click', fillAnswerButtons)

		// 	function to generate random number
		function randomInt(min, max) {
			return Math.round((Math.random() * (max - min)) + min);
		}

  function fillAnswerButtons() {
        	$('#btn1').text(answers[currentQuestion + 0]);
        	$('#btn2').text(answers[randomInt(0, 11)]);
        	$('#btn3').text(answers[currentQuestion + 1]);
        	$('#btn4').text(answers[randomInt(0, 11)]);    
}

// Adding 4 event listeners

$('#btn1').on('click', buttonLogic);
$('#btn2').on('click', buttonLogic);
$('#btn3').on('click', buttonLogic);
$('#btn4').on('click', buttonLogic);

// Creatign function to go in all the buttons
function buttonLogic() {
	if ($(this).text() == answers[currentQuestion]) {
		console.log("You was Right!");
		currentQuestion++
		displayQuestion()
		fillAnswerButtons()
		score++
		$('#points').text(score)
	} else {
		console.log("You was wrong!");
	}
}
// Var to give some variety

