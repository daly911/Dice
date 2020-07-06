




var dice1 = Math.floor(Math.random() * 6) + 1 ; //1-6

var diceImage = "dice" + dice1 + ".png";

var randomSource = "images/" + diceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSource);

// dice 2 //


var dice2 = Math.floor(Math.random() * 6 ) + 1 ;
var diceImage2 = "images/dice" + dice2 + ".png";


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImage2);


if (dice1 > dice2) {
document.querySelectorAll("p")[0].innerHTML = "Player 1 🥇";
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉 "

}

if (dice1 < dice2) {
document.querySelectorAll("p")[1].innerHTML = "Player 2 🥇";
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉"
}

if (dice1 === dice2) {

  document.querySelector("h1").innerHTML = "Draw!"
}
