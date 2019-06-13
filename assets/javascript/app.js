var time = 0;
var rightAnswersCount = 0;
var wrongAnswersCount = 0;
var count;
var wins = 0;
var losses = 0;
var unanswered = 0;
//this is the timer
function myCountDown() {
    if (time > 0) {
        time--
        $("#countdown").html("Time left: " + time);
    }
    else {
        clearInterval(count)
        $(".QandA").hide();
        $(".snoozed").show();
    }
}
//resets the timer and shows the respective question when called
function secondQuestion() {
    time = 30;
    $(".hidden-message-right").hide();
    $(".hidden-message-wrong").hide();
    $(".hidden-question2").show();
    clearTimeout(secondQuestion);
    count = setInterval(myCountDown, 1000);
}
//resets the timer and shows the respective question when called
function thirdQuestion () {
    time = 30;
    $(".hidden-message-right").hide();
    $(".hidden-message-wrong").hide();
    $(".hidden-question3").show();
    clearTimeout(secondQuestion);
    count = setInterval(myCountDown, 1000);
}
//stops the timer
function stopCount() {
    clearInterval(count)
}
//adds up wins and losses
 function winLoss() {
     if (wins === 5) {
        $(".wins").html(wins);
        $(".losses").show();
     }
     else {
         wins++
     }
 };
 //Start button events(shows the first question and starts the timer)
$("#start-button").on("click", function() {
    count = setInterval(myCountDown, 1000);
    time = 30;    
    $("#start-button").hide();
    $(".hidden").show();
    $(".snoozed").hide();
});


//2nd question right and wrong answer events
$(".right-answer").on("click", function() {
    $(".QandA").hide();
    $(".hidden-message-right").show();
    setTimeout(secondQuestion, 3000);
    stopCount();
});
$(".wrong-answer").on("click", function() {
    $(".QandA").hide();
    $(".if-wrong").show();
    $(".if-wrong").html("The correct answer was:" + " D. 16");
    $(".hidden-message-wrong").show();
    setTimeout(secondQuestion, 3000);
    stopCount();
});


//3rd question right and wrong answer events
$(".right-answer2").on("click", function() {
    $(".QandA").hide();
    $(".hidden-message-right").show();
    setTimeout(thirdQuestion, 3000);
    stopCount();
});
$(".wrong-answer2").on("click", function() {
    $(".QandA").hide();
    $(".if-wrong").html("The correct answer was:" + " B. 5000");
    $(".hidden-message-wrong").show();
    setTimeout(thirdQuestion, 3000);
    stopCount();
});


//4th question right and wrong answer events will go here
$(".right-answer3").on("click", function() {
    $(".QandA").hide();
    $(".hidden-message-right").show();
    setTimeout(thirdQuestion, 3000);
    stopCount();
});
$(".wrong-answer3").on("click", function() {
    $(".QandA").hide();
    $(".if-wrong").html("The correct answer was:" + " C. Miraak's Sword");
    $(".hidden-message-wrong").show();
    setTimeout(thirdQuestion, 3000);
    stopCount();
});

