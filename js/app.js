var number1 = Math.random()
var number1 = number1 * 6
var number1 = Math.floor(number1 +1)

var number2 = Math.random()
var number2 = number2 * 6
var number2 = Math.floor(number2 +1)

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")

img1.innerHTML='<img src="images/dice' + number1 + '.png" alt="">'
img2.innerHTML='<img src="images/dice' + number2 + '.png" alt="">'

if(number1 > number2){
    document.querySelector("h1").innerHTML = "🏆Player 1 Wins !"
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins !🏆"
}

if(number1 === number2) {
    document.querySelector("h1").innerHTML = "Equality"
}