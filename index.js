// document.querySelector("button").addEventListener("click",handleClick)
// function handleClick()
// {
//     alert("I got clicked")

// }


// Derecting click
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "green";

    var buttonInnerhtml = this.innerHTML;
    MakeSound(buttonInnerhtml)

  });
}

// var audio= new Audio('./sounds/tom-4.mp3')
// audio.play()


// Detecting Key press in keyboard
document.addEventListener("keypress",function(event)
{
  MakeSound(event.key)

})


function MakeSound(key)
{
  switch (key) {
    case"a":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "f":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "g":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "h":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
      default:
          alert("wrong")
  }
}