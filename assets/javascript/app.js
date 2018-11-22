//------------------------------------
// Global Variables
//------------------------------------

    var counterRunning = false;
    var counter = 60;
    var timer;
    var total = 5 // setting the number of questions to 5
    var answers = ["d", "a", "d", "b", "b"];
    var q1;
    var q2;
    var q3;
    var q4;
    var q5;
    var results;
    var score = 0;
    var unanswered = 0; // initializing the score to zero

//------------------------------------
// Function Definition Declarations
//------------------------------------

    // Decrements the timer when the quiz is started
    function decrement() {
        counter--;
        $("#counter").html("<h2 id='question'>Time remaining to answer these questions: " + counter + "</h2>"); // display counter
        if ( counter === 0) {
            clearInterval(timer);
            submitAnswers();
        }
    }

    // Kicked off when the Submit Answers button is clicked
    function submitAnswers() {
        recordAnswers();
        validation();
        checkAnswers();
        displayResults();
    }

    function recordAnswers() {
        q1 = document.forms["quizForm"]["q1"].value;
        q2 = document.forms["quizForm"]["q2"].value;
        q3 = document.forms["quizForm"]["q3"].value;
        q4 = document.forms["quizForm"]["q4"].value;
        q5 = document.forms["quizForm"]["q5"].value;
    }

    function validation() {
        if ( counter !== 0 ) {
            for ( var i = 1; i <= total; i++ ) {
                if ( eval('q' + i) == null || eval('q' + i) == "" ) {
                    alert("You missed question " + i);
                    return false;
                }
            }
        } else {
            for ( var i = 1; i <= total; i++ ) {
              // set all unanswered questions to incorrect
              if ( eval('q' + i) == null ) {
                  unanswered++; 
              }
            }
        }
        console.log(unanswered);
    }

    function checkAnswers() {
        for ( var i = 1; i <= total; i++ ) {
            if( eval('q' + i) == answers[i-1]) {
                score++;
            } else {
                return false;
            }
        }
    }

    function displayResults() {
        results = $("#results").html("<h3>You scored <span>" + score + "</span> out of <span>" + total + "</span></h3>");
        alert("You scored " + score + " out of " + total);
        
        return false;
    }

//------------------------------------
// Script / Gameplay
//------------------------------------

    $("#main").hide();
    $("#counter").hide();

    // when the user clicks the START button
    $("#start").on("click", function() {
        $("#start").hide(); // remove the start button from the screen
        $("#main").show(); // show the previous hidden main section containing the questions
        $("#counter").show(); // show the counter as it counts down
        timer = setInterval(decrement, 1000); // find out why there is a delay before this shows up
    });