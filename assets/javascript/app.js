var time = 30;
var rightAnswersCount = 0;
var wrongAnswersCount = 0;
var count;
var wins = 0;
var losses = 0;
var unanswered = 0;
var questionsAnswered = 0;
//this is the timer
function myCountDown() {
    if (time > 0) {
        time--
        $("#countdown").html("Time left: " + time);
    }
    if (time === 0) {
        questionsAnswered++
        clearInterval(count)
        $(".QandA").hide();
        $(".snoozed").show();
        $(".yeet").html(questionsAnswered)
    }
    if (questionsAnswered === 1 && time === 0) {
        clearInterval(count);
        setTimeout(secondQuestion, 3000)
        $(".QandA").hide();
        $(".snoozed").show();
        unansweredCount();
    }
    if (questionsAnswered === 2 && time === 0) {
        clearInterval(count);
        setTimeout(thirdQuestion, 3000)
        $(".QandA").hide();
        $(".snoozed").show();
        unansweredCount();
    }
    if (questionsAnswered === 3 && time === 0) {
        clearInterval(count);
        setTimeout(fourthQuestion, 3000)
        $(".QandA").hide();
        $(".snoozed").show();
        unansweredCount();
    }
    if (questionsAnswered === 4 && time === 0) {
        clearInterval(count);
        setTimeout(fifthQuestion, 3000)
        $(".QandA").hide();
        $(".snoozed").show();
        unansweredCount();
    }
    if (questionsAnswered === 5 && time === 0) {
        clearInterval(count);
        setTimeout(lastQuestion, 3000)
        unansweredCount();
    }
}
//resets the timer and shows the respective question when called
function secondQuestion() {
    time = 30;
    $(".hidden-message-right").hide();
    $(".hidden-message-wrong").hide();
    $(".snoozed").hide();
    $(".hidden-question2").show();
    clearTimeout(secondQuestion);
    count = setInterval(myCountDown, 1000);
};
//resets the timer and shows the respective question when called
function thirdQuestion () {
    time = 30;
    $(".hidden-message-right").hide();
    $(".hidden-message-wrong").hide();
    $(".snoozed").hide();
    $(".hidden-question3").show();
    clearTimeout(secondQuestion);
    count = setInterval(myCountDown, 1000);
}
//resets the timer and shows the respective question when called
function fourthQuestion () {
    time = 30;
    $(".hidden-message-right").hide();
    $(".hidden-message-wrong").hide();
    $(".snoozed").hide();
    $(".hidden-question4").show();
    clearTimeout(thirdQuestion);
    count = setInterval(myCountDown, 1000);
};
//resets the timer and shows the respective question when called
function fifthQuestion () {
    time = 30;
    $(".hidden-message-right").hide();
    $(".hidden-message-wrong").hide();
    $(".snoozed").hide();
    $(".hidden-question5").show();
    clearTimeout(fourthQuestion);
    count = setInterval(myCountDown, 1000);
    console.log("test");
};
function lastQuestion () {
    $(".hidden-message-right").hide();
    $(".hidden-message-wrong").hide();
    $(".snoozed").hide();
    $(".win-loss").show();
    clearTimeout(fifthQuestion);
}



//stops the timer
function stopCount() {
    clearInterval(count)
}


//adds up wins
 function winCount() {
     if (wins < 5) {
        wins++
        $(".wins").html("Questions answered right: " + wins);
     }
 };


 //adds up losses
 function lossCount() {
     if (losses < 5) {
        losses++
        $(".losses").html("Questions answered wrong: " + losses);
     }
 };


 //adds up unanswered questions
 function unansweredCount() {
     if (time === 0) {
         console.log(time);
         unanswered++
         $(".unanswered").html("Questions left unanswered: " + unanswered);
     }
 }



 //Start button events(shows the first question and starts the timer)
$("#start-button").on("click", function() {
    questionsAnswered = 0;
    count = setInterval(myCountDown, 1000);
    time = 30;    
    $("#start-button").hide();
    $(".hidden").show();
    $(".snoozed").hide();
    $(".win-loss").hide();
    unansweredCount();
});


//1st question right and wrong answer events
$(".right-answer").on("click", function() {
    questionsAnswered++
    $(".QandA").hide();
    $(".hidden-message-right").show();
    setTimeout(secondQuestion, 3000);
    stopCount();
    winCount();
});
$(".wrong-answer").on("click", function() {
    questionsAnswered++;
    $(".QandA").hide();
    $(".if-wrong").show();
    $(".if-wrong").html("The correct answer was:" + " D. 16");
    $(".hidden-message-wrong").show();
    setTimeout(secondQuestion, 3000);
    stopCount();
    lossCount();
});


//2nd question right and wrong answer events
$(".right-answer2").on("click", function() {
    questionsAnswered++;
    $(".yeet").html(questionsAnswered)
    $(".QandA").hide();
    $(".hidden-message-right").show();
    setTimeout(thirdQuestion, 3000);
    stopCount();
    winCount();
});
$(".wrong-answer2").on("click", function() {
    questionsAnswered++;

    $(".QandA").hide();
    $(".if-wrong").html("The correct answer was:" + " B. 5000");
    $(".hidden-message-wrong").show();
    setTimeout(thirdQuestion, 3000);
    stopCount();
    lossCount();
});


//3rd question right and wrong answer events will go here
$(".right-answer3").on("click", function() {
    questionsAnswered++;
    $(".QandA").hide();
    $(".hidden-message-right").show();
    setTimeout(fourthQuestion, 3000);
    stopCount();
    winCount();
});
$(".wrong-answer3").on("click", function() {
    questionsAnswered++;
    $(".QandA").hide();
    $(".if-wrong").html("The correct answer was:" + " C. Miraak's Sword");
    $(".hidden-message-wrong").show();
    setTimeout(fourthQuestion, 3000);
    stopCount();
    lossCount();
});


//4th question right and wrong answer events will go here
$(".right-answer4").on("click", function() {
    questionsAnswered++;
    $(".QandA").hide();
    $(".hidden-message-right").show();
    setTimeout(fifthQuestion, 3000);
    stopCount();
    winCount();
});
$(".wrong-answer4").on("click", function() {
    questionsAnswered++;

    $(".QandA").hide();
    $(".if-wrong").html("The correct answer was:" + " A. Mehrune's Razor");
    $(".hidden-message-wrong").show();
    setTimeout(fifthQuestion, 3000);
    stopCount();
    lossCount();
});



//last question events
$(".right-answer5").on("click", function() {
    questionsAnswered++;
    $(".QandA").hide();
    stopCount();
    winCount();
    $(".hidden-message-right").show();
    setTimeout(lastQuestion, 3000)
    setTimeout(unansweredCount, 30000);
});
$(".wrong-answer5").on("click", function() {
    questionsAnswered++;
    $(".QandA").hide();
    $(".if-wrong").html("The correct answer was:" + " B. 9");
    stopCount();
    lossCount();
    $(".hidden-message-wrong").show();
    setTimeout(lastQuestion, 3000)
    setTimeout(unansweredCount, 30000);
});
