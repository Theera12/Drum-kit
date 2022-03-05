var numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i <= numOfButtons; i++) {
  // code to add sound when button is pressed
  document.querySelectorAll(".drum")[i].addEventListener("click", clickHandler); //passes the function when clicked...

  function clickHandler() {

    var drumText = this.innerHTML;
    makeSound(drumText);
    keyAnimation(drumText);
    //  task to be performed when button is clicked...
  }
  // code to add sound when key is pressed
  document.addEventListener("keydown", function keyHandler (event) { //adding eventlister for key press

    makeSound(event.key);
    keyAnimation(event.key);
  });

  // function to be performed a key or a button is pressed...
  function makeSound(key) {
    switch (key) {
      case 'w':
        var audio = new Audio("tom-1.mp3");
        audio.play();
        break;
      case 'a':
        var audio = new Audio("tom-2.mp3");
        audio.play();
        break;
      case 's':
        var audio = new Audio("tom-3.mp3");
        audio.play();
        break;
      case 'd':
        var audio = new Audio("tom-4.mp3");
        audio.play();
        break;
      case 'j':
        var audio = new Audio("snare.mp3");
        audio.play();
        break;
      case 'k':
        var audio = new Audio("kick-bass.mp3");
        audio.play();
        break;
      case 'l':
        var audio = new Audio("crash.mp3");
        audio.play();
        break;

      default:
        console.log('drumText');

    }

  }

// code to animate when the button or key is pressed...

function keyAnimation(currentKey){
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");

setTimeout(function(){
    activeKey.classList.remove("pressed");
},100);

}
}
