var time = 30;
var rightAnswersCount = 0;
var wrongAnswersCount = 0;
function myCountDown() {
    if (time > 0) {
        time--
        $("#countdown").html(time);
    }
    else {
        clearTimeout(setInterval(myCountDown, 1000));
        $("#countdown").html("You took too long!");
    }
}
$("#start-button").on("click", function() {
    setInterval(myCountDown, 1000);
    $("#start-button").hide();
    $(".hidden").show();
});

