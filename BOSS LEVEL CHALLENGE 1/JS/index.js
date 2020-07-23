var randomNumber1 = Math.floor(Math.random()*6 +1 );
var randomNumber2 = Math.floor(Math.random()*6 +1 );

console.log(randomNumber1);
var img1 = "F:\dice" +randomNumber1+ ".png" ;
var img2 = "F:\dice" +randomNumber2+ ".png" ;

document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent = "Player 1 won";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent = "Player 2 won";
}
else   document.querySelector("h1").textContent = "Its a draw!!";
