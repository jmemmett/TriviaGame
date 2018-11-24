//------------------------------------
// Global Variables
//------------------------------------

    var clock = 20;
    var clockRunning = false;
    var timer;
    var allQuestionsAnswered = false;
    var unanswered = 0;
    

//------------------------------------
// Function Definition Declarations
//------------------------------------

    // Called when the START button is clicked
    function countdown() {
        if (clockRunning && clock !== 0) {
            $("#counter").html("<h2 id='question'>Time remaining to answer these questions: " + clock + "</h2>"); // display counter on the web-page
            clock--; 
        } else {
            clockRunning = false;
            clearInterval(timer);
            $("#counter").html("<h2 id='question'>Time's up!</h2>");
            $("#submit").hide();
        }
    }

    function submitAnswers(){
        var total = 5;
        var score = 0;
        
        // Get User Input
        var q1 = document.forms["quizForm"]["q1"].value;
        var q2 = document.forms["quizForm"]["q2"].value;
        var q3 = document.forms["quizForm"]["q3"].value;
        var q4 = document.forms["quizForm"]["q4"].value;
        var q5 = document.forms["quizForm"]["q5"].value;
        
        // Validation
        for(i = 1; i <= total;i++){
            if(eval('q'+i) == null || eval('q'+i) == ''){
                alert('You missed question '+ i);
                return false;
            }
        }
        
        // Set Correct Answers
        var answers = ["d","a","d","b","b"];
        
        // Check Answers
        for(i = 1; i <= total;i++){
            if(eval('q'+i) == answers[i - 1]){
                score++;
            }
        }

        // stop the timer
        clearInterval(timer);
        $("#counter").hide();

        // Hide the Submit Answers button
        $("#submit").hide();
        
        // Display Results
        $("#results").show();
        $("#results").html("<h3>You scored <span>" + score + "</span> out of <span>" + total + "</span></h3>");
        console.log(score);
        
        return false;
    }

//------------------------------------
// Script / Gameplay
//------------------------------------

    // Initially hides the quiz elements until the start button is clicked 
    $("#main").hide(); // Section where the quiz content is displayed

    // Listener event for the START button click
    $("#start").on("click", function() {
        clockRunning = true;
        timer = setInterval(countdown, 1000); // Calls the  the startCountdown function and executes it every 1 second
        $("#start").hide(); // Hides the START button
        $("#results").hide(); // hide the results section until the end of the quiz
        $("#main").show(); // Displays the section containing the quiz content
        $("#submit").show();
    })