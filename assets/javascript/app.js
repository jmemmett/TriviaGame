//-------------------------
// GLOBAL VARIABLES
//-------------------------

    var triviaQuestions = [
        {"Question": "What's the answer for question 1?", "Answer": "true"},
        {"Question": "What's the answer for question 2?", "Answer": "false"},
    ];
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var counterRunning = false;
    var counter = 11;
    var timer;
    

//-------------------------
// FUNCTION DEFINITIONS
//-------------------------

    function decrement() {
        counter--;
        $("#counter").html("<p id='question'>Time remaining to answer these questions: " + counter + "</p>"); // display counter
        if ( counter === 0) {
            clearInterval(timer);
            alert("Game over!"); // game over
            // display scores
        }
    }

    function displayQuestions() {
        for ( i = 0; i < triviaQuestions.length; i++ ) {
            // var questions = $("<p>").text(triviaQuestions[i].Question);
            var label = $("<label name='question-" + i + "'>").html(triviaQuestions[i].Question);
            var trueLabel = $("<label>").html("true");
            var falseLabel = $("<label>").html("false");
            var trueRadio = $("<input type='radio' value='true' name='question-" + i + "'>");
            var falseRadio = $("<input type='radio' value='false' name='question-" + i + "'>");
            trueLabel.append(trueRadio);
            falseLabel.append(falseRadio);
            label.append(trueLabel).append(falseLabel);
            // var choices = $("<input type='radio'>").text(triviaQuestions[i].Answer);
            
            $("#question").append(label);
            // $("#question").append(choices);
            // $("#question").append(triviaQuestions[i]); // display the counter and let it count down from 15 seconds
            
            // if ( counter === 0 ) { // if the counter reaches zero
            //     incorrectAnswers++; // consider the answer to this question to be incorrect
                
            // } 
        }
    }

    function finalScore() {

    }

//-------------------------
// GAMEPLAY
//-------------------------

    $("#submit").hide();

    // when the user clicks the START button
    $("#start-btn").on("click", function() {
        $("#start").hide(); // remove the start button from the screen
        timer = setInterval(decrement, 1000); // find out why there is a delay before this shows up
        displayQuestions();
        $("#submit").show();
    })



        // loop through the triviaQuestions array/object
            // replace the previous question with the new question on the page
            // display multiple choice or true/false answer options
            // if user answers the question correctly, correctAnswers++
            // if user answers the question incorrectly, incorrectAnswers++
            // if user fails to enter before the timer hits zero, incorrectAnswers++
            // go back to the top of this loop (unless all questions have been asked/answered
    // start the timer and display it along with the first question
        // if the timer hits zero prior to the user answering the question, record their answer as incorrect and move on to the next question
    // record the answer to each question and use the answer to determine if it was correct or incorrect
    // the game ends either when the timer runs out or all questions have been answered
    // at the end of the game, replace any previous content displayed on the screen with the user's score