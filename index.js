// alert('Linked with index.js')

var noOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var alphaBet = this.innerHTML;

    switch (alphaBet) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();

        break;

      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();

        break;

      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();

        break;

      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();

        break;

      case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();

        break;

      case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();

        break;

      case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();

        break;

      default:
        break;
    }
  });
}

document.addEventListener("keydown", function (event) {
  var keyPressed = event.key;

  switch (keyPressed) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();

      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();

      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();

      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();

      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();

      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();

      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();

      break;

    default:
      break;
  }
});
