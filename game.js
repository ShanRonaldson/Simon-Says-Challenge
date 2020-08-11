console.log("working");

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userPattern = [];

var randomColor;

var wrongSound = new Audio("sounds/wrong.mp3");

var level = 0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * buttonColours.length);

  randomColor = buttonColours[randomNumber];
  gamePattern.push(randomColor);
  userPattern = gamePattern.slice();

  for (var i = 0; i < gamePattern.length; i++) {
    setTimeout(
      function (color) {
        var sound = new Audio("sounds/" + color + ".mp3");
        sound.play();

        $("#" + color)
          .fadeOut(150)
          .fadeIn(150);
      },
      500 * (i + 1),
      gamePattern[i]
    );
  }

  $("#level-title").html(`Level ${level}`);
  level++;
}

function tryContinuePattern() {
  if (userPattern.length === 0) {
    setTimeout(function () {
      nextSequence();
    }, 1500);
  }
}

function restartPattern() {
  wrongSound.play();
  gamePattern = [];
  $(".start").css("visibility", "visible");
  $("#level-title").html("Press Start to try again.");
  level = 0;
}

function handleClickEvent(color) {
  $("#" + color)
    .fadeOut(150)
    .fadeIn(150);

  if (userPattern[0] == color) {
    var colorSound = new Audio("sounds/" + color + ".mp3");
    colorSound.play();

    userPattern.shift();

    tryContinuePattern();
  } else {
    restartPattern();
  }
}

$(".start").click(function () {
  $(".start").css("visibility", "hidden");
  console.log("Start pressed.");
  nextSequence();
});

$("#yellow").click(function () {
 handleClickEvent("yellow");
});

$("#red").click(function () {
  handleClickEvent("red");
});

$("#green").click(function () {
  handleClickEvent("green");
});

$("#blue").click(function () {
  handleClickEvent("blue");
});


