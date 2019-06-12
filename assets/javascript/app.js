var time = 30;
var rightAnswersCount = 0;
var wrongAnswersCount = 0;
function myCountDown() {
    if (time > 0) {
        time--
        $("#countdown").html("Time left: " + time);
    }
    else {
        clearTimeout(setInterval(myCountDown, 1000));
        $(".QandA").hide();
        $(".snoozed").show();
    }
}
$("#start-button").on("click", function() {
    setInterval(myCountDown, 1000);
    $("#start-button").hide();
    $(".hidden").show();
    $(".snoozed").hide();
});

