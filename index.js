function clickMe() {

    var rand1 = Math.floor(Math.random() * 6 + 1);
    var rand2 = Math.floor(Math.random() * 6 + 1);
    var images1 = "images/dice" + rand1 + ".png";
    var images2 = "images/dice" + rand2 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", images1);
    document.querySelectorAll("img")[1].setAttribute("src", images2);

    if (rand1 > rand2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (rand1 < rand2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}