var randomnumber1 = Math.floor(Math.random() * 6 + 1);

var randomdiceimage = "dice" + randomnumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomdiceimage);

var randomnumber2 = Math.floor(Math.random() * 6 + 1);

var randomdiceimage = "dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomdiceimage);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins";
} else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "Player2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Both Are Equal";
}
