var randomVariable1;

randomVariable1= Math.floor(Math.random()*6)+1;

var randomImg1 = "dice" + randomVariable1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImg1);

var randomVariable2;

randomVariable2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "dice" + randomVariable2 + ".png";


document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if(randomVariable1 > randomVariable2)
{
    document.querySelector("h1").innerHTML="🎉 Player 1 Wins !!!";
}
else if(randomVariable2 > randomVariable1)
{
    document.querySelector("h1").innerHTML="Player 2 Wins 🎉 !!!";
}
else{
    document.querySelector("h1").innerHTML="DRAW 🎌 !";
}