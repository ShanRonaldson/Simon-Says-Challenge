console.log("working");

// create pattern

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * buttonColours.length);
    
    var randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);

    gamePattern.push(randomChosenColour);
        console.log(gamePattern);
    
    $("#" + randomChosenColour).fadeIn(150).fadeOut(150);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
};

$("body").click(function() {
    var userChosenColour = this.innerHTML;
});



// select button ID

//animate buttons

// function animateButton(gamePattern){

// $("#" + gamePattern).fadeOut(150).fadeIn(150);

// }

//play sound

// function playSound(gamePattern){

//     $("#" + gamePattern)
// }