const colors = ["red","green","blue"];

const buttonRed = document.getElementById("red");
const buttonBlue = document.getElementById("blue");
const buttonGreen = document.getElementById("green");
const buttonReset = document.getElementById("reset");
const backgroundColor = document.getElementById("body");
const buttonRandomColor = document.getElementById("random")


buttonRed.onclick = changeColorRed;
buttonBlue.onclick = changeColorBlue;
buttonGreen.onclick = changeColorGreen;
buttonReset.onclick = resetColor;
buttonRandomColor.onclick = randomColor;


function changeColorRed (){
    body.style.backgroundColor = "red";
};

function changeColorBlue (){
    body.style.backgroundColor = "Blue";
};

function changeColorGreen (){
    body.style.backgroundColor = "Green";
};

function resetColor (){
    body.style.backgroundColor = "white";
}

function randomColor (){
    let currentColor = colors[Math.floor(Math.random() * colors.length)];
    do {
        currentColor = colors[Math.floor(Math.random() * colors.length)];
    }
        while (currentColor === body.style.backgroundColor);

        body.style.backgroundColor = currentColor;
        console.log(currentColor);
   
    /* Testing:
    
     do {
        currentColor = colors[Math.floor(Math.random() * colors.length)];
    }
        while (currentColor === body.style.backgroundColor);

        body.style.backgroundColor = currentColor;
        console.log(currentColor);
    */
}