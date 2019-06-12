var time = 30;
var seconds = setInterval(myCountDown, 100);
function myCountDown() {
    if (time > 0) {
        time--
        $("#test").html(time);
    }
    else {
        clearTimeout(seconds);
        $("#test").html("You took too long!");
    }
}
