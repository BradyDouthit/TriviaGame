var time = 0;
var rightAnswersCount = 0;
var wrongAnswersCount = 0;
var count;

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
function secondQuestion() {
    time = 30;
    $(".hidden-message-right").hide();
    $(".hidden-message-wrong").hide();
    $(".hidden-question2").show();
    clearTimeout(secondQuestion);
    count = setInterval(myCountDown, 1000);
}
function thirdQuestion () {
    time = 30;
    $(".hidden-message-right").hide();
    $(".hidden-message-wrong").hide();
    $(".hidden-question3").show();
    clearTimeout(secondQuestion);
    count = setInterval(myCountDown, 1000);
}
function stopCount() {
    clearInterval(count)
}

$("#start-button").on("click", function() {
    count = setInterval(myCountDown, 1000);
    time = 30;    
    $("#start-button").hide();
    $(".hidden").show();
    $(".snoozed").hide();
});



$(".right-answer").on("click", function() {
    $(".QandA").hide();
    $(".hidden-message-right").show();
    setTimeout(secondQuestion, 3000);
    stopCount();
});
$(".wrong-answer").on("click", function() {
    $(".QandA").hide();
    $(".hidden-message-wrong").show();
    setTimeout(secondQuestion, 3000);
    stopCount();
});



$(".right-answer2").on("click", function() {
    $(".QandA").hide();
    $(".hidden-message-right").show();
    setTimeout(thirdQuestion, 3000);
    stopCount();
});
$(".wrong-answer2").on("click", function() {
    $(".QandA").hide();
    $(".hidden-message-wrong").show();
    setTimeout(thirdQuestion, 3000);
    stopCount();
});



$(".right-answer3").on("click", function() {
    $(".QandA").hide();
    $(".hidden-message-right").show();
    setTimeout(thirdQuestion, 3000);
    stopCount();
});
$(".wrong-answer3").on("click", function() {
    $(".QandA").hide();
    $(".hidden-message-wrong").show();
    setTimeout(thirdQuestion, 3000);
    stopCount();
});

